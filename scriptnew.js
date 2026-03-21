
 const themes = {
    themeKey: 'theme',
    dark: 'dark',
    light: 'light'
  };

 
 const SelectorsTheme = {
    darkbtn: '.modes',
    logo: '.logo',
    rootDarkclass: 'darkmode'//for toggle from util root file
  };
 const  SelectorHero ={
     heroSpeed: 4000,
    HeroImgHolder: '.sliderimage',
    active: 'active',
    next: 'next',
    slideforward: 'slideforward',
    slideBackward:'slidebackward',
    backwardArrow:'.backward',
    forwardArrow:'.forward',
  };
 const SelectorIndicator ={
   indicatorHtml : ` <i class="ri-checkbox-blank-circle-fill"></i>`,
   indicatorHolder: '.imageindicators',
   indicatorsClass: '.ri-checkbox-blank-circle-fill'
  };
const  SelectorGalleryGRid={
    GalleryGrid:'.duo-1',
    DuoHolder:'.container',
    duo: 'duo',
    insideDuo: '.product'
  };
 const SelectorIntersection={
     observerProperties:{threshold:0.15,rootMargin: "0px 0px -50px 0px"},
     fadeup:'showonscroll',
     allElements: '.duo ,.Ema ,.latest ,.infomobile ,.footer',
  };
  const heroImages= [
    {src: 'img/image.png',alt:'hero-image'},
    {src:'img/workscroll1.avif',alt:'hero-image'},
    {src: 'img/img3.webp',alt: 'hero-image'},
];
const projectGallery=[
        { src: 'img/img1.webp', title: 'Beige' },
        { src: 'img/img2.webp', title: 'Darkness' },
        { src: 'img/img3.webp', title: 'Gentlemen' },
        { src: 'img/img4.webp', title: 'City' },
        { src: 'img/img5.webp', title: 'Nature' },
        { src: 'img/image.png', title: 'Brand' },
        { src: 'img/img7.webp', title: 'Studio' },
        { src: 'img/img8.webp', title: 'Colors' },
        { src: 'img/img9.webp', title: 'Duo'},
        { src: 'img/img10.avif', title: 'Elegence'},
        
    ];


function ThemeSwitcher(){
    try{
        const themeBtn = document.querySelector(SelectorsTheme.darkbtn);
        const body = document.body;
        const logo = document.querySelector(SelectorsTheme.logo);
        if(!themeBtn) throw new Error("theme button not found!");
        //checking local storage for theme
        if(localStorage.getItem(themes.themeKey) === themes.dark){
            body.classList.add(SelectorsTheme.rootDarkclass);
            themeBtn.style.justifyContent = "flex-end";
            if (logo) logo.style.color = "white";
        };
        //working button
        themeBtn.addEventListener('click',()=>{
            body.classList.toggle(SelectorsTheme.rootDarkclass);
            const isDark = body.classList.contains(SelectorsTheme.rootDarkclass);
            themeBtn.style.justifyContent = isDark?"flex-end":"flex-start";
            if (logo) logo.style.color = isDark?"white":"#0E1011";
            localStorage.setItem(themes.themeKey,isDark?themes.dark:themes.light);
        });

    }catch (error){
        console.warn("theme switch skipped",error.message);
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    ThemeSwitcher();
})