System.register("ionic/components/tabbar/tabbar", ["angular2/angular2", "angular2/di", "../ion", "../../config"], function($__export) {
  "use strict";
  var __moduleName = "ionic/components/tabbar/tabbar";
  var Component,
      Template,
      Inject,
      Ion,
      IonConfigService,
      TabbarConfig,
      Tabbar;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }, function($__m) {
      Inject = $__m.Inject;
    }, function($__m) {
      Ion = $__m.Ion;
    }, function($__m) {
      IonConfigService = $__m.IonConfigService;
    }],
    execute: function() {
      TabbarConfig = $__export("TabbarConfig", new IonConfigService());
      Tabbar = $__export("Tabbar", (function($__super) {
        var Tabbar = function Tabbar(config) {
          this.$config = config;
          $traceurRuntime.superConstructor(Tabbar).call(this);
        };
        return ($traceurRuntime.createClass)(Tabbar, {}, {}, $__super);
      }(Ion)));
      Object.defineProperty(Tabbar, "annotations", {get: function() {
          return [new Component({
            selector: 'ion-tabbar',
            bind: {title: 'view-title'},
            services: [TabbarConfig]
          }), new Template({inline: "<button (click)=\"press()\">\n  Tabbar: {{title}} {{$config.id}}\n</button>"})];
        }});
      Object.defineProperty(Tabbar, "parameters", {get: function() {
          return [[TabbarConfig]];
        }});
    }
  };
});
