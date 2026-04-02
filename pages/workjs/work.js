import { SelectorWorkGallery, workProjectsData } from "../../globaljs/config.js";
export function renderWorkGallery(){
    try{
       const  container = document.querySelector(SelectorWorkGallery.container);
        if(!container) throw new Error("couldn't find workcontainer");
        for(let i = 0;i<workProjectsData.length;i++){
           let  workHolder = '';
            const card = document.createElement('div');
            card.classList.add('card-text','reveal');
            const pair = workProjectsData[i];
               const pairHolder = `<div class="card-text">
                        <h3>${pair.h3}</h3>
                        <span>${pair.span} <i class="ri-arrow-right-long-line"></i></span>        
                        <img src = "${pair.src}" alt="${pair.alt}">
                    </div>`;
                    workHolder += pairHolder
            card.innerHTML = workHolder;
            container.appendChild(card);
        }
        container.innerHTML += `<div class="contact-box" data-goto="mailto:jaspindersingh3050@gmail.com">
                        <h3>Contact</h3>
                        <div class="arwcnt">
                            <i class="ri-mail-line  cnt"></i>
                            <i class="ri-arrow-right-up-long-line arw"></i>
                        </div>
                    </div>`;
    }catch(error){
        console.warn("error in rendering work gallery",error.message);
    }
}