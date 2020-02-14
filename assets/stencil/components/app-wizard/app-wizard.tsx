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
  @State() framework = 'angular';
  @State() template = 'tabs';

  handleChangeStep = (e) => {
    this.step = parseInt(e.detail.value, 10);
  }

  renderBasics() {
    return (
      <div>
        <hgroup>
          <h2>Welcome to Ionic</h2>
          <h4>Let's start your first app</h4>
        </hgroup>
        <form class="form">
          <div class="form-group" id="field-appname">
            <label htmlFor="id_appname">App name</label>
            <input type="text" id="id_appname" name="appname" tabindex="1" required />
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
          <h2>Welcome to Ionic</h2>
          <h4>Let's start your first app</h4>
        </hgroup>
        <form>
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