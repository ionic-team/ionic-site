'use strict';

exports.__esModule = true;
exports['default'] = concatAll;

var _mergeSupport = require('./merge-support');

function concatAll() {
    return this.lift(new _mergeSupport.MergeOperator(1));
}

module.exports = exports['default'];