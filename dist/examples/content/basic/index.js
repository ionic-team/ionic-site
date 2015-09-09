import {NgFor} from 'angular2/angular2';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {Content} from 'ionic/components/content/content';
import {Icon} from 'ionic/components/icon/icon';
import {Checkbox} from 'ionic/components/checkbox/checkbox';
import {List} from 'ionic/components/list/list';
import {Item} from 'ionic/components/item/item';
class IonicApp {
  constructor() {
    console.log('IonicApp Start');
    this.items = [];
    for (let i = 0; i < 100; i++) {
      this.items.push({title: 'Item ' + i});
    }
    setTimeout(() => {
      console.log(this.items);
    });
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new View({
      templateUrl: 'main.html',
      directives: [Content, Icon, Checkbox, List, Item, NgFor]
    })];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
