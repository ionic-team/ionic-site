System.register('ionic/components/nav/nav', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/di/annotations_impl', 'angular2/angular2', 'angular2/src/core/compiler/element_ref', 'angular2/src/core/compiler/dynamic_component_loader', 'angular2/di', '../view/view-controller'], function (_export) {
  'use strict';

  var Component, Directive, onInit, View, Parent, Optional, Compiler, ElementRef, DynamicComponentLoader, Injector, ViewController, Nav, PaneAnchor;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
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
    }],
    execute: function () {
      Nav = (function (_ViewController) {
        function Nav(viewCtrl, compiler, elementRef, loader, injector) {
          _classCallCheck(this, Nav);

          _get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).call(this, viewCtrl, compiler, elementRef, loader, injector);
        }

        _inherits(Nav, _ViewController);

        _createClass(Nav, [{
          key: 'onInit',
          value: function onInit() {
            this.push(this.root);
          }
        }]);

        return Nav;
      })(ViewController);

      _export('Nav', Nav);

      Object.defineProperty(Nav, 'annotations', { get: function get() {
          return [new Component({
            selector: 'ion-nav',
            properties: ['root'],
            lifecycle: [onInit]
          }), new View({
            template: '<template pane-anchor></template>',
            directives: [PaneAnchor]
          })];
        } });
      Object.defineProperty(Nav, 'parameters', { get: function get() {
          return [[ViewController, new Optional()], [Compiler], [ElementRef], [DynamicComponentLoader], [Injector]];
        } });

      PaneAnchor = function PaneAnchor(nav, elementRef) {
        _classCallCheck(this, PaneAnchor);

        nav.anchorElementRef(elementRef);
      };

      Object.defineProperty(PaneAnchor, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[pane-anchor]' })];
        } });
      Object.defineProperty(PaneAnchor, 'parameters', { get: function get() {
          return [[Nav, new Parent()], [ElementRef]];
        } });
    }
  };
});