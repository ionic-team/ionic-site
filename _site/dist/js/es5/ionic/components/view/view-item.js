System.register('ionic/components/view/view-item', ['angular2/angular2', 'angular2/src/core/compiler/view_container_ref', 'angular2/src/core/compiler/element_ref', 'angular2/di', '../view/view-controller', '../nav/nav-controller', '../nav/nav-params'], function (_export) {
  'use strict';

  var EventEmitter, ViewContainerRef, ElementRef, bind, ViewController, NavController, NavParams, ViewItem;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function isComponent(elementBinder, id) {
    return elementBinder && elementBinder.componentDirective && elementBinder.componentDirective.metadata.id == id;
  }
  return {
    setters: [function (_angular2Angular2) {
      EventEmitter = _angular2Angular2.EventEmitter;
    }, function (_angular2SrcCoreCompilerView_container_ref) {
      ViewContainerRef = _angular2SrcCoreCompilerView_container_ref.ViewContainerRef;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2Di) {
      bind = _angular2Di.bind;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }, function (_navNavController) {
      NavController = _navNavController.NavController;
    }, function (_navNavParams) {
      NavParams = _navNavParams.NavParams;
    }],
    execute: function () {
      ViewItem = (function () {
        function ViewItem(viewCtrl, ComponentType) {
          var params = arguments[2] === undefined ? {} : arguments[2];

          _classCallCheck(this, ViewItem);

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

        _createClass(ViewItem, [{
          key: 'addProtoViewRef',
          value: function addProtoViewRef(name, protoViewRef) {
            this.protos[name] = protoViewRef;
          }
        }, {
          key: 'stage',
          value: function stage(callback) {
            var _this = this;

            var viewCtrl = this.viewCtrl;
            if (this.instance || !viewCtrl) {
              return callback();
            }
            viewCtrl.compiler.compileInHost(this.ComponentType).then(function (componentProtoViewRef) {
              var itemStructure = _this.sturcture = _this.inspectStructure(componentProtoViewRef);
              viewCtrl.panes.get(itemStructure, function (pane) {
                _this.pane = pane;
                var injector = viewCtrl.injector.resolveAndCreateChild([bind(ViewController).toValue(viewCtrl), bind(NavController).toValue(viewCtrl.navCtrl), bind(NavParams).toValue(_this.params), bind(ViewItem).toValue(_this)]);
                var contentContainer = pane.contentContainerRef;
                var hostViewRef = contentContainer.create(componentProtoViewRef, -1, null, injector);
                _this.setInstance(viewCtrl.loader._viewManager.getComponent(new ElementRef(hostViewRef, 0)));
                _this.viewElement(hostViewRef._view.render._view.rootNodes[0]);
                _this.disposals.push(function () {
                  contentContainer.remove(contentContainer.indexOf(hostViewRef));
                });
                var context = {
                  boundElementIndex: 0,
                  parentView: { _view: hostViewRef._view.componentChildViews[0] }
                };
                var navbarViewContainer = viewCtrl.navbarViewContainer();
                var navbarProtoView = _this.protos.navbar;
                if (navbarViewContainer && navbarProtoView) {
                  (function () {
                    var navbarView = navbarViewContainer.create(navbarProtoView, -1, context, injector);
                    _this.disposals.push(function () {
                      navbarViewContainer.remove(navbarViewContainer.indexOf(navbarView));
                    });
                  })();
                }
                _this.loaded();
                Promise.all(_this._promises).then(function () {
                  callback();
                  _this._promises = [];
                });
              });
            });
          }
        }, {
          key: 'addPromise',
          value: function addPromise(childPromise) {
            this._promises.push(childPromise);
          }
        }, {
          key: 'inspectStructure',
          value: function inspectStructure(componentProtoViewRef) {
            var navbar = false;
            var key = '_';
            componentProtoViewRef._protoView.elementBinders.forEach(function (rootElementBinder) {
              if (!rootElementBinder.componentDirective || !rootElementBinder.nestedProtoView) return;
              rootElementBinder.nestedProtoView.elementBinders.forEach(function (nestedElementBinder) {
                if (isComponent(nestedElementBinder, 'Tabs')) {
                  navbar = true;
                }
                if (!nestedElementBinder.componentDirective && nestedElementBinder.nestedProtoView) {
                  nestedElementBinder.nestedProtoView.elementBinders.forEach(function (templatedElementBinder) {
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
            if (navbar) key += 'n';
            return {
              navbar: navbar,
              key: key
            };
          }
        }, {
          key: 'enableBack',
          value: function enableBack() {
            if (this.viewCtrl) {
              return !!this.viewCtrl.getPrevious(this);
            }
            return false;
          }
        }, {
          key: 'setInstance',
          value: function setInstance(instance) {
            this.instance = instance;
            this.instance._viewItem = this;
            this.instance._viewDidEnter = new EventEmitter('viewDidEnter');
            this.instance._viewWillEnter = new EventEmitter('viewWillEnter');
          }
        }, {
          key: 'cache',
          value: function cache() {
            this.didCache();
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            for (var i = 0; i < this.disposals.length; i++) {
              this.disposals[i]();
            }
            this.didUnload();
            for (var _name in this) {
              if (this.hasOwnProperty(_name)) {
                this[_name] = null;
              }
            }
          }
        }, {
          key: 'viewElement',
          value: function viewElement() {
            if (arguments.length) {
              this._vwEle = arguments[0];
              this._vwEle && this._vwEle.classList.add('nav-item');
            }
            return this._vwEle;
          }
        }, {
          key: 'navbarView',
          value: function navbarView() {
            if (arguments.length) {
              this._nbView = arguments[0];
            }
            return this._nbView;
          }
        }, {
          key: 'navbarElement',
          value: function navbarElement() {
            var navbarView = this.navbarView();
            if (navbarView) {
              return navbarView.element();
            }
          }
        }, {
          key: 'titleElement',
          value: function titleElement() {
            var navbarView = this.navbarView();
            if (navbarView) {
              return navbarView.titleElement();
            }
          }
        }, {
          key: 'backButtonElement',
          value: function backButtonElement() {
            var navbarView = this.navbarView();
            if (navbarView) {
              return navbarView.backButtonElement();
            }
          }
        }, {
          key: 'backButtonTextElement',
          value: function backButtonTextElement() {
            var navbarView = this.navbarView();
            if (navbarView) {
              return navbarView.backButtonTextElement();
            }
          }
        }, {
          key: 'navbarItemElements',
          value: function navbarItemElements() {
            var navbarView = this.navbarView();
            if (navbarView) {
              return navbarView.itemElements();
            }
          }
        }, {
          key: 'postRender',
          value: function postRender() {
            var navbarView = this.navbarView();
            if (navbarView) {
              navbarView.alignTitle();
            }
          }
        }, {
          key: 'loaded',
          value: function loaded() {
            this.instance && this.instance.viewLoaded && this.instance.viewLoaded();
          }
        }, {
          key: 'willEnter',
          value: function willEnter() {
            this.instance && this.instance.viewWillEnter && this.instance.viewWillEnter();
            this.instance && this.instance._viewWillEnter.next();
          }
        }, {
          key: 'didEnter',
          value: function didEnter() {
            this.pane && this.pane.showPane(true);
            var navbarView = this.navbarView();
            if (navbarView) {
              navbarView.didEnter();
            }
            this.instance && this.instance.viewDidEnter && this.instance.viewDidEnter();
            this.instance && this.instance._viewDidEnter.next();
          }
        }, {
          key: 'willLeave',
          value: function willLeave() {
            this.instance && this.instance.viewWillLeave && this.instance.viewWillLeave();
          }
        }, {
          key: 'didLeave',
          value: function didLeave() {
            this.instance && this.instance.viewDidLeave && this.instance.viewDidLeave();
          }
        }, {
          key: 'willCache',
          value: function willCache() {
            this.instance && this.instance.viewWillCache && this.instance.viewWillCache();
          }
        }, {
          key: 'didCache',
          value: function didCache() {
            this.instance && this.instance.viewDidCache && this.instance.viewDidCache();
          }
        }, {
          key: 'willUnload',
          value: function willUnload() {
            this.instance && this.instance.viewWillUnload && this.instance.viewWillUnload();
          }
        }, {
          key: 'didUnload',
          value: function didUnload() {
            this.instance && this.instance.viewDidUnload && this.instance.viewDidUnload();
          }
        }]);

        return ViewItem;
      })();

      _export('ViewItem', ViewItem);
    }
  };
});