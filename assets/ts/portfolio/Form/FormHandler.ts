import {FormViewManager} from "./FormViewManager";

class FormHandler {
    private _formViewManager: FormViewManager;

    public constructor(formViewManager: FormViewManager) {
        this._formViewManager = formViewManager;
    }

    public handleSubmit() {
    }

    public resetFields() {
    }
}

export {FormHandler};