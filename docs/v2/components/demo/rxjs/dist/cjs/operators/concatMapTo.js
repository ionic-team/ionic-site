'use strict';

exports.__esModule = true;
exports['default'] = concatMapTo;

var _flatMapToSupport = require('./flatMapTo-support');

function concatMapTo(observable, projectResult) {
    return this.lift(new _flatMapToSupport.FlatMapToOperator(observable, projectResult, 1));
}

module.exports = exports['default'];