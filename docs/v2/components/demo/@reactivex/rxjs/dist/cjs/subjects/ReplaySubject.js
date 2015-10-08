'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Subject2 = require('../Subject');

var _Subject3 = _interopRequireDefault(_Subject2);

var _schedulersImmediate = require('../schedulers/immediate');

var _schedulersImmediate2 = _interopRequireDefault(_schedulersImmediate);

var ReplaySubject = (function (_Subject) {
    _inherits(ReplaySubject, _Subject);

    function ReplaySubject(bufferSize, _windowTime, scheduler) {
        if (bufferSize === undefined) bufferSize = Number.POSITIVE_INFINITY;
        if (_windowTime === undefined) _windowTime = Number.POSITIVE_INFINITY;

        _classCallCheck(this, ReplaySubject);

        _Subject.call(this);
        this.events = [];
        this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = _windowTime < 1 ? 1 : _windowTime;
        this.scheduler = scheduler;
    }

    ReplaySubject.prototype._next = function _next(value) {
        var now = this._getNow();
        this.events.push(new ReplayEvent(now, value));
        this._getEvents(now);
        _Subject.prototype._next.call(this, value);
    };

    ReplaySubject.prototype._subscribe = function _subscribe(subscriber) {
        var events = this._getEvents(this._getNow());
        var index = -1;
        var len = events.length;
        while (!subscriber.isUnsubscribed && ++index < len) {
            subscriber.next(events[index].value);
        }
        return _Subject.prototype._subscribe.call(this, subscriber);
    };

    ReplaySubject.prototype._getNow = function _getNow() {
        return (this.scheduler || _schedulersImmediate2['default']).now();
    };

    ReplaySubject.prototype._getEvents = function _getEvents(now) {
        var bufferSize = this.bufferSize;
        var _windowTime = this._windowTime;
        var events = this.events;
        var eventsCount = events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if (now - events[spliceCount].time < _windowTime) {
                break;
            }
            spliceCount += 1;
        }
        if (eventsCount > bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
        }
        if (spliceCount > 0) {
            events.splice(0, spliceCount);
        }
        return events;
    };

    return ReplaySubject;
})(_Subject3['default']);

exports['default'] = ReplaySubject;

var ReplayEvent = function ReplayEvent(time, value) {
    _classCallCheck(this, ReplayEvent);

    this.time = time;
    this.value = value;
};

module.exports = exports['default'];