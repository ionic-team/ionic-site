'use strict';

exports.__esModule = true;
exports['default'] = combineAll;

var _combineLatestSupport = require('./combineLatest-support');

function combineAll(project) {
    return this.lift(new _combineLatestSupport.CombineLatestOperator(project));
}

module.exports = exports['default'];