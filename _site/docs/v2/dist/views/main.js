System.register("views/main", ["angular2/core", "angular2/angular2", "ionic/components/view/view"], function($__export) {
  "use strict";
  var __moduleName = "views/main";
  var bootstrap,
      Component,
      Template,
      View,
      Content,
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
    }],
    execute: function() {
      IonicApp = (function() {
        var IonicApp = function IonicApp() {
          console.log('IonicApp Start');
          this.attrTitle = 'banana title';
        };
        return ($traceurRuntime.createClass)(IonicApp, {}, {});
      }());
      Object.defineProperty(IonicApp, "annotations", {get: function() {
          return [new Component({selector: '[ion-app]'}), new Template({
            url: 'main.html',
            directives: [View, Content]
          })];
        }});
      bootstrap(IonicApp);
    }
  };
});
