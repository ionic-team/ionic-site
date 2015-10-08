'use strict';

exports.__esModule = true;
exports['default'] = observeOn;

var _observeOnSupport = require('./observeOn-support');

function observeOn(scheduler) {
    var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    return this.lift(new _observeOnSupport.ObserveOnOperator(scheduler, delay));
}

module.exports = exports['default'];