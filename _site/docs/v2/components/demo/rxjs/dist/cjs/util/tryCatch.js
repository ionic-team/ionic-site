'use strict';

exports.__esModule = true;
exports['default'] = tryCatch;

var _errorObject = require('./errorObject');

var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    } catch (e) {
        _errorObject.errorObject.e = e;
        return _errorObject.errorObject;
    }
}

function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

;
module.exports = exports['default'];