import {ElementRef,
  For,
  Parent} from 'angular2/angular2';
import {Component,
  Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {FormBuilder,
  Validators,
  FormDirectives,
  ControlGroup} from 'angular2/forms';
import {Log} from 'ionic/util';
import {Router,
  Routable,
  NavController,
  IonicView} from 'ionic/ionic';
class AppPage {
  constructor(nav) {
    this.nav = nav;
  }
  doLogin() {}
}
Object.defineProperty(AppPage, "annotations", {get: function() {
    return [new Component({selector: 'ion-view'}), new IonicView({templateUrl: 'pages/app.html'})];
  }});
Object.defineProperty(AppPage, "parameters", {get: function() {
    return [[NavController]];
  }});
class IonicApp {
  constructor() {
    this.rootView = AppPage;
    this.menuOpenAmount = 0;
  }
  onMenuOpening(amt) {
    this.menuOpenAmount = amt;
  }
}
Object.defineProperty(IonicApp, "annotations", {get: function() {
    return [new Component({selector: 'ion-app'}), new IonicView({
      directives: [ParallaxEffect],
      templateUrl: 'main.html'
    })];
  }});
export class ParallaxEffect {
  constructor(elementRef) {
    this.domElement = elementRef.domElement;
    setTimeout(() => {
      Object.observe(this, (changes) => {
        changes.forEach((change) => {
          if (change.name == 'parallax') {
            this.parallaxItems();
          }
        });
      });
    });
  }
  parallaxItems() {
    let list = this.domElement;
    console.log('Moving items', this.parallax);
    var x = Math.max(0, (1 - this.parallax) * 20);
    var y = 0;
    var scale = Math.min(1, (0.9 + 0.1 * this.parallax));
    list.style['opacity'] = Math.min(this.parallax, 1);
    list.style['transform'] = 'translate3d(' + x + 'px, ' + y + 'px, 0) scale(' + scale + ')';
  }
}
Object.defineProperty(ParallaxEffect, "annotations", {get: function() {
    return [new Directive({
      selector: '[parallax]',
      properties: ['parallax']
    })];
  }});
Object.defineProperty(ParallaxEffect, "parameters", {get: function() {
    return [[ElementRef]];
  }});
export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
