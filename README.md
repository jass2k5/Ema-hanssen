#LINK - https://protoype-emma.netlify.app/
# Ema Hanssen - Premium Portfolio Clone

### 🚀 Overview
This project is a 1:1 pixel-perfect clone of a premium Framer portfolio template. Instead of relying on a drag-and-drop builder or heavy frameworks, this entire architecture was reverse-engineered from scratch using **Raw SCSS, CSS Grid, and Vanilla JavaScript**. 

The goal was to deeply understand complex DOM rendering, responsive sub-pixel math, and custom animation loops.

### 🏗️ The "Hanssen" Page (Core Features)
The main landing page is an asymmetrical, highly responsive "Bento Box" grid layout. 
* **The Inverted Border-Radius Hack:** Replicated complex, curved UI cutouts (like the top navigation and folder tabs) using pure CSS `box-shadow` and pseudo-elements instead of relying on external SVGs.
* **Custom Vanilla JS Slider:** Engineered a seamless image slider with precise `z-index` DOM stacking logic and smooth CSS transitions. 
* **Flawless Grid Architecture:** Built a bulletproof CSS Grid system that maintains exact proportions between the massive hero sections and dense button clusters without ghost gaps.
* **Premium Dark Mode:** Implemented a high-contrast dark theme that completely flips the visual hierarchy and makes the photography pop.

### 🛠️ Tech Stack
* **HTML5** (Semantic structuring)
* **SCSS** (Variables, nesting, mixins, and advanced math)
* **Vanilla JavaScript** (DOM manipulation and interval logic)

### ⏳ Upcoming Features (To-Do List)
The core engine is built, but the following UI overlays are next on the roadmap:
* **Floating Hero Navigation:** Injecting `position: absolute` directional arrows (`<`, `>`), pagination dots, and a "View Project" CTA directly over the sliding hero images.
* **Floating Action Stack:** Adding the absolute-positioned template links ("Use for FREE", "More Templates", "Made in Framer") to the bottom right of the viewport.
* **Responsive Breakpoints:** Fine-tuning the grid collapse for mobile devices.

---
*Built with grit, raw code, and a lot of caffeine.*