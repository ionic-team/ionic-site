'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable = require('../Observable');

var _Observable2 = _interopRequireDefault(_Observable);

var _VirtualTimeScheduler2 = require('./VirtualTimeScheduler');

var _VirtualTimeScheduler3 = _interopRequireDefault(_VirtualTimeScheduler2);

var _Notification = require('../Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Subject = require('../Subject');

var _Subject2 = _interopRequireDefault(_Subject);

var TestScheduler = (function (_VirtualTimeScheduler) {
    _inherits(TestScheduler, _VirtualTimeScheduler);

    function TestScheduler(assertDeepEqual) {
        _classCallCheck(this, TestScheduler);

        _VirtualTimeScheduler.call(this);
        this.assertDeepEqual = assertDeepEqual;
        this.flushTests = [];
    }

    TestScheduler.prototype.createColdObservable = function createColdObservable(marbles, values, error) {
        var _this = this;

        if (marbles.indexOf('^') !== -1) {
            throw new Error('cold observable cannot have subscription offset "^"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        return _Observable2['default'].create(function (subscriber) {
            messages.forEach(function (_ref) {
                var notification = _ref.notification;
                var frame = _ref.frame;

                _this.schedule(function () {
                    notification.observe(subscriber);
                }, frame);
            }, _this);
        });
    };

    TestScheduler.prototype.createHotObservable = function createHotObservable(marbles, values, error) {
        var _this2 = this;

        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var subject = new _Subject2['default']();
        messages.forEach(function (_ref2) {
            var notification = _ref2.notification;
            var frame = _ref2.frame;

            _this2.schedule(function () {
                notification.observe(subject);
            }, frame);
        }, this);
        return subject;
    };

    TestScheduler.prototype.expect = function expect(observable) {
        var _this3 = this;

        var actual = [];
        var flushTest = {
            observable: observable, actual: actual, marbles: null, ready: false
        };
        this.schedule(function () {
            observable.subscribe(function (value) {
                actual.push({ frame: _this3.frame, notification: _Notification2['default'].createNext(value) });
            }, function (err) {
                actual.push({ frame: _this3.frame, notification: _Notification2['default'].createError(err) });
            }, function () {
                actual.push({ frame: _this3.frame, notification: _Notification2['default'].createComplete() });
            });
        }, 0);
        this.flushTests.push(flushTest);
        return {
            toBe: function toBe(marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.marbles = marbles;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue);
            }
        };
    };

    TestScheduler.prototype.flush = function flush() {
        _VirtualTimeScheduler.prototype.flush.call(this);
        var flushTests = this.flushTests.filter(function (test) {
            return test.ready;
        });
        while (flushTests.length > 0) {
            var test = flushTests.shift();
            this.assertDeepEqual(test.actual, test.expected);
        }
    };

    TestScheduler.parseMarbles = function parseMarbles(marbles, values, errorValue) {
        var len = marbles.length;
        var results = [];
        var subIndex = marbles.indexOf('^');
        var frameOffset = subIndex === -1 ? 0 : subIndex * -10;
        for (var i = 0; i < len; i++) {
            var frame = i * 10;
            var notification = undefined;
            var c = marbles[i];
            switch (c) {
                case '-':
                    break;
                case '|':
                    notification = _Notification2['default'].createComplete();
                    break;
                case '^':
                    break;
                case '#':
                    notification = _Notification2['default'].createError(errorValue || 'error');
                    break;
                default:
                    notification = _Notification2['default'].createNext(values[c]);
                    break;
            }
            frame += frameOffset;
            if (notification) {
                results.push({ notification: notification, frame: frame });
            }
        }
        return results;
    };

    return TestScheduler;
})(_VirtualTimeScheduler3['default']);

exports['default'] = TestScheduler;
module.exports = exports['default'];