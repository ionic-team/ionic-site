System.register("ionic/components/view/view", ["angular2/angular2", "../ion"], function($__export) {
  "use strict";
  var __moduleName = "ionic/components/view/view";
  var NgElement,
      Component,
      Template,
      Ion,
      View,
      Content;
  return {
    setters: [function($__m) {
      NgElement = $__m.NgElement;
      Component = $__m.Component;
      Template = $__m.Template;
    }, function($__m) {
      Ion = $__m.Ion;
    }],
    execute: function() {
      View = $__export("View", (function($__super) {
        var View = function View(ele) {
          ele.domElement.classList.add('view');
        };
        return ($traceurRuntime.createClass)(View, {}, {}, $__super);
      }(Ion)));
      Object.defineProperty(View, "annotations", {get: function() {
          return [new Component({
            selector: 'ion-view',
            bind: {title: 'view-title'}
          }), new Template({inline: "\n    <div class=\"container\">\n      <div class=\"tool-bar\">\n        <div class=\"title\">\n          {{title}}\n          <content select=\"ion-nav-title\"></content>\n        </div>\n      </div>\n      <content></content>\n    </div>"})];
        }});
      Object.defineProperty(View, "parameters", {get: function() {
          return [[NgElement, new NgElement()]];
        }});
      Content = $__export("Content", (function($__super) {
        var Content = function Content(ele) {
          console.log('content!');
          ele.domElement.classList.add('content');
        };
        return ($traceurRuntime.createClass)(Content, {}, {}, $__super);
      }(Ion)));
      Object.defineProperty(Content, "annotations", {get: function() {
          return [new Component({selector: 'ion-content'}), new Template({inline: "\n    <div class=\"scroll-content\">\n      <content></content>\n    </div>"})];
        }});
      Object.defineProperty(Content, "parameters", {get: function() {
          return [[NgElement, new NgElement()]];
        }});
    }
  };
});
