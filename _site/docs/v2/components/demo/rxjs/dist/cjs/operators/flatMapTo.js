'use strict';

exports.__esModule = true;
exports['default'] = flatMapTo;

var _flatMapToSupport = require('./flatMapTo-support');

function flatMapTo(observable, projectResult, concurrent) {
    return this.lift(new _flatMapToSupport.FlatMapToOperator(observable, projectResult, concurrent));
}

module.exports = exports['default'];