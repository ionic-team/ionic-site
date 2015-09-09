System.register('ionic/components/switch/switch', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/forms', 'ionic/util', 'ionic/config/component'], function (_export) {
  'use strict';

  var Renderer, ElementRef, Component, Directive, View, ControlGroup, ControlDirective, dom, IonicComponent, Switch;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Renderer = _angular2Angular2.Renderer;
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2Forms) {
      ControlGroup = _angular2Forms.ControlGroup;
      ControlDirective = _angular2Forms.ControlDirective;
    }, function (_ionicUtil) {
      dom = _ionicUtil.dom;
    }, function (_ionicConfigComponent) {
      IonicComponent = _ionicConfigComponent.IonicComponent;
    }],
    execute: function () {
      Switch = (function () {
        function Switch(elementRef, cd) {
          var _this = this;

          _classCallCheck(this, Switch);

          this.domElement = elementRef.domElement;
          this.config = Switch.config.invoke(this);
          this.controlDirective = cd;
          cd.valueAccessor = this;
          var setAriaRole = function setAriaRole(v) {
            return _this.domElement.setAttribute('aria-role', v);
          };
          var setAriaChecked = function setAriaChecked(v) {
            return _this.domElement.setAttribute('aria-checked', v);
          };
          var setAriaInvalid = function setAriaInvalid(v) {
            return _this.domElement.setAttribute('aria-invalid', v);
          };
          var setAriaDisabled = function setAriaDisabled(v) {
            return _this.domElement.setAttribute('aria-disabled', v);
          };
          this.domElement.classList.add('item');
          this.setCheckedProperty = setAriaChecked;
        }

        _createClass(Switch, [{
          key: 'writeValue',
          value: function writeValue(value) {
            this.checked = !!value;
          }
        }, {
          key: 'switchClicked',
          value: function switchClicked(event) {
            this.checked = !this.checked;
          }
        }, {
          key: 'checked',
          set: function (checked) {
            this._checked = checked;
            this.setCheckedProperty(checked);
            this.controlDirective._control().updateValue(this._checked);
          },
          get: function () {
            return this._checked;
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-switch',
              properties: ['checked'],
              host: { '(click)': 'switchClicked($event)' }
            };
          }
        }]);

        return Switch;
      })();

      _export('Switch', Switch);

      Object.defineProperty(Switch, 'annotations', { get: function get() {
          return [new IonicComponent(Switch), new View({ template: '\n  <div class="item-content">\n    <div class="item-title">\n      <content></content>\n    </div>\n    <div class="item-media media-switch">\n      <div class="switch-toggle"></div>\n    </div>\n  </div>' })];
        } });
      Object.defineProperty(Switch, 'parameters', { get: function get() {
          return [[ElementRef], [ControlDirective]];
        } });
    }
  };
});