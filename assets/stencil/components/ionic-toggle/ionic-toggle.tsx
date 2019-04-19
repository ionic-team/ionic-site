import { Component, Element, Listen } from '@stencil/core';
import { IonicToggleButton } from './ionic-toggle-button';
import { IonicToggleTab } from './ionic-toggle-tab';

@Component({
  tag: 'ionic-toggle',
  styleUrl: 'ionic-toggle.scss',
  shadow: true
})
export class IonicToggle {
  @Element() el: Element;


  componentDidLoad() {
  }

  @Listen('toggleSelected')
  selectionChanged(e: any) {
    const target = e.detail as IonicToggleButton;
    const buttons = this.el.querySelectorAll('ionic-toggle-button');
    Array.prototype.forEach.call(buttons, (child: IonicToggleButton) => {
      child.deselect();
    });

    const tabName = target.tab;
    target.select();

    console.log('Selecting this one', tabName, target);

    const tabs = this.el.querySelectorAll(`ionic-toggle-tab`);
    console.log('Found tabs', tabs);
    Array.prototype.forEach.call(tabs, (tab: IonicToggleTab) => {
      tab.hide();
      if (tab.tab === tabName) {
        tab.show();
      }
    })
  }

  render() {
    return (
      <div class="toggle-content">
        <div class="toggle-buttons">
          <slot name="buttons"/>
        </div>
        <div class="toggle-tabs">
          <slot name="tabs"></slot>
        </div>
      </div>
    );
  }
}