System.register('ionic/components/search-bar/search-bar', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'ionic/config/component'], function (_export) {
  'use strict';

  var ElementRef, Pipe, Component, Directive, onInit, View, IonicComponent, SearchBar;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
      Pipe = _angular2Angular2.Pipe;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_ionicConfigComponent) {
      IonicComponent = _ionicConfigComponent.IonicComponent;
    }],
    execute: function () {
      SearchBar = (function () {
        function SearchBar(elementRef) {
          _classCallCheck(this, SearchBar);

          this.domElement = elementRef.domElement;
          this.query = '';
        }

        _createClass(SearchBar, [{
          key: 'onInit',
          value: function onInit() {
            SearchBar.applyConfig(this);
          }
        }, {
          key: 'writeValue',
          value: function writeValue(value) {
            this.value = value;
          }
        }, {
          key: 'inputChanged',
          value: function inputChanged(event) {
            this.value = event.target.value;
            console.log('Search changed', this.value);
            this.controlDirective._control().updateValue(event.target.value);
          }
        }, {
          key: 'inputFocused',
          value: function inputFocused() {
            this.isFocused = true;
            this.shouldLeftAlign = true;
          }
        }, {
          key: 'inputBlurred',
          value: function inputBlurred() {
            this.isFocused = false;
            this.shouldLeftAlign = this.value.trim() != '';
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-search-bar',
              properties: ['list', 'query'],
              defaultProperties: {
                'cancelText': 'Cancel',
                'placeholder': 'Search'
              }
            };
          }
        }]);

        return SearchBar;
      })();

      _export('SearchBar', SearchBar);

      Object.defineProperty(SearchBar, 'annotations', { get: function get() {
          return [new IonicComponent(SearchBar), new View({ template: '\n  <div class="search-bar-input-container" [class.left-align]="shouldLeftAlign">\n    <div class="search-bar-icon"></div>\n    <input (focus)="inputFocused()" (blur)="inputBlurred()"\n    (input)="inputChanged($event)" class="search-bar-input" type="search" [attr.placeholder]="placeholder">\n  </div>\n  <button class="search-bar-cancel">{{ cancelText }}</button>' })];
        } });
      Object.defineProperty(SearchBar, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });
    }
  };
});