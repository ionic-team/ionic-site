import { Component, h, State, Prop, Event } from "@stencil/core";
import { SignupForm, signup, oauthAuthorize } from "../../util/auth";
import { FormErrors } from "../../forms";
import { trackClick } from "../../util/analytics";
import { EventEmitter } from "@ionic/core/dist/types/stencil.core";


@Component({
  tag: 'ionic-signup-form',
  styleUrl: 'signup-form.scss',
  shadow: false
})
export class IonicSignupForm {
  @Prop() source;

  // Fired when the signup has completed. Is only triggered if oauthRedirect is false
  @Event() signedUp: EventEmitter<SignupForm>;
  // Fired if the user opted to log-in instead and allowLogin is true
  @Event() loginInstead: EventEmitter<void>;

  // Google analytics event name
  @Prop() gaEventName;
  // Google analytics event label
  @Prop() gaEventLabel;
  // The hubspot event id on signup
  @Prop() hubspotEventId = '000006040735';
  // Whether to navigate away from the page to do the final oAuth authorization
  @Prop() oauthRedirect = true;
  // Whether to allow the user to login instead
  @Prop() allowLogin = false;
  // Whether to allow the user to use third-party signup
  @Prop() allowSocial = false;

  @State() submitting = false;

  @State() formErrorMap: { [key: string]: string };

  @State() form: SignupForm = {
    name: '',
    email: '',
    username: ''
  };


  clearErrors = () => this.formErrorMap = null;

  handleSocial = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const url = `/oauth/login/${id}` + window.location.search;
    window.location.assign(url);
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.clearErrors();

    this.submitting = true;

    if (this.gaEventName && this.gaEventLabel) {
      await trackClick(this.gaEventName, this.gaEventLabel);
    }

    try {
      const ret = await signup(this.form, this.source, this.hubspotEventId);

      if (ret.error) {
        this.handleErrors(ret.error);
        return;
      }

      // Trigger the authorize redirect
      if (this.oauthRedirect) {
        await oauthAuthorize();
      } else {
        this.signedUp.emit(this.form);
      }
    } catch (e) {
      this.formErrorMap = { '_form': `Unable to sign up: ${e.message}` };
    } finally {
      this.submitting = false;
    }
  }

  handleErrors = (error) => {
    if (!error.details && error.message) {
      this.formErrorMap = { _form: error.message }
      return;
    }

    this.formErrorMap = error.details.reduce((errors, field) => {
      errors[field.parameter] = field.errors[0]
      return errors;
    }, {});
  }

  inputChange = (name: string) => e => this.form = { ...this.form, [name]: e.target.value };

  componentWillLoad() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('name')) {
      this.form.name = params.get('name');
    }
    if (params.has('email')) {
      this.form.email = params.get('email');
    }
    if (params.has('username')) {
      this.form.username = params.get('username');
    }
  }

  render() {
    const { form, inputChange } = this;

    const disable = this.submitting;

    return (
      <form class="form" id="signup-form" role="form" onSubmit={this.handleSubmit} method="POST">
        {this.allowSocial ? (
          <div>
            <button type="button" id="github" class="btn btn-block" onClick={this.handleSocial}>
              <ion-icon name="logo-github" size="small"></ion-icon>
              Continue with GitHub
            </button>
            <button type="button" id="bitbucket" class="btn btn-block" onClick={this.handleSocial}>
              <ion-icon name="logo-bitbucket" size="small"></ion-icon>
              Continue with Bitbucket
            </button>
            <div class="form-group disclaimer">OR</div>
          </div>
        ) : null}
        { this.formErrorMap?._form ? (
          <FormErrors><span>{this.formErrorMap._form}</span></FormErrors>
        ) : null }
        <ui-floating-input
          type="text"
          label="Full name"
          name="name"
          inputTabIndex={1}
          required={true}
          value={form.name}
          disabled={disable}
          message={this.formErrorMap?.name}
          onChange={inputChange('name')} />
        <ui-floating-input
          type="email"
          label="Email"
          name="email"
          inputTabIndex={2}
          required={true}
          value={form.email}
          disabled={disable}
          message={this.formErrorMap?.email}
          onChange={inputChange('email')} />
        <ui-floating-input
          type="text"
          label="Username"
          name="username"
          inputTabIndex={3}
          required={true}
          value={form.username}
          disabled={disable}
          message={this.formErrorMap?.username}
          onChange={inputChange('username')} />
        <ui-floating-input
          type="password"
          label="Password"
          name="password"
          inputTabIndex={4}
          required={true}
          value={form.password}
          disabled={disable}
          message={this.formErrorMap?.password}
          onChange={inputChange('password')} />
        <button
          type="submit"
          id="submit"
          class="btn btn-block"
          disabled={disable}
          tabindex="5">Create profile</button>
        {this.allowLogin ? (
        <div class="well">
          Already have an account?
          <a href="#"
             class="text-link"
             onClick={e => { e.preventDefault(); this.loginInstead.emit() }}>
               Log in
          </a>
        </div>
        ) : null}
        <div class="form-group disclaimer">
          By signing up you agree to our <a target="_blank" href="/tos">Terms of Service</a> and <a target="_blank" href="/privacy">Privacy Policy</a>
        </div>
      </form>
    )
  }
}
