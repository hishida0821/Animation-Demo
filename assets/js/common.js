'use strict';

const parallaxAnim = () => {
    const parallax = document.getElementById('parallax');
    const offsetY = window.scrollY;

    parallax.style.cssText = 'position: sticky; top: 0;';
    parallax.style.transform = 'translateY(-' + (offsetY * 0.06) + 'vh)';
}
window.addEventListener('scroll', parallaxAnim, false);

const opaAnim = () => {
    let item = document.getElementsByClassName('highlights');
    let halfHeight = Math.floor(window.innerHeight / 2);

    
    for(let i = 0; i < item.length; i++) {
        item[i].style.cssText = "opacity: 0.3; transition: all .3s";

        let itemTop = Math.floor(item[i].getBoundingClientRect().top);
        let itemBottom = Math.floor(item[i].getBoundingClientRect().bottom);

        if(itemTop < halfHeight && itemBottom > halfHeight) {
            item[i].style.opacity = 1;
        } else {
            item[i].style.opacity = 0.3;
        }

    }
}
window.addEventListener('scroll', opaAnim, false);