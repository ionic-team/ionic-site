System.register('rxjs/src/operators/zip-static', ['../observables/ArrayObservable', './zip-support'], function (_export) {
    'use strict';

    var ArrayObservable, ZipOperator;

    _export('default', zip);

    function zip() {
        for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
            observables[_key] = arguments[_key];
        }

        var project = observables[observables.length - 1];
        if (typeof project === "function") {
            observables.pop();
        }
        return new ArrayObservable(observables).lift(new ZipOperator(project));
    }

    return {
        setters: [function (_observablesArrayObservable) {
            ArrayObservable = _observablesArrayObservable['default'];
        }, function (_zipSupport) {
            ZipOperator = _zipSupport.ZipOperator;
        }],
        execute: function () {}
    };
});