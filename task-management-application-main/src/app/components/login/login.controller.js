import { LoginView } from "./login.view";
import { LoginModel } from "./login.model";

export class LoginController {
    view = new LoginView();
    register = new LoginModel();

    constructor() {
        console.log("LoginController initialized");
    }
}
