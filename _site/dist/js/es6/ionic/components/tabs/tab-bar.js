import {Parent} from 'angular2/src/core/annotations_impl/visibility';
import {Component} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {NgFor} from 'angular2/angular2';
import {TabButton} from './tab-button';
import {Icon} from '../icon/icon';
export class TabBar {
  constructor(tabs) {
    console.log('TabBar constructor', this.id);
  }
}
Object.defineProperty(TabBar, "annotations", {get: function() {
    return [new Component({selector: 'ion-tab-bar'}), new View({
      template: `
    <div class="tab-bar" role="tablist">
      <button *ng-for="#t of tabs" [tab]="t" class="tab-button" role="tab">
        <icon [name]="t.tabIcon" class="tab-button-icon"></icon>
        <span class="tab-button-text">{{t.tabTitle}}</span>
      </button>
    </div>
  `,
      directives: [NgFor, TabButton, Icon]
    })];
  }});
Object.defineProperty(TabBar, "parameters", {get: function() {
    return [[Tabs, new Parent()]];
  }});
