'use strict';

exports.__esModule = true;
exports['default'] = flatMap;

var _flatMapSupport = require('./flatMap-support');

function flatMap(project, projectResult, concurrent) {
    return this.lift(new _flatMapSupport.FlatMapOperator(project, projectResult, concurrent));
}

module.exports = exports['default'];