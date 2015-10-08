'use strict';

exports.__esModule = true;
exports['default'] = concatProto;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mergeStatic = require('./merge-static');

var _mergeStatic2 = _interopRequireDefault(_mergeStatic);

function concatProto() {
    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
        observables[_key] = arguments[_key];
    }

    observables.unshift(this);
    observables.push(1);
    return _mergeStatic2['default'].apply(this, observables);
}

module.exports = exports['default'];