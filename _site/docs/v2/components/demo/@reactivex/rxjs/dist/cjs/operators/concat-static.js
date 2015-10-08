'use strict';

exports.__esModule = true;
exports['default'] = concat;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mergeStatic = require('./merge-static');

var _mergeStatic2 = _interopRequireDefault(_mergeStatic);

var _schedulersImmediate = require('../schedulers/immediate');

var _schedulersImmediate2 = _interopRequireDefault(_schedulersImmediate);

function concat() {
    var scheduler = _schedulersImmediate2['default'];

    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
        observables[_key] = arguments[_key];
    }

    var len = observables.length;
    if (typeof observables[observables.length - 1].schedule === 'function') {
        scheduler = observables.pop();
        observables.push(1, scheduler);
    }
    return _mergeStatic2['default'].apply(this, observables);
}

module.exports = exports['default'];