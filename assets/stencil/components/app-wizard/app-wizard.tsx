import { Component, State, h, Listen } from '@stencil/core';

import { login, signup, SignupForm, LoginForm, getUser } from '../../util/auth';
import { trackEvent } from '../../util/hubspot';
import { getUtmParams } from '../../util/analytics';
import { ApiUser } from '../../declarations';

const TEMPLATES = [
  { name: 'Tabs', id: 'tabs' },
  { name: 'Menu', id: 'sidemenu' },
  { name: 'List', id: 'list' },
];

const FRAMEWORKS = [
  { name: 'React', id: 'react' },
  { name: 'Angular', id: 'angular' },
  { name: 'Vue (soon)', id: 'vue', soon: true },
]

const THEMES = [
  '#3880FF', // blue
  '#5260ff', // purple
  '#2dd36f', // green
  '#ffc409', // yellow
  '#eb445a', // red
  '#f4f5f8', // light
  '#92949c', // medium
  '#222428', // dark
]

declare var window: any;

@Component({
  tag: 'ionic-app-wizard',
  styleUrl: 'app-wizard.scss',
  shadow: false
})
export class AppWizard {
  STEPS = [
    {
      name: 'App Style',
      id: 'basics'
    },
    {
      name: 'Profile',
      id: 'profile'
    },
    {
      name: 'Finish',
      id: 'finish'
    }
  ]

  @State() step = 0;

  @State() showSignup = true;
  @State() signupErrors = null;
  @State() loginErrors = null;

  user: ApiUser;

  // The current appId from the server
  appId: string;

  // Color picker ref
  colorPickerRef: HTMLInputElement;

  // Form state
  @State() authenticating = false;
  @State() theme = THEMES[0];
  @State() email = '';
  @State() appName = '';
  @State() framework = 'react';
  @State() template = 'tabs';
  @State() bundleId = '';
  @State() appUrl = '';
  /*
  @State() authorEmail = 'max@ionic.io';
  @State() authorName = 'Max';
  */

  @State() loginForm: LoginForm = {
    email: ''
  };
  @State() signupForm: SignupForm = {
    name: '',
    email: '',
    username: ''
  };

  async componentDidLoad() {
    try {
      // Get the user to see if they are logged in
      const user = await getUser();
      this.user = user;
    } catch (e) {
    }
  }

  @Listen('popstate', { target: 'window' })
  handlePopState(e) {
    if (e.state) {
      const step = e.state.step;
      if (step) {
        this.step = step;
        return;
      }
    }

    this.step = 0;
  }

  setStep = (step) => {
    this.step = step;
    let hash = this.STEPS[this.step].id;
    history.pushState({ step: this.step }, null, `#${hash}`);
  }

  next = (e) => {
    e.preventDefault();
    this.setStep(this.step + 1 % this.STEPS.length);
  }

  basicsNext = (e) => {
    e.preventDefault();
    if (this.user) {
      this.finish();
    } else {
      this.next(e);
    }
  }

  login = async (e) => {
    e.preventDefault();

    try {
      this.authenticating = true;
      await login(this.loginForm.email, this.loginForm.password, 'start-wizard', 'Start Wizard Log In');
      this.email = this.loginForm.email;
      this.authenticating = false;
    } catch (e) {
      this.authenticating = false;
      this.loginErrors = e;
      return;
    }

    return this.finish();
  }

  signup = async (e) => {
    e.preventDefault();
    try {
      this.authenticating = true;
      await signup(this.signupForm, 'wizard-1');
      this.email = this.loginForm.email;
      this.authenticating = false;
    } catch (e) {
      console.error(e);
      this.authenticating = false;
      this.signupErrors = e;
      return;
    }

    return this.finish();
  }

  skipAuth = (_e) => {
    return this.finish();
  }

  finish = async () => {
    try {
      await this.save();

      trackEvent({
        id: 'Start Wizard Finish'
      });

      this.setStep(this.STEPS.length - 1);
    } catch (e) {
      alert('Unable to create app, please start over!');
      this.step = 0;
    }
  }

  save = async () => {
    try {
      const res = await fetch('/api/v1/wizard/create', {
        body: JSON.stringify({
          type: this.framework,
          'package-id': this.bundleId,
          tid: this.getHubspotId(),
          email: this.email,
          appId: this.appId,
          template: this.template,
          name: this.appName,
          theme: this.theme,
          utm: getUtmParams()
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();
      this.appId = data.appId;
      return data;
    } catch (e) {
      console.error('Unable to save app, server error:', e);
      return null;
    }
  }

  getApp = async () => {
    const res = await fetch(`/api/v1/wizard/app/${this.getHubspotId()}`);

    return await res.json();
  }

  getHubspotId = () => {
    return window.getCookie('hubspotutk');
  }

  handleChangeStep = (step) => {
    if (step !== this.step) {
      this.setStep(step);
    }
  }

  handlePickTheme = (_e) => {
    this.colorPickerRef && this.colorPickerRef.click();
  }

  handleInput = (fieldName) => e => {
    this[fieldName] = e.target.value;
  };

  renderBasics() {
    return (
      <div>
        <hgroup>
          <h2>Welcome to Ionic</h2>
          <h4>Let's start your first app</h4>
        </hgroup>
        <form class="form" onSubmit={this.basicsNext}>
          <input
            type="color"
            class="color-picker"
            ref={e => this.colorPickerRef = e}
            value={this.theme}
            onInput={(e: any) => this.theme = e.currentTarget.value }
            />
          <ui-floating-input
            label="App name"
            type="text"
            name="app-name"
            value={this.appName}
            tabindex={1}
            required={true}
            onChange={this.handleInput('appName')} />
          <label>Pick a theme</label>
          <ThemePicker
            value={this.theme}
            onChange={(theme) => this.theme = theme}
            onPick={this.handlePickTheme}
          />
          <div class="form-group" id="field-appname">
            <label>Pick a template</label>
            <TemplateSwitcher
              value={this.template}
              onChange={tmpl => this.template = tmpl} />
          </div>
          <div class="form-group" id="field-appname">
            <label>JavaScript Framework</label>
            <FrameworkSwitcher
              value={this.framework}
              onChange={framework => {
                if (framework !== 'vue') {
                  this.framework = framework;
                } 
              }} />
          </div>
          { this.user ? (
          <Button><span>Create App</span></Button>
          ) : (
          <Button><span>Continue <ion-icon name="ios-arrow-forward" /></span></Button>
          )}
        </form>
      </div>
    )
  }

  renderConfigure() {
    return (
      <div>
        <hgroup>
          <h2>Configure {this.appName}</h2>
          <h4>Some extra information needed to correctly build native apps</h4>
        </hgroup>
        <form class="form" onSubmit={this.next}>
          <div class="form-group" id="field-appurl">
            <label htmlFor="id_appurl">Company or App URL</label>
            <input type="text" id="id_appurl" name="appurl" value={this.appUrl} tabindex="1" onInput={this.handleInput('appUrl')} />
            <div class="form-message form-message--small"></div>
          </div>
          <div class="form-group" id="field-bundleid">
            <label htmlFor="id_bundleid">Bundle ID</label>
            <input type="text" id="id_bundleid" name="bundleid" value={this.bundleId} tabindex="1" onInput={this.handleInput('bundleId')} />
            <div class="form-message form-message--small"></div>
          </div>
          <Button><span>Next</span></Button>
        </form>
      </div>
    )
  }

  renderAccount() {
    if (this.email) {
      return (
        <div>
          <hgroup>
            <h2>Complete your profile</h2>
            <h4>Get access to the community, forum, and more</h4>
          </hgroup>
          <div class="logged-in">
            <p>
              Logged in as {this.email}
            </p>
            <form onSubmit={e => { e.preventDefault(); this.finish() }}>
              <Button><span>Finish</span></Button>
            </form>
          </div>
        </div>
      )
    }
    return (
      <div>
        <hgroup>
          <h2>Complete your profile</h2>
          <h4>Get access to the community, forum, and more</h4>
        </hgroup>
        { this.showSignup ? (
        <SignupForm
          handleSubmit={this.signup}
          disable={this.authenticating}
          errors={this.signupErrors}
          form={this.signupForm}
          loginInstead={() => this.showSignup = false}
          inputChange={(name) => e => this.signupForm[name] = e.target.value}
          />
        ) : (
        <LoginForm
          handleSubmit={this.login}
          disable={this.authenticating}
          errors={this.loginErrors}
          signupInstead={() => this.showSignup = true}
          form={this.loginForm}
          inputChange={(name) => e => this.loginForm[name] = e.target.value}
          />
        )}
        <div class="skip">
          <a href="#" onClick={this.skipAuth}>Skip this step &raquo;</a>
        </div>
      </div>
    );
  }

  renderFinish() {
    const instructions = this.appId ? `
npm install -g @ionic/cli
ionic start --start-id ${this.appId}
    ` : `
npm install -g @ionic/cli
ionic start
    `;
    return (
      <div class="finish">
        {this.appId ? (
        <hgroup>
          <span class="icon">🎉</span>
          <h2>You're all set</h2>
          <h4>
            Now, just run these commands:
          </h4>
        </hgroup>
        ) : (
        <hgroup>
          <h2>Error: Unable to save app</h2>
          <p>
            Unfortunately, we were unable to save your app configuration. To create a 
            new Ionic app, use the Ionic CLI.
            <br />
            We are looking into this issue, thanks for your understanding.
          </p>
        </hgroup>
        )}
        <div>
          <pre><code>{instructions}</code></pre>
        </div>
        <div class="info">
          <small>Note: this command will expire in one week.<br />
          Requires <code>@ionic/cli</code> 6.2.2 or above<br />
          Need help? See the full <a href="https://ionicframework.com/docs/installation/cli">installation guide</a></small>
        </div>
        <hr />
        <div class="social">
          <iframe src="https://ghbtns.com/github-btn.html?user=ionic-team&repo=ionic&type=star&count=true" frameborder="0" scrolling="0" width="100px" height="30px"></iframe>
          <a class="twitter-follow-button"
            data-show-screen-name="false"
            href="https://twitter.com/ionicframework">
          Follow @IonicFramework</a>
        </div>

        <twitter-script />
      </div>
    )
  }

  renderStep() {
    switch (this.step) {
      case 0: return this.renderBasics();
      //case 1: return this.renderConfigure();
      case 1: return this.renderAccount();
      case 2: return this.renderFinish();
    }
  }

  render() {
    return (
      <div id="app-wizard">
        <div class="wrapper">
          {this.step < 3 ? (
          <Switcher
            items={this.STEPS.slice(0, 3).map(s => s.name)}
            index={this.step}
            onChange={this.handleChangeStep}
            />
          ) : null}
          {this.renderStep()}
        </div>
        <div class="notice">
          Prefer to install manually? <br />
          <a href="https://ionicframework.com/getting-started">Follow our CLI installation guide</a>
        </div>
      </div>
    );
  }
}

const Button = (_props, children) => (
  <button type="submit" id="submit" class="btn btn-block">{ children }</button>
);

const ThemePicker = ({ value, onChange, onPick }) => {
  const themes = [
    ...THEMES,
    !THEMES.find(t => t === value) ? value : null
  ].filter(t => !!t);

  return (
    <div class="themes">
    {themes.map(t => (
      <div
        key={t}
        class={`theme ${value === t ? 'selected' : ''}`}
        style={{ backgroundColor: t }}
        onClick={() => onChange(t)}>
        { value === t ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L4 11L1 7.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        ) : null}
      </div>
    ))}
      <div
        class="theme pick-theme"
        onClick={() => onPick()}
        >
        <ion-icon name="md-color-filter" />
      </div>
    </div>
  )
}

const FrameworkSwitcher = ({ value, onChange }) => (
  <div class="frameworks">
  {FRAMEWORKS.map(f => (
    <div
      key={f.id}
      class={`framework ${value === f.id ? 'selected' : ''}${f.soon ? ' soon' : ''}`}
      onClick={() => onChange(f.id)}>
      <div class={`framework-logo framework-${f.id}`} />
      <h5>{f.name}</h5>
    </div>
  ))}
  </div>
);

const TemplateSwitcher = ({ value, onChange }) => (
  <div class="templates">
  {TEMPLATES.map(f => (
    <div
      key={f.id}
      class={`template ${value === f.id ? 'selected' : ''}`}
      onClick={() => onChange(f.id)}>
      <div class={`template-image template-${f.id}`} />
      <h5>{f.name}</h5>
    </div>
  ))}
  </div>
);

const Switcher = ({ items, index, onChange }) => {
  return (
  <div class="switcher">
    {items.map((item, i) => {
      const completed = i < index;
      const inactive = i > index;
      return [
        <div
          key={item}
          class={`switcher-button${ completed ? ' switcher-button-completed' : ''}${ inactive ? ' switcher-button-inactive' : ''}`}
          onClick={_ => onChange(i)}
          >
          {completed ? (
            <ion-icon name="checkmark-circle" />
          ) : (
            <div class="empty-circle" />
          )}
          {item}
        </div>,
        i < items.length - 1 ? <div class="switcher-separator" /> : null
      ]
    })}
  </div>
  )
};

interface SignupFormProps {
  form: SignupForm;
  handleSubmit: (e) => Promise<void>;
  errors: any;
  disable: boolean;
  loginInstead: () => void;
  inputChange: (name: string) => (e: any) => void;
}
const SignupForm = ({ form, handleSubmit, errors, disable, loginInstead, inputChange }: SignupFormProps) => (
  <form class="form" id="signup-form" role="form" onSubmit={handleSubmit} method="POST">
    { errors ? (
    <FormErrors>{errors.message}</FormErrors>
    ) : null }
    <ui-floating-input
      type="text"
      label="Full name"
      name="name"
      inputTabIndex={1}
      required={true}
      value={form.name}
      disabled={disable}
      onChange={inputChange('name')} />
    <ui-floating-input
      type="email"
      label="Email"
      name="email"
      inputTabIndex={2}
      required={true}
      value={form.email}
      disabled={disable}
      onChange={inputChange('email')} />
    <ui-floating-input
      type="text"
      label="Username"
      name="username"
      inputTabIndex={3}
      required={true}
      value={form.username}
      disabled={disable}
      onChange={inputChange('username')} />
    <ui-floating-input
      type="password"
      label="Password"
      name="password"
      inputTabIndex={4}
      required={true}
      value={form.password}
      disabled={disable}
      onChange={inputChange('password')} />
    <button
      type="submit"
      id="submit"
      class="btn btn-block"
      disabled={disable}
      tabindex="5">Create profile</button>
    <div class="well">
      Already have an account? <a href="#" class="text-link" onClick={e => { e.preventDefault(); loginInstead() }}>Log in</a>
    </div>
    <div class="form-group disclaimer">
      By signing up you agree to our <a target="_blank" href="/tos">Terms of Service</a> and <a target="_blank" href="/privacy">Privacy Policy</a>
    </div>
  </form>
)

interface LoginFormProps {
  form: LoginForm;
  handleSubmit: (e) => Promise<void>;
  errors: any;
  disable: boolean;
  signupInstead: () => void;
  inputChange: (name: string) => (e: any) => void;
}
const LoginForm = ({ form, disable, handleSubmit, errors, signupInstead, inputChange }: LoginFormProps) => (
  <form class="form" id="login-form" role="form" onSubmit={handleSubmit} method="POST">
    { errors ? (
    <div class="errorlist">
      <FormErrors>{errors.message}</FormErrors>
    </div>
    ) : null }
    <ui-floating-input
      type="email"
      label="Email"
      name="email"
      autocomplete="username"
      inputTabIndex={1}
      required={true}
      value={form.email}
      disabled={disable}
      onChange={inputChange('email')} />
    <ui-floating-input
      type="password"
      label="Password"
      name="password"
      autocomplete="current-password"
      inputTabIndex={2}
      required={true}
      value={form.password}
      disabled={disable}
      onChange={inputChange('password')} />
    {/*
    <div class="forgot-password">
      <a target="_blank" href="https://dashboard.ionicframework.com/reset-password" title="Reset Password?">Forgot password?</a>
    </div>
    */}
    <button
      type="submit"
      id="submit"
      class="btn btn-block"
      disabled={disable}
      tabindex="3">
        Log in
    </button>
    <div class="well">
      Don't have an account? <a class="text-link" href="#" onClick={(e) => { e.preventDefault(); signupInstead() }}>Sign up</a>
    </div>
  </form>
)

const FormErrors = (_props, children) => (
  <div class="form-errors">{children}</div>
);
