import { Component, Prop, Element, h, State } from '@stencil/core';


@Component({
  tag: 'hubspot-form',
  styleUrl: 'hubspot-form.scss',
  shadow: false
})
export class HubspotForm {
  @Prop() formId: string = 'default';
  @Element() el: HTMLElement;
  @State() blocked: boolean;
  private formRows: Array<Array<Object>> = [];

  componentWillLoad() {
    const script = document.createElement('script');
    script.onload = () => {
      window['hbspt'].forms.create({
        portalId: '3776657',
        formId: this.formId,
        target: 'hubspot-form'
      });
      ;
    };
    script.onerror = this.loadBackupForm;
    script.src = '//js.hsforms.net/forms/v2.js';

    this.el.appendChild(script);
  }

  loadBackupForm = async () => {
    const response = await fetch(`/api/v1/getform/${this.formId}`)
    const data = await response.json()

    this.formRows = data.formFieldGroups.map(row => row.fields );
    console.log(this.formRows);
    this.blocked = true;
  }

  render() {
    console.log('got here');
    return (
      <div>
        { this.blocked &&
        <form>
          {this.formRows.map(r => <HubspotFormRow props={r} />)}
        </form> }
      </div>
    );
  }
}
