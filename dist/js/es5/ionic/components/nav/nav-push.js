System.register('ionic/components/nav/nav-push', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/di/annotations_impl', 'angular2/angular2', 'angular2/src/core/compiler/element_ref', 'angular2/src/core/compiler/dynamic_component_loader', 'angular2/di', '../view/view-controller', './nav-controller'], function (_export) {
  'use strict';

  var Directive, onInit, Optional, Compiler, ElementRef, DynamicComponentLoader, Injector, ViewController, NavController, NavPush, NavPop;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcDiAnnotations_impl) {
      Optional = _angular2SrcDiAnnotations_impl.Optional;
    }, function (_angular2Angular2) {
      Compiler = _angular2Angular2.Compiler;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2SrcCoreCompilerDynamic_component_loader) {
      DynamicComponentLoader = _angular2SrcCoreCompilerDynamic_component_loader.DynamicComponentLoader;
    }, function (_angular2Di) {
      Injector = _angular2Di.Injector;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }, function (_navController) {
      NavController = _navController.NavController;
    }],
    execute: function () {
      NavPush = (function () {
        function NavPush(nav) {
          _classCallCheck(this, NavPush);

          this.nav = nav;
        }

        _createClass(NavPush, [{
          key: 'onClick',
          value: function onClick(event) {
            this.nav.push(this.navPush, this.pushData);
          }
        }]);

        return NavPush;
      })();

      _export('NavPush', NavPush);

      Object.defineProperty(NavPush, 'annotations', { get: function get() {
          return [new Directive({
            selector: '[nav-push]',
            properties: ['navPush', 'pushData'],
            host: {
              '(^click)': 'onClick($event)',
              'role': 'link'
            }
          })];
        } });
      Object.defineProperty(NavPush, 'parameters', { get: function get() {
          return [[NavController]];
        } });

      NavPop = (function () {
        function NavPop(nav) {
          _classCallCheck(this, NavPop);

          this.nav = nav;
        }

        _createClass(NavPop, [{
          key: 'onClick',
          value: function onClick(event) {
            this.nav.pop();
          }
        }]);

        return NavPop;
      })();

      _export('NavPop', NavPop);

      Object.defineProperty(NavPop, 'annotations', { get: function get() {
          return [new Directive({
            selector: '[nav-pop]',
            host: {
              '(^click)': 'onClick($event)',
              'role': 'link'
            }
          })];
        } });
      Object.defineProperty(NavPop, 'parameters', { get: function get() {
          return [[NavController]];
        } });
    }
  };
});