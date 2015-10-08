System.register('rxjs/src/operators/windowToggle', ['../Subscriber', '../Subject', '../Subscription', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Subscriber, Subject, Subscription, tryCatch, errorObject, WindowToggleOperator, WindowToggleSubscriber, WindowClosingNotifierSubscriber, WindowToggleOpeningsSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', windowToggle);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function windowToggle(openings, closingSelector) {
        return this.lift(new WindowToggleOperator(openings, closingSelector));
    }

    return {
        setters: [function (_Subscriber4) {
            Subscriber = _Subscriber4['default'];
        }, function (_Subject) {
            Subject = _Subject['default'];
        }, function (_Subscription) {
            Subscription = _Subscription['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            WindowToggleOperator = (function () {
                function WindowToggleOperator(openings, closingSelector) {
                    _classCallCheck(this, WindowToggleOperator);

                    this.openings = openings;
                    this.closingSelector = closingSelector;
                }

                _createClass(WindowToggleOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector);
                    }
                }]);

                return WindowToggleOperator;
            })();

            WindowToggleSubscriber = (function (_Subscriber) {
                _inherits(WindowToggleSubscriber, _Subscriber);

                function WindowToggleSubscriber(destination, openings, closingSelector) {
                    _classCallCheck(this, WindowToggleSubscriber);

                    _get(Object.getPrototypeOf(WindowToggleSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.openings = openings;
                    this.closingSelector = closingSelector;
                    this.windows = [];
                    this.add(this.openings._subscribe(new WindowToggleOpeningsSubscriber(this)));
                }

                _createClass(WindowToggleSubscriber, [{
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
                    value: function openWindow(value) {
                        var window = new Subject();
                        this.windows.push(window);
                        this.destination.next(window);
                        var windowContext = {
                            window: window,
                            subscription: new Subscription()
                        };
                        var closingSelector = this.closingSelector;
                        var closingNotifier = tryCatch(closingSelector)(value);
                        if (closingNotifier === errorObject) {
                            this.error(closingNotifier.e);
                        } else {
                            this.add(windowContext.subscription.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this, windowContext))));
                        }
                    }
                }, {
                    key: 'closeWindow',
                    value: function closeWindow(windowContext) {
                        var window = windowContext.window;
                        var subscription = windowContext.subscription;

                        var windows = this.windows;
                        windows.splice(windows.indexOf(window), 1);
                        window.complete();
                        this.remove(subscription);
                    }
                }]);

                return WindowToggleSubscriber;
            })(Subscriber);

            WindowClosingNotifierSubscriber = (function (_Subscriber2) {
                _inherits(WindowClosingNotifierSubscriber, _Subscriber2);

                function WindowClosingNotifierSubscriber(parent, windowContext) {
                    _classCallCheck(this, WindowClosingNotifierSubscriber);

                    _get(Object.getPrototypeOf(WindowClosingNotifierSubscriber.prototype), 'constructor', this).call(this, null);
                    this.parent = parent;
                    this.windowContext = windowContext;
                }

                _createClass(WindowClosingNotifierSubscriber, [{
                    key: '_next',
                    value: function _next() {
                        this.parent.closeWindow(this.windowContext);
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.parent.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        // noop
                    }
                }]);

                return WindowClosingNotifierSubscriber;
            })(Subscriber);

            WindowToggleOpeningsSubscriber = (function (_Subscriber3) {
                _inherits(WindowToggleOpeningsSubscriber, _Subscriber3);

                function WindowToggleOpeningsSubscriber(parent) {
                    _classCallCheck(this, WindowToggleOpeningsSubscriber);

                    _get(Object.getPrototypeOf(WindowToggleOpeningsSubscriber.prototype), 'constructor', this).call(this);
                    this.parent = parent;
                }

                _createClass(WindowToggleOpeningsSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.parent.openWindow(value);
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.parent.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        // noop
                    }
                }]);

                return WindowToggleOpeningsSubscriber;
            })(Subscriber);
        }
    };
});