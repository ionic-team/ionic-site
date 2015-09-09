import {NgFor,
  DynamicComponentLoader,
  Injector,
  DomRenderer,
  ElementRef} from 'angular2/angular2';
import {Ancestor} from 'angular2/src/core/annotations_impl/visibility';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {ActionMenu,
  Modal,
  ModalRef,
  NavbarTemplate,
  Navbar,
  NavController,
  Content} from 'ionic/ionic';
export class ModalPage {
  constructor(nav, loader, injector, domRenderer, elementRef) {
    this.loader = loader;
    this.domRenderer = domRenderer;
    this.elementRef = elementRef;
    this.injector = injector;
    this.nav = nav;
    window.nav = nav;
    console.log('IonicApp Start', loader, domRenderer, elementRef);
  }
  openModal() {
    console.log('Opening modal');
    Modal.show(MyModal, this.loader, this.injector, this.domRenderer, this.elementRef);
  }
  openMenu() {
    console.log('Opening Modal');
  }
}
Object.defineProperty(ModalPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new View({
      template: `
  <ion-navbar *navbar><ion-title>Modal</ion-title></ion-navbar>

  <ion-content class="padding">
    <h2>Modal</h2>
    <p>
      Modals are entire views that slide in off screen.
    </p>
    <p>
      Modals make it easy to open a new "context" for the user, without taking them
      out of the current context. For example, clicking the "compose" button
      on a mail app might slide up a Compose modal.
    </p>
    <button primary (click)="openModal()">Open Modal</button>
  </ion-content>
  `,
      directives: [NavbarTemplate, Navbar, Content]
    })];
  }});
Object.defineProperty(ModalPage, "parameters", {get: function() {
    return [[NavController], [DynamicComponentLoader], [Injector], [DomRenderer], [ElementRef]];
  }});
export class MyModal {
  constructor(modalRef) {
    this.modalRef = modalRef;
  }
  close() {
    console.log('Closing modal');
    this.modalRef.close();
  }
}
Object.defineProperty(MyModal, "annotations", {get: function() {
    return [new Component({selector: 'my-modal'}), new View({
      template: '<ion-content padding><button (click)="close()" primary>Close Modal</button></ion-content>',
      directives: [Content]
    })];
  }});
Object.defineProperty(MyModal, "parameters", {get: function() {
    return [[ModalRef]];
  }});
