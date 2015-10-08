'use strict';

exports.__esModule = true;
exports['default'] = publish;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Subject = require('../Subject');

var _Subject2 = _interopRequireDefault(_Subject);

var _multicast = require('./multicast');

var _multicast2 = _interopRequireDefault(_multicast);

function subjectFactory() {
    return new _Subject2['default']();
}

function publish() {
    return _multicast2['default'].call(this, subjectFactory);
}

module.exports = exports['default'];