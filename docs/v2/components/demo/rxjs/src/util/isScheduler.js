System.register('rxjs/src/util/isScheduler', [], function (_export) {
    'use strict';

    _export('default', isScheduler);

    function isScheduler(value) {
        return value && typeof value.schedule === 'function';
    }

    return {
        setters: [],
        execute: function () {}
    };
});