import {ElementRef} from 'angular2/angular2';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {Ancestor} from 'angular2/src/core/annotations_impl/visibility';
import {View} from 'angular2/src/core/annotations_impl/view';
import {IonicDirective,
  IonicComponent} from 'ionic/config/component';
export class RadioGroup {
  static get config() {
    return {selector: 'ion-radio-group'};
  }
  constructor(elementRef) {
    this.domElement = elementRef.domElement;
    this.domElement.classList.add('list');
    this.buttons = [];
  }
  writeValue(value) {
    this.value = value;
    setTimeout(() => {
      this.selectFromValue(value);
    });
  }
  register(radioButton) {
    this.buttons.push(radioButton);
    if (!this.value && this.buttons.length === 1) {
      setTimeout(() => {
        this.selected(radioButton);
      });
    }
  }
  selectFromValue(value) {
    for (let button of this.buttons) {
      if (button.value === value) {
        this.selected(button);
      }
    }
  }
  selected(radioButton) {
    for (let button of this.buttons) {
      button.setActive(false);
    }
    radioButton.setActive(true);
    this.value = radioButton.value;
    this.controlDirective._control().updateValue(this.value);
  }
}
Object.defineProperty(RadioGroup, "annotations", {get: function() {
    return [new IonicDirective(RadioGroup)];
  }});
Object.defineProperty(RadioGroup, "parameters", {get: function() {
    return [[ElementRef]];
  }});
export class RadioButton {
  static get config() {
    return {
      selector: 'ion-radio',
      properties: ['value'],
      host: {'(^click)': 'buttonClicked($event)'}
    };
  }
  constructor(group, elementRef) {
    this.domElement = elementRef.domElement;
    this.domElement.classList.add('item');
    this.domElement.setAttribute('aria-checked', true);
    this.group = group;
    group.register(this);
  }
  setActive(isActive) {
    if (isActive) {
      this.domElement.classList.add('active');
      this.domElement.setAttribute('aria-checked', true);
    } else {
      this.domElement.classList.remove('active');
      this.domElement.setAttribute('aria-checked', false);
    }
  }
  buttonClicked(event) {
    this.group.selected(this, event);
    event.preventDefault();
  }
}
Object.defineProperty(RadioButton, "annotations", {get: function() {
    return [new IonicComponent(RadioButton), new View({template: `
    <div class="item-content">

      <div class="item-title">
        <content></content>
      </div>

      <div class="item-media media-radio">
        <icon class="radio-off"></icon>
        <icon class="ion-ios-checkmark-empty radio-on"></icon>
      </div>

    </div>
  `})];
  }});
Object.defineProperty(RadioButton, "parameters", {get: function() {
    return [[RadioGroup, new Ancestor()], [ElementRef]];
  }});
