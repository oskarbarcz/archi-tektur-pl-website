import {FormData} from "../ValueObjects/FormData";

class FormDataSender {

    urlPath: string = '/api/catch-form';

    public send(formData: FormData) {

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
                    console.log('Prawidłowo wysłano wiadomość e-mail!');
                }
            })
            .catch(err => {
            });

        return true;
    }
}

export {FormDataSender};