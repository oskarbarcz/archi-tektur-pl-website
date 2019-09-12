import {FormHandler} from "../FormHandler";
import {Screens} from "../ValueObjects/Screens";
import {FormViewManager} from "../FormViewManager";

class FormHandlerFactory {
    public static build() {
        let screens = new Screens();

        screens.FORM = document.querySelector('form--success');
        screens.ERROR = document.querySelector('form--success');
        screens.CONFIRM = document.querySelector('form--success');

        let formViewManager = new FormViewManager(screens);

        return new FormHandler(
            formViewManager
        );
    }
}

export {FormHandlerFactory};