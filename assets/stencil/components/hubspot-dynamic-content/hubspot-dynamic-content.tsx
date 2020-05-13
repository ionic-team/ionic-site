import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hubspot-dynamic-content',
  styleUrl: 'hubspot-dynamic-content.scss',
  shadow: false
})
export class HubspotDynamicContent {

  @Prop() listId: string = 'default';
  isInList = false;

  API_URL = 'https://ionic-site-new.now.sh/api/hubspot/hasconverted';

  componentWillLoad() {
    const hsutk = window['getCookie']('hubspotutk');

    fetch(`${this.API_URL}?listId=${this.listId}&hsutk=${hsutk}`)
      .then(response => response.json())
      .then(data => {
        this.isInList = data;
        console.log(this.isInList);
      });
  }

  render() {
    return ([
      <div style={{display: this.isInList ? 'none' : 'block'}}>
        <slot name="default" />
      </div>,
      <div style={{display: this.isInList ?  'block' : 'none'}}>
        <slot name="alternate" />
      </div>
    ]);
  }
}
