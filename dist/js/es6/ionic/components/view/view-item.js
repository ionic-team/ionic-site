import {EventEmitter} from 'angular2/angular2';
import {ViewContainerRef} from 'angular2/src/core/compiler/view_container_ref';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {bind} from 'angular2/di';
import {ViewController} from '../view/view-controller';
import {NavController} from '../nav/nav-controller';
import {NavParams} from '../nav/nav-params';
export class ViewItem {
  constructor(viewCtrl, ComponentType, params = {}) {
    this.viewCtrl = viewCtrl;
    this.ComponentType = ComponentType;
    this.params = new NavParams(params);
    this.instance = null;
    this.state = 0;
    this.disposals = [];
    this.protos = {};
    this._nbItms = [];
    this._promises = [];
  }
  addProtoViewRef(name, protoViewRef) {
    this.protos[name] = protoViewRef;
  }
  stage(callback) {
    let viewCtrl = this.viewCtrl;
    if (this.instance || !viewCtrl) {
      return callback();
    }
    viewCtrl.compiler.compileInHost(this.ComponentType).then((componentProtoViewRef) => {
      let itemStructure = this.sturcture = this.inspectStructure(componentProtoViewRef);
      viewCtrl.panes.get(itemStructure, (pane) => {
        this.pane = pane;
        let injector = viewCtrl.injector.resolveAndCreateChild([bind(ViewController).toValue(viewCtrl), bind(NavController).toValue(viewCtrl.navCtrl), bind(NavParams).toValue(this.params), bind(ViewItem).toValue(this)]);
        let contentContainer = pane.contentContainerRef;
        let hostViewRef = contentContainer.create(componentProtoViewRef, -1, null, injector);
        this.setInstance(viewCtrl.loader._viewManager.getComponent(new ElementRef(hostViewRef, 0)));
        this.viewElement(hostViewRef._view.render._view.rootNodes[0]);
        this.disposals.push(() => {
          contentContainer.remove(contentContainer.indexOf(hostViewRef));
        });
        let context = {
          boundElementIndex: 0,
          parentView: {_view: hostViewRef._view.componentChildViews[0]}
        };
        let navbarViewContainer = viewCtrl.navbarViewContainer();
        let navbarProtoView = this.protos.navbar;
        if (navbarViewContainer && navbarProtoView) {
          let navbarView = navbarViewContainer.create(navbarProtoView, -1, context, injector);
          this.disposals.push(() => {
            navbarViewContainer.remove(navbarViewContainer.indexOf(navbarView));
          });
        }
        this.loaded();
        Promise.all(this._promises).then(() => {
          callback();
          this._promises = [];
        });
      });
    });
  }
  addPromise(childPromise) {
    this._promises.push(childPromise);
  }
  inspectStructure(componentProtoViewRef) {
    let navbar = false;
    let key = '_';
    componentProtoViewRef._protoView.elementBinders.forEach((rootElementBinder) => {
      if (!rootElementBinder.componentDirective || !rootElementBinder.nestedProtoView)
        return;
      rootElementBinder.nestedProtoView.elementBinders.forEach((nestedElementBinder) => {
        if (isComponent(nestedElementBinder, 'Tabs')) {
          navbar = true;
        }
        if (!nestedElementBinder.componentDirective && nestedElementBinder.nestedProtoView) {
          nestedElementBinder.nestedProtoView.elementBinders.forEach((templatedElementBinder) => {
            if (isComponent(templatedElementBinder, 'Navbar')) {
              navbar = true;
            }
          });
        }
      });
    });
    if (this.viewCtrl.childNavbar()) {
      navbar = false;
    }
    if (navbar)
      key += 'n';
    return {
      navbar,
      key
    };
  }
  enableBack() {
    if (this.viewCtrl) {
      return !!this.viewCtrl.getPrevious(this);
    }
    return false;
  }
  setInstance(instance) {
    this.instance = instance;
    this.instance._viewItem = this;
    this.instance._viewDidEnter = new EventEmitter('viewDidEnter');
    this.instance._viewWillEnter = new EventEmitter('viewWillEnter');
  }
  cache() {
    this.didCache();
  }
  destroy() {
    for (let i = 0; i < this.disposals.length; i++) {
      this.disposals[i]();
    }
    this.didUnload();
    for (let name in this) {
      if (this.hasOwnProperty(name)) {
        this[name] = null;
      }
    }
  }
  viewElement() {
    if (arguments.length) {
      this._vwEle = arguments[0];
      this._vwEle && this._vwEle.classList.add('nav-item');
    }
    return this._vwEle;
  }
  navbarView() {
    if (arguments.length) {
      this._nbView = arguments[0];
    }
    return this._nbView;
  }
  navbarElement() {
    let navbarView = this.navbarView();
    if (navbarView) {
      return navbarView.element();
    }
  }
  titleElement() {
    let navbarView = this.navbarView();
    if (navbarView) {
      return navbarView.titleElement();
    }
  }
  backButtonElement() {
    let navbarView = this.navbarView();
    if (navbarView) {
      return navbarView.backButtonElement();
    }
  }
  backButtonTextElement() {
    let navbarView = this.navbarView();
    if (navbarView) {
      return navbarView.backButtonTextElement();
    }
  }
  navbarItemElements() {
    let navbarView = this.navbarView();
    if (navbarView) {
      return navbarView.itemElements();
    }
  }
  postRender() {
    let navbarView = this.navbarView();
    if (navbarView) {
      navbarView.alignTitle();
    }
  }
  loaded() {
    this.instance && this.instance.viewLoaded && this.instance.viewLoaded();
  }
  willEnter() {
    this.instance && this.instance.viewWillEnter && this.instance.viewWillEnter();
    this.instance && this.instance._viewWillEnter.next();
  }
  didEnter() {
    this.pane && this.pane.showPane(true);
    let navbarView = this.navbarView();
    if (navbarView) {
      navbarView.didEnter();
    }
    this.instance && this.instance.viewDidEnter && this.instance.viewDidEnter();
    this.instance && this.instance._viewDidEnter.next();
  }
  willLeave() {
    this.instance && this.instance.viewWillLeave && this.instance.viewWillLeave();
  }
  didLeave() {
    this.instance && this.instance.viewDidLeave && this.instance.viewDidLeave();
  }
  willCache() {
    this.instance && this.instance.viewWillCache && this.instance.viewWillCache();
  }
  didCache() {
    this.instance && this.instance.viewDidCache && this.instance.viewDidCache();
  }
  willUnload() {
    this.instance && this.instance.viewWillUnload && this.instance.viewWillUnload();
  }
  didUnload() {
    this.instance && this.instance.viewDidUnload && this.instance.viewDidUnload();
  }
}
function isComponent(elementBinder, id) {
  return (elementBinder && elementBinder.componentDirective && elementBinder.componentDirective.metadata.id == id);
}
