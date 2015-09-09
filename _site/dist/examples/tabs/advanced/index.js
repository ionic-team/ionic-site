import {Component} from 'angular2/src/core/annotations_impl/annotations';
import {IonicView,
  NavController} from 'ionic/ionic';
class SignIn {
  constructor(nav) {
    this.nav = nav;
  }
  push() {
    this.nav.push(TabsPage);
  }
}
Object.defineProperty(SignIn, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({template: '' + '<ion-navbar *navbar>' + '<ion-title>Sign In</ion-title>' + '</ion-navbar>' + '<ion-content class="padding">' + '<p><button primary (click)="push()">Go to tabs</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'})];
  }});
Object.defineProperty(SignIn, "parameters", {get: function() {
    return [[NavController]];
  }});
class TabsPage {
  constructor(nav) {
    this.tab1Root = Tab1Page1;
    this.tab2Root = Tab2Page1;
  }
}
Object.defineProperty(TabsPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-tabs-view'}), new IonicView({templateUrl: './tabs.html'})];
  }});
Object.defineProperty(TabsPage, "parameters", {get: function() {
    return [[NavController]];
  }});
class Tab1Page1 {
  constructor(nav) {
    this.nav = nav;
  }
  push() {
    this.nav.push(Tab1Page2);
  }
}
Object.defineProperty(Tab1Page1, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 1 Page 1</ion-title>' + '</ion-navbar>' + '<ion-content class="padding">' + '<p><button primary (click)="push()">Go to Tab 1, Page 2</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'})];
  }});
Object.defineProperty(Tab1Page1, "parameters", {get: function() {
    return [[NavController]];
  }});
class Tab1Page2 {
  constructor(nav) {
    this.nav = nav;
  }
  push() {
    this.nav.push(Tab1Page3);
  }
}
Object.defineProperty(Tab1Page2, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 1 Page 2</ion-title>' + '</ion-navbar>' + '<ion-content class="padding">' + '<p><button primary (click)="push()">Go to Tab 1, Page 3</button></p>' + '<p><button primary (click)="nav.pop()">Back to Tab 1, Page 1</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'})];
  }});
Object.defineProperty(Tab1Page2, "parameters", {get: function() {
    return [[NavController]];
  }});
class Tab1Page3 {
  constructor(nav) {
    this.nav = nav;
  }
}
Object.defineProperty(Tab1Page3, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 1 Page 3</ion-title>' + '</ion-navbar>' + '<ion-content class="padding">' + '<p><button primary (click)="nav.pop()">Back to Tab 1, Page 2</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'})];
  }});
Object.defineProperty(Tab1Page3, "parameters", {get: function() {
    return [[NavController]];
  }});
class Tab2Page1 {
  constructor(nav) {
    this.nav = nav;
  }
  push() {
    this.nav.push(Tab2Page2);
  }
}
Object.defineProperty(Tab2Page1, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 2 Page 1</ion-title>' + '</ion-navbar>' + '<ion-content class="padding">' + '<p><button primary (click)="push()">Go to Tab 2, Page 2</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'})];
  }});
Object.defineProperty(Tab2Page1, "parameters", {get: function() {
    return [[NavController]];
  }});
class Tab2Page2 {
  constructor(nav) {
    this.nav = nav;
  }
  push() {
    this.nav.push(Tab2Page3);
  }
}
Object.defineProperty(Tab2Page2, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 2 Page 2</ion-title>' + '</ion-navbar>' + '<ion-content class="padding">' + '<p><button primary (click)="push()">Go to Tab 2, Page 3</button></p>' + '<p><button primary (click)="nav.pop()">Back to Tab 2, Page 1</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'})];
  }});
Object.defineProperty(Tab2Page2, "parameters", {get: function() {
    return [[NavController]];
  }});
class Tab2Page3 {
  constructor(nav) {
    this.nav = nav;
  }
}
Object.defineProperty(Tab2Page3, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({template: '' + '<ion-navbar *navbar>' + '<ion-title>Tabs 2 Page 3</ion-title>' + '</ion-navbar>' + '<ion-content class="padding">' + '<p><button primary (click)="nav.pop()">Back to Tab 2, Page 2</button></p>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'})];
  }});
Object.defineProperty(Tab2Page3, "parameters", {get: function() {
    return [[NavController]];
  }});
class IonicApp {
  constructor() {
    this.rootView = SignIn;
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new IonicView({template: '<ion-nav [root]="rootView"></ion-nav>'})];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
