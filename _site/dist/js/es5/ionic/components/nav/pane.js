System.register('ionic/components/nav/pane', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/core/compiler/view_container_ref', 'angular2/src/core/compiler/element_ref', 'angular2/di', '../view/view-controller', './swipe-handle', '../../config/component'], function (_export) {
  'use strict';

  var Component, Directive, View, Parent, ViewContainerRef, ElementRef, bind, ViewController, SwipeHandle, IonicComponent, PaneController, Pane, PaneAnchor, PaneContentAnchor, NavBarContainer, NavBarAnchor;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreCompilerView_container_ref) {
      ViewContainerRef = _angular2SrcCoreCompilerView_container_ref.ViewContainerRef;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2Di) {
      bind = _angular2Di.bind;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }, function (_swipeHandle) {
      SwipeHandle = _swipeHandle.SwipeHandle;
    }, function (_configComponent) {
      IonicComponent = _configComponent.IonicComponent;
    }],
    execute: function () {
      PaneController = (function () {
        function PaneController(viewCtrl) {
          _classCallCheck(this, PaneController);

          this.panes = {};
          this.viewCtrl = viewCtrl;
        }

        _createClass(PaneController, [{
          key: 'get',
          value: function get(itemStructure, callback) {
            var _this = this;

            var key = itemStructure.key;
            var viewCtrl = this.viewCtrl;
            var pane = this.panes[key];
            if (pane) {
              callback(pane);
            } else {
              this.panes[key] = null;
              var injector = viewCtrl.injector.resolveAndCreateChild([bind(ViewController).toValue(viewCtrl)]);
              viewCtrl.loader.loadNextToExistingLocation(Pane, viewCtrl.anchorElementRef(), injector).then(function () {
                pane = _this.panes[key];
                var sectionAnchorElementRef = pane && pane.sectionAnchorElementRef;
                if (!sectionAnchorElementRef) {
                  return callback();
                }
                var promises = [];
                var sectionsToAdd = [];
                if (itemStructure.navbar) {
                  sectionsToAdd.push(NavBarContainer);
                }
                sectionsToAdd.forEach(function (SectionClass) {
                  promises.push(viewCtrl.loader.loadNextToExistingLocation(SectionClass, sectionAnchorElementRef));
                });
                Promise.all(promises).then(function () {
                  callback(pane);
                });
              });
            }
          }
        }, {
          key: 'add',
          value: function add(pane) {
            for (var np in this.panes) {
              if (this.panes[np] === null) {
                this.panes[np] = pane;
                return;
              }
            }
          }
        }]);

        return PaneController;
      })();

      _export('PaneController', PaneController);

      Object.defineProperty(PaneController, 'parameters', { get: function get() {
          return [[ViewController]];
        } });

      Pane = (function () {
        function Pane(viewCtrl, elementRef) {
          _classCallCheck(this, Pane);

          this.domElement = elementRef.domElement;
          viewCtrl.panes.add(this);
        }

        _createClass(Pane, [{
          key: 'width',
          value: function width() {
            return this.domElement.offsetWidth;
          }
        }, {
          key: 'showPane',
          value: function showPane(val) {
            this.domElement.classList[val ? 'add' : 'remove']('show-pane');
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-pane',
              classId: 'nav'
            };
          }
        }]);

        return Pane;
      })();

      _export('Pane', Pane);

      Object.defineProperty(Pane, 'annotations', { get: function get() {
          return [new IonicComponent(Pane), new View({
            template: '\n    <template pane-anchor></template>\n    <section class="content-container">\n      <template content-anchor></template>\n      <div class="swipe-handle"></div>\n    </section>\n  ',
            directives: [PaneAnchor, PaneContentAnchor, SwipeHandle]
          })];
        } });
      Object.defineProperty(Pane, 'parameters', { get: function get() {
          return [[ViewController], [ElementRef]];
        } });

      PaneAnchor = function PaneAnchor(pane, elementRef) {
        _classCallCheck(this, PaneAnchor);

        pane.sectionAnchorElementRef = elementRef;
      };

      Object.defineProperty(PaneAnchor, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[pane-anchor]' })];
        } });
      Object.defineProperty(PaneAnchor, 'parameters', { get: function get() {
          return [[Pane, new Parent()], [ElementRef]];
        } });

      PaneContentAnchor = function PaneContentAnchor(pane, viewContainerRef) {
        _classCallCheck(this, PaneContentAnchor);

        pane.contentContainerRef = viewContainerRef;
      };

      Object.defineProperty(PaneContentAnchor, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[content-anchor]' })];
        } });
      Object.defineProperty(PaneContentAnchor, 'parameters', { get: function get() {
          return [[Pane, new Parent()], [ViewContainerRef]];
        } });

      NavBarContainer = function NavBarContainer() {
        _classCallCheck(this, NavBarContainer);
      };

      Object.defineProperty(NavBarContainer, 'annotations', { get: function get() {
          return [new Component({
            selector: 'section',
            host: { 'class': 'navbar-container' }
          }), new View({
            template: '<template navbar-anchor></template>',
            directives: [NavBarAnchor]
          })];
        } });

      NavBarAnchor = function NavBarAnchor(viewCtrl, viewContainerRef) {
        _classCallCheck(this, NavBarAnchor);

        viewCtrl.navbarViewContainer(viewContainerRef);
      };

      Object.defineProperty(NavBarAnchor, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[navbar-anchor]' })];
        } });
      Object.defineProperty(NavBarAnchor, 'parameters', { get: function get() {
          return [[ViewController], [ViewContainerRef]];
        } });
    }
  };
});