'use strict';

exports.__esModule = true;
exports['default'] = zipProto;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _zipStatic = require('./zip-static');

var _zipStatic2 = _interopRequireDefault(_zipStatic);

function zipProto() {
    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
        observables[_key] = arguments[_key];
    }

    observables.unshift(this);
    return _zipStatic2['default'].apply(this, observables);
}

module.exports = exports['default'];