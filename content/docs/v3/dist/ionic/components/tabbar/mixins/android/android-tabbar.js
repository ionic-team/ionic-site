System.register("ionic/components/tabbar/mixins/android/android-tabbar", ["../../tabbar"], function($__export) {
  "use strict";
  var __moduleName = "ionic/components/tabbar/mixins/android/android-tabbar";
  var TabbarConfig;
  return {
    setters: [function($__m) {
      TabbarConfig = $__m.TabbarConfig;
    }],
    execute: function() {
      TabbarConfig.platform('android').template('./android-template.html').mixin(function(tabbar) {});
    }
  };
});
