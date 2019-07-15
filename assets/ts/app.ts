require('../sass/main.sass');

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
let links: HTMLElement = document.querySelector('.navigation_links');
let openedClass = 'navigation_links--opened';

hamburger.addEventListener('click', (event) => {
    if (!links.classList.contains(openedClass)) {
        // if closed
        links.classList.add(openedClass);
        iconSwitch(event, false);
        window.addEventListener('click', closeOnClickOut)
    } else {
        // if opened
        window.removeEventListener('click', closeOnClickOut);
        iconSwitch(event, true);
        links.classList.remove(openedClass);
    }
});

let closeOnClickOut = (event) => {
    if (event.target != links && event.target != hamburger) {
        links.classList.remove(openedClass);
    }
};

let iconSwitch = (event, toClose) => {
    let iconClose = 'fa-times';
    let iconOpen = 'fa-bars';
    toClose ? event.target.classList.replace(iconClose, iconOpen) : event.target.classList.replace(iconOpen, iconClose);
};