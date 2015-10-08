System.register('rxjs/src/schedulers/TestScheduler', ['../Observable', './VirtualTimeScheduler', '../Notification', '../Subject'], function (_export) {
    'use strict';

    var Observable, VirtualTimeScheduler, Notification, Subject, TestScheduler;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_Observable) {
            Observable = _Observable['default'];
        }, function (_VirtualTimeScheduler2) {
            VirtualTimeScheduler = _VirtualTimeScheduler2['default'];
        }, function (_Notification) {
            Notification = _Notification['default'];
        }, function (_Subject) {
            Subject = _Subject['default'];
        }],
        execute: function () {
            TestScheduler = (function (_VirtualTimeScheduler) {
                _inherits(TestScheduler, _VirtualTimeScheduler);

                function TestScheduler(assertDeepEqual) {
                    _classCallCheck(this, TestScheduler);

                    _get(Object.getPrototypeOf(TestScheduler.prototype), 'constructor', this).call(this);
                    this.assertDeepEqual = assertDeepEqual;
                    this.flushTests = [];
                }

                _createClass(TestScheduler, [{
                    key: 'createColdObservable',
                    value: function createColdObservable(marbles, values, error) {
                        var _this = this;

                        if (marbles.indexOf('^') !== -1) {
                            throw new Error('cold observable cannot have subscription offset "^"');
                        }
                        var messages = TestScheduler.parseMarbles(marbles, values, error);
                        return Observable.create(function (subscriber) {
                            messages.forEach(function (_ref) {
                                var notification = _ref.notification;
                                var frame = _ref.frame;

                                _this.schedule(function () {
                                    notification.observe(subscriber);
                                }, frame);
                            }, _this);
                        });
                    }
                }, {
                    key: 'createHotObservable',
                    value: function createHotObservable(marbles, values, error) {
                        var _this2 = this;

                        var messages = TestScheduler.parseMarbles(marbles, values, error);
                        var subject = new Subject();
                        messages.forEach(function (_ref2) {
                            var notification = _ref2.notification;
                            var frame = _ref2.frame;

                            _this2.schedule(function () {
                                notification.observe(subject);
                            }, frame);
                        }, this);
                        return subject;
                    }
                }, {
                    key: 'expect',
                    value: function expect(observable) {
                        var _this3 = this;

                        var actual = [];
                        var flushTest = {
                            observable: observable, actual: actual, marbles: null, ready: false
                        };
                        this.schedule(function () {
                            observable.subscribe(function (value) {
                                actual.push({ frame: _this3.frame, notification: Notification.createNext(value) });
                            }, function (err) {
                                actual.push({ frame: _this3.frame, notification: Notification.createError(err) });
                            }, function () {
                                actual.push({ frame: _this3.frame, notification: Notification.createComplete() });
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
                    }
                }, {
                    key: 'flush',
                    value: function flush() {
                        _get(Object.getPrototypeOf(TestScheduler.prototype), 'flush', this).call(this);
                        var flushTests = this.flushTests.filter(function (test) {
                            return test.ready;
                        });
                        while (flushTests.length > 0) {
                            var test = flushTests.shift();
                            this.assertDeepEqual(test.actual, test.expected);
                        }
                    }
                }], [{
                    key: 'parseMarbles',
                    value: function parseMarbles(marbles, values, errorValue) {
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
                                    notification = Notification.createComplete();
                                    break;
                                case '^':
                                    break;
                                case '#':
                                    notification = Notification.createError(errorValue || 'error');
                                    break;
                                default:
                                    notification = Notification.createNext(values[c]);
                                    break;
                            }
                            frame += frameOffset;
                            if (notification) {
                                results.push({ notification: notification, frame: frame });
                            }
                        }
                        return results;
                    }
                }]);

                return TestScheduler;
            })(VirtualTimeScheduler);

            _export('default', TestScheduler);
        }
    };
});