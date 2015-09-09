import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {Content} from 'ionic/components/content/content';
import {Layout} from 'ionic/components/layout/layout';
class IonicApp {}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new View({
      templateUrl: 'main.html',
      directives: [Content, Layout]
    })];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
