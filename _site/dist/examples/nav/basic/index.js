import {Component,
  onInit} from 'angular2/src/core/annotations_impl/annotations';
import {IonicView,
  IonicConfig} from 'ionic/ionic';
import {FirstPage} from './pages/first-page';
class MyApp {
  constructor() {
    this.rootView = FirstPage;
  }
}
Object.defineProperty(MyApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new IonicView({template: '<ion-nav [root]="rootView"></ion-nav>'})];
  }});
export function main(ionicBootstrap) {
  let myConfig = new IonicConfig();
  ionicBootstrap(MyApp, myConfig);
}
