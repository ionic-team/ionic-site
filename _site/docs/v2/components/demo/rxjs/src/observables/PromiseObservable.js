System.register('rxjs/src/observables/PromiseObservable', ['../Observable', '../Subscription', '../schedulers/immediate'], function (_export) {
    'use strict';

    var Observable, Subscription, immediate, PromiseObservable;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function dispatchNext(_ref) {
        var value = _ref.value;
        var subscriber = _ref.subscriber;

        subscriber.next(value);
        subscriber.complete();
    }
    function dispatchError(_ref2) {
        var err = _ref2.err;
        var subscriber = _ref2.subscriber;

        subscriber.error(err);
    }
    return {
        setters: [function (_Observable2) {
            Observable = _Observable2['default'];
        }, function (_Subscription) {
            Subscription = _Subscription['default'];
        }, function (_schedulersImmediate) {
            immediate = _schedulersImmediate['default'];
        }],
        execute: function () {
            PromiseObservable = (function (_Observable) {
                _inherits(PromiseObservable, _Observable);

                function PromiseObservable(promise, scheduler) {
                    _classCallCheck(this, PromiseObservable);

                    _get(Object.getPrototypeOf(PromiseObservable.prototype), 'constructor', this).call(this);
                    this.promise = promise;
                    this.scheduler = scheduler;
                    this._isScalar = false;
                }

                _createClass(PromiseObservable, [{
                    key: '_subscribe',
                    value: function _subscribe(subscriber) {
                        var _this = this;

                        var scheduler = this.scheduler;
                        var promise = this.promise;
                        if (scheduler === immediate) {
                            if (this._isScalar) {
                                subscriber.next(this.value);
                                subscriber.complete();
                            } else {
                                promise.then(function (value) {
                                    _this._isScalar = true;
                                    _this.value = value;
                                    subscriber.next(value);
                                    subscriber.complete();
                                }, function (err) {
                                    return subscriber.error(err);
                                });
                            }
                        } else {
                            var _ret = (function () {
                                var subscription = new Subscription();
                                if (_this._isScalar) {
                                    var value = _this.value;
                                    subscription.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                                } else {
                                    promise.then(function (value) {
                                        _this._isScalar = true;
                                        _this.value = value;
                                        subscription.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                                    }, function (err) {
                                        return subscription.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
                                    });
                                }
                                return {
                                    v: subscription
                                };
                            })();

                            if (typeof _ret === 'object') return _ret.v;
                        }
                    }
                }], [{
                    key: 'create',
                    value: function create(promise) {
                        var scheduler = arguments.length <= 1 || arguments[1] === undefined ? immediate : arguments[1];

                        return new PromiseObservable(promise, scheduler);
                    }
                }]);

                return PromiseObservable;
            })(Observable);

            _export('default', PromiseObservable);
        }
    };
});