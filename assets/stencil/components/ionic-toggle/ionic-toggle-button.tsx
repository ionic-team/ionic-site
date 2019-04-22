import { Component, Event, Prop, State, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'ionic-toggle-button',
  styleUrl: 'ionic-toggle-button.scss',
  shadow: true
})
export class IonicToggleButton {
  @Event() toggleSelected: EventEmitter;

  @Prop() title: string;
  @Prop() tab: string;

  @State() selected = false;

  @Method()
  deselect() {
    this.selected = false;
  }

  @Method()
  select() {
    this.selected = true;
  }

  handleSelected() {
    this.toggleSelected.emit(this);
  }

  hostData() {
    return {
      class: {
        selected: this.selected
      }
    }
  }

  render() {
    return (
      <div onClick={_ => this.handleSelected()}>
        {this.title}
      </div>
    );
  }
}