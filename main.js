import { initGlobal } from "./globaljs/exportglobal.js";
import { initHOME } from "./homejs/exporthome.js";
import { ScrollAnimation } from "./homejs/home.js";

document.addEventListener('DOMContentLoaded',()=>{
    initGlobal();
    const currentPage = document.body.getAttribute('data-page');
    switch (currentPage){
        case 'home':
            initHOME();
            break;
        default:
            console.warn('No page initializer:', currentPage);
    }
})
window.addEventListener('load',()=>{
    const currentPage = document.body.getAttribute('data-page');
    switch (currentPage){
      case 'home':
        setTimeout(()=>{
            ScrollAnimation();
        },200);
        break;
      default:
        console.log("no animation on this page");
    }
})
