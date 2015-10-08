"use strict";

exports.__esModule = true;
exports["default"] = tryOrOnError;

function tryOrOnError(target) {
    function tryCatcher() {
        try {
            tryCatcher.target.apply(this, arguments);
        } catch (e) {
            this.error(e);
        }
    }
    tryCatcher.target = target;
    return tryCatcher;
}

module.exports = exports["default"];