import {Directive,
  onInit} from 'angular2/src/core/annotations_impl/annotations';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
export class Icon {
  constructor(elementRef) {
    this.domElement = elementRef.domElement;
  }
  onInit() {
    if (this.name) {
      this.domElement.classList.add(this.name);
      this.label = this.name;
    }
  }
}
Object.defineProperty(Icon, "annotations", {get: function() {
    return [new Directive({
      selector: 'icon',
      properties: ['name'],
      host: {
        '[attr.aria-label]': 'label',
        'role': 'img'
      },
      lifecycle: [onInit]
    })];
  }});
Object.defineProperty(Icon, "parameters", {get: function() {
    return [[ElementRef]];
  }});
