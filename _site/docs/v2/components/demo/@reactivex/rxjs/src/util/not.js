System.register("rxjs/src/util/not", [], function (_export) {
    "use strict";

    _export("default", not);

    function not(pred, thisArg) {
        function notPred() {
            return !notPred.pred.apply(notPred.thisArg, arguments);
        }
        notPred.pred = pred;
        notPred.thisArg = thisArg;
        return notPred;
    }

    return {
        setters: [],
        execute: function () {}
    };
});