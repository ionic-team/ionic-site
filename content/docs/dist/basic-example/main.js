System.register("basic-example/main", ["angular2/core", "angular2/angular2", "ionic/components"], function($__export) {
  "use strict";
  var __moduleName = "basic-example/main";
  var bootstrap,
      Component,
      Template,
      Aside,
      AsideParent,
      PlaygroundMain;
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }, function($__m) {
      Aside = $__m.Aside;
      AsideParent = $__m.AsideParent;
    }],
    execute: function() {
      PlaygroundMain = (function() {
        var PlaygroundMain = function PlaygroundMain() {
          console.log('Playground Start');
        };
        return ($traceurRuntime.createClass)(PlaygroundMain, {}, {});
      }());
      Object.defineProperty(PlaygroundMain, "annotations", {get: function() {
          return [new Component({selector: '[playground-main]'}), new Template({
            url: 'main.html',
            directives: [Aside, AsideParent]
          })];
        }});
      bootstrap(PlaygroundMain);
    }
  };
});
