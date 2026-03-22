
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
const SelectorHero = {
    heroSpeed: 4000,
    HeroImgHolder: '.sliderimage',
    active: 'active',
    next: 'next',
    slideforward: 'slideforward',
    slideBackward: 'slidebackward',
    backwardArrow: '.backward',
    forwardArrow: '.forward',
};
const SelectorIndicator = {
    indicatorHtml: ` <i class="ri-checkbox-blank-circle-fill"></i>`,
    indicatorHolder: '.imageindicators',
    indicatorsClass: '.ri-checkbox-blank-circle-fill'
};
const SelectorGalleryGRid = {
    GalleryGrid: '.duo-1',
    DuoHolder: '.container',
    duo: 'duo',
    insideDuo: '.product'
};
const SelectorIntersection = {
    observerProperties: { threshold: 0.15, rootMargin: "0px 0px -10px 0px" },
    fadeup: 'showonscroll',
    allElements: '.duo ,.Ema ,.latest ,.infomobile ,.footer',
};
const heroImages = [
    { src: 'img/image.png', alt: 'hero-image' },
    { src: 'img/workscroll1.avif', alt: 'hero-image' },
    { src: 'img/img3.webp', alt: 'hero-image' },
];
const projectGallery = [
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

function HeroSlider() {
    //assigning containers into variables
    try {
        const imagesHolder = document.querySelector(SelectorHero.HeroImgHolder);
        const indicatorcontainer = document.querySelector(SelectorIndicator.indicatorHolder);
        const forwardArrow = document.querySelector(SelectorHero.forwardArrow);
        const backwardArrow = document.querySelector(SelectorHero.backwardArrow);

        if (!imagesHolder || !indicatorcontainer) throw new Error("issue in indicator and imageholder containers");

        //injecting elements into containers 
        let imagesHtml = "";
        let dotHtml = "";
        heroImages.forEach((pic, idx) => {
            let activeClass = idx === 0 ? "active" : (idx === 1 ? "next" : "");
            imagesHtml += `<img class="hero-image ${activeClass}" src="${pic.src}" alt="${pic.alt}">`;
            dotHtml += SelectorIndicator.indicatorHtml;
        });
        imagesHolder.innerHTML = imagesHtml;
        indicatorcontainer.innerHTML = dotHtml;
        //logic implimentation
        const images = document.querySelectorAll('.hero-image');
        const dots = document.querySelectorAll(SelectorIndicator.indicatorsClass);
        if (images.length === 0) throw new Error("No images to show!");

        let currentIndex = 0;
        let autoSliderInterval;
        dots[0].classList.add('whitedot');

        //3 core engine functions
        function updateSlider(newIndex, isBackward = false) {
            images.forEach(img => { img.classList.remove('slideforward', 'slidebackward', 'next'); });
            dots[currentIndex].classList.remove('whitedot')

            images[currentIndex].classList.add(isBackward ? 'slidebackward' : 'slideforward');
            images[currentIndex].classList.remove('active');

            currentIndex = newIndex;
            images[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('whitedot');

            let nextIndex = isBackward ? (currentIndex - 1 + images.length) % images.length : (currentIndex + 1) % images.length;
            images[nextIndex].classList.add('next');

        };
        function SlideForward() {
            updateSlider((currentIndex + 1) % images.length, false);
        }
        function SlideBackward() {
            updateSlider((currentIndex - 1 + images.length) % images.length, true);
        }
        function ClearInterval() {
            clearInterval(autoSliderInterval);
        }
        function RestartInterval() {
            autoSliderInterval = setInterval(SlideForward, SelectorHero.heroSpeed);
        }
        //ARROW BUTTONS FUNCTIONALITY
        if (forwardArrow) {
            forwardArrow.addEventListener('click', () => {
                ClearInterval();
                SlideForward();
                RestartInterval();
            });
        }
        if (backwardArrow) {
            backwardArrow.addEventListener('click', () => {
                ClearInterval();
                SlideBackward();
                RestartInterval();
            });
        }
        //dot indicator button listerner
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                ClearInterval();
                updateSlider(idx, idx < currentIndex);
                RestartInterval();
            })
        });
        //start
        autoSliderInterval = setInterval(SlideForward, SelectorHero.heroSpeed);
    } catch (error) {
        console.log("error found", error.message);
    }
};
function RenderProjectGallery() {
    try {
        const container = document.querySelector(SelectorGalleryGRid.DuoHolder);
        if (!container) throw new Error("COultn't found the gallery grid and container");
        for (let i = 0; i < projectGallery.length; i += 2) {
            let duoHtml = "";
            const duo = document.createElement('div');
            duo.classList.add('duo');
            const pair = projectGallery.slice(i, i + 2);
            pair.forEach(item => {
                const productHtml = ` <div class="product">
                    <img loading="lazy" class = "gallery-image" src="${item.src}" alt="reviewimages">
                    <div class = "glass-layer"></div>
                    <div class="solo-info">
                        <span>${item.title}</span>
                        <i class="ri-arrow-right-long-line"></i>
                    </div>
                 </div>`;
                duoHtml += productHtml;
            });
            duo.innerHTML = duoHtml;
            container.appendChild(duo);
        };
        //for hovering gallery images
        const allproduct = document.querySelectorAll('.product');
        allproduct.forEach(productBox => {
            productBox.addEventListener('mouseenter', () => {
                productBox.classList.add('is-hovered');
            });
            productBox.addEventListener('mouseleave', () => {
                productBox.classList.remove('is-hovered');
            });
        });

    } catch (error) {
        console.warn("error in rendering gallery", error.message);
    }
}
function ScrollAnimation() {
    try {
        const observeScroll = new IntersectionObserver((enteries, observer) => {
            enteries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(`${entry.target} is intersected`)
                    entry.target.classList.add(SelectorIntersection.fadeup);
                    observer.unobserve(entry.target);
                }
            })
        }, SelectorIntersection.observerProperties);

        const allelementstoslide = document.querySelectorAll(SelectorIntersection.allElements);
        allelementstoslide.forEach((el) => {
            observeScroll.observe(el);
        });
    } catch (error) {
        console.warn("error in intersection observer api", error.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ThemeSwitcher();
    HeroSlider();
    RenderProjectGallery();
})
window.addEventListener('load',()=>{
    setTimeout(()=>{
        ScrollAnimation();
    },200)
})