"use strict";

exports.__esModule = true;
exports["default"] = not;

function not(pred, thisArg) {
    function notPred() {
        return !notPred.pred.apply(notPred.thisArg, arguments);
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}

module.exports = exports["default"];