'use strict';

exports.__esModule = true;
exports['default'] = concatMap;

var _flatMapSupport = require('./flatMap-support');

function concatMap(project, projectResult) {
    return this.lift(new _flatMapSupport.FlatMapOperator(project, projectResult, 1));
}

module.exports = exports['default'];