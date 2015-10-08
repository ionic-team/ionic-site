System.register('rxjs/src/Subject', ['./Observable', './Subscriber', './Subscription', './subjects/SubjectSubscription'], function (_export) {
    'use strict';

    var Observable, Subscriber, Subscription, SubjectSubscription, subscriptionAdd, subscriptionRemove, subscriptionUnsubscribe, subscriberNext, subscriberError, subscriberComplete, _subscriberNext, _subscriberError, _subscriberComplete, _observableSubscribe, Subject, BidirectionalSubject;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_Observable2) {
            Observable = _Observable2['default'];
        }, function (_Subscriber) {
            Subscriber = _Subscriber['default'];
        }, function (_Subscription) {
            Subscription = _Subscription['default'];
        }, function (_subjectsSubjectSubscription) {
            SubjectSubscription = _subjectsSubjectSubscription['default'];
        }],
        execute: function () {
            subscriptionAdd = Subscription.prototype.add;
            subscriptionRemove = Subscription.prototype.remove;
            subscriptionUnsubscribe = Subscription.prototype.unsubscribe;
            subscriberNext = Subscriber.prototype.next;
            subscriberError = Subscriber.prototype.error;
            subscriberComplete = Subscriber.prototype.complete;
            _subscriberNext = Subscriber.prototype._next;
            _subscriberError = Subscriber.prototype._error;
            _subscriberComplete = Subscriber.prototype._complete;
            _observableSubscribe = Observable.prototype._subscribe;

            Subject = (function (_Observable) {
                _inherits(Subject, _Observable);

                function Subject() {
                    _classCallCheck(this, Subject);

                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    _get(Object.getPrototypeOf(Subject.prototype), 'constructor', this).apply(this, args);
                    this.observers = [];
                    this.isUnsubscribed = false;
                    this.dispatching = false;
                    this.errorSignal = false;
                    this.completeSignal = false;
                }

                _createClass(Subject, [{
                    key: 'lift',
                    value: function lift(operator) {
                        var subject = new BidirectionalSubject(this, this.destination || this);
                        subject.operator = operator;
                        return subject;
                    }
                }, {
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        if (subscriber.isUnsubscribed) {
                            return;
                        } else if (this.errorSignal) {
                            subscriber.error(this.errorInstance);
                            return;
                        } else if (this.completeSignal) {
                            subscriber.complete();
                            return;
                        } else if (this.isUnsubscribed) {
                            throw new Error("Cannot subscribe to a disposed Subject.");
                        }
                        this.observers.push(subscriber);
                        return new SubjectSubscription(this, subscriber);
                    }
                }, {
                    key: 'add',
                    value: function add(subscription) {
                        subscriptionAdd.call(this, subscription);
                    }
                }, {
                    key: 'remove',
                    value: function remove(subscription) {
                        subscriptionRemove.call(this, subscription);
                    }
                }, {
                    key: 'unsubscribe',
                    value: function unsubscribe() {
                        this.observers = void 0;
                        subscriptionUnsubscribe.call(this);
                    }
                }, {
                    key: 'next',
                    value: function next(value) {
                        if (this.isUnsubscribed) {
                            return;
                        }
                        this.dispatching = true;
                        this._next(value);
                        this.dispatching = false;
                        if (this.errorSignal) {
                            this.error(this.errorInstance);
                        } else if (this.completeSignal) {
                            this.complete();
                        }
                    }
                }, {
                    key: 'error',
                    value: function error(_error) {
                        if (this.isUnsubscribed || this.completeSignal) {
                            return;
                        }
                        this.errorSignal = true;
                        this.errorInstance = _error;
                        if (this.dispatching) {
                            return;
                        }
                        this._error(_error);
                        this.unsubscribe();
                    }
                }, {
                    key: 'complete',
                    value: function complete() {
                        if (this.isUnsubscribed || this.errorSignal) {
                            return;
                        }
                        this.completeSignal = true;
                        if (this.dispatching) {
                            return;
                        }
                        this._complete();
                        this.unsubscribe();
                    }
                }, {
                    key: '_next',
                    value: function _next(value) {
                        var index = -1;
                        var observers = this.observers.slice(0);
                        var len = observers.length;
                        while (++index < len) {
                            observers[index].next(value);
                        }
                    }
                }, {
                    key: '_error',
                    value: function _error(error) {
                        var index = -1;
                        var observers = this.observers;
                        var len = observers.length;
                        // optimization -- block next, complete, and unsubscribe while dispatching
                        this.observers = void 0;
                        this.isUnsubscribed = true;
                        while (++index < len) {
                            observers[index].error(error);
                        }
                        this.isUnsubscribed = false;
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        var index = -1;
                        var observers = this.observers;
                        var len = observers.length;
                        // optimization -- block next, complete, and unsubscribe while dispatching
                        this.observers = void 0; // optimization
                        this.isUnsubscribed = true;
                        while (++index < len) {
                            observers[index].complete();
                        }
                        this.isUnsubscribed = false;
                    }
                }], [{
                    key: 'create',
                    value: function create(source, destination) {
                        return new BidirectionalSubject(source, destination);
                    }
                }]);

                return Subject;
            })(Observable);

            _export('default', Subject);

            BidirectionalSubject = (function (_Subject) {
                _inherits(BidirectionalSubject, _Subject);

                function BidirectionalSubject(source, destination) {
                    _classCallCheck(this, BidirectionalSubject);

                    _get(Object.getPrototypeOf(BidirectionalSubject.prototype), 'constructor', this).call(this);
                    this.source = source;
                    this.destination = destination;
                }

                _createClass(BidirectionalSubject, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        return _observableSubscribe.call(this, subscriber);
                    }
                }, {
                    key: 'next',
                    value: function next(x) {
                        subscriberNext.call(this, x);
                    }
                }, {
                    key: 'error',
                    value: function error(e) {
                        subscriberError.call(this, e);
                    }
                }, {
                    key: 'complete',
                    value: function complete() {
                        subscriberComplete.call(this);
                    }
                }, {
                    key: '_next',
                    value: function _next(x) {
                        _subscriberNext.call(this, x);
                    }
                }, {
                    key: '_error',
                    value: function _error(e) {
                        _subscriberError.call(this, e);
                    }
                }, {
                    key: '_complete',
                    value: function _complete() {
                        _subscriberComplete.call(this);
                    }
                }]);

                return BidirectionalSubject;
            })(Subject);
        }
    };
});