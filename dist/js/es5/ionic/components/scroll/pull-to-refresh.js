System.register('ionic/components/scroll/pull-to-refresh', ['angular2/angular2', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'ionic/ionic'], function (_export) {
  'use strict';

  var Renderer, ElementRef, EventEmitter, Parent, Component, Directive, View, Content, Refresher;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Renderer = _angular2Angular2.Renderer;
      ElementRef = _angular2Angular2.ElementRef;
      EventEmitter = _angular2Angular2.EventEmitter;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_ionicIonic) {
      Content = _ionicIonic.Content;
    }],
    execute: function () {
      Refresher = (function () {
        function Refresher(content, element) {
          _classCallCheck(this, Refresher);

          this.domElement = element.domElement;
          this.domElement.classList.add('content');
          this.refresh = new EventEmitter('refresh');
          setTimeout(function () {
            content.scrollElement.addEventListener('scroll', function (e) {
              console.log('CONTENT: scroll', e.target.scrollTop);
            });
          }, 1000);
        }

        _createClass(Refresher, [{
          key: 'doRefresh',
          value: function doRefresh() {
            console.log('REFRESH');
            this.refresh.next({ amt: 0 });
          }
        }]);

        return Refresher;
      })();

      _export('Refresher', Refresher);

      Object.defineProperty(Refresher, 'annotations', { get: function get() {
          return [new Component({
            selector: 'ion-refresher',
            events: ['refresh']
          }), new View({ template: '<div class="refresher"></div>' })];
        } });
      Object.defineProperty(Refresher, 'parameters', { get: function get() {
          return [[Content, new Parent()], [ElementRef]];
        } });
    }
  };
});