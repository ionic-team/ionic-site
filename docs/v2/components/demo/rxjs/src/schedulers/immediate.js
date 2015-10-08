System.register('rxjs/src/schedulers/immediate', ['./ImmediateScheduler'], function (_export) {
  'use strict';

  var ImmediateScheduler;
  return {
    setters: [function (_ImmediateScheduler) {
      ImmediateScheduler = _ImmediateScheduler['default'];
    }],
    execute: function () {
      _export('default', new ImmediateScheduler());
    }
  };
});