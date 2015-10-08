'use strict';

exports.__esModule = true;
exports['default'] = startWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _observablesScalarObservable = require('../observables/ScalarObservable');

var _observablesScalarObservable2 = _interopRequireDefault(_observablesScalarObservable);

var _concatStatic = require('./concat-static');

var _concatStatic2 = _interopRequireDefault(_concatStatic);

function startWith(x) {
    return _concatStatic2['default'](new _observablesScalarObservable2['default'](x), this);
}

module.exports = exports['default'];