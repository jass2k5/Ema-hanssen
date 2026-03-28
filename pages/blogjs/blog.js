import { SelectorBlogGallery,BlogGalleryData, projectGallery } from "../../globaljs/config.js";

export function renderBlogGallery(){
    try{
        const container = document.querySelector(SelectorBlogGallery.containerScroll);
        if(!container) {
            throw new Error('cannot retrieve data');
        }
        for(let i = 0;i<BlogGalleryData.length;i+=2){
            let duoHolder = "";
            const slider = document.createElement('div');
            slider.classList.add(SelectorBlogGallery.duoSlider);
            const duo = BlogGalleryData.slice(i,i+2);
            duo.forEach(item =>{
                const pair = ` <div class="infoandpic">
                        <img src="${item.src}" alt="${item.alt}" loading="lazy">
                        <div class="glass-above"></div>
                        <div class="inside-info">
                            <p>${item.text}</p>
                        </div>
                        </div>`;
                duoHolder += pair;
            })
            slider.innerHTML = duoHolder;
            container.appendChild(slider);
        }
    }catch(error){
        console.log("error",error.message);
    }
}
