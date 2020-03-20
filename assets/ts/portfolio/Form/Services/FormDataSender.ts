import {FormData} from "../ValueObjects/FormData";
import {FormViewManager} from "../FormViewManager";

class FormDataSender {

    urlPath: string = '/api/catch-form';

    public send(formData: FormData, viewManager: FormViewManager) {

        let params = {
            body: JSON.stringify(formData),
            method: "POST",
        };

        fetch(this.urlPath, params)
            .then(data => {
                return data;
            })
            .then(res => {
                if (res.status == 200) {
                    viewManager.showConfirmation()
                } else {
                    viewManager.showError();
                }
            })
            .catch(err => {
                viewManager.showError();
                console.log(err);
            });

        return true;
    }
}

export {FormDataSender};