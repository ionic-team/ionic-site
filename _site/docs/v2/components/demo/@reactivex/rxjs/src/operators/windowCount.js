System.register('rxjs/src/operators/windowCount', ['../Subscriber', '../Subject'], function (_export) {
    'use strict';

    var Subscriber, Subject, WindowCountOperator, WindowCountSubscriber;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', windowCount);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function windowCount(windowSize) {
        var startWindowEvery = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
    }

    return {
        setters: [function (_Subscriber2) {
            Subscriber = _Subscriber2['default'];
        }, function (_Subject) {
            Subject = _Subject['default'];
        }],
        execute: function () {
            WindowCountOperator = (function () {
                function WindowCountOperator(windowSize, startWindowEvery) {
                    _classCallCheck(this, WindowCountOperator);

                    this.windowSize = windowSize;
                    this.startWindowEvery = startWindowEvery;
                }

                _createClass(WindowCountOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery);
                    }
                }]);

                return WindowCountOperator;
            })();

            WindowCountSubscriber = (function (_Subscriber) {
                _inherits(WindowCountSubscriber, _Subscriber);

                function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
                    _classCallCheck(this, WindowCountSubscriber);

                    _get(Object.getPrototypeOf(WindowCountSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.windowSize = windowSize;
                    this.startWindowEvery = startWindowEvery;
                    this.windows = [{ count: 0, notified: false, window: new Subject() }];
                    this.count = 0;
                }

                _createClass(WindowCountSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        var count = this.count += 1;
                        var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
                        var windowSize = this.windowSize;
                        var windows = this.windows;
                        var len = windows.length;
                        if (count % startWindowEvery === 0) {
                            var _window = new Subject();
                            windows.push({ count: 0, notified: false, window: _window });
                        }
                        for (var i = 0; i < len; i++) {
                            var w = windows[i];
                            var _window2 = w.window;
                            if (!w.notified) {
                                w.notified = true;
                                this.destination.next(_window2);
                            }
                            _window2.next(value);
                            if (windowSize === (w.count += 1)) {
                                _window2.complete();
                            }
                        }
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        var windows = this.windows;
                        while (windows.length > 0) {
                            windows.shift().window.error(err);
                        }
                        this.destination.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var windows = this.windows;
                        while (windows.length > 0) {
                            windows.shift().window.complete();
                        }
                        this.destination.complete();
                    }
                }]);

                return WindowCountSubscriber;
            })(Subscriber);
        }
    };
});