import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {Parent} from 'angular2/src/core/annotations_impl/visibility';
import {ViewContainerRef} from 'angular2/src/core/compiler/view_container_ref';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {bind} from 'angular2/di';
import {ViewController} from '../view/view-controller';
import {SwipeHandle} from './swipe-handle';
import {IonicComponent} from '../../config/component';
export class PaneController {
  constructor(viewCtrl) {
    this.panes = {};
    this.viewCtrl = viewCtrl;
  }
  get(itemStructure, callback) {
    let key = itemStructure.key;
    let viewCtrl = this.viewCtrl;
    let pane = this.panes[key];
    if (pane) {
      callback(pane);
    } else {
      this.panes[key] = null;
      let injector = viewCtrl.injector.resolveAndCreateChild([bind(ViewController).toValue(viewCtrl)]);
      viewCtrl.loader.loadNextToExistingLocation(Pane, viewCtrl.anchorElementRef(), injector).then(() => {
        pane = this.panes[key];
        let sectionAnchorElementRef = pane && pane.sectionAnchorElementRef;
        if (!sectionAnchorElementRef) {
          return callback();
        }
        let promises = [];
        let sectionsToAdd = [];
        if (itemStructure.navbar) {
          sectionsToAdd.push(NavBarContainer);
        }
        sectionsToAdd.forEach((SectionClass) => {
          promises.push(viewCtrl.loader.loadNextToExistingLocation(SectionClass, sectionAnchorElementRef));
        });
        Promise.all(promises).then(() => {
          callback(pane);
        });
      });
    }
  }
  add(pane) {
    for (let np in this.panes) {
      if (this.panes[np] === null) {
        this.panes[np] = pane;
        return;
      }
    }
  }
}
Object.defineProperty(PaneController, "parameters", {get: function() {
    return [[ViewController]];
  }});
export class Pane {
  static get config() {
    return {
      selector: 'ion-pane',
      classId: 'nav'
    };
  }
  constructor(viewCtrl, elementRef) {
    this.domElement = elementRef.domElement;
    viewCtrl.panes.add(this);
  }
  width() {
    return this.domElement.offsetWidth;
  }
  showPane(val) {
    this.domElement.classList[val ? 'add' : 'remove']('show-pane');
  }
}
Object.defineProperty(Pane, "annotations", {get: function() {
    return [new IonicComponent(Pane), new View({
      template: `
    <template pane-anchor></template>
    <section class="content-container">
      <template content-anchor></template>
      <div class="swipe-handle"></div>
    </section>
  `,
      directives: [PaneAnchor, PaneContentAnchor, SwipeHandle]
    })];
  }});
Object.defineProperty(Pane, "parameters", {get: function() {
    return [[ViewController], [ElementRef]];
  }});
class PaneAnchor {
  constructor(pane, elementRef) {
    pane.sectionAnchorElementRef = elementRef;
  }
}
Object.defineProperty(PaneAnchor, "annotations", {get: function() {
    return [new Directive({selector: 'template[pane-anchor]'})];
  }});
Object.defineProperty(PaneAnchor, "parameters", {get: function() {
    return [[Pane, new Parent()], [ElementRef]];
  }});
class PaneContentAnchor {
  constructor(pane, viewContainerRef) {
    pane.contentContainerRef = viewContainerRef;
  }
}
Object.defineProperty(PaneContentAnchor, "annotations", {get: function() {
    return [new Directive({selector: 'template[content-anchor]'})];
  }});
Object.defineProperty(PaneContentAnchor, "parameters", {get: function() {
    return [[Pane, new Parent()], [ViewContainerRef]];
  }});
class NavBarContainer {}
Object.defineProperty(NavBarContainer, "annotations", {get: function() {
    return [new Component({
      selector: 'section',
      host: {'class': 'navbar-container'}
    }), new View({
      template: `<template navbar-anchor></template>`,
      directives: [NavBarAnchor]
    })];
  }});
class NavBarAnchor {
  constructor(viewCtrl, viewContainerRef) {
    viewCtrl.navbarViewContainer(viewContainerRef);
  }
}
Object.defineProperty(NavBarAnchor, "annotations", {get: function() {
    return [new Directive({selector: 'template[navbar-anchor]'})];
  }});
Object.defineProperty(NavBarAnchor, "parameters", {get: function() {
    return [[ViewController], [ViewContainerRef]];
  }});
