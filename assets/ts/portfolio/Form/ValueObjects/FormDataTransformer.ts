import {FormElements} from "./FormElements";
import {FormData} from "./FormData";

class FormDataTransformer {
    public static transform(formElements: FormElements) {
        let formData = new FormData();
        formData.name = formElements.name.value;
        formData.email = formElements.email.value;
        formData.reason = formElements.reason.value;
        formData.content = formElements.content.value;
        return formData;
    }
}

export {FormDataTransformer};