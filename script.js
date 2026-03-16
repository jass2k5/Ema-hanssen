document.addEventListener('DOMContentLoaded',()=>{

 const darkbtn = document.querySelector('.modes');
    const body = document.body;
    const logo = document.querySelector('.logo');
    if(localStorage.getItem('theme') === 'dark'){
        body.classList.add('darkmode');
        darkbtn.style.justifyContent = "flex-end";
        logo.style.color =  "#FFFFFF";
    }
    darkbtn.addEventListener('click',()=>{
         body.classList.toggle('darkmode');
         if(body.classList.contains('darkmode')){
            darkbtn.style.justifyContent = "flex-end";
            logo.style.color =  "#FFFFFF";
            localStorage.setItem('theme',"dark");
         }else{
            darkbtn.style.justifyContent = "flex-start";
            logo.style.color = "#0E1011";
            localStorage.setItem('theme','light');
         }
    });

let scrollimages = document.querySelector('.sliderimage');
const scrollpictures = [
    {src: 'img/image.png',alt:'hero-image'},
    {src:'img/workscroll1.avif',alt:'hero-image'},
    {src: 'img/img3.webp',alt: 'hero-image'}
];
let injecting = "";
scrollpictures.forEach((pics,idx) =>{
    let showfirstclass = "";
    if(idx === 0){
        showfirstclass = "active";
    }else if(idx === 1){
        showfirstclass = "next";
    }
    injecting += `<img class="hero-image ${showfirstclass}" src="${pics.src}" alt="${pics.alt}">`;
});
scrollimages.innerHTML = injecting;

let indicatorcontainer = document.querySelector('.imageindicators');
let holder = "";
for(let i = 0;i<scrollpictures.length;i++){
    holder += ` <i class="ri-checkbox-blank-circle-fill"></i>`;
}
indicatorcontainer.innerHTML = holder;
let currentindicator = 0;
let autoslider;
let currentindex = 0 ;
const intervaltime = 4000;
let images = document.querySelectorAll('.hero-image');
function slidingpanel(){
        let inds = document.querySelectorAll(".ri-checkbox-blank-circle-fill");
        if(images.length === 0){
            return;
        }
        images.forEach(img =>{
            img.classList.remove('slideout','next');
        });
        images[currentindex].classList.add('slideout');
        images[currentindex].classList.remove('active');
        inds[currentindicator].classList.remove('whitedot');

        currentindex = (currentindex + 1) % images.length;
        currentindicator = currentindex;
        images[currentindex].classList.add('active');
        inds[currentindicator].classList.add('whitedot');


        let nextimage = (currentindex + 1)%images.length;
        images[nextimage].classList.add('next');
}
autoslider = setInterval(slidingpanel,intervaltime);
const inds = document.querySelectorAll(".ri-checkbox-blank-circle-fill");
inds.forEach((dot,idx)=>{
    dot.addEventListener('click',()=>{
        clearInterval(autoslider);
        images.forEach(img=>{
            img.classList.remove('active','slideout','next');
        });
        inds[currentindicator].classList.remove('whitedot');
        currentindex = idx;
        currentindicator = currentindex;
        images[currentindex].classList.add('active');
        inds[currentindicator].classList.add('whitedot');
        autoslider = setInterval(slidingpanel,intervaltime);
    })
})
let slidersection = document.querySelector('.duo-1')
let container = document.querySelector('.container');
const projectImages = [
        { src: 'img/img1.webp', title: 'Beige' },
        { src: 'img/im,g2.webp', title: 'Darkness' },
        { src: 'img/img3.webp', title: 'Gentlemen' },
        { src: 'img/img4.webp', title: 'City' },
        { src: 'img/img5.webp', title: 'Nature' },
        { src: 'img/image.png', title: 'Brand' },
        { src: 'img/img7.webp', title: 'Studio' },
        { src: 'img/img8.webp', title: 'Colors' },
        { src: 'img/img9.webp', title: 'Duo'},
        { src: 'img/img10.avif', title: 'Elegence'},
        
    ];
    container.innerHTML = "";
    for(let i = 0; i < projectImages.length;i += 2){
        const duowrapper = document.createElement('div');
        duowrapper.classList.add('duo');
        const pair = projectImages.slice(i,i+2);
        pair.forEach(item =>{
                    const productHtml = ` <div class="product">
                    <img loading="lazy" class = "gallery-image" src="${item.src}" alt="reviewimages">
                    <div class = "glass-layer"></div>
                    <div class="solo-info">
                        <span>${item.title}</span>
                        <i class="ri-arrow-right-long-line"></i>
                    </div>
                 </div>`;
            
            duowrapper.innerHTML += productHtml;
        })
        container.appendChild(duowrapper);
    }
   
    const allproduct = document.querySelectorAll('.product');
    allproduct.forEach(productBox =>{
        productBox.addEventListener('mouseenter',()=>{
            productBox.classList.add('is-hovered');


        });
        productBox.addEventListener('mouseleave',()=>{
            productBox.classList.remove('is-hovered');
        })
    })
   
    

    

})
