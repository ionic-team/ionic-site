import { Component, h, State, Prop } from "@stencil/core";
import { SignupForm, signup, oauthAuthorize } from "../../util/auth";
import { FormErrors } from "../../forms";
import { trackClick } from "../../util/analytics";


@Component({
  tag: 'ionic-signup-form',
  styleUrl: 'signup-form.scss',
  shadow: false
})
export class IonicSignupForm {
  @Prop() source;

  @Prop() onFormSubmit: (e) => Promise<void>;
  @Prop() onLoginInstead: () => void;
  @Prop() onInputChange: (name: string) => (e: any) => void;

  @Prop() gaEventName;
  @Prop() gaEventLabel;

  @State() submitting = false;

  @State() formErrorMap: { [key: string]: string };

  @State() form: SignupForm = {
    name: '',
    email: '',
    username: ''
  };


  clearErrors = () => this.formErrorMap = null;

  handleSubmit = async (e) => {
    e.preventDefault();

    this.clearErrors();

    this.submitting = true;

    if (this.gaEventName && this.gaEventLabel) {
      await trackClick(this.gaEventName, this.gaEventLabel);
    }

    try {
      const ret = await signup(this.form, this.source, '000006040735');

      if (ret.error) {
        this.handleErrors(ret.error);
        return;
      }

      await oauthAuthorize();
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

  inputChange = (name: string) => e => this.form[name] = e.target.value;

  render() {
    const { form, inputChange, onLoginInstead } = this;

    const disable = this.submitting;

    return (
      <form class="form" id="signup-form" role="form" onSubmit={this.handleSubmit} method="POST">
        { this.formErrorMap?._form ? (
          <FormErrors>{this.formErrorMap._form}</FormErrors>
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
        <div class="well">
          Already have an account? <a href="#" class="text-link" onClick={e => { e.preventDefault(); onLoginInstead() }}>Log in</a>
        </div>
        <div class="form-group disclaimer">
          By signing up you agree to our <a target="_blank" href="/tos">Terms of Service</a> and <a target="_blank" href="/privacy">Privacy Policy</a>
        </div>
      </form>
    )
  }
}