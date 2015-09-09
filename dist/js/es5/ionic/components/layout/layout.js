System.register('ionic/components/layout/layout', ['angular2/angular2'], function (_export) {
  'use strict';

  var NgElement, Component, View, Parent, Layout;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      NgElement = _angular2Angular2.NgElement;
      Component = _angular2Angular2.Component;
      View = _angular2Angular2.View;
      Parent = _angular2Angular2.Parent;
    }],
    execute: function () {
      Layout = (function () {
        function Layout(ngElement) {
          var _this = this;

          _classCallCheck(this, Layout);

          this.domElement = ngElement.domElement;
          this.eqEle = this.domElement.lastElementChild;
          window.requestAnimationFrame(function () {
            _this.initLayout();
          });
        }

        _createClass(Layout, [{
          key: 'initLayout',
          value: function initLayout() {
            var _this2 = this;

            this.mqs = {};

            var _loop = function (x) {
              var attr = _this2.domElement.attributes[x];
              var val = attr.nodeValue;
              var mqClassname = attr.nodeName;
              if (val.indexOf('(') > -1 && val.indexOf(')') > -1) {
                var mql = _this2.eqEle.contentDocument.defaultView.matchMedia(val);
                if (mql.media !== 'not all') {
                  _this2.mqs[mql.media] = function (mql) {
                    console.log(mql.media, mql.matches, mqClassname);
                    window.requestAnimationFrame(function () {
                      _this2.domElement.classList[mql.matches ? 'add' : 'remove'](mqClassname);
                    });
                  };
                  _this2.mqs[mql.media](mql);
                  mql.addListener(_this2.mqs[mql.media]);
                }
              }
            };

            for (var x = 0; x < this.domElement.attributes.length; x++) {
              _loop(x);
            }
          }
        }]);

        return Layout;
      })();

      _export('Layout', Layout);

      Object.defineProperty(Layout, 'annotations', { get: function get() {
          return [new Component({ selector: 'layout,[layout]' }), new View({ template: '\n    <content></content>\n    <object class="ele-qry" data="about:blank"></object>\n  ' })];
        } });
      Object.defineProperty(Layout, 'parameters', { get: function get() {
          return [[NgElement, new NgElement()]];
        } });
    }
  };
});