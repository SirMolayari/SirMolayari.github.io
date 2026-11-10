/**
 * Mohammad Mahdi Molayari - Portfolio
 * High-Performance Floating Physics, Hardware-Accelerated Parallax & 3D Card Tilt
 * Optimized for sustained 60 FPS with zero layout thrashing
 */

(function () {
  'use strict';

  // Check if touch device
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  // 1. DYNAMIC MOUSE PARALLAX (LERP SMOOTHING & SLEEP STATE)
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let targetMouseX = mouseX;
  let targetMouseY = mouseY;
  let isParallaxActive = false;
  let parallaxRafId = null;

  const parallaxElements = document.querySelectorAll('[data-parallax-depth]');
  const mainLogo = document.querySelector('.logo-grav-wrapper');

  function updateParallax() {
    const dx = targetMouseX - mouseX;
    const dy = targetMouseY - mouseY;

    // Apply lerp smoothing
    mouseX += dx * 0.08;
    mouseY += dy * 0.08;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (mouseX - centerX) / centerX; // -1 to 1
    const deltaY = (mouseY - centerY) / centerY; // -1 to 1

    // Update parallax layers
    parallaxElements.forEach((el) => {
      const depth = parseFloat(el.getAttribute('data-parallax-depth')) || 10;
      const moveX = (deltaX * depth).toFixed(2);
      const moveY = (deltaY * depth).toFixed(2);
      const rotate = (deltaX * (depth * 0.12)).toFixed(2);

      el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rotate}deg)`;
    });

    // 3D Levitation responsiveness for main logo
    if (mainLogo) {
      const logoTiltX = (-deltaY * 16).toFixed(2);
      const logoTiltY = (deltaX * 16).toFixed(2);
      const logoShiftX = (deltaX * 10).toFixed(2);
      const logoShiftY = (deltaY * 10).toFixed(2);

      mainLogo.style.transform = `translate3d(${logoShiftX}px, ${logoShiftY}px, 0) rotateX(${logoTiltX}deg) rotateY(${logoTiltY}deg)`;
    }

    // Put parallax loop to sleep if mouse has settled to save CPU
    if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
      parallaxRafId = requestAnimationFrame(updateParallax);
    } else {
      isParallaxActive = false;
    }
  }

  function activateParallax() {
    if (!isParallaxActive) {
      isParallaxActive = true;
      parallaxRafId = requestAnimationFrame(updateParallax);
    }
  }

  window.addEventListener('mousemove', (e) => {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
    activateParallax();
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      targetMouseX = e.touches[0].clientX;
      targetMouseY = e.touches[0].clientY;
      activateParallax();
    }
  }, { passive: true });

  // 2. 3D CARD TILT & SPECULAR GLARE (NON-BLOCKING & CACHED BOUNDS)
  const tiltCards = document.querySelectorAll('.project-card, .tilt-panel');

  if (!isTouchDevice) {
    tiltCards.forEach((card) => {
      let bounds = null;
      let cardRaf = null;

      function updateTilt(clientX, clientY) {
        if (!bounds) return;
        const leftX = clientX - bounds.left;
        const topY = clientY - bounds.top;

        const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2
        };

        const maxTilt = 10;
        const rotateX = (-center.y / (bounds.height / 2) * maxTilt).toFixed(2);
        const rotateY = (center.x / (bounds.width / 2) * maxTilt).toFixed(2);

        card.style.transform = `
          perspective(1000px)
          scale3d(1.025, 1.025, 1.025)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateZ(8px)
        `;

        card.style.setProperty('--mouse-x', `${leftX.toFixed(0)}px`);
        card.style.setProperty('--mouse-y', `${topY.toFixed(0)}px`);
      }

      function onMouseEnter() {
        bounds = card.getBoundingClientRect();
      }

      function onMouseMove(e) {
        if (cardRaf) cancelAnimationFrame(cardRaf);
        cardRaf = requestAnimationFrame(() => {
          updateTilt(e.clientX, e.clientY);
        });
      }

      function onMouseLeave() {
        if (cardRaf) cancelAnimationFrame(cardRaf);
        bounds = null;
        card.style.transform = 'perspective(1000px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      }

      card.addEventListener('mouseenter', onMouseEnter, { passive: true });
      card.addEventListener('mousemove', onMouseMove, { passive: true });
      card.addEventListener('mouseleave', onMouseLeave, { passive: true });
    });
  }

  // 3. MAGNETIC BUTTONS (CACHED BOUNDS, ZERO REFLOW)
  const magneticButtons = document.querySelectorAll('.magnetic-btn, .btn-primary, .btn-secondary');

  if (!isTouchDevice) {
    magneticButtons.forEach((btn) => {
      let rect = null;

      btn.addEventListener('mouseenter', () => {
        rect = btn.getBoundingClientRect();
      }, { passive: true });

      btn.addEventListener('mousemove', (e) => {
        if (!rect) rect = btn.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        btn.style.transform = `translate3d(${(x * 0.22).toFixed(1)}px, ${(y * 0.22).toFixed(1)}px, 0)`;
      }, { passive: true });

      btn.addEventListener('mouseleave', () => {
        rect = null;
        btn.style.transform = 'translate3d(0px, 0px, 0)';
      }, { passive: true });
    });
  }

  // 4. INTERSECTION OBSERVER FOR WEIGHTLESS SCROLL ENTRANCE
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  // 5. INTERSECTION OBSERVER FOR ACTIVE NAV HIGHLIGHTING
  // Eliminates continuous scroll layout-thrashing completely!
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.floating-nav .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-15% 0px -40% 0px'
      }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  // Start initial parallax loop
  activateParallax();
})();
