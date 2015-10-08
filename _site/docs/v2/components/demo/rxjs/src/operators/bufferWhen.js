System.register('rxjs/src/operators/bufferWhen', ['../Subscriber', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Subscriber, tryCatch, errorObject, BufferWhenOperator, BufferWhenSubscriber, BufferClosingNotifierSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', bufferWhen);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function bufferWhen(closingSelector) {
        return this.lift(new BufferWhenOperator(closingSelector));
    }

    return {
        setters: [function (_Subscriber3) {
            Subscriber = _Subscriber3['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            BufferWhenOperator = (function () {
                function BufferWhenOperator(closingSelector) {
                    _classCallCheck(this, BufferWhenOperator);

                    this.closingSelector = closingSelector;
                }

                _createClass(BufferWhenOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new BufferWhenSubscriber(subscriber, this.closingSelector);
                    }
                }]);

                return BufferWhenOperator;
            })();

            BufferWhenSubscriber = (function (_Subscriber) {
                _inherits(BufferWhenSubscriber, _Subscriber);

                function BufferWhenSubscriber(destination, closingSelector) {
                    _classCallCheck(this, BufferWhenSubscriber);

                    _get(Object.getPrototypeOf(BufferWhenSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.closingSelector = closingSelector;
                    this.openBuffer();
                }

                _createClass(BufferWhenSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.buffer.push(value);
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.buffer = null;
                        this.destination.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var buffer = this.buffer;
                        this.destination.next(buffer);
                        this.buffer = null;
                        this.destination.complete();
                    }
                }, {
                    key: 'openBuffer',
                    value: function openBuffer() {
                        var prevClosingNotification = this.closingNotification;
                        if (prevClosingNotification) {
                            this.remove(prevClosingNotification);
                            prevClosingNotification.unsubscribe();
                        }
                        var buffer = this.buffer;
                        if (buffer) {
                            this.destination.next(buffer);
                        }
                        this.buffer = [];
                        var closingNotifier = tryCatch(this.closingSelector)();
                        if (closingNotifier === errorObject) {
                            var err = closingNotifier.e;
                            this.buffer = null;
                            this.destination.error(err);
                        } else {
                            this.add(this.closingNotification = closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this)));
                        }
                    }
                }]);

                return BufferWhenSubscriber;
            })(Subscriber);

            BufferClosingNotifierSubscriber = (function (_Subscriber2) {
                _inherits(BufferClosingNotifierSubscriber, _Subscriber2);

                function BufferClosingNotifierSubscriber(parent) {
                    _classCallCheck(this, BufferClosingNotifierSubscriber);

                    _get(Object.getPrototypeOf(BufferClosingNotifierSubscriber.prototype), 'constructor', this).call(this, null);
                    this.parent = parent;
                }

                _createClass(BufferClosingNotifierSubscriber, [{
                    key: '_next',
                    value: function _next() {
                        this.parent.openBuffer();
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

                return BufferClosingNotifierSubscriber;
            })(Subscriber);
        }
    };
});