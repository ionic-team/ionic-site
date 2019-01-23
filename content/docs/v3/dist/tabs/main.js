System.register("tabs/main", ["angular2/core", "angular2/angular2", "ionic/components/view/view", "ionic/components/tabs/tabs"], function($__export) {
  "use strict";
  var __moduleName = "tabs/main";
  var bootstrap,
      Component,
      Template,
      View,
      Content,
      Tabs,
      Tab,
      IonicApp;
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }, function($__m) {
      View = $__m.View;
      Content = $__m.Content;
    }, function($__m) {
      Tabs = $__m.Tabs;
      Tab = $__m.Tab;
    }],
    execute: function() {
      IonicApp = (function() {
        var IonicApp = function IonicApp() {
          console.log('IonicApp Start');
        };
        return ($traceurRuntime.createClass)(IonicApp, {}, {});
      }());
      Object.defineProperty(IonicApp, "annotations", {get: function() {
          return [new Component({selector: '[ion-app]'}), new Template({
            url: 'main.html',
            directives: [Tabs, Tab, View, Content]
          })];
        }});
      bootstrap(IonicApp);
    }
  };
});
