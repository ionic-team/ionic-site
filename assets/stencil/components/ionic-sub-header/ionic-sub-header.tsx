import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'ionic-sub-header',
  styleUrl: 'ionic-sub-header.scss',
  shadow: false
})
export class IonicSubHeader {

  @Prop() darkMode = true;

  @State() dropdownActive = false;

  constructor() {
    console.log(document.body.classList)
  }

  handleDropdownClick() {
    
  }

  render() {
    return (
      <div id="sub-header">
        <div class="container">
          <slot name="title"/>
          <slot name="breadcrumbs"/>
          <slot name="left"/>
          <slot name="right"/>
          <slot name="button"/>
        </div>
      </div>
    );
  }
}
