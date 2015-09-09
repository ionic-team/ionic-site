System.register('ionic/components/tabs/tab-bar', ['angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/angular2', './tab-button', '../icon/icon'], function (_export) {
  'use strict';

  var Parent, Component, View, NgFor, TabButton, Icon, TabBar;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2Angular2) {
      NgFor = _angular2Angular2.NgFor;
    }, function (_tabButton) {
      TabButton = _tabButton.TabButton;
    }, function (_iconIcon) {
      Icon = _iconIcon.Icon;
    }],
    execute: function () {
      TabBar = function TabBar(tabs) {
        _classCallCheck(this, TabBar);

        console.log('TabBar constructor', this.id);
      };

      _export('TabBar', TabBar);

      Object.defineProperty(TabBar, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-tab-bar' }), new View({
            template: '\n    <div class="tab-bar" role="tablist">\n      <button *ng-for="#t of tabs" [tab]="t" class="tab-button" role="tab">\n        <icon [name]="t.tabIcon" class="tab-button-icon"></icon>\n        <span class="tab-button-text">{{t.tabTitle}}</span>\n      </button>\n    </div>\n  ',
            directives: [NgFor, TabButton, Icon]
          })];
        } });
      Object.defineProperty(TabBar, 'parameters', { get: function get() {
          return [[Tabs, new Parent()]];
        } });
    }
  };
});