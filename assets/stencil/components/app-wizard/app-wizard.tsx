import { Component, State, h } from '@stencil/core';

const TEMPLATES = [
  { name: 'Tabs', id: 'tabs' },
  { name: 'Menu', id: 'menu' },
  { name: 'List', id: 'list' },
];

const FRAMEWORKS = [
  { name: 'Angular', id: 'angular' },
  { name: 'React', id: 'react' },
  { name: 'Vue (beta)', id: 'vue' },
]

@Component({
  tag: 'ionic-app-wizard',
  styleUrl: 'app-wizard.scss',
  shadow: false
})
export class AppWizard {
  STEPS = [
    {
      name: 'Basics',
      id: 'basics'
    },
    {
      name: 'Configure',
      id: 'configure'
    },
    {
      name: 'Account',
      id: 'account'
    },
    {
      name: 'Finish',
      id: 'finish'
    }
  ]

  @State() step = 0;

  // Form state
  @State() appName = '';
  @State() framework = 'angular';
  @State() template = 'tabs';
  @State() appUrl = '';
  @State() bundleId = '';
  @State() authorEmail = '';
  @State() authorName = '';

  next = (e) => {
    e.preventDefault();
    this.step = this.step + 1 % this.STEPS.length;
  }

  handleChangeStep = (e) => {
    this.step = parseInt(e.detail.value, 10);
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
        <form class="form" onSubmit={this.next}>
          <div class="form-group" id="field-appname">
            <label htmlFor="id_appname">App name</label>
            <input type="text" id="id_appname" name="appname" value={this.appName} tabindex="1" required onInput={this.handleInput('appName')} />
            <div class="form-message form-message--small"></div>
          </div>
          <div class="form-group" id="field-appname">
            <label htmlFor="id_appname">Pick a template</label>
            <TemplateSwitcher
              value={this.template}
              onChange={tmpl => this.template = tmpl} />
          </div>
          <div class="form-group" id="field-appname">
            <label htmlFor="id_appname">JavaScript Framework</label>
            <FrameworkSwitcher
              value={this.framework}
              onChange={framework => this.framework = framework} />
          </div>
          <Button>Next</Button>
        </form>
      </div>
    )
  }

  renderConfigure() {
    return (
      <div>
        <hgroup>
          <h2>Configure {this.appName}</h2>
          <h4>This information will be necessary for deploying to App Stores</h4>
        </hgroup>
        <form class="form" onSubmit={this.next}>
          <div class="form-group" id="field-appurl">
            <label htmlFor="id_appurl">Company or App URL</label>
            <input type="text" id="id_appurl" name="appurl" value={this.appUrl} tabindex="1" required onInput={this.handleInput('appUrl')} />
            <div class="form-message form-message--small"></div>
          </div>
          <div class="form-group" id="field-bundleid">
            <label htmlFor="id_bundleid">Bundle ID</label>
            <input type="text" id="id_bundleid" name="bundleid" value={this.bundleId} tabindex="1" required onInput={this.handleInput('bundleId')} />
            <div class="form-message form-message--small"></div>
          </div>
          <div class="form-group" id="field-authoremail">
            <label htmlFor="id_authoremail">Author Email</label>
            <input type="text" id="id_authoremail" name="authoremail" value={this.authorEmail} tabindex="1" required onInput={this.handleInput('authorEmail')} />
            <div class="form-message form-message--small"></div>
          </div>
          <div class="form-group" id="field-authorname">
            <label htmlFor="id_authorname">Author Name</label>
            <input type="text" id="id_authorname" name="authorname" value={this.authorName} tabindex="1" required onInput={this.handleInput('authorName')}/>
            <div class="form-message form-message--small"></div>
          </div>
          <Button>Next</Button>
        </form>
      </div>
    )
  }

  renderAccount() {
    return null;
  }

  renderFinish() {
    return null;
  }

  renderForm() {
    switch (this.step) {
      case 0: return this.renderBasics();
      case 1: return this.renderConfigure();
      case 2: return this.renderAccount();
      case 4: return this.renderFinish();
    }
  }

  render() {
    return (
      <div id="app-wizard">
        <Switcher
          items={this.STEPS.slice(0, 3).map(s => s.name)}
          index={this.step}
          onChange={this.handleChangeStep}
          />
        {this.renderForm()}
      </div>
    );
  }
}

const Button = (_props, children) => (
  <button type="submit" id="submit" class="btn btn-block">{ children }</button>
);

const FrameworkSwitcher = ({ value, onChange }) => (
  <div class="frameworks">
  {FRAMEWORKS.map(f => (
    <div class={`framework ${value === f.id ? 'selected' : ''}`} onClick={() => onChange(f.id)}>
      <h5>{f.name}</h5>
    </div>
  ))}
  </div>
);

const TemplateSwitcher = ({ value, onChange }) => (
  <div class="templates">
  {TEMPLATES.map(f => (
    <div class={`template ${value === f.id ? 'selected' : ''}`} onClick={() => onChange(f.id)}>
      <h5>{f.name}</h5>
    </div>
  ))}
  </div>
);

const Switcher = ({ items, index, onChange }) => (
  <ion-segment class="switcher" value={index} onIonChange={onChange}>
    {items.map((item, i) => (
      <ion-segment-button key={item} value={i} class="switcher-button">{item}</ion-segment-button>
    ))}
  </ion-segment>
);