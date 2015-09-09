import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
export class Input {
  constructor() {
    console.log('INPUT');
  }
}
Object.defineProperty(Input, "annotations", {get: function() {
    return [new Directive({selector: 'ion-input'})];
  }});
