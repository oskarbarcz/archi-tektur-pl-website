import {FormDataSender} from "./FormDataSender";
import {FormData} from "./FormData";

class FormHandler {
    private _formElements;
    private _sender: FormDataSender;

    public constructor(formElements) {
        this._formElements = formElements;
        this._sender = new FormDataSender();

        this._init();
    }

    private _init() {
        // listen for form submit
        this._formElements.submit.addEventListener('click', (event) => {
            event.preventDefault();
            this._captureSubmit();
        });

        // listen for going back to form
        document.getElementById('button-backToForm').addEventListener('click', (event) => {
            event.preventDefault();
            this._switchScreens();
        });
    }

    private _captureSubmit() {
        const data = new FormData();
        data.name = this._formElements.name.value;
        data.email = this._formElements.email.value;
        data.reason = this._formElements.reason.value;
        data.content = this._formElements.content.value;

        // if data are valid, send
        if (!data.validate()) {
            // handle errors
        }
        let result = this._sender.send(data);
        if (result) {
            this._switchScreens()
        }

    }

    private _switchScreens() {
        this._formElements.formScreen.classList.toggle('window_content--invisible');
        this._formElements.confirmScreen.classList.toggle('window_content--invisible');
    }

}

export {FormHandler};