System.register('rxjs/src/operators/windowTime', ['../Subscriber', '../Subject', '../schedulers/nextTick'], function (_export) {
    'use strict';

    var Subscriber, Subject, nextTick, WindowTimeOperator, WindowTimeSubscriber;

    var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', windowTime);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function windowTime(windowTimeSpan) {
        var windowCreationInterval = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
        var scheduler = arguments.length <= 2 || arguments[2] === undefined ? nextTick : arguments[2];

        return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
    }

    function dispatchWindowTimeSpanOnly(state) {
        var subscriber = state.subscriber;
        var windowTimeSpan = state.windowTimeSpan;
        var window = state.window;

        if (window) {
            window.complete();
        }
        state.window = subscriber.openWindow();
        this.schedule(state, windowTimeSpan);
    }
    function dispatchWindowCreation(state) {
        var windowTimeSpan = state.windowTimeSpan;
        var subscriber = state.subscriber;
        var scheduler = state.scheduler;
        var windowCreationInterval = state.windowCreationInterval;

        var window = subscriber.openWindow();
        var action = this;
        var context = { action: action, subscription: null };
        action.add(context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, { subscriber: subscriber, window: window, context: context }));
        action.schedule(state, windowCreationInterval);
    }
    function dispatchWindowClose(_ref) {
        var subscriber = _ref.subscriber;
        var window = _ref.window;
        var context = _ref.context;

        if (context && context.action && context.subscription) {
            context.action.remove(context.subscription);
        }
        subscriber.closeWindow(window);
    }
    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_Subject) {
            Subject = _Subject['default'];
        }, function (_schedulersNextTick) {
            nextTick = _schedulersNextTick['default'];
        }],
        execute: function () {
            WindowTimeOperator = (function () {
                function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
                    _classCallCheck(this, WindowTimeOperator);

                    this.windowTimeSpan = windowTimeSpan;
                    this.windowCreationInterval = windowCreationInterval;
                    this.scheduler = scheduler;
                }

                _createClass(WindowTimeOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler);
                    }
                }]);

                return WindowTimeOperator;
            })();

            WindowTimeSubscriber = (function (_Subscriber) {
                _inherits(WindowTimeSubscriber, _Subscriber);

                function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
                    _classCallCheck(this, WindowTimeSubscriber);

                    _get(Object.getPrototypeOf(WindowTimeSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.windowTimeSpan = windowTimeSpan;
                    this.windowCreationInterval = windowCreationInterval;
                    this.scheduler = scheduler;
                    this.windows = [];
                    if (windowCreationInterval !== null && windowCreationInterval >= 0) {
                        var _window = this.openWindow();
                        this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, { subscriber: this, window: _window, context: null }));
                        this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler }));
                    } else {
                        var _window2 = this.openWindow();
                        this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, { subscriber: this, window: _window2, windowTimeSpan: windowTimeSpan }));
                    }
                }

                _createClass(WindowTimeSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        var windows = this.windows;
                        var len = windows.length;
                        for (var i = 0; i < len; i++) {
                            windows[i].next(value);
                        }
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        var windows = this.windows;
                        while (windows.length > 0) {
                            windows.shift().error(err);
                        }
                        this.destination.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var windows = this.windows;
                        while (windows.length > 0) {
                            windows.shift().complete();
                        }
                        this.destination.complete();
                    }
                }, {
                    key: 'openWindow',
                    value: function openWindow() {
                        var window = new Subject();
                        this.windows.push(window);
                        this.destination.next(window);
                        return window;
                    }
                }, {
                    key: 'closeWindow',
                    value: function closeWindow(window) {
                        window.complete();
                        var windows = this.windows;
                        windows.splice(windows.indexOf(window), 1);
                    }
                }]);

                return WindowTimeSubscriber;
            })(Subscriber);
        }
    };
});