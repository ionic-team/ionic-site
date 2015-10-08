System.register('rxjs/src/operators/merge-static', ['../observables/ArrayObservable', './merge-support', '../schedulers/immediate'], function (_export) {
    'use strict';

    var ArrayObservable, MergeOperator, immediate;

    _export('default', merge);

    function merge() {
        var concurrent = Number.POSITIVE_INFINITY;
        var scheduler = immediate;

        for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
            observables[_key] = arguments[_key];
        }

        var last = observables[observables.length - 1];
        if (typeof last.schedule === 'function') {
            scheduler = observables.pop();
            if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
                concurrent = observables.pop();
            }
        } else if (typeof last === 'number') {
            concurrent = observables.pop();
        }
        if (observables.length === 1) {
            return observables[0];
        }
        return new ArrayObservable(observables, scheduler).lift(new MergeOperator(concurrent));
    }

    return {
        setters: [function (_observablesArrayObservable) {
            ArrayObservable = _observablesArrayObservable['default'];
        }, function (_mergeSupport) {
            MergeOperator = _mergeSupport.MergeOperator;
        }, function (_schedulersImmediate) {
            immediate = _schedulersImmediate['default'];
        }],
        execute: function () {}
    };
});