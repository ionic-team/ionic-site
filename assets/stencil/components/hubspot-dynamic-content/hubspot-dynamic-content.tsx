import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hubspot-dynamic-content',
  styleUrl: 'hubspot-dynamic-content.scss',
  shadow: false
})
export class HubspotDynamicContent {

  @Prop() listId: string = 'default';

  componentWillLoad() {
    const hsutk = window['getCookie']('hubspotutk');

    fetch(`/api/v1/hsconverted/${this.listId}/${hsutk}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return ([
      <slot name="default" />,
      <slot name="alternate" />
    ]);
  }
}
