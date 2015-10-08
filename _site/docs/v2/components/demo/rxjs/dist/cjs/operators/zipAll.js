'use strict';

exports.__esModule = true;
exports['default'] = zipAll;

var _zipSupport = require('./zip-support');

function zipAll(project) {
    return this.lift(new _zipSupport.ZipOperator(project));
}

module.exports = exports['default'];