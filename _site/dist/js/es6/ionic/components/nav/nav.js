import {Component,
  Directive,
  onInit} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {Parent} from 'angular2/src/core/annotations_impl/visibility';
import {Optional} from 'angular2/src/di/annotations_impl';
import {Compiler} from 'angular2/angular2';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {DynamicComponentLoader} from 'angular2/src/core/compiler/dynamic_component_loader';
import {Injector} from 'angular2/di';
import {ViewController} from '../view/view-controller';
export class Nav extends ViewController {
  constructor(viewCtrl, compiler, elementRef, loader, injector) {
    super(viewCtrl, compiler, elementRef, loader, injector);
  }
  onInit() {
    this.push(this.root);
  }
}
Object.defineProperty(Nav, "annotations", {get: function() {
    return [new Component({
      selector: 'ion-nav',
      properties: ['root'],
      lifecycle: [onInit]
    }), new View({
      template: '<template pane-anchor></template>',
      directives: [PaneAnchor]
    })];
  }});
Object.defineProperty(Nav, "parameters", {get: function() {
    return [[ViewController, new Optional()], [Compiler], [ElementRef], [DynamicComponentLoader], [Injector]];
  }});
class PaneAnchor {
  constructor(nav, elementRef) {
    nav.anchorElementRef(elementRef);
  }
}
Object.defineProperty(PaneAnchor, "annotations", {get: function() {
    return [new Directive({selector: 'template[pane-anchor]'})];
  }});
Object.defineProperty(PaneAnchor, "parameters", {get: function() {
    return [[Nav, new Parent()], [ElementRef]];
  }});
