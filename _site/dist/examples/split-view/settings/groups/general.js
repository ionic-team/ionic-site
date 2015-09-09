import {Component,
  View} from 'angular2/angular2';
export class GeneralPage {}
Object.defineProperty(GeneralPage, "annotations", {get: function() {
    return [new Component({selector: 'settings-general'}), new View({
      template: `
<ion-view nav-title="General Stuff">
  General Settings
</ion-view>
  `,
      directives: []
    })];
  }});
