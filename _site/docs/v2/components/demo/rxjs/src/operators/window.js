System.register('rxjs/src/operators/window', ['../Subscriber', '../Subject'], function (_export) {
    'use strict';

    var Subscriber, Subject, WindowOperator, WindowSubscriber, WindowClosingNotifierSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', window);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function window(closingNotifier) {
        return this.lift(new WindowOperator(closingNotifier));
    }

    return {
        setters: [function (_Subscriber3) {
            Subscriber = _Subscriber3['default'];
        }, function (_Subject) {
            Subject = _Subject['default'];
        }],
        execute: function () {
            WindowOperator = (function () {
                function WindowOperator(closingNotifier) {
                    _classCallCheck(this, WindowOperator);

                    this.closingNotifier = closingNotifier;
                }

                _createClass(WindowOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new WindowSubscriber(subscriber, this.closingNotifier);
                    }
                }]);

                return WindowOperator;
            })();

            WindowSubscriber = (function (_Subscriber) {
                _inherits(WindowSubscriber, _Subscriber);

                function WindowSubscriber(destination, closingNotifier) {
                    _classCallCheck(this, WindowSubscriber);

                    _get(Object.getPrototypeOf(WindowSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.closingNotifier = closingNotifier;
                    this.window = new Subject();
                    this.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this)));
                    this.openWindow();
                }

                _createClass(WindowSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.window.next(value);
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.window.error(err);
                        this.destination.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        this.window.complete();
                        this.destination.complete();
                    }
                }, {
                    key: 'openWindow',
                    value: function openWindow() {
                        var prevWindow = this.window;
                        if (prevWindow) {
                            prevWindow.complete();
                        }
                        this.destination.next(this.window = new Subject());
                    }
                }]);

                return WindowSubscriber;
            })(Subscriber);

            WindowClosingNotifierSubscriber = (function (_Subscriber2) {
                _inherits(WindowClosingNotifierSubscriber, _Subscriber2);

                function WindowClosingNotifierSubscriber(parent) {
                    _classCallCheck(this, WindowClosingNotifierSubscriber);

                    _get(Object.getPrototypeOf(WindowClosingNotifierSubscriber.prototype), 'constructor', this).call(this, null);
                    this.parent = parent;
                }

                _createClass(WindowClosingNotifierSubscriber, [{
                    key: '_next',
                    value: function _next() {
                        this.parent.openWindow();
                    }
                }]);

                return WindowClosingNotifierSubscriber;
            })(Subscriber);
        }
    };
});