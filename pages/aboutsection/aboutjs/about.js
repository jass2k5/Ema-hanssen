import { SelectorAboutSvgs, SelectorAbout } from "../../../globaljs/config.js";
export function animationSlider() {
    const container = document.querySelector(SelectorAbout.container);
    const group = document.querySelector(SelectorAbout.group);

    let html = '';

    // Loop 4 times to make the track massively wide
    for (let i = 0; i < 4; i++) {
        SelectorAboutSvgs.forEach(svg => {
            html += `<div class="card">${svg.svg}</div>`;
        });
    }

    group.insertAdjacentHTML('beforeend', html);
    group.style.animation = 'about-scroll 20s linear infinite';
}
