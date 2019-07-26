import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ionic-button',
  styleUrl: 'ionic-button.scss',
  shadow: false
})
export class IonicButton {

  @Prop() color: string = 'default';
  @Prop() type: string = 'button';
  @Prop() disabled: boolean = false;

  render() {
    if (this.disabled){
      return (
        <button
          class={this.color}
          type={this.type}
          disabled>
          <slot/>
        </button>
      );
    }

    return (
      <button
        class={this.color}
        type={this.type}>

        <slot/>
      </button>
    );
  }
}
