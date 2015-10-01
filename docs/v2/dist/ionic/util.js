System.register("ionic/util", [], function($__export) {
  "use strict";
  var __moduleName = "ionic/util";
  function noop() {}
  function extend(dest) {
    for (var i = 1,
        ii = arguments.length; i < ii; i++) {
      var source = arguments[i] || {};
      for (var key = void 0 in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }
    }
    return dest;
  }
  function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
  }
  function defaults(obj, src) {
    for (var key = void 0 in src) {
      if (src.hasOwnProperty(key) && !obj.hasOwnProperty(key)) {
        obj[key] = src[key];
      }
    }
    return obj;
  }
  $__export("noop", noop);
  $__export("extend", extend);
  $__export("clamp", clamp);
  $__export("defaults", defaults);
  return {
    setters: [],
    execute: function() {
    }
  };
});
