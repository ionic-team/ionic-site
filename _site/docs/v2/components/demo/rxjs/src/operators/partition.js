System.register('rxjs/src/operators/partition', ['../util/not', './filter'], function (_export) {
    'use strict';

    var not, filter;

    _export('default', partition);

    function partition(predicate, thisArg) {
        return [filter.call(this, predicate), filter.call(this, not(predicate, thisArg))];
    }

    return {
        setters: [function (_utilNot) {
            not = _utilNot['default'];
        }, function (_filter) {
            filter = _filter['default'];
        }],
        execute: function () {}
    };
});