'use strict';

exports.__esModule = true;
exports['default'] = subscribeOn;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _observablesSubscribeOnObservable = require('../observables/SubscribeOnObservable');

var _observablesSubscribeOnObservable2 = _interopRequireDefault(_observablesSubscribeOnObservable);

function subscribeOn(scheduler) {
    var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    return new _observablesSubscribeOnObservable2['default'](this, delay, scheduler);
}

module.exports = exports['default'];