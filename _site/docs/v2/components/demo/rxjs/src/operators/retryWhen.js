System.register('rxjs/src/operators/retryWhen', ['../Subscriber', '../Subject', '../util/tryCatch', '../util/errorObject'], function (_export) {
    'use strict';

    var Subscriber, Subject, tryCatch, errorObject, RetryWhenOperator, RetryWhenSubscriber, RetryNotificationSubscriber;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export('default', retryWhen);

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function retryWhen(notifier) {
        return this.lift(new RetryWhenOperator(notifier, this));
    }

    return {
        setters: [function (_Subscriber3) {
            Subscriber = _Subscriber3['default'];
        }, function (_Subject) {
            Subject = _Subject['default'];
        }, function (_utilTryCatch) {
            tryCatch = _utilTryCatch['default'];
        }, function (_utilErrorObject) {
            errorObject = _utilErrorObject.errorObject;
        }],
        execute: function () {
            RetryWhenOperator = (function () {
                function RetryWhenOperator(notifier, original) {
                    _classCallCheck(this, RetryWhenOperator);

                    this.notifier = notifier;
                    this.original = original;
                }

                _createClass(RetryWhenOperator, [{
                    key: 'call',
                    value: function call(subscriber) {
                        return new RetryWhenSubscriber(subscriber, this.notifier, this.original);
                    }
                }]);

                return RetryWhenOperator;
            })();

            RetryWhenSubscriber = (function (_Subscriber) {
                _inherits(RetryWhenSubscriber, _Subscriber);

                function RetryWhenSubscriber(destination, notifier, original) {
                    _classCallCheck(this, RetryWhenSubscriber);

                    _get(Object.getPrototypeOf(RetryWhenSubscriber.prototype), 'constructor', this).call(this, destination);
                    this.notifier = notifier;
                    this.original = original;
                }

                _createClass(RetryWhenSubscriber, [{
                    key: '_error',
                    value: function _error(err) {
                        if (!this.retryNotifications) {
                            this.errors = new Subject();
                            var notifications = tryCatch(this.notifier).call(this, this.errors);
                            if (notifications === errorObject) {
                                this.destination.error(errorObject.e);
                            } else {
                                this.retryNotifications = notifications;
                                this.add(notifications._subscribe(new RetryNotificationSubscriber(this)));
                            }
                        }
                        this.errors.next(err);
                    }
                }, {
                    key: 'finalError',
                    value: function finalError(err) {
                        this.destination.error(err);
                    }
                }, {
                    key: 'resubscribe',
                    value: function resubscribe() {
                        this.original.subscribe(this);
                    }
                }]);

                return RetryWhenSubscriber;
            })(Subscriber);

            RetryNotificationSubscriber = (function (_Subscriber2) {
                _inherits(RetryNotificationSubscriber, _Subscriber2);

                function RetryNotificationSubscriber(parent) {
                    _classCallCheck(this, RetryNotificationSubscriber);

                    _get(Object.getPrototypeOf(RetryNotificationSubscriber.prototype), 'constructor', this).call(this, null);
                    this.parent = parent;
                }

                _createClass(RetryNotificationSubscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.parent.resubscribe();
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.parent.finalError(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        this.parent.complete();
                    }
                }]);

                return RetryNotificationSubscriber;
            })(Subscriber);
        }
    };
});