import {Navigation} from "./portfolio/Navigation/Navigation";
import {FormHandler} from "./portfolio/Form/FormHandler";
import {SmoothScroll} from "./portfolio/Navigation/SmoothScroll";
import {GdprManager} from "./portfolio/GDPR/GdprManager";

require('../sass/main.sass');

// document.querySelector('.form_input--textarea').addEventListener('keydown', autosize);

new FormHandler({
    name: document.querySelector('#field-name'),
    email: document.querySelector('#field-email'),
    reason: document.querySelector('#field-reason'),
    content: document.querySelector('#field-content'),
    submit: document.querySelector('#button-submit'),
    formScreen: document.querySelector('#window-form'),
    confirmScreen: document.querySelector('#window-confirmation'),
    backButton: document.querySelector('#button-backToForm')
});

// handles navigation behavior
new Navigation(
    document.querySelector('.navigation_hamburger'),
    document.querySelector('.navigation_links')
);

new SmoothScroll(true);

new GdprManager(
    document.querySelector('#gdpr-info'),
    document.querySelector('.cookies_close'),
);