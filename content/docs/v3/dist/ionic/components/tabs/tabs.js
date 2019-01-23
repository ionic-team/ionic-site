System.register("ionic/components/tabs/tabs", ["angular2/angular2", "../../history", "../ion"], function($__export) {
  "use strict";
  var __moduleName = "ionic/components/tabs/tabs";
  var NgElement,
      Component,
      Template,
      Parent,
      History,
      Ion,
      Tabs,
      Tab;
  return {
    setters: [function($__m) {
      NgElement = $__m.NgElement;
      Component = $__m.Component;
      Template = $__m.Template;
      Parent = $__m.Parent;
    }, function($__m) {
      History = $__m.History;
    }, function($__m) {
      Ion = $__m.Ion;
    }],
    execute: function() {
      Tabs = $__export("Tabs", (function($__super) {
        var Tabs = function Tabs(ele) {
          ele.domElement.classList.add('view');
          ele.domElement.classList.add('tabs-container');
          this.tabs = [];
        };
        return ($traceurRuntime.createClass)(Tabs, {
          add: function(tab) {
            this.tabs.push(tab);
            tab.show(this.tabs.length === 1);
          },
          selectTab: function(tab) {
            this.showHistory(tab.history);
          }
        }, {}, $__super);
      }(View)));
      Object.defineProperty(Tabs, "annotations", {get: function() {
          return [new Component({selector: 'ion-tabs'}), new Template({inline: "\n    <div class=\"tool-bar\">\n      Tabs\n    </div>\n\n    <div class=\"tool-bar tab-bar\">\n      <a class=\"tab-item\">1</a>\n      <a class=\"tab-item\">2</a>\n      <a class=\"tab-item\">3</a>\n    </div>\n\n    <div class=\"container\">\n\n      <content select=\"ion-tab\"></content>\n\n    </div>\n    "})];
        }});
      Object.defineProperty(Tabs, "parameters", {get: function() {
          return [[NgElement, new NgElement()]];
        }});
      Tab = $__export("Tab", (function($__super) {
        var Tab = function Tab(ele, tabs) {
          var $__0 = this;
          this.ele = ele;
          this.history = new History();
          ele.domElement.classList.add('view');
          ele.domElement.classList.add('tab-view');
          tabs.add(this);
          setTimeout((function() {
            console.log($__0.tabTitle);
          }));
        };
        return ($traceurRuntime.createClass)(Tab, {show: function(shouldShow) {
            this.ele.domElement.classList[shouldShow ? 'remove' : 'add']('hide');
          }}, {}, $__super);
      }(View)));
      Object.defineProperty(Tab, "annotations", {get: function() {
          return [new Component({
            selector: 'ion-tab',
            bind: {tabTitle: 'tab-title'}
          }), new Template({inline: "\n    <div class=\"container\">\n      <div class=\"content\">\n        <div class=\"scroll-content\">\n          <content></content>\n        </div>\n      </div>\n    </div>\n    "})];
        }});
      Object.defineProperty(Tab, "parameters", {get: function() {
          return [[NgElement, new NgElement()], [Tabs, new Parent()]];
        }});
    }
  };
});
