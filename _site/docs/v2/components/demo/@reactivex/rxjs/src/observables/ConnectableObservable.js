System.register('rxjs/src/observables/ConnectableObservable', ['../Observable', '../Subscription'], function (_export) {
    'use strict';

    var Observable, Subscription, ConnectableObservable, ConnectableSubscription, RefCountObservable, RefCountSubscription;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_Observable3) {
            Observable = _Observable3['default'];
        }, function (_Subscription3) {
            Subscription = _Subscription3['default'];
        }],
        execute: function () {
            ConnectableObservable = (function (_Observable) {
                _inherits(ConnectableObservable, _Observable);

                function ConnectableObservable(source, subjectFactory) {
                    _classCallCheck(this, ConnectableObservable);

                    _get(Object.getPrototypeOf(ConnectableObservable.prototype), 'constructor', this).call(this);
                    this.source = source;
                    this.subjectFactory = subjectFactory;
                }

                _createClass(ConnectableObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        return this._getSubject().subscribe(subscriber);
                    }
                }, {
                    key: '_getSubject',
                    value: function _getSubject() {
                        var subject = this.subject;
                        if (subject && !subject.isUnsubscribed) {
                            return subject;
                        }
                        return this.subject = this.subjectFactory();
                    }
                }, {
                    key: 'connect',
                    value: function connect() {
                        var source = this.source;
                        var subscription = this.subscription;
                        if (subscription && !subscription.isUnsubscribed) {
                            return subscription;
                        }
                        subscription = source.subscribe(this._getSubject());
                        subscription.add(new ConnectableSubscription(this));
                        return this.subscription = subscription;
                    }
                }, {
                    key: 'refCount',
                    value: function refCount() {
                        return new RefCountObservable(this);
                    }
                }]);

                return ConnectableObservable;
            })(Observable);

            _export('default', ConnectableObservable);

            ConnectableSubscription = (function (_Subscription) {
                _inherits(ConnectableSubscription, _Subscription);

                function ConnectableSubscription(connectable) {
                    _classCallCheck(this, ConnectableSubscription);

                    _get(Object.getPrototypeOf(ConnectableSubscription.prototype), 'constructor', this).call(this);
                    this.connectable = connectable;
                }

                _createClass(ConnectableSubscription, [{
                    key: '_unsubscribe',
                    value: function _unsubscribe() {
                        var connectable = this.connectable;
                        connectable.subject = void 0;
                        connectable.subscription = void 0;
                        this.connectable = void 0;
                    }
                }]);

                return ConnectableSubscription;
            })(Subscription);

            RefCountObservable = (function (_Observable2) {
                _inherits(RefCountObservable, _Observable2);

                function RefCountObservable(connectable) {
                    var refCount = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

                    _classCallCheck(this, RefCountObservable);

                    _get(Object.getPrototypeOf(RefCountObservable.prototype), 'constructor', this).call(this);
                    this.connectable = connectable;
                    this.refCount = refCount;
                }

                _createClass(RefCountObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var connectable = this.connectable;
                        var subscription = connectable.subscribe(subscriber);
                        if (++this.refCount === 1) {
                            this.connection = connectable.connect();
                        }
                        subscription.add(new RefCountSubscription(this));
                        return subscription;
                    }
                }]);

                return RefCountObservable;
            })(Observable);

            RefCountSubscription = (function (_Subscription2) {
                _inherits(RefCountSubscription, _Subscription2);

                function RefCountSubscription(refCountObservable) {
                    _classCallCheck(this, RefCountSubscription);

                    _get(Object.getPrototypeOf(RefCountSubscription.prototype), 'constructor', this).call(this);
                    this.refCountObservable = refCountObservable;
                }

                _createClass(RefCountSubscription, [{
                    key: '_unsubscribe',
                    value: function _unsubscribe() {
                        var observable = this.refCountObservable;
                        if (--observable.refCount === 0) {
                            observable.connection.unsubscribe();
                            observable.connection = void 0;
                        }
                    }
                }]);

                return RefCountSubscription;
            })(Subscription);
        }
    };
});