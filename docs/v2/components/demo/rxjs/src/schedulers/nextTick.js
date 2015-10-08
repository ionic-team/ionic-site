System.register('rxjs/src/schedulers/nextTick', ['./NextTickScheduler'], function (_export) {
  'use strict';

  var NextTickScheduler;
  return {
    setters: [function (_NextTickScheduler) {
      NextTickScheduler = _NextTickScheduler['default'];
    }],
    execute: function () {
      _export('default', new NextTickScheduler());
    }
  };
});