System.register('rxjs/src/operators/concat', ['./merge-static'], function (_export) {
    'use strict';

    var merge;

    _export('default', concatProto);

    function concatProto() {
        for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
            observables[_key] = arguments[_key];
        }

        observables.unshift(this);
        observables.push(1);
        return merge.apply(this, observables);
    }

    return {
        setters: [function (_mergeStatic) {
            merge = _mergeStatic['default'];
        }],
        execute: function () {}
    };
});