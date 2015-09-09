System.register('ionic/components/tabs/tabs', ['angular2/src/di/annotations_impl', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/compiler/element_ref', 'angular2/angular2', 'angular2/src/core/compiler/dynamic_component_loader', 'angular2/di', '../view/view-controller', '../view/view-item', './tab-button', '../icon/icon', '../../config/component'], function (_export) {
  'use strict';

  var Optional, Component, onInit, View, ElementRef, Compiler, NgFor, DynamicComponentLoader, Injector, ViewController, ViewItem, TabButton, Icon, IonicComponent, Tabs;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2SrcDiAnnotations_impl) {
      Optional = _angular2SrcDiAnnotations_impl.Optional;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2Angular2) {
      Compiler = _angular2Angular2.Compiler;
      NgFor = _angular2Angular2.NgFor;
    }, function (_angular2SrcCoreCompilerDynamic_component_loader) {
      DynamicComponentLoader = _angular2SrcCoreCompilerDynamic_component_loader.DynamicComponentLoader;
    }, function (_angular2Di) {
      Injector = _angular2Di.Injector;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }, function (_viewViewItem) {
      ViewItem = _viewViewItem.ViewItem;
    }, function (_tabButton) {
      TabButton = _tabButton.TabButton;
    }, function (_iconIcon) {
      Icon = _iconIcon.Icon;
    }, function (_configComponent) {
      IonicComponent = _configComponent.IonicComponent;
    }],
    execute: function () {
      Tabs = (function (_ViewController) {
        function Tabs(parentViewCtrl, viewItem, compiler, elementRef, loader, injector) {
          var _this = this;

          _classCallCheck(this, Tabs);

          _get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).call(this, parentViewCtrl, compiler, elementRef, loader, injector);
          if (viewItem) {
            this.item = viewItem;
            viewItem.navbarView = function () {
              var activeTab = _this.getActive();
              if (activeTab && activeTab.instance) {
                return activeTab.instance.navbarView();
              }
            };
            viewItem.enableBack = function () {
              return false;
            };
          }
        }

        _inherits(Tabs, _ViewController);

        _createClass(Tabs, [{
          key: 'onInit',
          value: function onInit() {
            Tabs.applyConfig(this);
          }
        }, {
          key: 'addTab',
          value: function addTab(tab) {
            this.add(tab.item);
            if (this.length() === 1) {
              var promise = tab.queueInitial();
              this.item && this.item.addPromise(promise);
            }
          }
        }, {
          key: 'select',
          value: function select(tab) {
            var _this2 = this;

            var enteringItem = null;
            if (typeof tab === 'number') {
              enteringItem = this.getByIndex(tab);
            } else {
              enteringItem = this.getByInstance(tab);
            }
            if (!enteringItem || !enteringItem.instance || this.isTransitioning()) {
              return Promise.reject();
            }
            return new Promise(function (resolve) {
              enteringItem.instance.load(function () {
                var opts = { animate: false };
                var leavingItem = _this2.getActive() || new ViewItem();
                leavingItem.shouldDestroy = false;
                leavingItem.shouldCache = true;
                leavingItem.willCache();
                _this2.transition(enteringItem, leavingItem, opts, function () {
                  resolve();
                });
              });
            });
          }
        }, {
          key: 'tabs',
          get: function () {
            return this.instances();
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-tabs',
              defaultProperties: {
                'tabBarPlacement': 'bottom',
                'tabBarIcons': 'top'
              }
            };
          }
        }]);

        return Tabs;
      })(ViewController);

      _export('Tabs', Tabs);

      Object.defineProperty(Tabs, 'annotations', { get: function get() {
          return [new IonicComponent(Tabs), new View({
            template: '\n    <nav class="tab-bar-container">\n      <div class="tab-bar" role="tablist">\n        <button *ng-for="#t of tabs" [tab]="t" class="tab-button" role="tab">\n          <icon [name]="t.tabIcon" class="tab-button-icon"></icon>\n          <span class="tab-button-text">{{t.tabTitle}}</span>\n        </button>\n      </div>\n    </nav>\n    <section class="content-container">\n      <content></content>\n    </section>\n  ',
            directives: [NgFor, TabButton, Icon]
          })];
        } });
      Object.defineProperty(Tabs, 'parameters', { get: function get() {
          return [[ViewController, new Optional()], [ViewItem, new Optional()], [Compiler], [ElementRef], [DynamicComponentLoader], [Injector]];
        } });
    }
  };
});