System.register('ionic/components/form/input/input', ['angular2/src/core/annotations_impl/annotations'], function (_export) {
  'use strict';

  var Component, Directive, Input;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }],
    execute: function () {
      Input = function Input() {
        _classCallCheck(this, Input);

        console.log('INPUT');
      };

      _export('Input', Input);

      Object.defineProperty(Input, 'annotations', { get: function get() {
          return [new Directive({ selector: 'ion-input' })];
        } });
    }
  };
});