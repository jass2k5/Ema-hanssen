
export const themes = {
    themeKey: 'theme',
    dark: 'dark',
    light: 'light'
};


export const SelectorsTheme = {
    darkbtn: '.modes',
    logo: '.logo',
    rootDarkclass: 'darkmode'//for toggle from util root file
};
export const SelectorHero = {
    heroSpeed: 4000,
    HeroImgHolder: '.sliderimage',
    active: 'active',
    next: 'next',
    slideforward: 'slideforward',
    slideBackward: 'slidebackward',
    backwardArrow: '.backward',
    forwardArrow: '.forward',
    contactBoxes: '.info',
    attribute:'data-goto'
};
export const SelectorIndicator = {
    indicatorHtml: ` <i class="ri-checkbox-blank-circle-fill"></i>`,
    indicatorHolder: '.imageindicators',
    indicatorsClass: '.ri-checkbox-blank-circle-fill'
};
export const SelectorGalleryGRid = {
    GalleryGrid: '.duo-1',
    DuoHolder: '.container',
    duo: 'duo',
    insideDuo: '.product'
};
export const SelectorIntersection = {
    observerProperties: { threshold: 0.15, rootMargin: "0px 0px -10px 0px" },
    fadeup: 'showonscroll',
    allElements: '.reveal, .infoandpic,.journal,.product ,.Ema ,.latest ,.infomobile ,.footer',
};
export const heroImages = [
    { src: 'img/image.png', alt: 'hero-image' },
    { src: 'img/workscroll1.avif', alt: 'hero-image' },
    { src: 'img/img3.webp', alt: 'hero-image' },
];
export const projectGallery = [
    { src: 'img/img1.webp', title: 'Beige' },
    { src: 'img/img2.webp', title: 'Darkness' },
    { src: 'img/img3.webp', title: 'Gentlemen' },
    { src: 'img/img4.webp', title: 'City' },
    { src: 'img/img5.webp', title: 'Nature' },
    { src: 'img/image.png', title: 'Brand' },
    { src: 'img/img7.webp', title: 'Studio' },
    { src: 'img/img8.webp', title: 'Colors' },
    { src: 'img/img9.webp', title: 'Duo' },
    { src: 'img/img10.avif', title: 'Elegence' },

];
export const SelectorMobileNav = {
    overlay: '.mobile-menu-overlay',
    activeClass: 'activeNav',
    menuBtn: '.menu-toggle',
    mobileLinks: '.nav-blanks',
    attribute: 'data-target'
}
export const BlogGalleryData = [
    {
        src: "../img/workscroll1.avif",
        alt: "first",
        text: "Mastering Light: Techniques for stunning urban photography"
    },
    {
        src: "../img/work2.avif",
        alt: "second",
        text: "The art of candid moments: creating authentic lifestyle images"
    },
    {
        src: "../img/work3.avif",
        alt: "third",
        text: "transforming landscapes: finding beauty in nature's details"
    },
    {
        src: "../img/work4.avif",
        alt: "fourth",
        text: "creating impact: the power of black and white portraits"
    },
    {
        src: "../img/work5.avif",
        alt: "fifth",
        text: "beyond the frame exploring conceptual fine art photography"
    },
    {
        src: "../img/work6.avif",
        alt: "sixth",
        text: "adventure awaits: photographing the thrill of outdoor exploration"
    }
];
export const SelectorBlogGallery = {
    containerScroll: '.container-scroll',
    duoSlider: 'slider',
}
export const workProjectsData = [
    {
        h3: "Beige",
        span: "Commercial 2024",
        src: "../img/img1.webp",
        alt: "Beige project"
    },
    {
        h3: "Darkness",
        span: "Commercial 2024",
        src: "../img/img2.webp",
        alt: "Darkness project"
    },
    {
        h3: "Gentlemen",
        span: "Editorial 2024",
        src: "../img/img3.webp",
        alt: "Gentlemen project"
    },
    {
        h3: "City",
        span: "Commercial 2024",
        src: "../img/img4.webp",
        alt: "City project"
    },
    {
        h3: "Nature",
        span: "Editorial 2024",
        src: "../img/img5.webp",
        alt: "Nature project"
    },
    {
        h3: "Brand",
        span: "Editorial 2023",
        src: "../img/image.png",
        alt: "Brand project"
    },
    {
        h3: "Studio",
        span: "Commercial 2023",
        src: "../img/img7.webp",
        alt: "Studio project"
    },
    {
        h3: "Colors",
        span: "Editorial 2023",
        src: "../img/img8.webp",
        alt: "Colors project"
    },
    {
        h3: "Duo",
        span: "Commercial 2023",
        src: "../img/img9.webp",
        alt: "Duo project"
    },
    {
        h3: "Elegance",
        span: "Editorial 2023",
        src: "../img/img10.avif",
        alt: "Elegance project"
    },
    {
        h3: "Hat",
        span: "Commercial 2023",
        src: "../img/img11.png",
        alt: "Hat project"
    },
    {
        h3: "Black & White",
        span: "Editorial 2023",
        src: "../img/img12.png",
        alt: "Black and White project"
    },
    {
        h3: "Streets",
        span: "Commercial 2023",
        src: "../img/img13.png",
        alt: "Streets project"
    },
    {
        h3: "Stoic",
        span: "Commercial 2023",
        src: "../img/img14.png",
        alt: "Stoic project"
    }
];
export const SelectorWorkGallery={
    container: '.project-list',
    leftContainer:'.left-preview'
}
