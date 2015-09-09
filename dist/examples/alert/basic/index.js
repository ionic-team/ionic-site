import {Component} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {IonicView} from 'ionic/ionic';
class IonicApp {
  constructor() {
    console.log('IonicApp Start');
  }
  showAlert() {
    console.log('Show alert');
    Alert.open({});
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new IonicView({templateUrl: 'main.html'})];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
