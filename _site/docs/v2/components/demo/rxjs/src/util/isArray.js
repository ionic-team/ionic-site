System.register('rxjs/src/util/isArray', [], function (_export) {
  'use strict';

  var isArray;
  return {
    setters: [],
    execute: function () {
      isArray = Array.isArray || function (x) {
        return x && typeof x.length === 'number';
      };

      _export('default', isArray);
    }
  };
});