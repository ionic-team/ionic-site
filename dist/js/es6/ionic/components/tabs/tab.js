import {Parent} from 'angular2/src/core/annotations_impl/visibility';
import {Directive,
  Component,
  onInit} from 'angular2/src/core/annotations_impl/annotations';
import {Optional} from 'angular2/src/di/annotations_impl';
import {View} from 'angular2/src/core/annotations_impl/view';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {Compiler} from 'angular2/angular2';
import {DynamicComponentLoader} from 'angular2/src/core/compiler/dynamic_component_loader';
import {Injector} from 'angular2/di';
import {ViewController} from '../view/view-controller';
import {ViewItem} from '../view/view-item';
import {Tabs} from './tabs';
import {Content} from '../content/content';
export class Tab extends ViewController {
  constructor(tabs, compiler, elementRef, loader, injector) {
    super(tabs, compiler, elementRef, loader, injector);
    this.tabs = tabs;
    this.childNavbar(true);
    let item = this.item = new ViewItem(tabs.parent);
    item.setInstance(this);
    item.viewElement(elementRef.domElement);
    tabs.addTab(this);
    this.navbarView = item.navbarView = () => {
      let activeItem = this.getActive();
      return activeItem && activeItem.navbarView();
    };
    this.panelId = 'tab-panel-' + item.id;
    this.labeledBy = 'tab-button-' + item.id;
  }
  onInit() {
    if (this._initialResolve) {
      this.tabs.select(this).then(() => {
        this._initialResolve();
        this._initialResolve = null;
      });
    }
  }
  load(callback) {
    if (!this._loaded && this.root) {
      let opts = {
        animate: false,
        navbar: false
      };
      this.push(this.root, null, opts).then(() => {
        callback && callback();
      });
      this._loaded = true;
    } else {
      callback && callback();
    }
  }
  queueInitial() {
    return new Promise((res) => {
      this._initialResolve = res;
    });
  }
  get isSelected() {
    return this.tabs.isActive(this.item);
  }
}
Object.defineProperty(Tab, "annotations", {get: function() {
    return [new Component({
      selector: 'ion-tab',
      properties: ['root', 'tabTitle', 'tabIcon'],
      host: {
        '[attr.id]': 'panelId',
        '[attr.aria-labelledby]': 'labeledBy',
        '[attr.aria-hidden]': '!isSelected',
        '[class.tab-selected]': 'isSelected',
        'role': 'tabpanel'
      }
    }), new View({
      template: '<template pane-anchor></template><content></content>',
      directives: [TabPaneAnchor]
    })];
  }});
Object.defineProperty(Tab, "parameters", {get: function() {
    return [[Tabs, new Parent()], [Compiler], [ElementRef], [DynamicComponentLoader], [Injector]];
  }});
class TabPaneAnchor {
  constructor(tab, elementRef) {
    tab.anchorElementRef(elementRef);
  }
}
Object.defineProperty(TabPaneAnchor, "annotations", {get: function() {
    return [new Directive({selector: 'template[pane-anchor]'})];
  }});
Object.defineProperty(TabPaneAnchor, "parameters", {get: function() {
    return [[Tab, new Parent()], [ElementRef]];
  }});
