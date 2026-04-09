
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
    observerProperties: { threshold: 0.15, rootMargin: "0px 0px 30px 0px" },
    fadeup: 'showonscroll',
    allElements: '.reveal, .infoandpic,.journal,.product ,.Ema ,.latest ,.footer',
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
export const SelectorAboutSvgs = [
     {
        svg:`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="126.000000pt" height="50.000000pt" viewBox="0 0 126.000000 50.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"> <path d="M250 372 c-16 -13 -23 -29 -22 -50 0 -20 -4 -32 -12 -32 -44 0 -62 -88 -24 -114 26 -18 69 -21 85 -5 8 8 17 8 32 -1 33 -17 72 -8 94 22 20 27 20 29 4 63 -9 19 -23 35 -32 35 -10 0 -15 10 -15 30 0 60 -64 90 -110 52z m74 -18 c9 -8 16 -24 16 -35 0 -16 -7 -19 -45 -19 -40 0 -45 2 -45 23 0 44 43 62 74 31z m-63 -113 c18 -43 11 -61 -26 -61 -46 0 -62 57 -23 84 30 21 31 21 49 -23z m53 31 c2 -4 -2 -15 -9 -25 -13 -18 -14 -18 -24 2 -6 11 -11 22 -11 25 0 9 38 7 44 -2z m75 -24 c17 -45 -21 -79 -64 -60 l-25 11 23 35 c25 40 54 46 66 14z"/> <path d="M482 273 c2 -45 7 -77 13 -76 6 1 12 12 13 24 4 21 4 20 32 -6 24 -23 32 -26 44 -16 9 7 17 8 20 2 4 -5 27 -9 52 -8 40 2 44 4 40 22 -3 11 -6 32 -6 48 0 33 -35 53 -74 43 -36 -9 -32 -24 5 -22 18 0 34 -5 36 -12 3 -7 -1 -10 -10 -6 -20 7 -57 -13 -57 -31 0 -22 -28 -18 -41 6 -9 17 -7 25 12 45 29 31 5 33 -28 2 l-23 -21 0 41 c0 31 -4 42 -15 42 -13 0 -15 -13 -13 -77z m178 -38 c0 -21 -28 -31 -43 -16 -9 9 -8 14 3 21 22 14 40 12 40 -5z"/> <path d="M850 273 l0 -78 41 0 c33 0 46 5 61 26 18 24 19 30 6 55 -11 24 -20 29 -51 29 -32 0 -37 3 -37 23 0 12 -4 22 -10 22 -6 0 -10 -32 -10 -77z m78 5 c30 -30 -4 -77 -41 -57 -29 17 -15 69 18 69 6 0 16 -5 23 -12z"/> <path d="M717 260 c6 -59 11 -73 23 -65 5 3 10 23 10 45 0 67 46 62 52 -5 4 -53 23 -42 22 13 0 51 -13 62 -70 60 l-41 -2 4 -46z"/> <path d="M993 303 c-25 -9 -13 -23 18 -21 19 2 34 -2 36 -10 3 -8 -1 -10 -11 -6 -16 6 -66 -20 -66 -34 1 -25 23 -37 70 -38 48 -1 51 1 46 20 -3 12 -6 31 -6 43 0 40 -44 64 -87 46z m55 -71 c5 -17 -27 -27 -41 -13 -9 9 -8 14 3 21 18 11 32 8 38 -8z"/> </g> </svg>`
    },
    {
        svg:`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="124.000000pt" height="53.000000pt" viewBox="0 0 124.000000 53.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"> <path d="M143 361 c-42 -26 -53 -49 -53 -109 0 -60 24 -95 76 -112 98 -33 189 44 170 144 -15 78 -122 121 -193 77z m112 -15 c18 -8 38 -23 44 -34 22 -40 8 -132 -19 -132 -6 0 -10 20 -10 44 0 25 -4 48 -10 51 -6 4 -10 -17 -10 -54 0 -48 -3 -61 -15 -61 -12 0 -15 15 -15 79 0 44 -4 83 -10 86 -6 4 -10 -25 -10 -79 0 -51 -4 -86 -10 -86 -5 0 -10 25 -10 56 0 71 -23 70 -30 -2 l-5 -49 -17 37 c-25 50 -22 81 7 117 22 26 35 32 78 40 4 0 23 -5 42 -13z"/> <path d="M646 353 c-3 -3 -6 -39 -6 -80 0 -58 3 -73 15 -73 12 0 15 15 15 74 0 69 -8 95 -24 79z"/> <path d="M776 353 c-3 -3 -6 -16 -6 -27 0 -17 -6 -21 -32 -21 -42 0 -65 -39 -47 -79 11 -23 18 -26 61 -26 l48 0 0 74 c0 69 -8 95 -24 79z m-16 -78 c15 -18 3 -57 -17 -53 -26 5 -39 34 -24 52 17 20 25 20 41 1z"/> <path d="M820 280 c0 -66 3 -80 16 -80 12 0 15 12 13 68 -2 73 -6 92 -20 92 -5 0 -9 -36 -9 -80z"/> <path d="M870 345 c0 -9 5 -15 11 -13 6 2 11 8 11 13 0 5 -5 11 -11 13 -6 2 -11 -4 -11 -13z"/> <path d="M390 291 c-5 -11 -10 -28 -10 -39 0 -27 35 -56 60 -49 12 3 20 0 20 -8 0 -17 -23 -25 -50 -18 -17 4 -21 2 -18 -8 7 -21 62 -23 82 -4 11 12 16 35 16 79 l0 63 -45 1 c-35 2 -46 -2 -55 -17z m68 -30 c4 -29 -9 -44 -31 -35 -17 6 -23 44 -10 58 14 14 38 0 41 -23z"/> <path d="M527 292 c-20 -22 -22 -63 -5 -80 17 -17 73 -15 88 3 7 8 13 26 13 40 0 14 -6 32 -13 40 -17 21 -63 19 -83 -3z m64 -23 c9 -17 8 -25 -4 -37 -9 -8 -23 -12 -31 -9 -19 8 -21 53 -3 60 21 9 26 7 38 -14z"/> <path d="M870 254 c0 -73 24 -70 28 4 2 42 0 52 -12 52 -13 0 -16 -12 -16 -56z"/> <path d="M920 253 c0 -40 4 -53 14 -53 10 0 16 14 18 43 2 29 8 42 18 42 10 0 16 -13 18 -42 2 -29 8 -43 18 -43 18 0 20 83 2 98 -7 6 -30 10 -50 9 l-38 -1 0 -53z"/> <path d="M1057 297 c-27 -19 -20 -78 12 -93 25 -13 62 -5 69 15 2 7 -7 10 -29 9 -18 -2 -34 2 -36 9 -3 8 10 13 36 15 40 3 40 4 28 28 -14 29 -53 37 -80 17z m53 -17 c0 -5 -9 -10 -21 -10 -11 0 -17 5 -14 10 3 6 13 10 21 10 8 0 14 -4 14 -10z"/> </g> </svg>`
    },
    {
        svg:`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="144.000000pt" height="41.000000pt" viewBox="0 0 144.000000 41.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,41.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"> <path d="M290 230 c0 -73 4 -120 10 -120 6 0 10 47 10 120 0 73 -4 120 -10 120 -6 0 -10 -47 -10 -120z"/> <path d="M330 211 c0 -61 4 -101 10 -101 6 0 10 38 10 94 0 53 -4 98 -10 101 -6 4 -10 -30 -10 -94z"/> <path d="M248 205 c-2 -71 0 -95 10 -95 9 0 12 26 12 95 0 52 -4 95 -9 95 -5 0 -11 -43 -13 -95z"/> <path d="M462 223 c-10 -73 -8 -88 12 -60 16 21 26 22 26 2 0 -8 7 -15 15 -15 15 0 15 2 -4 100 -4 20 -14 36 -23 38 -12 2 -18 -11 -26 -65z m25 -10 c-4 -3 -7 0 -7 7 0 7 3 10 7 7 3 -4 3 -10 0 -14z"/> <path d="M587 283 c-13 -13 -7 -44 15 -73 12 -16 18 -33 13 -37 -4 -5 -10 -2 -12 5 -5 13 -33 17 -33 5 1 -20 20 -34 41 -31 32 4 38 47 9 73 -11 10 -20 25 -19 34 0 10 2 12 6 4 2 -7 12 -13 20 -13 10 0 13 6 9 16 -3 9 -6 18 -6 20 0 7 -36 5 -43 -3z"/> <path d="M701 276 c-7 -8 -11 -37 -9 -68 3 -52 4 -53 36 -56 33 -3 33 -3 30 35 -2 26 -8 38 -18 38 -11 0 -14 -8 -12 -29 3 -18 0 -26 -7 -22 -14 9 -14 66 -1 86 6 10 10 11 10 3 0 -7 7 -13 15 -13 18 0 19 12 3 28 -16 16 -33 15 -47 -2z"/> <path d="M821 224 c-12 -67 -8 -93 10 -61 12 21 29 22 29 2 0 -8 5 -15 11 -15 11 0 5 93 -8 127 -13 33 -32 10 -42 -53z m26 -11 c-4 -3 -7 0 -7 7 0 7 3 10 7 7 3 -4 3 -10 0 -14z"/> <path d="M937 283 c-4 -3 -7 -35 -7 -70 0 -48 3 -63 14 -63 9 0 16 13 19 33 l4 32 1 -32 c1 -22 7 -33 17 -33 11 0 14 13 13 58 0 31 -5 63 -11 70 -10 13 -39 16 -50 5z m36 -28 c4 -8 2 -17 -3 -20 -6 -4 -10 3 -10 14 0 25 6 27 13 6z"/> <path d="M1057 283 c-4 -3 -7 -35 -7 -70 l0 -64 33 3 c31 3 32 4 35 56 2 31 -2 60 -9 68 -12 15 -41 19 -52 7z m43 -63 c0 -21 -4 -42 -10 -45 -6 -4 -10 13 -10 45 0 32 4 49 10 45 6 -3 10 -24 10 -45z"/> <path d="M1180 220 c0 -40 4 -70 10 -70 6 0 10 30 10 70 0 40 -4 70 -10 70 -6 0 -10 -30 -10 -70z"/> <path d="M1261 224 c-12 -67 -8 -93 10 -61 12 21 29 22 29 2 0 -8 5 -15 11 -15 11 0 5 93 -8 127 -13 33 -32 10 -42 -53z m26 -11 c-4 -3 -7 0 -7 7 0 7 3 10 7 7 3 -4 3 -10 0 -14z"/> <path d="M210 258 c-1 -2 -2 -36 -3 -76 -1 -52 1 -72 11 -72 8 0 12 22 12 75 0 43 -4 75 -10 75 -5 0 -10 -1 -10 -2z"/> <path d="M370 186 c0 -44 4 -76 10 -76 6 0 10 30 10 69 0 39 -4 73 -10 76 -6 4 -10 -22 -10 -69z"/> </g> </svg>`
    },
    {
        svg:`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="113.000000pt" height="45.000000pt" viewBox="0 0 113.000000 45.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,45.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"> <path d="M103 331 c-61 -38 -79 -109 -43 -168 45 -74 139 -83 197 -19 27 29 33 44 33 81 0 95 -108 156 -187 106z m113 -72 c36 -40 -17 -110 -69 -90 -14 5 -28 19 -32 31 -22 70 52 114 101 59z"/> <path d="M320 248 c0 -100 14 -128 64 -128 49 0 56 14 56 117 0 93 0 93 -25 93 -25 0 -25 -1 -27 -87 l-2 -88 -5 85 c-6 84 -6 85 -33 88 l-28 3 0 -83z"/> <path d="M450 310 c0 -11 7 -20 15 -20 12 0 15 -16 15 -85 l0 -85 30 0 30 0 0 85 c0 69 3 85 15 85 8 0 15 9 15 20 0 18 -7 20 -60 20 -53 0 -60 -2 -60 -20z"/> <path d="M598 319 c-15 -8 -18 -25 -18 -94 0 -73 3 -86 19 -95 30 -15 66 -12 84 8 25 27 24 153 -1 175 -21 19 -58 22 -84 6z m52 -94 c0 -37 -4 -65 -10 -65 -6 0 -10 28 -10 65 0 37 4 65 10 65 6 0 10 -28 10 -65z"/> <path d="M726 311 c-24 -27 -13 -72 24 -100 27 -19 45 -71 20 -56 -5 3 -10 15 -10 26 0 15 -6 20 -22 17 -18 -2 -22 -9 -20 -27 4 -36 21 -51 56 -51 42 0 56 16 56 61 0 30 -6 41 -35 63 -34 26 -45 46 -25 46 6 0 10 -7 10 -15 0 -9 9 -15 25 -15 20 0 25 5 25 25 0 44 -72 62 -104 26z"/> <path d="M850 225 l0 -105 25 0 25 0 0 105 0 105 -25 0 -25 0 0 -105z"/> <path d="M935 318 c-5 -15 -25 -162 -25 -184 0 -23 51 -18 57 6 7 26 23 26 23 0 0 -15 7 -20 25 -20 29 0 28 -2 15 93 -18 120 -16 117 -56 117 -19 0 -37 -6 -39 -12z m42 -105 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z"/> </g> </svg>`
    },
    {
        svg:`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="110.000000pt" height="31.000000pt" viewBox="0 0 110.000000 31.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,31.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"> <path d="M163 260 c-61 -37 -79 -108 -43 -167 33 -55 99 -77 155 -51 36 16 25 34 -20 30 -57 -5 -83 5 -100 38 -22 43 -18 74 12 104 24 24 34 27 77 24 55 -3 71 12 31 30 -38 17 -76 15 -112 -8z"/> <path d="M546 263 c-11 -11 -6 -23 9 -23 8 0 15 4 15 9 0 13 -16 22 -24 14z"/> <path d="M810 170 c0 -60 4 -100 10 -100 6 0 10 40 10 100 0 60 -4 100 -10 100 -6 0 -10 -40 -10 -100z"/> <path d="M295 231 c-3 -6 -1 -19 5 -30 14 -26 13 -67 -2 -91 -10 -15 -10 -22 0 -32 33 -33 67 80 40 131 -15 28 -33 37 -43 22z"/> <path d="M424 202 c-16 -10 -34 -48 -34 -70 0 -26 41 -62 71 -62 29 0 68 25 57 36 -5 4 -19 2 -33 -4 -32 -15 -54 -6 -61 24 -12 49 19 76 62 54 30 -17 46 -3 20 16 -21 15 -64 18 -82 6z"/> <path d="M540 140 c0 -56 3 -70 15 -70 12 0 15 14 15 70 0 56 -3 70 -15 70 -12 0 -15 -14 -15 -70z"/> <path d="M590 139 c0 -55 3 -69 15 -69 11 0 15 12 15 50 0 39 4 52 20 60 30 16 24 28 -15 28 l-35 0 0 -69z"/> <path d="M680 190 c-59 -59 27 -156 96 -106 26 19 10 32 -22 18 -50 -23 -89 27 -55 70 17 20 21 20 50 8 37 -15 55 -5 27 16 -28 20 -73 17 -96 -6z"/> <path d="M875 190 c-41 -45 -10 -120 50 -120 36 0 75 23 57 34 -6 4 -21 2 -33 -5 -16 -8 -28 -8 -45 0 -40 18 -27 31 31 31 51 0 55 2 55 23 0 52 -79 77 -115 37z m81 -17 c17 -17 16 -18 -25 -21 -50 -4 -59 1 -41 23 17 20 44 19 66 -2z"/> </g> </svg>`
    },
    {
        svg:`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="116.000000pt" height="49.000000pt" viewBox="0 0 116.000000 49.000000"  preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,49.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"> <path d="M183 323 c-25 -12 -38 -30 -52 -67 -11 -28 -22 -58 -25 -67 -5 -10 9 -29 43 -57 l50 -42 40 42 c36 38 40 48 39 88 -1 40 -1 42 -7 13 l-6 -32 -28 25 -28 24 28 12 c15 7 30 13 32 14 5 4 -39 64 -47 63 -4 0 -22 -8 -39 -16z m61 -22 c16 -17 15 -19 -14 -31 -24 -10 -33 -10 -45 0 -29 24 -16 44 31 49 6 0 18 -7 28 -18z m-75 -143 l11 -23 -6 23 c-5 20 -2 22 40 22 25 0 46 -4 46 -8 0 -5 -14 -21 -31 -38 -21 -19 -33 -25 -36 -16 -3 6 -8 10 -12 7 -5 -2 -21 9 -36 25 -26 28 -27 30 -8 30 11 0 25 -10 32 -22z"/> <path d="M380 276 c0 -12 11 -16 40 -16 22 0 40 -4 40 -10 0 -5 -10 -10 -23 -10 -30 0 -67 -27 -67 -49 0 -10 9 -26 21 -36 17 -16 25 -17 50 -8 21 8 29 8 29 0 0 -8 3 -8 11 0 5 5 9 38 7 74 l-3 64 -52 3 c-43 2 -53 0 -53 -12z m80 -85 c0 -19 -25 -31 -47 -24 -7 3 -13 13 -13 24 0 14 7 19 30 19 23 0 30 -5 30 -19z"/> <path d="M536 269 c-59 -46 -7 -144 65 -123 33 9 59 38 46 50 -4 4 -15 0 -25 -9 -44 -40 -103 -6 -82 47 7 20 17 26 39 26 15 0 34 -7 41 -15 16 -19 30 -19 30 -1 0 19 -39 46 -66 46 -12 0 -33 -10 -48 -21z"/> <path d="M685 278 c-9 -24 -1 -128 10 -131 6 -1 12 23 15 53 5 53 6 55 35 55 29 0 30 -2 35 -55 3 -30 10 -55 15 -55 6 0 12 25 15 55 5 53 6 55 35 55 30 0 30 -1 33 -57 4 -80 22 -73 22 7 0 60 -2 66 -25 77 -19 8 -31 8 -50 0 -19 -9 -31 -9 -51 0 -19 9 -30 9 -43 1 -13 -8 -21 -9 -29 -1 -8 8 -13 7 -17 -4z"/> <path d="M956 269 c-36 -28 -36 -80 0 -108 33 -26 65 -27 95 -2 31 25 16 40 -19 19 -18 -11 -34 -13 -49 -7 -40 15 -25 28 35 31 54 3 57 4 54 28 -3 30 -36 60 -67 60 -12 0 -34 -9 -49 -21z m75 -19 l24 -19 -47 -1 c-49 0 -61 11 -30 29 24 14 27 14 53 -9z"/> </g> </svg>`
    }
];

export const SelectorAbout ={
    container: '.sliderAbout',
    group: '.group',
    Exhibition: '.Exhibitions',
    part1: '.part1',
    part2: '.part2',
    box: '.aboutExhibition',
    Awards: '.Awards',
    Apart2: '.Apart2',
    boxAward:'.aboutAwards'

}
export const SelectorAboutExhibition =[
    {
        title: "Through the Lens",
        year: "2024",
        // Adding an icon property makes it easy to conditionally render the arrow
        icon: "ri-arrow-right-up-long-line" 
    },
    {
        title: "Candid Connections",
        year: "2024",
        icon: null
    },
    {
        title: "Urban Stories",
        year: "2023",
        icon: null
    },
    {
        title: "Nature's Palette",
        year: "2023",
        icon: null
    },
    {
        title: "Moments Unseen",
        year: "2022",
        icon: null
    },
    {
        title: "Reflections of Prague",
        year: "2022",
        icon: null
    }
];
export const AwardsData = [
    {
        title: "Prague Photography Award",
        year: "2024",
        icon: "ri-arrow-right-up-long-line" 
    },
    {
        title: "European Fine Art Photography",
        year: "2024",
        icon: "ri-arrow-right-up-long-line"
    },
    {
        title: "Best Urban Photography",
        year: "2023",
        icon: "ri-arrow-right-up-long-line"
    },
    {
        title: "Nature Photographer of the Year",
        year: "2023",
        icon: "ri-arrow-right-up-long-line"
    },
    {
        title: "Candid Moments Award",
        year: "2022",
        icon: "ri-arrow-right-up-long-line"
    },
    {
        title: "Excellence in Visual Storytelling",
        year: "2022",
        icon: "ri-arrow-right-up-long-line"
    }
];