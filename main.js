import { initGlobal } from "./globaljs/exportglobal.js";
import { initHOME} from "./homejs/exporthome.js";
import { ScrollAnimation } from "./globaljs/global.js";
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
    // Scroll reveal is used by shared components like `.infomobile` and `.footer`
    // across pages, so run it globally.
    setTimeout(() => {
        ScrollAnimation();
    }, 200);
})
