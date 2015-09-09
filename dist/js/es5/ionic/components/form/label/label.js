System.register('ionic/components/form/label/label', ['angular2/src/core/annotations_impl/annotations'], function (_export) {
  'use strict';

  var Component, Directive, Label;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }],
    execute: function () {
      Label = function Label() {
        _classCallCheck(this, Label);
      };

      _export('Label', Label);

      Object.defineProperty(Label, 'annotations', { get: function get() {
          return [new Directive({ selector: 'ion-label' })];
        } });
    }
  };
});