import { SelectorAboutSvgs, SelectorAbout,SelectorAboutExhibition } from "../../../globaljs/config.js";
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
export function LoadExhibition(){
    const container = document.querySelector(SelectorAbout.part2);
    let containerHtml = '';
    SelectorAboutExhibition.forEach(box =>{
        containerHtml +=   `<div class="aboutExhibition reveal">
                    <div class="left">
                        <span class="span1">${box.title}</span>
                    <span class="span2">${box.year}</span>
                    </div>
                    <div class="right">
                        <i class="ri-arrow-right-up-long-line"></i>
                    </div>
                </div>`;
    });
    container.insertAdjacentHTML('beforeend',containerHtml);
    const box = document.querySelectorAll(SelectorAbout.box);
    const linkdin = `https://www.linkedin.com/in/jaspinder-singh-3a847b31a/`;
    box.forEach(link =>{
        link.addEventListener('click',()=>{
            window.open(linkdin);
        })
    })
}
