import { SelectorAboutSvgs, SelectorAbout,SelectorAboutExhibition, AwardsData } from "../../../globaljs/config.js";
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
   try{
     const container = document.querySelector(SelectorAbout.part2);
    if(!container) throw new Error("couldn't retrieve exhibiton container ")
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
    if(box.length === 0) throw new Error("couldn't retreive link boxes");
    const linkdin = `https://www.linkedin.com/in/jaspinder-singh-3a847b31a/`;
    box.forEach(link =>{
        link.addEventListener('click',()=>{
            window.open(linkdin);
        })
    })
   }catch(error){
    console.warn("problem loading exhibition section",error);
   }
}
export function LoadAwardsAndRecognitions(){
   try{
        const container = document.querySelector(SelectorAbout.Apart2);
        if(!container) throw new Error("problem in retrieving Apart2 container");
        let awardshtml = "";
        AwardsData.forEach(data=>{
            awardshtml += `<div class="aboutAwards reveal">
                    <div class="awardleft">
                        <span class="span1">${data.title}</span>
                    <span class="span2">${data.year}</span>
                    </div>
                    <div class="awardright">
                        <i class="ri-arrow-right-up-long-line"></i>
                    </div>
                </div>`
        });
        container.insertAdjacentHTML('beforeend',awardshtml);
    //linking
    const boxes = document.querySelectorAll(SelectorAbout.boxAward);
    const github = `https://github.com/jass2k5`;
    if(boxes.length === 0) throw new Error("coudn't retrieve the awards links");
    boxes.forEach(link=>{
        link.addEventListener('click',()=>{
            window.open(github);
        })
    });
   }catch(error){
    console.warn("error in Awards and exhibition section",error);
   }

}
