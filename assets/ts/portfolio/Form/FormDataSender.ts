import {FormData} from "./FormData";

class FormDataSender {
    public send(data: FormData) {
        console.log(data);
        return true;
    }
}

export {FormDataSender};