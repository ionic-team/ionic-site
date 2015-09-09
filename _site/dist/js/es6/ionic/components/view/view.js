import {Directive} from 'angular2/src/core/annotations_impl/annotations';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {Optional} from 'angular2/src/di/annotations_impl';
import {ViewItem} from './view-item';
export class IonView {
  constructor(item, elementRef) {
    console.log('View constructor', item);
    this.domElement = elementRef.domElement;
  }
}
Object.defineProperty(IonView, "annotations", {get: function() {
    return [new Directive({selector: 'ion-view'})];
  }});
Object.defineProperty(IonView, "parameters", {get: function() {
    return [[ViewItem, new Optional()], [ElementRef]];
  }});
