import {Navigation} from "./portfolio/Navigation/Navigation";
import {SmoothScroll} from "./portfolio/Navigation/SmoothScroll";
import {GdprManager} from "./portfolio/GDPR/GdprManager";
import {FormHandlerFactory} from "./portfolio/Form/Services/FormHandlerFactory";

require('../sass/main.sass');


// handles navigation behavior
new Navigation(
    document.querySelector('.navigation_hamburger'),
    document.querySelector('.navigation_links')
);

new SmoothScroll(true);


new GdprManager(
    document.querySelector('.cookies'),
    document.querySelector('.cookies_close'),
);

let formHandler = FormHandlerFactory.build();
