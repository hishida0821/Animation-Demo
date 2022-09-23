'use strict';

// main title fadeup effect
const fadeUpAnim = () => {
    let fadeUpItem = document.getElementById('fadeUpItem');
    let fadeOutLeft = document.getElementById('fadeOutLeft');
    let fadeOutRight = document.getElementById('fadeOutRight');
    let hideTxt = document.getElementById('hideTxt');

    setTimeout(() => { // mainTitle apper
        fadeUpItem.style.cssText = "opacity: 1; transform: translateY(0);"
    }, 800);
    setTimeout(() => {
        fadeOutLeft.style.cssText = "display: inline-block; transform: translateX(-100vw) ;"
        fadeOutRight.style.cssText = "display: inline-block; transform: translateX(100vw) ;"
    }, 2400);
    setTimeout(() => {
        hideTxt.style.opacity = 1;
    }, 3000);
}
window.addEventListener('load', fadeUpAnim, false);


// mainvisual parallax effect
const parallaxAnim = () => {
    const parallax = document.getElementById('parallax');
    const offsetY = window.scrollY;

    parallax.style.cssText = 'position: sticky; top: 0; z-index: 0; transition: all 0s';
    parallax.style.transform = 'translateY(-' + (offsetY * 0.06) + 'vh)';
}
window.addEventListener('scroll', parallaxAnim, false);

// text highlight effect
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