System.register('rxjs/src/operators/startWith', ['../observables/ScalarObservable', './concat-static'], function (_export) {
    'use strict';

    var ScalarObservable, concat;

    _export('default', startWith);

    function startWith(x) {
        return concat(new ScalarObservable(x), this);
    }

    return {
        setters: [function (_observablesScalarObservable) {
            ScalarObservable = _observablesScalarObservable['default'];
        }, function (_concatStatic) {
            concat = _concatStatic['default'];
        }],
        execute: function () {}
    };
});