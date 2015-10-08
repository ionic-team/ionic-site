System.register('rxjs/src/operators/combineLatest-static', ['../observables/ArrayObservable', './combineLatest-support'], function (_export) {
    'use strict';

    var ArrayObservable, CombineLatestOperator;

    _export('default', combineLatest);

    function combineLatest() {
        for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
            observables[_key] = arguments[_key];
        }

        var project = observables[observables.length - 1];
        if (typeof project === "function") {
            observables.pop();
        }
        return new ArrayObservable(observables).lift(new CombineLatestOperator(project));
    }

    return {
        setters: [function (_observablesArrayObservable) {
            ArrayObservable = _observablesArrayObservable['default'];
        }, function (_combineLatestSupport) {
            CombineLatestOperator = _combineLatestSupport.CombineLatestOperator;
        }],
        execute: function () {}
    };
});