'use strict';

exports.__esModule = true;
exports['default'] = publishReplay;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _subjectsReplaySubject = require('../subjects/ReplaySubject');

var _subjectsReplaySubject2 = _interopRequireDefault(_subjectsReplaySubject);

var _multicast = require('./multicast');

var _multicast2 = _interopRequireDefault(_multicast);

function publishReplay(bufferSize, windowTime, scheduler) {
    if (bufferSize === undefined) bufferSize = Number.POSITIVE_INFINITY;
    if (windowTime === undefined) windowTime = Number.POSITIVE_INFINITY;

    return _multicast2['default'].call(this, function () {
        return new _subjectsReplaySubject2['default'](bufferSize, windowTime, scheduler);
    });
}

module.exports = exports['default'];