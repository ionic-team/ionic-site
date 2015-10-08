System.register('rxjs/src/operators/distinctUntilKeyChanged', ['./distinctUntilChanged'], function (_export) {
    'use strict';

    var distinctUntilChanged;

    _export('default', distinctUntilKeyChanged);

    function distinctUntilKeyChanged(key, compare, thisArg) {
        return distinctUntilChanged.call(this, function (x, y) {
            if (compare) {
                return compare.call(thisArg, x[key], y[key]);
            }
            return x[key] === y[key];
        });
    }

    return {
        setters: [function (_distinctUntilChanged) {
            distinctUntilChanged = _distinctUntilChanged['default'];
        }],
        execute: function () {}
    };
});