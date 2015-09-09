import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
export class Label {
  constructor() {}
}
Object.defineProperty(Label, "annotations", {get: function() {
    return [new Directive({selector: 'ion-label'})];
  }});
