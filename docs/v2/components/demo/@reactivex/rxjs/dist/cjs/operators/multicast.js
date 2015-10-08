'use strict';

exports.__esModule = true;
exports['default'] = multicast;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _observablesConnectableObservable = require('../observables/ConnectableObservable');

var _observablesConnectableObservable2 = _interopRequireDefault(_observablesConnectableObservable);

function multicast(subjectFactory) {
    return new _observablesConnectableObservable2['default'](this, subjectFactory);
}

module.exports = exports['default'];