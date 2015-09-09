import {DynamicComponentLoader,
  ElementRef,
  ComponentRef,
  onDestroy,
  DomRenderer} from 'angular2/angular2';
import {bind,
  Injector} from 'angular2/di';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {Parent,
  Ancestor} from 'angular2/src/core/annotations_impl/visibility';
import {IonicView,
  IonicConfig,
  Platform} from 'ionic/ionic';
import {IonicComponent} from 'ionic/ionic';
import {Modal,
  NavController,
  NavParams,
  Animation,
  ActionMenu} from 'ionic/ionic';
class MyAppCmp {
  constructor(Modal) {
    this.Modal = Modal;
  }
  openModal() {
    this.Modal.open(ContactModal, {
      enterAnimation: 'my-fade-in',
      leaveAnimation: 'my-fade-out',
      handle: 'my-awesome-modal'
    });
  }
}
Object.defineProperty(MyAppCmp, "annotations", {get: function() {
    return [new Component({
      selector: 'ion-app',
      appInjector: [Modal]
    }), new IonicView({templateUrl: 'main.html'})];
  }});
Object.defineProperty(MyAppCmp, "parameters", {get: function() {
    return [[Modal]];
  }});
export class ContactModal extends Modal {
  constructor() {
    super();
    this.rootView = ModalFirstPage;
  }
}
Object.defineProperty(ContactModal, "annotations", {get: function() {
    return [new IonicComponent(Modal), new IonicView({template: '<ion-nav [root]="rootView"></ion-nav>'})];
  }});
export class ModalFirstPage {
  constructor(nav, Modal, ActionMenu) {
    this.nav = nav;
    this.val = Math.round(Math.random() * 8999) + 1000;
    this.Modal = Modal;
    this.ActionMenu = ActionMenu;
  }
  push() {
    this.nav.push(ModalSecondPage, {
      id: 8675309,
      myData: [1, 2, 3, 4]
    }, {animation: 'ios'});
  }
  closeModal() {
    let modal = this.Modal.get();
    modal.close();
  }
  closeByHandeModal() {
    let modal = this.Modal.getByHandle('my-awesome-modal');
    modal.close();
  }
  openActionMenu() {
    this.ActionMenu.open({
      buttons: [{text: 'Share This'}, {text: 'Move'}],
      destructiveText: 'Delete',
      titleText: 'Modify your album',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('Canceled');
      },
      destructiveButtonClicked: () => {
        console.log('Destructive clicked');
      },
      buttonClicked: function(index) {
        console.log('Button clicked', index);
        if (index == 1) {
          return false;
        }
        return true;
      }
    }).then((actionMenu) => {
      this.actionMenu = actionMenu;
    });
  }
}
Object.defineProperty(ModalFirstPage, "annotations", {get: function() {
    return [new Component({
      selector: 'ion-view',
      appInjector: [Modal, ActionMenu]
    }), new IonicView({template: `
    <ion-navbar *navbar><ion-title>First Page Header: {{ val }}</ion-title><ion-nav-items primary><button primary (click)="closeModal()">Close</button></ion-nav-items></ion-navbar>
    <ion-content class="padding">
      <p>First Page: {{ val }}</p>
      <p>
        <button primary (click)="push()">Push (Go to 2nd)</button>
      </p>
      <p>
        <button primary (click)="openActionMenu()">Open Action Menu</button>
      </p>
      <p>
        <button primary (click)="closeByHandeModal()">Close By Handle</button>
      </p>
      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>
      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>
    </ion-content>
  `})];
  }});
Object.defineProperty(ModalFirstPage, "parameters", {get: function() {
    return [[NavController], [Modal], [ActionMenu]];
  }});
export class ModalSecondPage {
  constructor(nav, params) {
    this.nav = nav;
    this.params = params;
    console.log('Second page params:', params);
  }
}
Object.defineProperty(ModalSecondPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({template: `
    <ion-navbar *navbar><ion-title>Second Page Header</ion-title></ion-navbar>
    <ion-content class="padding">
      <p>
        <button primary (click)="nav.pop()">Pop (Go back to 1st)</button>
      </p>
      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>
      <f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>
    </ion-content>
  `})];
  }});
Object.defineProperty(ModalSecondPage, "parameters", {get: function() {
    return [[NavController], [NavParams]];
  }});
export function main(ionicBootstrap) {
  let myConfig = new IonicConfig();
  ionicBootstrap(MyAppCmp, myConfig).then((app) => {
    console.log('platforms', Platform.platforms());
    console.log('mode', myConfig.setting('mode'));
    console.log('core', Platform.is('core'));
    console.log('cordova', Platform.is('cordova'));
    console.log('mobile', Platform.is('mobile'));
    console.log('ipad', Platform.is('ipad'));
    console.log('iphone', Platform.is('iphone'));
    console.log('phablet', Platform.is('phablet'));
    console.log('tablet', Platform.is('tablet'));
    console.log('ios', Platform.is('ios'));
    console.log('android', Platform.is('android'));
    console.log('windows phone', Platform.is('windowsphone'));
    console.log('isRTL', app.isRTL());
    console.log('lang', app.lang());
    Platform.ready().then(() => {
      console.log('Platform.ready');
    });
  });
}
class FadeIn extends Animation {
  constructor(element) {
    super(element);
    this.easing('ease').duration(450).fadeIn();
  }
}
Animation.register('my-fade-in', FadeIn);
class FadeOut extends Animation {
  constructor(element) {
    super(element);
    this.easing('ease').duration(250).fadeOut();
  }
}
Animation.register('my-fade-out', FadeOut);
