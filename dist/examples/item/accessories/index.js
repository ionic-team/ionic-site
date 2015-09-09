import {Component} from 'angular2/src/core/annotations_impl/annotations';
import {IonicView} from 'ionic/ionic';
class IonicApp {
  constructor() {
    this.items = [1, 2, 3, 4, 5];
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new IonicView({templateUrl: 'main.html'})];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
