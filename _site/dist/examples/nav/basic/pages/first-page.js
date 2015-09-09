import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {IonicView,
  IonicConfig,
  IonicApp} from 'ionic/ionic';
import {NavParams,
  Routable,
  Router,
  NavController} from 'ionic/ionic';
import {SecondPage} from './second-page';
export class FirstPage {
  constructor(nav, app, config) {
    console.log('app', app);
    console.log('config', config);
    Router.setNavController(nav);
    this.nav = nav;
    this.val = Math.round(Math.random() * 8999) + 1000;
    this.pushPage = SecondPage;
    this.pushData = {id: 420};
  }
  viewLoaded() {
    this.router = FirstPage.router.invoke(this);
    console.log('viewLoaded first page');
  }
  viewWillEnter() {
    console.log('viewWillEnter first page');
  }
  viewDidEnter() {
    console.log('viewDidEnter first page');
  }
  viewWillLeave() {
    console.log('viewWillLeave first page');
  }
  viewDidLeave() {
    console.log('viewDidLeave first page');
  }
  viewWillCache() {
    console.log('viewWillCache first page');
  }
  viewDidCache() {
    console.log('viewDidCache first page');
  }
  viewWillUnload() {
    console.log('viewWillUnload first page');
  }
  viewDidUnload() {
    console.log('viewDidUnload first page');
  }
  push() {
    this.nav.push(SecondPage, {
      id: 8675309,
      myData: [1, 2, 3, 4]
    }, {animation: 'ios'});
  }
}
Object.defineProperty(FirstPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({template: '' + '<ion-navbar *navbar>' + '<ion-title>First Page: {{ val }}</ion-title>' + '<ion-nav-items primary>' + '<button>P1</button>' + '</ion-nav-items>' + '<ion-nav-items secondary>' + '<button>S1</button>' + '<button icon><i class="icon ion-navicon"></i></button>' + '</ion-nav-items>' + '</ion-navbar>' + '<ion-content class="padding">' + '<p>First Page: {{ val }}</p>' + '<p><button primary (click)="push()">Push (Go to 2nd)</button></p>' + '<p><button primary [push-data]="pushData" [nav-push]="pushPage">Push w/ nav-push (Go to 2nd)</button></p>' + '<icon class="ion-ios-arrow-back"></icon>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '<f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f>' + '</ion-content>'})];
  }});
Object.defineProperty(FirstPage, "parameters", {get: function() {
    return [[NavController], [IonicApp], [IonicConfig]];
  }});
new Routable(FirstPage, {url: '/first-page'});
