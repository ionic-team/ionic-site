System.register("ionic/components/ion", ["../platform", "../util"], function($__export) {
  "use strict";
  var __moduleName = "ionic/components/ion";
  var Platform,
      util,
      ILLEGAL_ASSIGN_FIELDS,
      Ion;
  return {
    setters: [function($__m) {
      Platform = $__m;
    }, function($__m) {
      util = $__m;
    }],
    execute: function() {
      ILLEGAL_ASSIGN_FIELDS = {};
      Ion = $__export("Ion", (function() {
        var Ion = function Ion() {};
        return ($traceurRuntime.createClass)(Ion, {extend: function() {
            for (var args = [],
                $__1 = 0; $__1 < arguments.length; $__1++)
              args[$__1] = arguments[$__1];
            args.unshift(this);
            return util.extend.apply(null, args);
          }}, {});
      }()));
    }
  };
});
