System.register('rxjs/src/Subscriber', ['./util/noop', './util/throwError', './util/tryOrOnError', './Subscription'], function (_export) {
    'use strict';

    var noop, throwError, tryOrOnError, Subscription, Subscriber;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_utilNoop) {
            noop = _utilNoop['default'];
        }, function (_utilThrowError) {
            throwError = _utilThrowError['default'];
        }, function (_utilTryOrOnError) {
            tryOrOnError = _utilTryOrOnError['default'];
        }, function (_Subscription2) {
            Subscription = _Subscription2['default'];
        }],
        execute: function () {
            Subscriber = (function (_Subscription) {
                _inherits(Subscriber, _Subscription);

                function Subscriber(destination) {
                    _classCallCheck(this, Subscriber);

                    _get(Object.getPrototypeOf(Subscriber.prototype), 'constructor', this).call(this);
                    this._isUnsubscribed = false;
                    this.destination = destination;
                    if (!destination) {
                        return;
                    }
                    var subscription = destination._subscription;
                    if (subscription) {
                        this._subscription = subscription;
                    } else if (destination instanceof Subscriber) {
                        this._subscription = destination;
                    }
                }

                _createClass(Subscriber, [{
                    key: '_next',
                    value: function _next(value) {
                        this.destination.next(value);
                    }
                }, {
                    key: '_error',
                    value: function _error(err) {
                        this.destination.error(err);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        this.destination.complete();
                    }
                }, {
                    key: 'add',
                    value: function add(sub) {
                        // route add to the shared Subscription if it exists
                        var _subscription = this._subscription;
                        if (_subscription) {
                            _subscription.add(sub);
                        } else {
                            _get(Object.getPrototypeOf(Subscriber.prototype), 'add', this).call(this, sub);
                        }
                    }
                }, {
                    key: 'remove',
                    value: function remove(sub) {
                        // route remove to the shared Subscription if it exists
                        if (this._subscription) {
                            this._subscription.remove(sub);
                        } else {
                            _get(Object.getPrototypeOf(Subscriber.prototype), 'remove', this).call(this, sub);
                        }
                    }
                }, {
                    key: 'unsubscribe',
                    value: function unsubscribe() {
                        if (this._isUnsubscribed) {
                            return;
                        } else if (this._subscription) {
                            this._isUnsubscribed = true;
                        } else {
                            _get(Object.getPrototypeOf(Subscriber.prototype), 'unsubscribe', this).call(this);
                        }
                    }
                }, {
                    key: 'next',
                    value: function next(value) {
                        if (!this.isUnsubscribed) {
                            this._next(value);
                        }
                    }
                }, {
                    key: 'error',
                    value: function error(_error2) {
                        if (!this.isUnsubscribed) {
                            this._error(_error2);
                            this.unsubscribe();
                        }
                    }
                }, {
                    key: 'complete',
                    value: function complete() {
                        if (!this.isUnsubscribed) {
                            this._complete();
                            this.unsubscribe();
                        }
                    }
                }, {
                    key: 'isUnsubscribed',
                    get: function get() {
                        var subscription = this._subscription;
                        if (subscription) {
                            // route to the shared Subscription if it exists
                            return this._isUnsubscribed || subscription.isUnsubscribed;
                        } else {
                            return this._isUnsubscribed;
                        }
                    },
                    set: function set(value) {
                        var subscription = this._subscription;
                        if (subscription) {
                            // route to the shared Subscription if it exists
                            subscription.isUnsubscribed = Boolean(value);
                        } else {
                            this._isUnsubscribed = Boolean(value);
                        }
                    }
                }], [{
                    key: 'create',
                    value: function create(next, error, complete) {
                        var subscriber = new Subscriber();
                        subscriber._next = typeof next === "function" && tryOrOnError(next) || noop;
                        subscriber._error = typeof error === "function" && error || throwError;
                        subscriber._complete = typeof complete === "function" && complete || noop;
                        return subscriber;
                    }
                }]);

                return Subscriber;
            })(Subscription);

            _export('default', Subscriber);
        }
    };
});