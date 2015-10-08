System.register('rxjs/src/operators/bufferToggle', ['../Subscriber', '../Subscription', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Subscriber, Subscription, tryCatch, errorObject, BufferToggleOperator, BufferToggleSubscriber, BufferClosingNotifierSubscriber, BufferToggleOpeningsSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', bufferToggle);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function bufferToggle(openings, closingSelector) {
        return this.lift(new BufferToggleOperator(openings, closingSelector));
    }

    return {
        setters: [function (_Subscriber4) {
            Subscriber = _Subscriber4['default'];
        }, function (_Subscription) {
            Subscription = _Subscription['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            BufferToggleOperator = (function () {
                function BufferToggleOperator(openings, closingSelector) {
                    _classCallCheck(this, BufferToggleOperator);

                    this.openings = openings;
                    this.closingSelector = closingSelector;
                }

                _createClass(BufferToggleOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector);
                    }
                }]);

                return BufferToggleOperator;
            })();

            BufferToggleSubscriber = (function (_Subscriber) {
                _inherits(BufferToggleSubscriber, _Subscriber);

                function BufferToggleSubscriber(destination, openings, closingSelector) {
                    _classCallCheck(this, BufferToggleSubscriber);

                    _get(Object.getPrototypeOf(BufferToggleSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.openings = openings;
                    this.closingSelector = closingSelector;
                    this.buffers = [];
                    this.add(this.openings._subscribe(new BufferToggleOpeningsSubscriber(this)));
                }

                _createClass(BufferToggleSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        var buffers = this.buffers;
                        var len = buffers.length;
                        for (var i = 0; i < len; i++) {
                            buffers[i].push(value);
                        }
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.buffers = null;
                        this.destination.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var buffers = this.buffers;
                        while (buffers.length > 0) {
                            this.destination.next(buffers.shift());
                        }
                        this.destination.complete();
                    }
                }, {
                    key: 'openBuffer',
                    value: function openBuffer(value) {
                        var closingSelector = this.closingSelector;
                        var buffers = this.buffers;
                        var closingNotifier = tryCatch(closingSelector)(value);
                        if (closingNotifier === errorObject) {
                            var err = closingNotifier.e;
                            this.buffers = null;
                            this.destination.error(err);
                        } else {
                            var buffer = [];
                            var context = {
                                buffer: buffer,
                                subscription: new Subscription()
                            };
                            buffers.push(buffer);
                            this.add(context.subscription.add(closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this, context))));
                        }
                    }
                }, {
                    key: 'closeBuffer',
                    value: function closeBuffer(context) {
                        var buffer = context.buffer;
                        var subscription = context.subscription;

                        var buffers = this.buffers;
                        this.destination.next(buffer);
                        buffers.splice(buffers.indexOf(buffer), 1);
                        this.remove(subscription);
                        subscription.unsubscribe();
                    }
                }]);

                return BufferToggleSubscriber;
            })(Subscriber);

            BufferClosingNotifierSubscriber = (function (_Subscriber2) {
                _inherits(BufferClosingNotifierSubscriber, _Subscriber2);

                function BufferClosingNotifierSubscriber(parent, context) {
                    _classCallCheck(this, BufferClosingNotifierSubscriber);

                    _get(Object.getPrototypeOf(BufferClosingNotifierSubscriber.prototype), 'constructor', this).call(this, null);
                    this.parent = parent;
                    this.context = context;
                }

                _createClass(BufferClosingNotifierSubscriber, [{
                    key: '_next',
                    value: function _next() {
                        this.parent.closeBuffer(this.context);
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

            BufferToggleOpeningsSubscriber = (function (_Subscriber3) {
                _inherits(BufferToggleOpeningsSubscriber, _Subscriber3);

                function BufferToggleOpeningsSubscriber(parent) {
                    _classCallCheck(this, BufferToggleOpeningsSubscriber);

                    _get(Object.getPrototypeOf(BufferToggleOpeningsSubscriber.prototype), 'constructor', this).call(this, null);
                    this.parent = parent;
                }

                _createClass(BufferToggleOpeningsSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.parent.openBuffer(value);
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

                return BufferToggleOpeningsSubscriber;
            })(Subscriber);
        }
    };
});