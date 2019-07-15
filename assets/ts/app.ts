/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../sass/main.sass');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

console.log('Hello Webpack Encore! Edit me in assets/js/app.ts');

document.querySelector('.form_input--textarea').addEventListener('keydown', autosize);

function autosize() {
    let el = this;
    setTimeout(function () {
        el.style.cssText = 'height:' + (el.scrollHeight + 6) + 'px';
    }, 0);
}

// define menu objects
let hamburger: HTMLElement = document.querySelector('.navigation_hamburger');
let navigationLinks: HTMLElement = document.querySelector('.navigation_links');
let cssClass = 'navigation_links--opened';

window.addEventListener('click', (event) => {
    // if opened and target is NOT menu
    if (event.target == hamburger) {
        navigationLinks.classList.toggle(cssClass);
    }

    if (navigationLinks.classList.contains(cssClass) && event.target !== navigationLinks) {
        navigationLinks.classList.remove(cssClass);
    }
});