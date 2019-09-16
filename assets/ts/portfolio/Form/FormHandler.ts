import {FormViewManager} from "./FormViewManager";
import {FormElements} from "./ValueObjects/FormElements";
import {FormDataTransformer} from "./ValueObjects/FormDataTransformer";

class FormHandler {
    private readonly _formViewManager: FormViewManager;
    private readonly _formElements: FormElements;

    public constructor(manager: FormViewManager, formElements: FormElements) {
        this._formViewManager = manager;
        this._formElements = formElements;

        formElements.submit.addEventListener('click', (event) => {
            event.preventDefault();
            this.handleSubmit();
        });
    }

    public handleSubmit() {
        //handle
        let data = FormDataTransformer.transform(this._formElements);
        console.log(data);
        this._formViewManager.showConfirmation();
    }

    public resetFields() {
    }
}

export {FormHandler};