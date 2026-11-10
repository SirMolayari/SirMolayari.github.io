# Mohammad Mahdi Molayari - Official Portfolio Website
### Solo Indie Game Developer (0 to 100) | 3D Artist | Founder of Active Legend

A cutting-edge, world-class portfolio website engineered with an immersive deep space visual aesthetic, floating glassmorphic panels, 60 FPS hardware-accelerated animations, dynamic mouse parallax, seamless invisible auto-localization (i18n), and dedicated showcases for both flagship 3D games and traditional hand-crafted animation techniques.

---

## 🌌 Core Highlights & Visual Architecture

1. **Deep Space Aesthetic & Floating Glassmorphism:**
   - Dark cosmic void backdrop (`#02030a`, `#060919`) with vivid Neon Blue (`#00f0ff`) and Deep Purple (`#8b5cf6`, `#a855f7`) accents complementing the centerpiece logo (`MMMlogo.png`).
   - Frosted glass containers with `backdrop-filter: blur(20px)`, subtle glowing neon borders, and specular glare tracking cursor movement.
   - Continuous, buttery-smooth CSS keyframe animations (drifting, bobbing, orbital rotation) creating a suspended, weightless visual feel.
   - **Note:** The floating aesthetic is purely visual in CSS and JS. Visible text strictly avoids buzzwords like "Anti-Gravity" or "Zero Gravity".

2. **Seamless Auto-Localization (i18n):**
   - **Invisible Auto-Detection:** Automatically inspects `navigator.language` / `navigator.languages` to seamlessly render in **Persian (RTL)** with the **Vazirmatn** font or **English (LTR)** with **Orbitron / Space Grotesk / Inter**.
   - Zero page reload required; content switches dynamically in-memory with full dictionary bindings.
   - An unobtrusive HUD toggle button allows manual language switching at any moment.

3. **Flagship 3D Game Portfolio (Unreal Engine 5.6.1):**
   - **Dodge Or Seek** (`dodge-cover.jpg`): High-octane tactical physics survival and stealth in orbital chambers with Chaos Physics, adaptive hunter AI, and Lumen dynamic lighting.
   - **FoodPlanet** (`foodplanet-cover.jpg`): Whimsical 3D celestial action-adventure platformer in Unreal Engine 5.6.1 featuring burger-helmeted astronauts, alien flora, dynamic physics, and stylized real-time rendering.
   - Floating glass cards with 3D hover tilt, specular glare, tech stack tags, and interactive blueprint inspection modals.

4. **Solo Developer Technical Mastery (0 to 100):**
   - Dedicated showcase of Mohammad Mahdi Molayari's complete end-to-end game production pipeline:
     1. Full Gameplay Loop Creation
     2. Technical Game Design
     3. End-to-End Core Coding (All Sections)
     4. Animation Assembly & State Machines
     5. Audio Synchronization
     6. Multiplayer & Network Programming
     7. Extreme Game Size Optimization
     8. Unreal Engine 5.6.1 Mastery

5. **Hand-Crafted Animation Techniques (Distinct Section):**
   - A dedicated, visually distinct artisan section framed explicitly as specialized offline, traditional fine-art animation techniques, completely separate from the 3D real-time game development pipeline:
     * **Stop-Motion Claymation:** Tactile sculpture manipulation over jointed armatures under physical studio lighting.
     * **Cut-out Animation:** Multi-layered paper and graphic cut-out puppetry on multiplane glass.
     * **Silhouette Animation:** Expressive shadow puppetry inspired by traditional European and oriental silhouette theatre.
     * **Pixilation:** Avant-garde live-action stop-motion utilizing human actors and physical props as frame-by-frame subjects.

6. **Studio & Contact:**
   - **Active Legend Studio:** Feature section with studio logo (`active-legend-logo.png`) and direct link to [activelegend.ir](https://activelegend.ir).
   - **Exact Direct Comms:**
     - Personal: `sirmolayari@gmail.com`
     - Studio: `studio@activelegend.ir`
     - GitHub: [github.com/SirMolayari](https://github.com/SirMolayari)

---

## 📁 File Structure

```
Molayari/
├── index.html                  # Semantic, SEO-optimized HTML with LTR/RTL support
├── README.md                   # Full documentation
├── dodge-cover.jpg             # Dodge Or Seek flagship cover image
├── foodplanet-cover.jpg        # FoodPlanet flagship cover image
├── active-legend-logo.png      # Active Legend studio official logo
├── css/
│   ├── main.css                # Core design system, deep space theme, LTR/RTL styles
│   ├── glassmorphism.css       # Frosted glass panels, neon borders, specular glare
│   ├── floating-physics.css    # Weightless floating keyframes, orbital rings, glitch typography
│   └── responsive.css          # Mobile-first & high-DPI responsive layout
├── js/
│   ├── main.js                 # i18n auto-detection, dynamic typing, modal & contact controller
│   ├── space-canvas.js         # 60 FPS floating cosmic dust, starfield & meteor canvas
│   ├── floating-physics.js     # Mouse parallax, 3D card tilt & Intersection Observer
│   └── audio-synth.js          # Procedural Web Audio API sound synthesizer
└── assets/
    ├── MMMlogo.png             # Centerpiece logo
    ├── favicon.png             # Custom favicon
    └── projects/               # Project artwork backups
```

---

## 🚀 How to Run Locally

```bash
# Serve locally using Node.js
npx serve .
```
Then open `http://localhost:3000` in any modern web browser.

---

## 👨‍🚀 Credits & Links
- **Mohammad Mahdi Molayari**
- **Active Legend Studio:** [activelegend.ir](https://activelegend.ir)
- **Contact:** `sirmolayari@gmail.com` | `studio@activelegend.ir`
