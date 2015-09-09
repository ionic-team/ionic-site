System.register('ionic/components/tabs/tab', ['angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/di/annotations_impl', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/compiler/element_ref', 'angular2/angular2', 'angular2/src/core/compiler/dynamic_component_loader', 'angular2/di', '../view/view-controller', '../view/view-item', './tabs', '../content/content'], function (_export) {
  'use strict';

  var Parent, Directive, Component, onInit, Optional, View, ElementRef, Compiler, DynamicComponentLoader, Injector, ViewController, ViewItem, Tabs, Content, Tab, TabPaneAnchor;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcDiAnnotations_impl) {
      Optional = _angular2SrcDiAnnotations_impl.Optional;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2Angular2) {
      Compiler = _angular2Angular2.Compiler;
    }, function (_angular2SrcCoreCompilerDynamic_component_loader) {
      DynamicComponentLoader = _angular2SrcCoreCompilerDynamic_component_loader.DynamicComponentLoader;
    }, function (_angular2Di) {
      Injector = _angular2Di.Injector;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }, function (_viewViewItem) {
      ViewItem = _viewViewItem.ViewItem;
    }, function (_tabs) {
      Tabs = _tabs.Tabs;
    }, function (_contentContent) {
      Content = _contentContent.Content;
    }],
    execute: function () {
      Tab = (function (_ViewController) {
        function Tab(tabs, compiler, elementRef, loader, injector) {
          var _this = this;

          _classCallCheck(this, Tab);

          _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).call(this, tabs, compiler, elementRef, loader, injector);
          this.tabs = tabs;
          this.childNavbar(true);
          var item = this.item = new ViewItem(tabs.parent);
          item.setInstance(this);
          item.viewElement(elementRef.domElement);
          tabs.addTab(this);
          this.navbarView = item.navbarView = function () {
            var activeItem = _this.getActive();
            return activeItem && activeItem.navbarView();
          };
          this.panelId = 'tab-panel-' + item.id;
          this.labeledBy = 'tab-button-' + item.id;
        }

        _inherits(Tab, _ViewController);

        _createClass(Tab, [{
          key: 'onInit',
          value: function onInit() {
            var _this2 = this;

            if (this._initialResolve) {
              this.tabs.select(this).then(function () {
                _this2._initialResolve();
                _this2._initialResolve = null;
              });
            }
          }
        }, {
          key: 'load',
          value: function load(callback) {
            if (!this._loaded && this.root) {
              var opts = {
                animate: false,
                navbar: false
              };
              this.push(this.root, null, opts).then(function () {
                callback && callback();
              });
              this._loaded = true;
            } else {
              callback && callback();
            }
          }
        }, {
          key: 'queueInitial',
          value: function queueInitial() {
            var _this3 = this;

            return new Promise(function (res) {
              _this3._initialResolve = res;
            });
          }
        }, {
          key: 'isSelected',
          get: function () {
            return this.tabs.isActive(this.item);
          }
        }]);

        return Tab;
      })(ViewController);

      _export('Tab', Tab);

      Object.defineProperty(Tab, 'annotations', { get: function get() {
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
        } });
      Object.defineProperty(Tab, 'parameters', { get: function get() {
          return [[Tabs, new Parent()], [Compiler], [ElementRef], [DynamicComponentLoader], [Injector]];
        } });

      TabPaneAnchor = function TabPaneAnchor(tab, elementRef) {
        _classCallCheck(this, TabPaneAnchor);

        tab.anchorElementRef(elementRef);
      };

      Object.defineProperty(TabPaneAnchor, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[pane-anchor]' })];
        } });
      Object.defineProperty(TabPaneAnchor, 'parameters', { get: function get() {
          return [[Tab, new Parent()], [ElementRef]];
        } });
    }
  };
});