System.register('rxjs/src/operators/merge', ['./merge-static'], function (_export) {
    'use strict';

    var mergeStatic;

    _export('default', merge);

    function merge() {
        for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
            observables[_key] = arguments[_key];
        }

        observables.unshift(this);
        return mergeStatic.apply(this, observables);
    }

    return {
        setters: [function (_mergeStatic) {
            mergeStatic = _mergeStatic['default'];
        }],
        execute: function () {}
    };
});