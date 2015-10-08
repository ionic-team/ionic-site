System.register('rxjs/src/subjects/ReplaySubject', ['../Subject', '../schedulers/immediate'], function (_export) {
    'use strict';

    var Subject, immediate, ReplaySubject, ReplayEvent;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_Subject2) {
            Subject = _Subject2['default'];
        }, function (_schedulersImmediate) {
            immediate = _schedulersImmediate['default'];
        }],
        execute: function () {
            ReplaySubject = (function (_Subject) {
                _inherits(ReplaySubject, _Subject);

                function ReplaySubject(bufferSize, _windowTime, scheduler) {
                    if (bufferSize === undefined) bufferSize = Number.POSITIVE_INFINITY;
                    if (_windowTime === undefined) _windowTime = Number.POSITIVE_INFINITY;

                    _classCallCheck(this, ReplaySubject);

                    _get(Object.getPrototypeOf(ReplaySubject.prototype), 'constructor', this).call(this);
                    this.events = [];
                    this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
                    this._windowTime = _windowTime < 1 ? 1 : _windowTime;
                    this.scheduler = scheduler;
                }

                _createClass(ReplaySubject, [{
                    key: '_next',
                    value: function _next(value) {
                        var now = this._getNow();
                        this.events.push(new ReplayEvent(now, value));
                        this._getEvents(now);
                        _get(Object.getPrototypeOf(ReplaySubject.prototype), '_next', this).call(this, value);
                    }
                }, {
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var events = this._getEvents(this._getNow());
                        var index = -1;
                        var len = events.length;
                        while (!subscriber.isUnsubscribed && ++index < len) {
                            subscriber.next(events[index].value);
                        }
                        return _get(Object.getPrototypeOf(ReplaySubject.prototype), '_subscribe', this).call(this, subscriber);
                    }
                }, {
                    key: '_getNow',
                    value: function _getNow() {
                        return (this.scheduler || immediate).now();
                    }
                }, {
                    key: '_getEvents',
                    value: function _getEvents(now) {
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
                    }
                }]);

                return ReplaySubject;
            })(Subject);

            _export('default', ReplaySubject);

            ReplayEvent = function ReplayEvent(time, value) {
                _classCallCheck(this, ReplayEvent);

                this.time = time;
                this.value = value;
            };
        }
    };
});