import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hubspot-dynamic-content',
  styleUrl: 'hubspot-dynamic-content.scss',
  shadow: false
})
export class HubspotDynamicContent {

  @Prop() formId: string = 'default';

  componentWillLoad() {
    fetch(`/api/v1/getform/${this.formId}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
