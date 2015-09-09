System.register('ionic/components/button/button', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'ionic/config/component'], function (_export) {
  'use strict';

  var ElementRef, Component, Directive, IonicComponent_OLD, Button;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_ionicConfigComponent) {
      IonicComponent_OLD = _ionicConfigComponent.IonicComponent_OLD;
    }],
    execute: function () {
      Button = function Button(elementRef) {
        _classCallCheck(this, Button);

        this.domElement = elementRef.domElement;
        this.config = Button.config.invoke(this);
      };

      _export('Button', Button);

      Object.defineProperty(Button, 'annotations', { get: function get() {
          return [new Directive({ selector: 'button, ion-button, [ion-button],.button' })];
        } });
      Object.defineProperty(Button, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });
      new IonicComponent_OLD(Button, {
        enhanceRawElement: true,
        propClasses: ['primary', 'secondary', 'danger', 'light', 'stable', 'dark', 'block', 'clear', 'full', 'icon']
      });
    }
  };
});