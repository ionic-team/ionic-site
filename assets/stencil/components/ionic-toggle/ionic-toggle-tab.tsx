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

  render() {
    if (this.hidden) {
      return null;
    }
    return (
      <slot />
    );
  }
}