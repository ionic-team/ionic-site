import { Component, State, h } from '@stencil/core';

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
            <TemplateSwitcher />
          </div>
          <div class="form-group" id="field-appname">
            <label htmlFor="id_appname">JavaScript Framework</label>
            <FrameworkSwitcher />
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

const FrameworkSwitcher = () => null;
const TemplateSwitcher = () => null;

const Switcher = ({ items, index, onChange }) => (
  <ion-segment class="switcher" value={index} onIonChange={onChange}>
    {items.map((item, i) => (
      <ion-segment-button value={i} class="switcher-button">{item}</ion-segment-button>
    ))}
  </ion-segment>
);