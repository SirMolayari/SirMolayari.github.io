/**
 * Mohammad Mahdi Molayari - Portfolio
 * Space Canvas: Ultra-Optimized 60FPS Deep Space Starfield & Cosmic Dust
 * Hardware-accelerated with zero memory leaks and intelligent tab pausing
 */

(function () {
  'use strict';

  const canvas = document.getElementById('space-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let width = 0;
  let height = 0;
  let dpr = 1;

  // Mouse & Flux Physics Coordinates
  const mouse = {
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    radius: 140,
    active: false
  };

  let stars = [];
  let cosmicDust = [];
  let meteors = [];

  const isMobile = window.innerWidth < 768;
  const STAR_COUNT = isMobile ? 80 : 160;
  const DUST_COUNT = isMobile ? 30 : 60;

  // Resize handler with High-DPI support
  let resizeTimeout = null;
  function handleResize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);
    initParticles();
  }

  function debouncedResize() {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 150);
  }

  // Particle Class for Stars
  class Star {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -10;
      this.depth = Math.random() * 0.75 + 0.25;
      this.radius = (Math.random() * 1.3 + 0.4) * this.depth;
      this.baseAlpha = Math.random() * 0.65 + 0.35;
      this.alpha = this.baseAlpha;
      this.twinkleSpeed = Math.random() * 0.02 + 0.006;
      this.twinkleOffset = Math.random() * Math.PI * 2;
      this.vy = (Math.random() * 0.12 + 0.04) * this.depth;
      this.vx = (Math.random() * 0.06 - 0.03) * this.depth;

      // Color tints: Cyan, White, Purple
      const colors = ['#00f0ff', '#ffffff', '#a855f7', '#38bdf8', '#f8fafc'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update(time) {
      this.y += this.vy;
      this.x += this.vx;

      this.alpha = this.baseAlpha * (0.6 + 0.4 * Math.sin(time * this.twinkleSpeed + this.twinkleOffset));

      if (mouse.active) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const effectRadius = mouse.radius * this.depth;
        if (dist < effectRadius && dist > 0) {
          const force = (1 - dist / effectRadius) * 1.5;
          this.x += (dx / dist) * force;
          this.y += (dy / dist) * force;
        }
      }

      if (this.y > height + 10) this.y = -10;
      if (this.x < -10) this.x = width + 10;
      if (this.x > width + 10) this.x = -10;
    }

    draw() {
      ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Particle Class for Cosmic Dust
  class CosmicDust {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.0 + 0.8;
      this.vx = (Math.random() - 0.5) * 0.28;
      this.vy = (Math.random() - 0.5) * 0.28;
      this.color = Math.random() > 0.5 ? 'rgba(0, 240, 255, ' : 'rgba(139, 92, 246, ';
      this.alpha = Math.random() * 0.35 + 0.1;
      this.pulseSpeed = Math.random() * 0.025 + 0.01;
      this.time = Math.random() * 100;
    }

    update() {
      this.time += this.pulseSpeed;
      this.x += this.vx;
      this.y += this.vy;

      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          const pull = (1 - dist / 180) * 0.15;
          this.x += (dx / dist) * pull;
          this.y += (dy / dist) * pull;
        }
      }

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      const currentAlpha = this.alpha * (0.7 + 0.3 * Math.sin(this.time));
      ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
      ctx.fillStyle = this.color + currentAlpha.toFixed(2) + ')';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Meteor Class
  class Meteor {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width * 1.2;
      this.y = Math.random() * (height * 0.4);
      this.length = Math.random() * 100 + 70;
      this.speed = Math.random() * 12 + 8;
      this.angle = Math.PI / 4 + (Math.random() * 0.16 - 0.08);
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.alpha = 1;
      this.decay = Math.random() * 0.02 + 0.012;
      this.active = false;
    }

    spawn() {
      this.reset();
      this.active = true;
    }

    update() {
      if (!this.active) return;
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.decay;
      if (this.alpha <= 0 || this.x > width + 100 || this.y > height + 100) {
        this.active = false;
      }
    }

    draw() {
      if (!this.active) return;
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
      const grad = ctx.createLinearGradient(
        this.x, this.y,
        this.x - Math.cos(this.angle) * this.length,
        this.y - Math.sin(this.angle) * this.length
      );
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.3, '#00f0ff');
      grad.addColorStop(1, 'transparent');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.8;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(
        this.x - Math.cos(this.angle) * this.length,
        this.y - Math.sin(this.angle) * this.length
      );
      ctx.stroke();
      ctx.restore();
    }
  }

  function initParticles() {
    stars = [];
    cosmicDust = [];
    meteors = [new Meteor(), new Meteor()];

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(new Star());
    }
    for (let i = 0; i < DUST_COUNT; i++) {
      cosmicDust.push(new CosmicDust());
    }
  }

  let meteorTimer = 0;
  let isRunning = true;

  function render(time) {
    if (!isRunning) return;

    ctx.clearRect(0, 0, width, height);

    // Smooth mouse coordinates lerp
    mouse.x += (mouse.targetX - mouse.x) * 0.1;
    mouse.y += (mouse.targetY - mouse.y) * 0.1;

    // Draw Dust
    for (let i = 0; i < cosmicDust.length; i++) {
      cosmicDust[i].update();
      cosmicDust[i].draw();
    }

    // Draw Stars
    for (let i = 0; i < stars.length; i++) {
      stars[i].update(time);
      stars[i].draw();
    }

    // Handle Meteors
    meteorTimer++;
    if (meteorTimer > 260) {
      const dormant = meteors.find(m => !m.active);
      if (dormant) {
        dormant.spawn();
      }
      meteorTimer = 0;
    }

    for (let i = 0; i < meteors.length; i++) {
      meteors[i].update();
      meteors[i].draw();
    }

    requestAnimationFrame(render);
  }

  // Event Listeners
  window.addEventListener('resize', debouncedResize, { passive: true });

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouse.targetX = e.touches[0].clientX;
      mouse.targetY = e.touches[0].clientY;
      mouse.active = true;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.active = false;
  });

  // Tab visibility power-saving
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
    } else {
      isRunning = true;
      requestAnimationFrame(render);
    }
  });

  // Init
  handleResize();
  requestAnimationFrame(render);

  window.SpaceCanvas = {
    triggerGravitationalPulse: function () {
      stars.forEach(s => {
        s.vx += (Math.random() - 0.5) * 3;
        s.vy += (Math.random() - 0.5) * 3;
      });
      meteors.forEach(m => m.spawn());
    }
  };
})();
