import { Component, h, State } from "@stencil/core";
import { login, LoginForm, oauthAuthorize } from "../../util/auth";
import { FormErrors } from "../../forms";

const SSO_ID_KEY = "_ionic_sso_id";

@Component({
  tag: "ionic-login-form",
  styleUrl: "ionic-login-form.scss",
  shadow: false,
})
export class IonicLoginForm {
  @State() passwordLogin = false;
  @State() buttonText = "Continue ➔";
  @State() formErrorMap: { [key: string]: string };
  @State() form: LoginForm = {
    email: "",
    password: "",
  };

  async handleLogin() {
    window.localStorage.removeItem(SSO_ID_KEY);

    try {
      await login(this.form.email, this.form.password, "framework-login");
      oauthAuthorize();
    } catch (e) {
      this.formErrorMap = { _form: e.message };
    }
  }

  async getAuthConnection() {
    const emailOrSlug = this.form.email;

    // TODO
    // const state = Object.fromEntries(this.params.entries());
    const state = {};

    const url = new URL(`${window.API_URL}/auth/connections/${encodeURIComponent(emailOrSlug)}`);
    url.searchParams.set("state", JSON.stringify(state));

    try {
      const response = await fetch(url.href);
      const result = await response.json();
      if (result.error || !result.data.url) {
        this.showPassword();
        return;
      }
      const _hsq = (window._hsq = window._hsq || []);
      _hsq.push(["identify", { email: emailOrSlug }]);
      _hsq.push(["trackEvent", { id: "000006636951" }]);

      window.localStorage.setItem(SSO_ID_KEY, emailOrSlug);
      window.location.assign(result.data.url);
    } catch (e) {
      this.formErrorMap = { _form: e.message };
    }
  }

  showPassword() {
    const form = document.getElementById("login-form");
    form.classList.remove("hide-password");
    // TODO:
    // this.password.focus();
    // this.password.required = true;
    // this.password.tabIndex = 2;
    this.passwordLogin = true;
    this.buttonText = "Log in";
  }

  inputChange = (name: string) => (e) => (this.form = { ...this.form, [name]: e.target.value });

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.passwordLogin) {
      await this.handleLogin();
    } else {
      await this.getAuthConnection();
    }
  };

  componentWillLoad() {
    const params = new URLSearchParams(window.location.search);
    if (params.has("error_description")) {
      this.formErrorMap = { _form: params.get("error_description") };
    }

    const ssoId = window.localStorage.getItem(SSO_ID_KEY);
    if (ssoId) {
      this.form.email = ssoId;
    }
    // TODO:
    // this.email.focus({ preventScroll: true });
  }

  render() {
    const { form, inputChange } = this;

    const disable = false;

    return (
      <section>
        {this.formErrorMap?._form ? (
          <FormErrors>
            {this.formErrorMap._form}
          </FormErrors>
        ) : null}
        <ionic-social-auth></ionic-social-auth>
        <form class="hide-password" id="login-form" role="form" onSubmit={this.handleSubmit}>
          <ui-floating-input
            type="text"
            label="Email or organization ID"
            name="email"
            inputTabIndex={1}
            required={true}
            value={form.email}
            disabled={disable}
            message={this.formErrorMap?.email}
            autocomplete="username"
            onChange={inputChange("email")}
          />
          <div class="form-group" id="field-password">
            <ui-floating-input
              type="password"
              label="Password"
              name="password"
              autocomplete="current-password"
              inputTabIndex={-1}
              required={false}
              value={form.password}
              disabled={disable}
              message={this.formErrorMap?.password}
              onChange={inputChange("password")}
            />
            <div class="forgot-password">
              <a href={`${window.DASHBOARD_URL}/reset-password`} title="Reset Password?">
                Forgot password?
              </a>
            </div>
          </div>
          <button type="submit" id="submit" class="btn btn-block" tabindex="3">
            {this.buttonText}
          </button>
        </form>
        <div class="well">
          Don’t have an account?{" "}
          <a href={`/signup${window.location.search}`} class="text-link">
            Sign up
          </a>
        </div>
      </section>
    );
  }
}
