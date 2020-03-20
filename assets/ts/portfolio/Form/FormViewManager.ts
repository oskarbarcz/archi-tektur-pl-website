import {Screens} from "./ValueObjects/Screens";

class FormViewManager {
    private _screens: Screens;

    public constructor(screens: Screens) {
        this._screens = screens;
        this.showForm();
    }

    public showForm() {
        this._unshowAll();
        this._screens.form.classList.add('window_content--visible');
    }

    public showError() {
        this._unshowAll();
        this._screens.error.classList.add('window_content--visible');
    }

    public showConfirmation() {
        this._unshowAll();
        this._screens.confirm.classList.add('window_content--visible');
    }

    private _unshowAll() {
        this._screens.form.classList.remove('window_content--visible');
        this._screens.error.classList.remove('window_content--visible');
        this._screens.confirm.classList.remove('window_content--visible');
    }
}

export {FormViewManager};