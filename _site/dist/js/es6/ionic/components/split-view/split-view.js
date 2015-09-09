import {Component,
  Parent,
  Decorator,
  View,
  NgElement} from 'angular2/angular2';
import {Nav} from 'ionic/components/nav/nav';
import * as util from 'ionic/util';
class SplitViewportDecorator {
  constructor(splitView, navViewport) {
    splitView.setNav(navViewport);
  }
}
Object.defineProperty(SplitViewportDecorator, "annotations", {get: function() {
    return [new Decorator({selector: 'ion-nav[split-viewport]'})];
  }});
Object.defineProperty(SplitViewportDecorator, "parameters", {get: function() {
    return [[SplitView, new Parent()], [Nav]];
  }});
export class SplitView {
  constructor(element, navPane) {
    this.domElement = element.domElement;
    this.navPane = navPane;
    this.setEnabled(true);
  }
  set defaultView(DefaultClass) {
    this.splitViewport.push(DefaultClass, {sync: true});
  }
  isActive(Class) {
    for (let item of this.splitViewport._stack) {
      if (item.Class === Class)
        return true;
    }
    return false;
  }
  setNav(viewport) {
    this.splitViewport = viewport;
    this.navPane.__$push = this.navPane.push;
    this.navPane.push = (Class, opts) => {
      if (this.isEnabled) {
        opts = opts || {};
        util.defaults(opts, {sync: true});
        if (this.splitViewport.containsClass(Class)) {
          return this.splitViewport.popTo(0);
        } else {
          this.splitViewport.popAll();
          return this.splitViewport.push(Class, opts);
        }
      } else {
        return this.navPane.__$push(Class, opts);
      }
    };
  }
  setEnabled(isEnabled) {
    if (isEnabled !== this.isEnabled) {
      if (isEnabled) {
        this.splitViewport;
      }
      this.isEnabled = isEnabled;
    }
  }
}
Object.defineProperty(SplitView, "annotations", {get: function() {
    return [new Component({
      selector: 'ion-split-view',
      properties: ['defaultView', 'navTitle']
    }), new View({
      template: `
  <ion-view [nav-title]="navTitle" class="split-view">
    <div class="pane-container">
      <content></content>
    </div>
  </ion-view>
  <ion-nav split-viewport>
  </ion-nav>
<style>
ion-split-view {
  width: 100%;
  height: 100%;
  display: flex;
}
ion-split-view > .view.split-view {
  max-width: 300px;
  border-right: 1px solid black;
  z-index: 1;
  background: white;
}
ion-split-view > [split-viewport] {
  left: 300px !important;
  width: calc(100% - 300px);
}

</style>
  `,
      directives: [SplitViewportDecorator, Nav]
    })];
  }});
Object.defineProperty(SplitView, "parameters", {get: function() {
    return [[NgElement], [NavPane, new Parent()]];
  }});
