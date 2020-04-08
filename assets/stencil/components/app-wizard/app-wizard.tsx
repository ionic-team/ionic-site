import { Component, State, h, Listen, Element } from '@stencil/core';

import { login, SignupForm, LoginForm, getUser } from '../../util/auth';
import { trackEvent } from '../../util/hubspot';
import { getUtmParams } from '../../util/analytics';
import { ApiUser } from '../../declarations';

import { Emoji } from '../emoji-picker/emoji-picker';
import { generateAppIconForThemeAndEmoji, generateAppIconForThemeAndImage } from '../../util/app-icon';

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

// const apiUrl = path => `${path}`;
const apiUrl = path => `https://wizard-api.ionicframework.com${path}`;

const emojiSvg = image => `https://twemoji.maxcdn.com/v/latest/svg/${image}.svg`;

@Component({
  tag: 'ionic-app-wizard',
  styleUrl: 'app-wizard.scss',
  shadow: false
})
export class AppWizard {
  @Element() el;

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

  STEP_BASICS = 0;
  STEP_PROFILE = 1;
  STEP_FINISH = 2;

  @State() step = this.STEP_BASICS;

  @State() showSignup = true;
  @State() loginErrors = null;
  @State() creatingApp = false;

  user: ApiUser;

  // The current appId from the server
  appId: string;

  // Color picker ref
  colorPickerRef: HTMLInputElement;

  // Reference to the basic form for validation
  submitButtonWrapRef: HTMLDivElement;

  getRandomEmoji(): Emoji {
    const emoji = [
      '1f60b', // yum
      '1f601', // grin
      '1f60e', // shades
      '1f61c', //  
      '1f929', // starstruck
      '1f604', // smile
      '1f603', // smiley
      '1f973', // party
    ].map(i => ({
      image: i
    }));

    return emoji[Math.floor(Math.random() * emoji.length)];
  }

  @State() selectedEmoji: Emoji = this.getRandomEmoji();
  @State() showEmojiPicker = false;
  @State() emojiPickerEvent: MouseEvent = null;
  @State() isAppIconDropping = false;
  @State() appIconUploadError = '';

  // Form state
  @State() authenticating = false;
  @State() theme = THEMES[0];
  @State() email = '';
  @State() appName = '';
  @State() framework = 'react';
  @State() template = 'tabs';
  @State() bundleId = '';
  @State() appUrl = '';
  @State() appIcon: string;
  /*
  @State() authorEmail = 'max@ionic.io';
  @State() authorName = 'Max';
  */

  @State() loginForm: LoginForm = {
    email: ''
  };

  async componentDidLoad() {
    try {
      // Get the user to see if they are logged in
      const user = await getUser();
      this.user = user;
      this.setStep(this.STEP_BASICS);
    } catch (e) {
    }
  }

  @Listen('popstate', { target: 'window' })
  handlePopState(e) {
    if (e.state) {
      const step = e.state.step;
      this.step = step || 0;
    }
  }

  setStep = (step) => {
    this.step = step;
    let hash = this.STEPS[this.step].id;
    history.pushState({ step: this.step }, null, `#${hash}`);
  }

  next = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setStep(this.step + 1 % this.STEPS.length);
  }

  basicsNext = (e?) => {
    e?.preventDefault();
    e?.stopPropagation();

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

  handleSignup = (e: CustomEvent<SignupForm>) => {
    const form = e.detail;
    this.email = form.email;
    this.finish();
  }

  skipAuth = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return this.finish();
  }

  finish = async () => {
    try {
      this.setStep(this.STEPS.length - 1);

      this.creatingApp = true;

      const created = await this.save();

      if (!created) {
        alert('Unable to create app, please ping us on Twitter and try the manual install below.');
        this.setStep(this.STEP_BASICS);
        return;
      }

      trackEvent({
        id: 'Start Wizard Finish'
      });
    } catch (e) {
      try {
        const data = JSON.parse(e.message);
        if (data.type === 'too-large') {
          alert('Unable to create app, your icon image is too large. Try a smaller filesize or add it manually later');
        } else {
          alert('Unable to create app, please ping us on Twitter and try the manual install below.');
        }
      } catch(e) {
        alert('Unable to create app, please ping us on Twitter and try the manual install below.');
      }
    } finally {
      this.creatingApp = false;
    }
  }

  save = async () => {
    let iconImage;
    let splash;
    if (!this.appIcon && this.selectedEmoji) {
      const emoji = this.selectedEmoji;
      let emojiImage = emoji.image.replace('.png', '');
      const emojiSplit = emojiImage.split('-');
      let emojiImageName = emojiImage;
      if (emojiSplit.length === 2 && emojiSplit[1] === 'fe0f') {
        emojiImageName = emojiImage.replace('-fe0f', '');
      }
      const emojiImageUrl = emojiSvg(emojiImageName);
      const renderedAppIcon = await generateAppIconForThemeAndEmoji(this.theme, emojiImageUrl, 1024, 768);
      const renderedSplashScreen = await generateAppIconForThemeAndEmoji(this.theme, emojiImageUrl, 2732, 512);
      iconImage = renderedAppIcon;
      splash = renderedSplashScreen;
    } else {
      const renderedSplashScreen = await generateAppIconForThemeAndImage(this.theme, this.appIcon, 2732, 512);
      iconImage = this.appIcon;
      splash = renderedSplashScreen;
    }

    const res = await fetch(apiUrl('/api/v1/wizard/create'), {
      body: JSON.stringify({
        type: this.framework,
        'package-id': this.bundleId,
        tid: this.getHubspotId(),
        email: this.email,
        appId: this.appId,
        template: this.template,
        name: this.appName,
        theme: this.theme,
        appSplash: splash,
        appIcon: iconImage,
        utm: getUtmParams()
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (res.status === 413) {
      throw new Error(JSON.stringify({ type: 'too-large' }));
    }

    if (res.status !== 200) {
      throw new Error(JSON.stringify({ type: 'error' }));
    }

    const data = await res.json();
    this.appId = data.appId;
    return data;
  }

  getApp = async () => {
    const res = await fetch(apiUrl(`/api/v1/wizard/app/${this.getHubspotId()}`));

    return await res.json();
  }

  getHubspotId = () => {
    return window.getCookie('hubspotutk');
  }

  handleChangeStep = (step) => {
    if (step === this.STEP_PROFILE && this.step === this.STEP_BASICS) {
      this.submitButtonWrapRef?.querySelector('button').click();
      return;
    }
    if (step !== this.step) {
      this.setStep(step);
    }
  }

  handlePickEmoji = (e) => {
    this.selectedEmoji = e.detail as Emoji;
    this.appIcon = null;
    this.showEmojiPicker = false;
  }

  handlePickTheme = (_e) => {
    const colorPicker = this.el.querySelector('input[type="color"]');

    colorPicker && colorPicker.click();
  }

  handleInput = (fieldName) => e => {
    this[fieldName] = e.target.value;
  };

  setAppIconFromFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        if (img.width < 1024 || img.height < 1024) {
          alert('Icon size must be at least 1024x1024');
        } else {
          this.selectedEmoji = null;
          this.appIcon = reader.result as string;
        }
      }
    }
    reader.onerror = () => {
      this.appIconUploadError = 'Unable to read file';
    }
  }

  handleAppIconChoose = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      if (file.size > 1024 * 800) {
        this.appIconUploadError = 'Image must be < 800KB';
        return;
      }

      this.setAppIconFromFile(file);
    }
  }

  handleAppIconDragOver = (e: DragEvent) => {
    this.isAppIconDropping = true;
    e.dataTransfer.dropEffect = 'copy';
    e.preventDefault();
  }

  handleAppIconDragOut = (_e) => {
    this.isAppIconDropping = false;
  }

  handleAppIconDrop = (e: DragEvent) => {
    e.preventDefault();
    this.isAppIconDropping = false;
    if (e.dataTransfer.files) {
      const file = e.dataTransfer.files[0];

      if (file.size > 1024 * 800) {
        this.appIconUploadError = 'Image must be < 800KB';
        return;
      }

      this.setAppIconFromFile(file);
    }
  }

  renderBasics() {
    const { showEmojiPicker } = this;

    return (
      <div>
        <hgroup>
          <h2>Welcome to Ionic</h2>
          <h4>Let's start your first app</h4>
        </hgroup>
        <form class="form" onSubmit={this.basicsNext}>
          <ui-floating-input
            label="App name"
            type="text"
            name="app-name"
            value={this.appName}
            tabindex={1}
            required={true}
            onChange={this.handleInput('appName')} />
          <div
            class={`app-icon-group`}>
            <div class="app-icon-pick">
              <label>
                Pick an icon
                <ui-tip
                  text="An icon for your app. You can easily change this and add your own image later!"
                  position="top">
                  <InfoCircle />
                </ui-tip>
              </label>
              <AppIcon
                img={this.appIcon}
                emoji={this.selectedEmoji}
                theme={this.theme}
                onChooseEmoji={(e) => { this.showEmojiPicker = true; this.emojiPickerEvent = e }}
                onChooseFile={this.handleAppIconChoose}
                isDropping={this.isAppIconDropping}
                onDragOver={this.handleAppIconDragOver}
                onDragExit={this.handleAppIconDragOut}
                onDrop={this.handleAppIconDrop}
                 />
            </div>
            <ionic-emoji-picker
              open={showEmojiPicker}
              openEvent={this.emojiPickerEvent}
              onEmojiPick={this.handlePickEmoji}
              onClosed={() => this.showEmojiPicker = false} />
            <div class="app-icon-theme">
              <label>Pick a theme color</label>
              <ui-tip
                text="The primary brand color for your app"
                position="top">
                <InfoCircle />
              </ui-tip>
              <ThemeSwitcher
                value={this.theme}
                onChange={(theme) => this.theme = theme}
                onPick={this.handlePickTheme}
              />
            </div>
          </div>
          <div class="form-group">
            <label>
              Pick a layout template
              <ui-tip
                text="Choose a tabs, menu, or list-style layout"
                position="top">
                <InfoCircle />
              </ui-tip>
            </label>
            <TemplateSwitcher
              value={this.template}
              onChange={tmpl => this.template = tmpl} />
          </div>
          <div class="form-group" id="field-appname">
            <label>
              Pick a JavaScript Framework
              <ui-tip
                text="React is beginner friendly, Angular is popular for enterprise"
                position="top">
                <InfoCircle />
              </ui-tip>
            </label>
            <FrameworkSwitcher
              value={this.framework}
              onChange={framework => {
                if (framework !== 'vue') {
                  this.framework = framework;
                } 
              }} />
          </div>
          <div ref={e => this.submitButtonWrapRef = e}>
            <Button>
            { this.user ? (
              <span>Create App</span>
            ) : (
              <span>Continue <ion-icon name="ios-arrow-forward" /></span>
            )}
            </Button>
          </div>
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

  renderProfile() {
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
          <ionic-signup-form
            source="wizard-1"
            ga-event-name="Wizard Signup"
            ga-event-label="btn-wizard-signup-submit"
            hubspot-event-id="000006040735"
            id="signup-form"
            allow-login="true"
            oauth-redirect="false"
            onSignedUp={this.handleSignup}
            onLoginInstead={() => this.showSignup = false}
          ></ionic-signup-form>
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
npm install -g @ionic/cli cordova-res
ionic start --start-id ${this.appId}
    ` : `
npm install -g @ionic/cli
ionic start
    `;

    const creating = this.creatingApp;

    return (
      <div class="finish">
        <hgroup>
          <span class="icon">🎉</span>
          <h2>You're all set</h2>
          <h4>
            Run this to see your amazing new app:
          </h4>
        </hgroup>
        {creating ? (
        <div class="creating-app">
          <pre><code>Creating app <ion-spinner /></code></pre>
        </div>
        ) : (
        <div>
          <pre><code>{instructions}</code></pre>
        </div>
        )}
        <div class="info">
          Requires <b><code>@ionic/cli</code> 6.5.0</b> or above<br />
          Need help? See the full <a href="https://ionicframework.com/docs/installation/cli">installation guide</a>
        </div>
        <div class="share">
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            class="twitter-share-button"
            data-size="large"
            data-text="Check out the new mobile App Wizard from @ionicframework"
            data-url="https://ionicframework.com/start"
            data-via="ionicframework"
            data-related="ionicframework,maxlynch"
            data-show-count="false">Tweet</a>
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
      case this.STEP_BASICS: return this.renderBasics();
      //case 1: return this.renderConfigure();
      case this.STEP_PROFILE: return this.renderProfile();
      case this.STEP_FINISH: return this.renderFinish();
    }
  }

  render() {
    return (
      <div id="app-wizard">
        <div class="wrapper">
          {this.step < 2 ? (
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
  <button type="submit" class="btn btn-block">{ children }</button>
);

const AppIcon = ({ img, emoji, theme, onChooseEmoji, isDropping,
                   onChooseFile, onDragOver, onDragExit, onDrop }) => {
  const bgColor = img ? 'transparent': theme;

  let bgImage;
  if (emoji) {
    let emojiImage = emoji.image.replace('.png', '');
    const imageSplit = emojiImage.split('-');

    // For some reason we need to remove fe0f from images that just have it
    // as blah-fe0f since those aren't named as such in the twemoji database
    if (imageSplit.length == 2 && imageSplit[1] === 'fe0f') {
      emojiImage = emojiImage.replace('-fe0f', '');
    }
    bgImage = `url('${emojiSvg(emojiImage)}')`;
  } else {
    bgImage = `url(${img})`;
  }

  return (
    <div class={`app-icon-wrapper${isDropping ? ` app-icon-dropping` : ''}`}
         onDragOver={onDragOver}
         onDragExit={onDragExit}
         onDrop={onDrop}>
      <div class="app-icon-dropping-wrapper">
        <div class="app-icon-dropping-icon">
          <ion-icon name="create" />
        </div>
      </div>
      <div
        class="app-icon"
        style={{ backgroundColor: bgColor }}>
        <div
          class={`app-icon-image${ img ? ' app-icon-image-uploaded' : ''}`}
          style={{ backgroundImage: bgImage }} />
        <div class="app-icon-hover">
          <div class="app-icon-hover-icons">
            <div class="icon" onClick={onChooseEmoji} title="Pick emoji">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.19995 16.3C8.19995 16.3 9.99995 18.7 13 18.7C16 18.7 17.8 16.3 17.8 16.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.5 11.2H8.512" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 11.2H17.512" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <div class="icon" onClick={() => (document.querySelector('#file-app-icon') as HTMLInputElement).click()} title="Pick file">
              <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 23H1"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 1V19"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 9L9 1L1 9"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <input type="file" id="file-app-icon" accept="image/png" onChange={onChooseFile} />
        </div>
      </div>
    </div>
  )
};

const ThemeSwitcher = ({ value, onChange, onPick }) => {
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
            <path d="M11 1L4 11L1 7.25"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        ) : null}
      </div>
    ))}
      <div
        class="theme pick-theme"
        onClick={() => onPick()}
        >
        <ion-icon name="md-color-filter" />
        <input
          type="color"
          class="color-picker"
          value={value}
          onInput={(e: any) => onChange(e.currentTarget.value) }
          />
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
      const completed = i < index || index === items.length - 1;
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

const InfoCircle = () => (
  <ion-icon class="info-circle" name="information-circle-outline" />
);
