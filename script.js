document.addEventListener('DOMContentLoaded',()=>{
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
        { src: 'img/img8.webp', title: 'Colors' }
    ];
    container.innerHTML = "";
    for(let i = 0; i < projectImages.length;i += 2){
        const duowrapper = document.createElement('div');
        duowrapper.classList.add('duo');
        const pair = projectImages.slice(i,i+2);
        pair.forEach(item =>{
                    const productHtml = ` <div class="product">
                    <img loading="lazy" src="${item.src}" alt="reviewimages">
                    <div class="solo-info">
                        <span>${item.title}</span>
                    </div>
                 </div>`;
            
            duowrapper.innerHTML += productHtml;
            container.appendChild(duowrapper);
        })
    }
})