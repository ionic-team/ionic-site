System.register('rxjs/src/util/tryCatch', ['./errorObject'], function (_export) {
    'use strict';

    var errorObject, tryCatchTarget;

    _export('default', tryCatch);

    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        } catch (e) {
            errorObject.e = e;
            return errorObject;
        }
    }

    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }

    return {
        setters: [function (_errorObject) {
            errorObject = _errorObject.errorObject;
        }],
        execute: function () {
            ;
        }
    };
});