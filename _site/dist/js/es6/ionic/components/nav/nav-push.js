import {Directive,
  onInit} from 'angular2/src/core/annotations_impl/annotations';
import {Optional} from 'angular2/src/di/annotations_impl';
import {Compiler} from 'angular2/angular2';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {DynamicComponentLoader} from 'angular2/src/core/compiler/dynamic_component_loader';
import {Injector} from 'angular2/di';
import {ViewController} from '../view/view-controller';
import {NavController} from './nav-controller';
export class NavPush {
  constructor(nav) {
    this.nav = nav;
  }
  onClick(event) {
    this.nav.push(this.navPush, this.pushData);
  }
}
Object.defineProperty(NavPush, "annotations", {get: function() {
    return [new Directive({
      selector: '[nav-push]',
      properties: ['navPush', 'pushData'],
      host: {
        '(^click)': 'onClick($event)',
        'role': 'link'
      }
    })];
  }});
Object.defineProperty(NavPush, "parameters", {get: function() {
    return [[NavController]];
  }});
export class NavPop {
  constructor(nav) {
    this.nav = nav;
  }
  onClick(event) {
    this.nav.pop();
  }
}
Object.defineProperty(NavPop, "annotations", {get: function() {
    return [new Directive({
      selector: '[nav-pop]',
      host: {
        '(^click)': 'onClick($event)',
        'role': 'link'
      }
    })];
  }});
Object.defineProperty(NavPop, "parameters", {get: function() {
    return [[NavController]];
  }});
