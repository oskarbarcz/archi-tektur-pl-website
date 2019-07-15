import {Navigation} from "./portfolio/Navigation";

require('../sass/main.sass');

document.querySelector('.form_input--textarea').addEventListener('keydown', autosize);

function autosize() {
    let el = this;
    setTimeout(function () {
        el.style.cssText = 'height:' + (el.scrollHeight + 6) + 'px';
    }, 0);
}

new Navigation(
    document.querySelector('.navigation_hamburger'),
    document.querySelector('.navigation_links')
);
