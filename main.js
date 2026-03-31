import { initGlobal } from "./globaljs/exportglobal.js";
import { initHOME} from "./home/homejs/exporthome.js";
import { initBlog } from "./pages/blogjs/exportblog.js";
import {ScrollAnimation,gotoLink } from "./globaljs/global.js";
document.addEventListener('DOMContentLoaded',()=>{
    initGlobal();
    const currentPage = document.body.getAttribute('data-page');
    switch (currentPage){
        case 'home':
            initHOME();
            break;
        case 'blog':
            initBlog();
            break;
        default:
            console.warn('No page initializer:', currentPage);
    }
})
window.addEventListener('load',()=>{
    // Scroll reveal is used by shared components like `.infomobile` and `.footer`
    // across pages, so run it globally.
    gotoLink();
    setTimeout(() => {
        ScrollAnimation();
    }, 200);
})
