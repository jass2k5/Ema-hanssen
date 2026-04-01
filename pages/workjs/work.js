import { SelectorWorkGallery, workProjectsData } from "../../globaljs/config.js";
export function renderWorkGallery(){
    try{
       const  container = document.querySelector(SelectorWorkGallery.container);
        if(!container) throw new Error("couldn't find workcontainer");
        for(let i = 0;i<workProjectsData.length;i++){
           let  workHolder = '';
            const card = document.createElement('div');
            card.classList.add('card-text');
            const pair = workProjectsData[i];
               const pairHolder = `<div class="card-text reveal">
                        <h3>${pair.h3}</h3>
                        <span>${pair.span}</span> 
                        <img src = "${pair.src}" alt="${pair.alt}">
                    </div>`;
                    workHolder += pairHolder
            card.innerHTML = workHolder;
            container.appendChild(card);
        }
    }catch(error){
        console.warn("error in rendering work gallery",error.message);
    }
}