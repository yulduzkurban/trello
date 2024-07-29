import "./login.scss";
import logo from "../../../assets/imgs/logo.svg";

export class LoginView {
    selector = "app";

    constructor() {
        this.render();
    }

    render() {
        document.getElementById(this.selector).innerHTML = `
        <div class="login">
                <div class="login_content">
                <div class="content_header">
                    <div class="content_header-logo">
                        <img
                            src="${logo}"
                            class="content_header-logo-img"
                            alt="logo-img"
                            width="33"
                            height="33"
                        />

                        <span>TaskTracker</span>
                    </div>

                    <div class="login_form-info">
                        <h2 class="login_form-info-title">Log in to your account</h2>

                        <span class="login_form-info-subtitle"
                            >Welcome back! Please enter your details.</span
                        >
                    </div>
                </div>

                <form class="login_form">
                        <input
                            type="tel"
                            class="login_form-input"
                            placeholder="Phone Number"
                            required
                        />
                        <input
                            type="password"
                            class="login_form-input"
                            placeholder="Create password"
                            required
                        />
                        

                    <button type="submit" class="login_form-submit">
                        Sign in
                    </button>

                    <div class="login_form-footer">
                        <span>Don't have an account?</span>
                        <a href="#!">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
        `;
    }
}
