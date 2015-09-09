System.register('ionic/components/content/content', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view'], function (_export) {
  'use strict';

  var ElementRef, Component, View, Content;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }],
    execute: function () {
      Content = (function () {
        function Content(elementRef) {
          var _this = this;

          _classCallCheck(this, Content);

          this.domElement = elementRef.domElement;
          setTimeout(function () {
            _this.scrollElement = _this.domElement.children[0];
          });
        }

        _createClass(Content, [{
          key: 'addScrollEventListener',
          value: function addScrollEventListener(handler) {
            var _this2 = this;

            if (!this.scrollElement) {
              return;
            }
            this.scrollElement.addEventListener('scroll', handler);
            return function () {
              _this2.scrollElement.removeEventListener('scroll', handler);
            };
          }
        }]);

        return Content;
      })();

      _export('Content', Content);

      Object.defineProperty(Content, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-content' }), new View({ template: '<div class="scroll-content"><content></content></div>' })];
        } });
      Object.defineProperty(Content, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });
    }
  };
});