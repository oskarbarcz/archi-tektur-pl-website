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

let textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', (event: Event) => {
    let el = this;
    setTimeout(function () {
        el.style.cssText = 'height:' + (el.scrollHeight + 5) + 'px';
    }, 0);
});
