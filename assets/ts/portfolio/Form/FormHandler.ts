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
        // listen for writing in textarea
        this._formElements.content.addEventListener('keydown', this.autoEnlargeTextarea);

        // listen for form submit
        this._formElements.submit.addEventListener('click', (event) => {
            event.preventDefault();
            this._submitForm();
        });

        // listen for going back to form
        this._formElements.backButton.addEventListener('click', (event) => {
            event.preventDefault();
            this._switchScreens();
            this._resetForm()
        });
    }

    /**
     * Enlarges textarea while writing
     * @param event
     */
    private autoEnlargeTextarea(event: Event) {
        if (event.target instanceof HTMLElement) {
            let el = event.target;
            setTimeout(function () {
                el.style.cssText = 'height:' + (el.scrollHeight + 5.1) + 'px';
            }, 0);
        }
    }

    /**
     * Handles form submitting
     * @private
     */
    private _submitForm() {
        const data = new FormData();
        data.name = this._formElements.name.value;
        data.email = this._formElements.email.value;
        data.reason = this._formElements.reason.value;
        data.content = this._formElements.content.value;

        // if data are valid, send
        if (!FormData.validate()) {
            // handle errors
        }
        let result = this._sender.send(data);
        if (result) {
            this._switchScreens()
        }

    }

    /**
     * Switches between screens
     * @private
     */
    private _switchScreens() {
        this._formElements.formScreen.classList.toggle('window_content--invisible');
        this._formElements.confirmScreen.classList.toggle('window_content--invisible');
    }

    /**
     * Resets form inputs
     * @private
     */
    private _resetForm() {
        this._formElements.name.value = '';
        this._formElements.email.value = '';
        this._formElements.reason.value = 'webpage';
        this._formElements.content.value = '';
    }

}

export {FormHandler};