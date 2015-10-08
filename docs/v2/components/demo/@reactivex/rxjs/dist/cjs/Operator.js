'use strict';

exports.__esModule = true;
exports.defaultCallFn = defaultCallFn;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Subscriber = require('./Subscriber');

var _Subscriber2 = _interopRequireDefault(_Subscriber);

function defaultCallFn(observer) {
    return new _Subscriber2['default'](observer);
}