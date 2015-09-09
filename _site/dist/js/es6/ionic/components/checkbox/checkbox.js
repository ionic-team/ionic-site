import {ElementRef,
  Renderer,
  EventEmitter,
  onChange} from 'angular2/angular2';
import {isPresent} from 'angular2/src/facade/lang';
import {setProperty} from 'angular2/src/forms/directives/shared';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {Ancestor} from 'angular2/src/core/annotations_impl/visibility';
import {View} from 'angular2/src/core/annotations_impl/view';
import {onInit} from 'angular2/angular2';
import {NgControl} from 'angular2/forms';
import {IonicComponent} from '../../config/component';
import {Icon} from '../icon/icon';
export class Checkbox {
  static get config() {
    return {
      selector: 'ion-checkbox',
      properties: ['checked', 'disabled', 'value'],
      defaultProperties: {
        'iconOff': 'ion-ios-circle-outline',
        'iconOn': 'ion-ios-checkmark'
      },
      host: {
        '(^click)': 'onClick($event)',
        '(blur)': 'onTouched()',
        '[checked]': 'checked',
        '[attr.aria-checked]': 'checked',
        '[attr.aria-disabled]': 'disabled',
        '[attr.value]': 'value',
        'role': 'checkbox',
        'class': 'item',
        '[class.ng-untouched]': 'ngClassUntouched',
        '[class.ng-touched]': 'ngClassTouched',
        '[class.ng-pristine]': 'ngClassPristine',
        '[class.ng-dirty]': 'ngClassDirty',
        '[class.ng-valid]': 'ngClassValid',
        '[class.ng-invalid]': 'ngClassInvalid'
      },
      appInjector: [NgControl]
    };
  }
  constructor(ngControl, renderer, elementRef) {
    this.ngControl = ngControl;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.ngControl.valueAccessor = this;
  }
  onInit() {
    Checkbox.applyConfig(this);
  }
  writeValue(value) {
    this.checked = !!value;
  }
  set checked(checked) {
    this._checked = checked;
    setProperty(this.renderer, this.elementRef, "checked", checked);
  }
  get checked() {
    return this._checked;
  }
  onClick() {
    this.checked = !this.checked;
  }
  get ngClassUntouched() {
    return isPresent(this.ngControl.control) ? this.ngControl.control.untouched : false;
  }
  get ngClassTouched() {
    return isPresent(this.ngControl.control) ? this.ngControl.control.touched : false;
  }
  get ngClassPristine() {
    return isPresent(this.ngControl.control) ? this.ngControl.control.pristine : false;
  }
  get ngClassDirty() {
    return isPresent(this.ngControl.control) ? this.ngControl.control.dirty : false;
  }
  get ngClassValid() {
    return isPresent(this.ngControl.control) ? this.ngControl.control.valid : false;
  }
  get ngClassInvalid() {
    return isPresent(this.ngControl.control) ? !this.ngControl.control.valid : false;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
Object.defineProperty(Checkbox, "annotations", {get: function() {
    return [new IonicComponent(Checkbox), new View({
      template: `
  <div class="item-media media-checkbox">
    <icon [name]="iconOff" class="checkbox-off"></icon>
    <icon [name]="iconOn" class="checkbox-on"></icon>
  </div>
  <div class="item-content">
    <div class="item-label">
      <content></content>
    </div>
  </div>`,
      directives: [Icon]
    })];
  }});
Object.defineProperty(Checkbox, "parameters", {get: function() {
    return [[NgControl], [Renderer], [ElementRef]];
  }});
