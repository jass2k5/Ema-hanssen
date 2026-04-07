Ema Hanssen - Premium Portfolio Clone
🔗 Live Demo: ema-hanssen.vercel.app

🚀 Overview
This project is a 1:1 pixel-perfect clone of a premium Awwwards-style portfolio template. Instead of relying on a drag-and-drop builder or heavy frameworks, this entire architecture was reverse-engineered from scratch using Raw SCSS, CSS Grid, and Vanilla JavaScript.

The goal was to deeply understand complex DOM rendering, responsive sub-pixel math, and custom state-based animation loops.

⚡ Performance & Architecture
120 - 144 FPS Rendering: Optimized paint operations, hardware-accelerated CSS transforms (translateZ), and an IntersectionObserver scroll engine ensure buttery-smooth performance even on mobile devices.

Modular SCSS: Built with a highly scalable, component-based SCSS architecture (utils/, layouts/, sections/, responsive/) for maintainable styling without CSS bloat.

Component-Driven Data Injection: Developed a dynamic Javascript rendering pipeline using insertAdjacentHTML to safely inject DOM elements without destroying active event listeners.

🏗️ Core Engineering Features
The Home Experience:

Custom Vanilla JS Slider Engine: Engineered a state-based image slider from scratch. Features precise translateX(100%) and -100% routing, synchronized dynamic pagination dots tied strictly to the array index, and flawless transition resets.

Dynamic Content Scaling: The slider's pagination dots are dynamically generated via JavaScript based on the length of the underlying image array, ensuring the UI always perfectly matches the data state.

Interactive Micro-Interactions: Custom, high-performance hover states engineered for social links (Instagram, Pinterest, Discord, Twitter) to provide a premium, tactile user experience.

Advanced CSS Geometry: Replicated premium, curved UI cutouts (inverted border-radius) using pure CSS box-shadow and pseudo-elements. Engineered complex :hover states where the cutouts fluidly transition across the image while syncing with dynamic label reveals (e.g., the featured project cards).

The Work Engine:

JS-Driven Split-Screen Architecture: Built a mathematical split-screen layout locking a sticky visual preview on the left while allowing independent, physics-based scrolling on the right grid.

Synchronized Hover States: Engineered a premium hover interaction loop on the right-side list items. On mouseenter, the text spans smoothly retract via CSS transform to reveal an animated arrow, while simultaneously triggering a state update that seamlessly swaps the src and label data of the sticky preview image on the left.

Granular Scroll Observers: Implemented a highly tuned IntersectionObserver on the right-side project list, triggering buttery-smooth, staggered slide-up reveals (transform: translateY(30px) to 0) as elements enter the viewport without causing layout shifts.

Global Architecture:

Custom Mobile Navigation: Engineered a mobile-first off-canvas menu overlay with trapped scroll focus (overscroll-behavior: none), preventing background scroll-bleed on iOS/Android devices.

Premium Dark Mode: Implemented a high-contrast dark theme via local storage and CSS variables that flips the visual hierarchy and makes the photography pop.

🛠️ Tech Stack
HTML5 (Semantic structuring)

SCSS (Variables, nesting, mixins, and advanced modular architecture)

Vanilla JavaScript (ES6+ Modules, DOM manipulation, IntersectionObserver, interval logic, Closures)

