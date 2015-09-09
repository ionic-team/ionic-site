import {Optional} from 'angular2/src/di/annotations_impl';
import {Component,
  onInit} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {Compiler} from 'angular2/angular2';
import {DynamicComponentLoader} from 'angular2/src/core/compiler/dynamic_component_loader';
import {Injector} from 'angular2/di';
import {NgFor} from 'angular2/angular2';
import {ViewController} from '../view/view-controller';
import {ViewItem} from '../view/view-item';
import {TabButton} from './tab-button';
import {Icon} from '../icon/icon';
import {IonicComponent} from '../../config/component';
export class Tabs extends ViewController {
  static get config() {
    return {
      selector: 'ion-tabs',
      defaultProperties: {
        'tabBarPlacement': 'bottom',
        'tabBarIcons': 'top'
      }
    };
  }
  constructor(parentViewCtrl, viewItem, compiler, elementRef, loader, injector) {
    super(parentViewCtrl, compiler, elementRef, loader, injector);
    if (viewItem) {
      this.item = viewItem;
      viewItem.navbarView = () => {
        let activeTab = this.getActive();
        if (activeTab && activeTab.instance) {
          return activeTab.instance.navbarView();
        }
      };
      viewItem.enableBack = () => {
        return false;
      };
    }
  }
  onInit() {
    Tabs.applyConfig(this);
  }
  addTab(tab) {
    this.add(tab.item);
    if (this.length() === 1) {
      let promise = tab.queueInitial();
      this.item && this.item.addPromise(promise);
    }
  }
  select(tab) {
    let enteringItem = null;
    if (typeof tab === 'number') {
      enteringItem = this.getByIndex(tab);
    } else {
      enteringItem = this.getByInstance(tab);
    }
    if (!enteringItem || !enteringItem.instance || this.isTransitioning()) {
      return Promise.reject();
    }
    return new Promise((resolve) => {
      enteringItem.instance.load(() => {
        let opts = {animate: false};
        let leavingItem = this.getActive() || new ViewItem();
        leavingItem.shouldDestroy = false;
        leavingItem.shouldCache = true;
        leavingItem.willCache();
        this.transition(enteringItem, leavingItem, opts, () => {
          resolve();
        });
      });
    });
  }
  get tabs() {
    return this.instances();
  }
}
Object.defineProperty(Tabs, "annotations", {get: function() {
    return [new IonicComponent(Tabs), new View({
      template: `
    <nav class="tab-bar-container">
      <div class="tab-bar" role="tablist">
        <button *ng-for="#t of tabs" [tab]="t" class="tab-button" role="tab">
          <icon [name]="t.tabIcon" class="tab-button-icon"></icon>
          <span class="tab-button-text">{{t.tabTitle}}</span>
        </button>
      </div>
    </nav>
    <section class="content-container">
      <content></content>
    </section>
  `,
      directives: [NgFor, TabButton, Icon]
    })];
  }});
Object.defineProperty(Tabs, "parameters", {get: function() {
    return [[ViewController, new Optional()], [ViewItem, new Optional()], [Compiler], [ElementRef], [DynamicComponentLoader], [Injector]];
  }});
