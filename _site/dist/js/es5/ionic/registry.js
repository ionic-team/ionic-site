System.register('ionic/registry', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/facade/lang', 'angular2/forms', 'ionic/util', 'ionic/ionic'], function (_export) {
  'use strict';

  var ElementRef, For, Parent, onInit, Component, Directive, View, Ancestor, Self, Type, FormBuilder, Validators, FormDirectives, ControlGroup, Log, IonicApp, Register;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
      For = _angular2Angular2.For;
      Parent = _angular2Angular2.Parent;
      onInit = _angular2Angular2.onInit;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Ancestor = _angular2SrcCoreAnnotations_implVisibility.Ancestor;
      Self = _angular2SrcCoreAnnotations_implVisibility.Self;
    }, function (_angular2SrcFacadeLang) {
      Type = _angular2SrcFacadeLang.Type;
    }, function (_angular2Forms) {
      FormBuilder = _angular2Forms.FormBuilder;
      Validators = _angular2Forms.Validators;
      FormDirectives = _angular2Forms.FormDirectives;
      ControlGroup = _angular2Forms.ControlGroup;
    }, function (_ionicUtil) {
      Log = _ionicUtil.Log;
    }, function (_ionicIonic) {
      IonicApp = _ionicIonic.IonicApp;
    }],
    execute: function () {
      Register = (function () {
        function Register(app) {
          _classCallCheck(this, Register);

          this.app = app;
        }

        _createClass(Register, [{
          key: 'onInit',
          value: function onInit() {
            if (!this.register || !this.registerId) {
              return;
            }
            this.app.register(this.registerId, this.register);
          }
        }]);

        return Register;
      })();

      _export('Register', Register);

      Object.defineProperty(Register, 'annotations', { get: function get() {
          return [new Directive({
            selector: '[register]',
            properties: ['register', 'registerId: register-id'],
            host: { '[register-id]': 'registerId' },
            lifecycle: [onInit]
          })];
        } });
      Object.defineProperty(Register, 'parameters', { get: function get() {
          return [[IonicApp]];
        } });
    }
  };
});