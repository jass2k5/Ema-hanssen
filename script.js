document.addEventListener('DOMContentLoaded',()=>{

let scrollimages = document.querySelector('.sliderimage');
const scrollpictures = [
    {src: 'img/image.png',alt:'hero-image'},
    {src:'img/workscroll1.avif',alt:'hero-image'},
    {src: 'img/img3.webp',alt: 'hero-image'}
];
scrollpictures.forEach((pics,idx) =>{
    let showfirstclass = "";
    if(idx === 0){
        showfirstclass = "active";
    }else if(idx === 1){
        showfirstclass = "next";
    }
    const injecting = `<img class="hero-image ${showfirstclass}" src="${pics.src}" alt="${pics.alt}">`;
    scrollimages.innerHTML += injecting;
});

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
    })
    

    

})
