/**
 * Mohammad Mahdi Molayari - Portfolio
 * Futuristic Web Audio Synthesizer for Weightless Floating UI Audio FX
 * (100% procedural, 0 external network requests, lightweight & toggleable)
 */

(function () {
  'use strict';

  let audioCtx = null;
  let isMuted = true; // Default muted for respectful UX

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Futuristic Hologram Hover Sound (gentle sine chirp)
  function playHoverSound() {
    if (isMuted || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // Audio fallback fail silently
    }
  }

  // Sci-Fi Tech Click / Teleport Activation
  function playClickSound() {
    if (isMuted || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) {}
  }

  // Weightless Gravitational Pulse (Bass swell)
  function playGravityPulse() {
    if (isMuted || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(90, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.4);

      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch (e) {}
  }

  // Setup UI Hooks
  document.addEventListener('DOMContentLoaded', () => {
    const audioToggleBtn = document.getElementById('toggle-audio-btn');

    if (audioToggleBtn) {
      audioToggleBtn.addEventListener('click', () => {
        initAudio();
        isMuted = !isMuted;
        if (!isMuted) {
          audioToggleBtn.classList.add('active');
          audioToggleBtn.innerHTML = `<span>🔊</span> AUDIO: ON`;
          playClickSound();
        } else {
          audioToggleBtn.classList.remove('active');
          audioToggleBtn.innerHTML = `<span>🔇</span> AUDIO: OFF`;
        }
      });
    }

    // Attach subtle sounds to interactive elements
    const hoverables = document.querySelectorAll('.nav-link, .btn, .project-card, .filter-btn, .hud-btn');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (!isMuted) playHoverSound();
      });
      el.addEventListener('click', () => {
        if (!isMuted) playClickSound();
      });
    });
  });

  window.SynthAudio = {
    init: initAudio,
    playHover: playHoverSound,
    playClick: playClickSound,
    playGravityPulse: playGravityPulse
  };
})();
