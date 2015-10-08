'use strict';

exports.__esModule = true;
exports['default'] = merge;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _observablesArrayObservable = require('../observables/ArrayObservable');

var _observablesArrayObservable2 = _interopRequireDefault(_observablesArrayObservable);

var _mergeSupport = require('./merge-support');

var _schedulersImmediate = require('../schedulers/immediate');

var _schedulersImmediate2 = _interopRequireDefault(_schedulersImmediate);

function merge() {
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = _schedulersImmediate2['default'];

    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
        observables[_key] = arguments[_key];
    }

    var last = observables[observables.length - 1];
    if (typeof last.schedule === 'function') {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    } else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (observables.length === 1) {
        return observables[0];
    }
    return new _observablesArrayObservable2['default'](observables, scheduler).lift(new _mergeSupport.MergeOperator(concurrent));
}

module.exports = exports['default'];