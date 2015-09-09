import {Component} from 'angular2/src/core/annotations_impl/annotations';
import {IonicView,
  NavController} from 'ionic/ionic';
class IonicApp {
  constructor() {
    this.root = TabsPage;
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new IonicView({templateUrl: 'main.html'})];
  }});
class HomeTabPage {
  constructor(nav) {
    this.nav = nav;
  }
  push() {}
}
Object.defineProperty(HomeTabPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({template: '' + '<ion-navbar *navbar>' + '<ion-title>Home</ion-title>' + '</ion-navbar>' + '<ion-content class="padding">' + 'home' + '</ion-content>'})];
  }});
Object.defineProperty(HomeTabPage, "parameters", {get: function() {
    return [[NavController]];
  }});
class PeekTabPage {
  constructor(nav) {
    this.nav = nav;
  }
  push() {}
}
Object.defineProperty(PeekTabPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({template: '' + '<ion-navbar *navbar>' + '<ion-title>Peek</ion-title>' + '</ion-navbar>' + '<ion-content class="padding">' + 'peek' + '</ion-content>'})];
  }});
Object.defineProperty(PeekTabPage, "parameters", {get: function() {
    return [[NavController]];
  }});
class TabsPage {
  constructor() {
    this.homeTab = HomeTabPage;
    this.peekTab = PeekTabPage;
  }
}
Object.defineProperty(TabsPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({templateUrl: 'tabs.html'})];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
