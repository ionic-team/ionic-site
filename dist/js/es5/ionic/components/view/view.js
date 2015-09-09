System.register('ionic/components/view/view', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/core/compiler/element_ref', 'angular2/src/di/annotations_impl', './view-item'], function (_export) {
  'use strict';

  var Directive, ElementRef, Optional, ViewItem, IonView;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2SrcDiAnnotations_impl) {
      Optional = _angular2SrcDiAnnotations_impl.Optional;
    }, function (_viewItem) {
      ViewItem = _viewItem.ViewItem;
    }],
    execute: function () {
      IonView = function IonView(item, elementRef) {
        _classCallCheck(this, IonView);

        console.log('View constructor', item);
        this.domElement = elementRef.domElement;
      };

      _export('IonView', IonView);

      Object.defineProperty(IonView, 'annotations', { get: function get() {
          return [new Directive({ selector: 'ion-view' })];
        } });
      Object.defineProperty(IonView, 'parameters', { get: function get() {
          return [[ViewItem, new Optional()], [ElementRef]];
        } });
    }
  };
});