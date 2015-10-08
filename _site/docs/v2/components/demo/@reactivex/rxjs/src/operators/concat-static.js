System.register('rxjs/src/operators/concat-static', ['./merge-static', '../schedulers/immediate'], function (_export) {
    'use strict';

    var merge, immediate;

    _export('default', concat);

    function concat() {
        var scheduler = immediate;

        for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
            observables[_key] = arguments[_key];
        }

        var len = observables.length;
        if (typeof observables[observables.length - 1].schedule === 'function') {
            scheduler = observables.pop();
            observables.push(1, scheduler);
        }
        return merge.apply(this, observables);
    }

    return {
        setters: [function (_mergeStatic) {
            merge = _mergeStatic['default'];
        }, function (_schedulersImmediate) {
            immediate = _schedulersImmediate['default'];
        }],
        execute: function () {}
    };
});