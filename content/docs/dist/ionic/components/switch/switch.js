System.register("ionic/components/switch/switch", ["angular2/angular2", "../ion"], function($__export) {
  "use strict";
  var __moduleName = "ionic/components/switch/switch";
  var NgElement,
      Component,
      Template,
      Ion,
      Switch;
  return {
    setters: [function($__m) {
      NgElement = $__m.NgElement;
      Component = $__m.Component;
      Template = $__m.Template;
    }, function($__m) {
      Ion = $__m.Ion;
    }],
    execute: function() {
      Switch = $__export("Switch", (function($__super) {
        var Switch = function Switch(el) {
          this.element = el;
          console.log('element', el);
        };
        return ($traceurRuntime.createClass)(Switch, {onClick: function(el) {
            console.log(el.checked);
          }}, {}, $__super);
      }(Ion)));
      Object.defineProperty(Switch, "annotations", {get: function() {
          return [new Component({selector: 'ion-switch'}), new Template({inline: "\n<div class=\"item item-switch\">\n  <div ng-transclude></div>\n  <label class=\"switch\">\n    <input type=\"checkbox\" (click)=\"onClick(input)\" #input>\n    <div class=\"track\">\n      <div class=\"handle\"></div>\n    </div>\n  </label>\n</div>\n"})];
        }});
      Object.defineProperty(Switch, "parameters", {get: function() {
          return [[NgElement, new NgElement()]];
        }});
    }
  };
});
