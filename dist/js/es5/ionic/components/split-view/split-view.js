System.register('ionic/components/split-view/split-view', ['angular2/angular2', 'ionic/components/nav/nav', 'ionic/util'], function (_export) {
  'use strict';

  var Component, Parent, Decorator, View, NgElement, Nav, util, SplitViewportDecorator, SplitView;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Component = _angular2Angular2.Component;
      Parent = _angular2Angular2.Parent;
      Decorator = _angular2Angular2.Decorator;
      View = _angular2Angular2.View;
      NgElement = _angular2Angular2.NgElement;
    }, function (_ionicComponentsNavNav) {
      Nav = _ionicComponentsNavNav.Nav;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      SplitViewportDecorator = function SplitViewportDecorator(splitView, navViewport) {
        _classCallCheck(this, SplitViewportDecorator);

        splitView.setNav(navViewport);
      };

      Object.defineProperty(SplitViewportDecorator, 'annotations', { get: function get() {
          return [new Decorator({ selector: 'ion-nav[split-viewport]' })];
        } });
      Object.defineProperty(SplitViewportDecorator, 'parameters', { get: function get() {
          return [[SplitView, new Parent()], [Nav]];
        } });

      SplitView = (function () {
        function SplitView(element, navPane) {
          _classCallCheck(this, SplitView);

          this.domElement = element.domElement;
          this.navPane = navPane;
          this.setEnabled(true);
        }

        _createClass(SplitView, [{
          key: 'isActive',
          value: function isActive(Class) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.splitViewport._stack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                if (item.Class === Class) return true;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return false;
          }
        }, {
          key: 'setNav',
          value: function setNav(viewport) {
            var _this = this;

            this.splitViewport = viewport;
            this.navPane.__$push = this.navPane.push;
            this.navPane.push = function (Class, opts) {
              if (_this.isEnabled) {
                opts = opts || {};
                util.defaults(opts, { sync: true });
                if (_this.splitViewport.containsClass(Class)) {
                  return _this.splitViewport.popTo(0);
                } else {
                  _this.splitViewport.popAll();
                  return _this.splitViewport.push(Class, opts);
                }
              } else {
                return _this.navPane.__$push(Class, opts);
              }
            };
          }
        }, {
          key: 'setEnabled',
          value: function setEnabled(isEnabled) {
            if (isEnabled !== this.isEnabled) {
              if (isEnabled) {
                this.splitViewport;
              }
              this.isEnabled = isEnabled;
            }
          }
        }, {
          key: 'defaultView',
          set: function (DefaultClass) {
            this.splitViewport.push(DefaultClass, { sync: true });
          }
        }]);

        return SplitView;
      })();

      _export('SplitView', SplitView);

      Object.defineProperty(SplitView, 'annotations', { get: function get() {
          return [new Component({
            selector: 'ion-split-view',
            properties: ['defaultView', 'navTitle']
          }), new View({
            template: '\n  <ion-view [nav-title]="navTitle" class="split-view">\n    <div class="pane-container">\n      <content></content>\n    </div>\n  </ion-view>\n  <ion-nav split-viewport>\n  </ion-nav>\n<style>\nion-split-view {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\nion-split-view > .view.split-view {\n  max-width: 300px;\n  border-right: 1px solid black;\n  z-index: 1;\n  background: white;\n}\nion-split-view > [split-viewport] {\n  left: 300px !important;\n  width: calc(100% - 300px);\n}\n\n</style>\n  ',
            directives: [SplitViewportDecorator, Nav]
          })];
        } });
      Object.defineProperty(SplitView, 'parameters', { get: function get() {
          return [[NgElement], [NavPane, new Parent()]];
        } });
    }
  };
});