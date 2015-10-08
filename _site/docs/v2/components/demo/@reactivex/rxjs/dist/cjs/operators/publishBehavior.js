'use strict';

exports.__esModule = true;
exports['default'] = publishBehavior;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _subjectsBehaviorSubject = require('../subjects/BehaviorSubject');

var _subjectsBehaviorSubject2 = _interopRequireDefault(_subjectsBehaviorSubject);

var _multicast = require('./multicast');

var _multicast2 = _interopRequireDefault(_multicast);

function publishBehavior(value) {
    return _multicast2['default'].call(this, function () {
        return new _subjectsBehaviorSubject2['default'](value);
    });
}

module.exports = exports['default'];