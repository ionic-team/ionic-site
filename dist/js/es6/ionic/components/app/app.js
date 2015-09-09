import {bootstrap} from 'angular2/angular2';
import {AppViewManager} from 'angular2/src/core/compiler/view_manager';
import {Compiler} from 'angular2/angular2';
import {ElementRef} from 'angular2/src/core/compiler/element_ref';
import {bind} from 'angular2/di';
import {ViewContainerRef} from 'angular2/src/core/compiler/view_container_ref';
import {IonicConfig} from '../../config/config';
import {Platform} from '../../platform/platform';
import {Registry} from '../../registry';
import * as util from '../../util/util';
export class IonicApp {
  constructor() {
    this.overlays = [];
    this.components = {};
  }
  register(key, component) {
    this.components[key] = component;
    console.log('App: Registered component', key, component);
  }
  getComponent(key) {
    return this.components[key];
  }
  config(val) {
    if (arguments.length) {
      this._config = val;
    }
    return this._config;
  }
  appendComponent(ComponentType) {
    return new Promise((resolve, reject) => {
      let injector = this._ref.injector;
      let compiler = injector.get(Compiler);
      let viewMngr = injector.get(AppViewManager);
      let rootComponentRef = this._ref._hostComponent;
      let viewContainerLocation = rootComponentRef.location;
      compiler.compileInHost(ComponentType).then((protoViewRef) => {
        let atIndex = 0;
        let context = null;
        let hostViewRef = viewMngr.createViewInContainer(viewContainerLocation, atIndex, protoViewRef, context, injector);
        hostViewRef.elementRef = new ElementRef(hostViewRef, 0);
        hostViewRef.instance = viewMngr.getComponent(hostViewRef.elementRef);
        hostViewRef.dispose = () => {
          viewMngr.destroyViewInContainer(viewContainerLocation, 0, 0, hostViewRef.viewRef);
        };
        resolve(hostViewRef);
      }).catch((err) => {
        console.error('IonicApp appendComponent:', err);
        reject(err);
      });
    });
  }
  ref(val) {
    if (arguments.length) {
      this._ref = val;
    }
    return this._ref;
  }
  applyCss(bodyEle, platform, config) {
    let className = bodyEle.className;
    platform.platforms().forEach((platformName) => {
      className += ' platform-' + platformName;
    });
    className += ' mode-' + config.setting('mode');
    bodyEle.className = className.trim();
  }
  isRTL(val) {
    if (arguments.length) {
      this._rtl = val;
    }
    return this._rtl;
  }
  lang(val) {
    if (arguments.length) {
      this._lang = val;
    }
    return this._lang;
  }
}
Object.defineProperty(IonicApp.prototype.appendComponent, "parameters", {get: function() {
    return [[Type]];
  }});
export function ionicBootstrap(ComponentType, config) {
  return new Promise((resolve, reject) => {
    try {
      let app = initApp(window, document);
      config = config || new IonicConfig();
      config.setPlatform(Platform);
      GlobalIonicConfig = config;
      app.applyCss(document.body, Platform, config);
      let injectableBindings = [bind(IonicApp).toValue(app), bind(IonicConfig).toValue(config)];
      bootstrap(ComponentType, injectableBindings).then((appRef) => {
        app.ref(appRef);
        resolve(app);
      }).catch((err) => {
        console.error('ionicBootstrap', err);
        reject(err);
      });
    } catch (err) {
      console.error('ionicBootstrap', err);
      reject(err);
    }
  });
}
function initApp(window, document) {
  let app = new IonicApp();
  app.isRTL(document.documentElement.getAttribute('dir') == 'rtl');
  app.lang(document.documentElement.getAttribute('lang'));
  Platform.url(window.location.href);
  Platform.userAgent(window.navigator.userAgent);
  Platform.width(window.innerWidth);
  Platform.height(window.innerHeight);
  Platform.load();
  return app;
}
export let GlobalIonicConfig = null;
export function load(app) {
  if (!app) {
    console.error('Invalid app module');
  } else if (!app.main) {
    console.error('App module missing main()');
  } else {
    app.main(ionicBootstrap);
  }
}
