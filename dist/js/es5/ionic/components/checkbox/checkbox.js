System.register('ionic/components/checkbox/checkbox', ['angular2/angular2', 'angular2/src/facade/lang', 'angular2/src/forms/directives/shared', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/view', 'angular2/forms', '../../config/component', '../icon/icon'], function (_export) {
  'use strict';

  var ElementRef, Renderer, EventEmitter, onChange, onInit, isPresent, setProperty, Component, Directive, Ancestor, View, NgControl, IonicComponent, Icon, Checkbox;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
      Renderer = _angular2Angular2.Renderer;
      EventEmitter = _angular2Angular2.EventEmitter;
      onChange = _angular2Angular2.onChange;
      onInit = _angular2Angular2.onInit;
    }, function (_angular2SrcFacadeLang) {
      isPresent = _angular2SrcFacadeLang.isPresent;
    }, function (_angular2SrcFormsDirectivesShared) {
      setProperty = _angular2SrcFormsDirectivesShared.setProperty;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Ancestor = _angular2SrcCoreAnnotations_implVisibility.Ancestor;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2Forms) {
      NgControl = _angular2Forms.NgControl;
    }, function (_configComponent) {
      IonicComponent = _configComponent.IonicComponent;
    }, function (_iconIcon) {
      Icon = _iconIcon.Icon;
    }],
    execute: function () {
      Checkbox = (function () {
        function Checkbox(ngControl, renderer, elementRef) {
          _classCallCheck(this, Checkbox);

          this.ngControl = ngControl;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.ngControl.valueAccessor = this;
        }

        _createClass(Checkbox, [{
          key: 'onInit',
          value: function onInit() {
            Checkbox.applyConfig(this);
          }
        }, {
          key: 'writeValue',
          value: function writeValue(value) {
            this.checked = !!value;
          }
        }, {
          key: 'onClick',
          value: function onClick() {
            this.checked = !this.checked;
          }
        }, {
          key: 'registerOnChange',
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: 'registerOnTouched',
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: 'checked',
          set: function (checked) {
            this._checked = checked;
            setProperty(this.renderer, this.elementRef, 'checked', checked);
          },
          get: function () {
            return this._checked;
          }
        }, {
          key: 'ngClassUntouched',
          get: function () {
            return isPresent(this.ngControl.control) ? this.ngControl.control.untouched : false;
          }
        }, {
          key: 'ngClassTouched',
          get: function () {
            return isPresent(this.ngControl.control) ? this.ngControl.control.touched : false;
          }
        }, {
          key: 'ngClassPristine',
          get: function () {
            return isPresent(this.ngControl.control) ? this.ngControl.control.pristine : false;
          }
        }, {
          key: 'ngClassDirty',
          get: function () {
            return isPresent(this.ngControl.control) ? this.ngControl.control.dirty : false;
          }
        }, {
          key: 'ngClassValid',
          get: function () {
            return isPresent(this.ngControl.control) ? this.ngControl.control.valid : false;
          }
        }, {
          key: 'ngClassInvalid',
          get: function () {
            return isPresent(this.ngControl.control) ? !this.ngControl.control.valid : false;
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-checkbox',
              properties: ['checked', 'disabled', 'value'],
              defaultProperties: {
                'iconOff': 'ion-ios-circle-outline',
                'iconOn': 'ion-ios-checkmark'
              },
              host: {
                '(^click)': 'onClick($event)',
                '(blur)': 'onTouched()',
                '[checked]': 'checked',
                '[attr.aria-checked]': 'checked',
                '[attr.aria-disabled]': 'disabled',
                '[attr.value]': 'value',
                'role': 'checkbox',
                'class': 'item',
                '[class.ng-untouched]': 'ngClassUntouched',
                '[class.ng-touched]': 'ngClassTouched',
                '[class.ng-pristine]': 'ngClassPristine',
                '[class.ng-dirty]': 'ngClassDirty',
                '[class.ng-valid]': 'ngClassValid',
                '[class.ng-invalid]': 'ngClassInvalid'
              },
              appInjector: [NgControl]
            };
          }
        }]);

        return Checkbox;
      })();

      _export('Checkbox', Checkbox);

      Object.defineProperty(Checkbox, 'annotations', { get: function get() {
          return [new IonicComponent(Checkbox), new View({
            template: '\n  <div class="item-media media-checkbox">\n    <icon [name]="iconOff" class="checkbox-off"></icon>\n    <icon [name]="iconOn" class="checkbox-on"></icon>\n  </div>\n  <div class="item-content">\n    <div class="item-label">\n      <content></content>\n    </div>\n  </div>',
            directives: [Icon]
          })];
        } });
      Object.defineProperty(Checkbox, 'parameters', { get: function get() {
          return [[NgControl], [Renderer], [ElementRef]];
        } });
    }
  };
});