import {NgFor,
  DynamicComponentLoader,
  Injector,
  DomRenderer,
  ElementRef} from 'angular2/angular2';
import {Ancestor} from 'angular2/src/core/annotations_impl/visibility';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {FormBuilder,
  Validators,
  formDirectives,
  ControlGroup} from 'angular2/forms';
import {NavbarTemplate,
  Navbar,
  NavController,
  Content} from 'ionic/ionic';
export class TabsPage {
  constructor() {}
}
Object.defineProperty(TabsPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new View({
      template: `
  <ion-navbar *navbar><ion-title>Tabs</ion-title></ion-navbar>

  <ion-content class="padding">

  </ion-content>
  `,
      directives: [NavbarTemplate, Navbar, Content]
    })];
  }});
