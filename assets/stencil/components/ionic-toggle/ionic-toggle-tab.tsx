import { Component, Prop, Method, State } from '@stencil/core';

@Component({
  tag: 'ionic-toggle-tab',
  styles: `
  `,
  shadow: true
})
export class IonicToggleTab {
  @Prop() tab: string;

  @State() hidden = true;

  @Method()
  hide() {
    this.hidden = true;
  }

  @Method()
  show() {
    this.hidden = false;
  }

  hostData() {
    return {
      style: {
        display: this.hidden ? 'none' : 'block'
      }
    }
  }

  render() {
    return (
      <slot />
    );
  }
}