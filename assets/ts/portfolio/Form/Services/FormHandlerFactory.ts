import {FormHandler} from "../FormHandler";
import {Screens} from "../ValueObjects/Screens";
import {FormViewManager} from "../FormViewManager";
import {FormElements} from "../ValueObjects/FormElements";

class FormHandlerFactory {
    public static build() {
        let screens = this.buildScreens();
        let formElements = this.buildFormElements();

        let formViewManager = new FormViewManager(screens);

        return new FormHandler(formViewManager, formElements);
    }

    private static buildScreens() {
        let screens = new Screens();

        screens.form = document.querySelector('#window-form');
        screens.error = document.querySelector('#window-error');
        screens.confirm = document.querySelector('#window-confirm');

        return screens;
    }

    private static buildFormElements() {
        let formElements = new FormElements();

        formElements.form = document.querySelector('.form');
        formElements.name = document.querySelector('#field-name');
        formElements.email = document.querySelector('#field-email');
        formElements.reason = document.querySelector('#field-reason');
        formElements.content = document.querySelector('#field-content');
        formElements.submit = document.querySelector('#button-submit');

        return formElements;
    }
}

export {FormHandlerFactory};