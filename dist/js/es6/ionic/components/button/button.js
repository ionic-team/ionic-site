import {ElementRef} from 'angular2/angular2';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {IonicComponent_OLD} from 'ionic/config/component';
export class Button {
  constructor(elementRef) {
    this.domElement = elementRef.domElement;
    this.config = Button.config.invoke(this);
  }
}
Object.defineProperty(Button, "annotations", {get: function() {
    return [new Directive({selector: 'button, ion-button, [ion-button],.button'})];
  }});
Object.defineProperty(Button, "parameters", {get: function() {
    return [[ElementRef]];
  }});
new IonicComponent_OLD(Button, {
  enhanceRawElement: true,
  propClasses: ['primary', 'secondary', 'danger', 'light', 'stable', 'dark', 'block', 'clear', 'full', 'icon']
});
