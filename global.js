import { themes, SelectorsTheme, SelectorMobileNav } from './config.js';
function ThemeSwitcher() {
    try {
        const themeBtn = document.querySelector(SelectorsTheme.darkbtn);
        const body = document.body;
        const logo = document.querySelector(SelectorsTheme.logo);
        if (!themeBtn) throw new Error("theme button not found!");
        //checking local storage for theme
        if (localStorage.getItem(themes.themeKey) === themes.dark) {
            body.classList.add(SelectorsTheme.rootDarkclass);
            themeBtn.style.justifyContent = "flex-end";
            if (logo) logo.style.color = "white";
        };
        //working button
        themeBtn.addEventListener('click', () => {
            body.classList.toggle(SelectorsTheme.rootDarkclass);
            const isDark = body.classList.contains(SelectorsTheme.rootDarkclass);
            themeBtn.style.justifyContent = isDark ? "flex-end" : "flex-start";
            if (logo) logo.style.color = isDark ? "white" : "#0E1011";
            localStorage.setItem(themes.themeKey, isDark ? themes.dark : themes.light);
        });

    } catch (error) {
        console.warn("theme switch skipped", error.message);
    };
}
function MobileNav() {
    const overlay = document.querySelector(SelectorMobileNav.overlay);
    const btn = document.querySelector(SelectorMobileNav.menuBtn);
    const mobileLinks = document.querySelectorAll(SelectorMobileNav.mobileLinks);

    if (!overlay || !btn || !mobileLinks) {
        console.warn("error occured retrieving div");
        return;
    }
    btn.addEventListener('click', () => {
        overlay.classList.toggle(SelectorMobileNav.activeClass);
        const isActive = overlay.classList.contains(SelectorMobileNav.activeClass);
        btn.textContent = isActive ? 'close' : 'Menu';
    });
    //links working
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetDestination = link.getAttribute(SelectorMobileNav.attribute);
            if (targetDestination) {
                window.open(targetDestination, '_blank');
                overlay.classList.toggle(SelectorMobileNav.activeClass);
                const isActive = overlay.classList.contains(SelectorMobileNav.activeClass);
                btn.textContent = isActive ? 'close' : 'Menu';
            }
        });
    });
}
document.addEventListener('DOMContentLoaded',()=>{
    ThemeSwitcher();
    MobileNav();
})