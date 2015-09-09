import {NgFor} from 'angular2/angular2';
import {Ancestor} from 'angular2/src/core/annotations_impl/visibility';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {NavController,
  NavParams,
  NavbarTemplate,
  Navbar,
  Content,
  Nav,
  List,
  Item} from 'ionic/ionic';
import {HackerNews} from '../hn';
export class HNSinglePost {
  constructor(nav, params) {
    this.nav = nav;
    this.post = params;
    console.log('SINGLE', params);
  }
}
Object.defineProperty(HNSinglePost, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new View({
      templateUrl: 'pages/single.html',
      directives: [NavbarTemplate, Navbar, Content, NgFor, List, Item]
    })];
  }});
Object.defineProperty(HNSinglePost, "parameters", {get: function() {
    return [[NavController], [NavParams]];
  }});
