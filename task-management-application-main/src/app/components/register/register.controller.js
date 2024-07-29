import { RegisterView } from "./register.view";
import { RegisterModel } from "./register.model";

export class RegisterController {
    view = new RegisterView();
    register = new RegisterModel();

    constructor() {
        console.log("RegisterController initialized");
    }
}
