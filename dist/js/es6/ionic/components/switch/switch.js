import {Renderer,
  ElementRef} from 'angular2/angular2';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {ControlGroup,
  ControlDirective} from 'angular2/forms';
import {dom} from 'ionic/util';
import {IonicComponent} from 'ionic/config/component';
export class Switch {
  static get config() {
    return {
      selector: 'ion-switch',
      properties: ['checked'],
      host: {'(click)': 'switchClicked($event)'}
    };
  }
  constructor(elementRef, cd) {
    this.domElement = elementRef.domElement;
    this.config = Switch.config.invoke(this);
    this.controlDirective = cd;
    cd.valueAccessor = this;
    let setAriaRole = (v) => this.domElement.setAttribute('aria-role', v);
    let setAriaChecked = (v) => this.domElement.setAttribute('aria-checked', v);
    let setAriaInvalid = (v) => this.domElement.setAttribute('aria-invalid', v);
    let setAriaDisabled = (v) => this.domElement.setAttribute('aria-disabled', v);
    this.domElement.classList.add('item');
    this.setCheckedProperty = setAriaChecked;
  }
  writeValue(value) {
    this.checked = !!value;
  }
  set checked(checked) {
    this._checked = checked;
    this.setCheckedProperty(checked);
    this.controlDirective._control().updateValue(this._checked);
  }
  get checked() {
    return this._checked;
  }
  switchClicked(event) {
    this.checked = !this.checked;
  }
}
Object.defineProperty(Switch, "annotations", {get: function() {
    return [new IonicComponent(Switch), new View({template: `
  <div class="item-content">
    <div class="item-title">
      <content></content>
    </div>
    <div class="item-media media-switch">
      <div class="switch-toggle"></div>
    </div>
  </div>`})];
  }});
Object.defineProperty(Switch, "parameters", {get: function() {
    return [[ElementRef], [ControlDirective]];
  }});
