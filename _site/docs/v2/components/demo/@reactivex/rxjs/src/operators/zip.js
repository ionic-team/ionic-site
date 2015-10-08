System.register('rxjs/src/operators/zip', ['./zip-static'], function (_export) {
    'use strict';

    var zip;

    _export('default', zipProto);

    function zipProto() {
        for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
            observables[_key] = arguments[_key];
        }

        observables.unshift(this);
        return zip.apply(this, observables);
    }

    return {
        setters: [function (_zipStatic) {
            zip = _zipStatic['default'];
        }],
        execute: function () {}
    };
});