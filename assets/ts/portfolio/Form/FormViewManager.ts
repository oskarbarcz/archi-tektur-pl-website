import {Screens} from "./ValueObjects/Screens";

class FormViewManager {
    private _screens: Screens;

    public constructor(screens: Screens) {
        this._screens = screens;
    }
}

export {FormViewManager};