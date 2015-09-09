import {Component,
  View} from 'angular2/angular2';
import {NavPane} from 'ionic/ionic';
export class PrivacyPage {
  constructor(navPane) {
    this.navPane = navPane;
  }
  next() {
    this.navPane.push(PrivacyP1);
  }
}
Object.defineProperty(PrivacyPage, "annotations", {get: function() {
    return [new Component({selector: 'privacy-settings'}), new View({
      template: `
<ion-view nav-title="Privacy">
  Privacy
<button class="button button-primary" (click)="next()">
  Next
</button>
</ion-view>`,
      directives: []
    })];
  }});
Object.defineProperty(PrivacyPage, "parameters", {get: function() {
    return [[NavPane]];
  }});
class PrivacyP1 {
  constructor(navPane) {
    this.navPane = navPane;
  }
  next() {
    this.navPane.push(PrivacyP2);
  }
  pop() {
    this.navPane.pop();
  }
}
Object.defineProperty(PrivacyP1, "annotations", {get: function() {
    return [new Component({selector: 'privp1'}), new View({
      template: `
<ion-view nav-title="Privacy Page 1">
This is page 1
<br/>
<button class="button button-primary" (click)="next()">
  Next
</button>
<br/>
<button class="button" (click)="pop()">
  Back
</button>
</ion-view>
`,
      directives: []
    })];
  }});
Object.defineProperty(PrivacyP1, "parameters", {get: function() {
    return [[NavPane]];
  }});
class PrivacyP2 {
  constructor(navPane) {
    this.navPane = navPane;
  }
  pop() {
    this.navPane.pop();
  }
}
Object.defineProperty(PrivacyP2, "annotations", {get: function() {
    return [new Component({selector: 'privp2'}), new View({
      template: `
<ion-view nav-title="Privacy Page 2">
Page 2 here
<br/>
<button class="button" (click)="pop()">
  Back
</button>
<br/>
</ion-view>
`,
      directives: []
    })];
  }});
Object.defineProperty(PrivacyP2, "parameters", {get: function() {
    return [[NavPane]];
  }});
