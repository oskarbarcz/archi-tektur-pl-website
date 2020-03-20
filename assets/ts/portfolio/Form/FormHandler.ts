import {FormViewManager} from "./FormViewManager";
import {FormElements} from "./ValueObjects/FormElements";
import {FormDataTransformer} from "./ValueObjects/FormDataTransformer";
import {FormDataSender} from "./Services/FormDataSender";

class FormHandler {
    private readonly _formViewManager: FormViewManager;
    private readonly _formElements: FormElements;

    public constructor(manager: FormViewManager, formElements: FormElements) {
        this._formViewManager = manager;
        this._formElements = formElements;

        document.querySelector("#button-error-back").addEventListener('click', () => {
                this._formViewManager.showForm()
            }
        );

        document.querySelector("#button-confirm-back").addEventListener('click', () => {
                this.resetFields();
                this._formViewManager.showForm()
            }
        );

        formElements.submit.addEventListener('click', (event) => {
            event.preventDefault();
            this.handleSubmit();
        });
    }

    public handleSubmit() {
        //handle
        let data = FormDataTransformer.transform(this._formElements);
        let sender = new FormDataSender;
        sender.send(data, this._formViewManager);
    }

    public resetFields() {
        this._formElements.name.value = null;
        this._formElements.email.value = null;
        this._formElements.reason.value = this._formElements.reason.defaultValue;
        this._formElements.content.value = null;
    }
}

export {FormHandler};