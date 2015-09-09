System.register('ionic/components/icon/icon', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/core/compiler/element_ref'], function (_export) {
  'use strict';

  var Directive, onInit, ElementRef, Icon;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }],
    execute: function () {
      Icon = (function () {
        function Icon(elementRef) {
          _classCallCheck(this, Icon);

          this.domElement = elementRef.domElement;
        }

        _createClass(Icon, [{
          key: 'onInit',
          value: function onInit() {
            if (this.name) {
              this.domElement.classList.add(this.name);
              this.label = this.name;
            }
          }
        }]);

        return Icon;
      })();

      _export('Icon', Icon);

      Object.defineProperty(Icon, 'annotations', { get: function get() {
          return [new Directive({
            selector: 'icon',
            properties: ['name'],
            host: {
              '[attr.aria-label]': 'label',
              'role': 'img'
            },
            lifecycle: [onInit]
          })];
        } });
      Object.defineProperty(Icon, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });
    }
  };
});