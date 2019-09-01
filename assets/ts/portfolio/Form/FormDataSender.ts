import {FormData} from "./FormData";

class FormDataSender {

    urlPath: string = 'http://localhost:8000/api/catch-form';

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
                console.log('Prawidłowo wysłano wiadomość e-mail!');
            })
            .catch(err => {
            });

        return true;
    }
}

export {FormDataSender};