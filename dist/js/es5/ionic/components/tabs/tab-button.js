System.register('ionic/components/tabs/tab-button', ['angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', './tabs'], function (_export) {
  'use strict';

  var Parent, Directive, onInit, Tabs, TabButton;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_tabs) {
      Tabs = _tabs.Tabs;
    }],
    execute: function () {
      TabButton = (function () {
        function TabButton(tabs) {
          _classCallCheck(this, TabButton);

          this.tabs = tabs;
        }

        _createClass(TabButton, [{
          key: 'onInit',
          value: function onInit() {
            var id = this.tab.item.id;
            this.btnId = 'tab-button-' + id;
            this.panelId = 'tab-panel-' + id;
          }
        }, {
          key: 'onClick',
          value: function onClick(ev) {
            ev.stopPropagation();
            ev.preventDefault();
            this.tabs.select(this.tab);
          }
        }]);

        return TabButton;
      })();

      _export('TabButton', TabButton);

      Object.defineProperty(TabButton, 'annotations', { get: function get() {
          return [new Directive({
            selector: 'button.tab-button',
            properties: ['tab'],
            host: {
              '[attr.id]': 'btnId',
              '[attr.aria-controls]': 'panelId',
              '[attr.aria-selected]': 'tab.isSelected',
              '(^click)': 'onClick($event)'
            },
            lifecycle: [onInit]
          })];
        } });
      Object.defineProperty(TabButton, 'parameters', { get: function get() {
          return [[Tabs, new Parent()]];
        } });
    }
  };
});