import {Parent} from 'angular2/src/core/annotations_impl/visibility';
import {Directive,
  onInit} from 'angular2/src/core/annotations_impl/annotations';
import {Tabs} from './tabs';
export class TabButton {
  constructor(tabs) {
    this.tabs = tabs;
  }
  onInit() {
    let id = this.tab.item.id;
    this.btnId = 'tab-button-' + id;
    this.panelId = 'tab-panel-' + id;
  }
  onClick(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.tabs.select(this.tab);
  }
}
Object.defineProperty(TabButton, "annotations", {get: function() {
    return [new Directive({
      selector: 'button.tab-button',
      properties: ['tab'],
      host: {
        '[attr.id]': 'btnId',
        '[attr.aria-controls]': 'panelId',
        '[attr.aria-selected]': 'tab.isSelected',
        '(^click)': 'onClick($event)'
      },
      lifecycle: [onInit]
    })];
  }});
Object.defineProperty(TabButton, "parameters", {get: function() {
    return [[Tabs, new Parent()]];
  }});
