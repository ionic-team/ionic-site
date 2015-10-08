'use strict';

exports.__esModule = true;
exports['default'] = mergeAll;

var _mergeSupport = require('./merge-support');

function mergeAll(concurrent) {
    return this.lift(new _mergeSupport.MergeOperator(concurrent));
}

module.exports = exports['default'];