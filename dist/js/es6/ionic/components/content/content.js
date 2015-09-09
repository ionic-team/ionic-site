import {ElementRef} from 'angular2/angular2';
import {Component} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
export class Content {
  constructor(elementRef) {
    this.domElement = elementRef.domElement;
    setTimeout(() => {
      this.scrollElement = this.domElement.children[0];
    });
  }
  addScrollEventListener(handler) {
    if (!this.scrollElement) {
      return;
    }
    this.scrollElement.addEventListener('scroll', handler);
    return () => {
      this.scrollElement.removeEventListener('scroll', handler);
    };
  }
}
Object.defineProperty(Content, "annotations", {get: function() {
    return [new Component({selector: 'ion-content'}), new View({template: `<div class="scroll-content"><content></content></div>`})];
  }});
Object.defineProperty(Content, "parameters", {get: function() {
    return [[ElementRef]];
  }});
