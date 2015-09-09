import {NgFor,
  ProtoViewRef,
  ViewContainerRef} from 'angular2/angular2';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {Parent} from 'angular2/src/core/annotations_impl/visibility';
import {Content,
  List,
  Item} from 'ionic/ionic';
class IonicApp {
  constructor() {
    console.log('IonicApp Start');
    this.items = [];
    for (let i = 0; i < 1000; i++) {
      this.items.push({title: 'Item ' + i});
    }
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new View({
      templateUrl: 'main.html',
      directives: [Content, List, Item, ItemCellTemplate, NgFor]
    })];
  }});
export class ItemCellTemplate {
  constructor(list, viewContainer, protoViewRef) {
    console.log('Item cell template', list, viewContainer, protoViewRef);
    this.protoViewRef = protoViewRef;
    this.viewContainer = viewContainer;
    list.setItemTemplate(this);
  }
}
Object.defineProperty(ItemCellTemplate, "annotations", {get: function() {
    return [new Directive({selector: 'template[cell]'})];
  }});
Object.defineProperty(ItemCellTemplate, "parameters", {get: function() {
    return [[List, new Parent()], [ViewContainerRef], [ProtoViewRef]];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
