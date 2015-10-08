'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var _Subscription = require('../Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

var _schedulersImmediate = require('../schedulers/immediate');

var _schedulersImmediate2 = _interopRequireDefault(_schedulersImmediate);

var PromiseObservable = (function (_Observable) {
    _inherits(PromiseObservable, _Observable);

    function PromiseObservable(promise, scheduler) {
        _classCallCheck(this, PromiseObservable);

        _Observable.call(this);
        this.promise = promise;
        this.scheduler = scheduler;
        this._isScalar = false;
    }

    PromiseObservable.create = function create(promise) {
        var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _schedulersImmediate2['default'] : arguments[1];

        return new PromiseObservable(promise, scheduler);
    };

    PromiseObservable.prototype._subscribe = function _subscribe(subscriber) {
        var _this = this;

        var scheduler = this.scheduler;
        var promise = this.promise;
        if (scheduler === _schedulersImmediate2['default']) {
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
                var subscription = new _Subscription2['default']();
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
    };

    return PromiseObservable;
})(_Observable3['default']);

exports['default'] = PromiseObservable;

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
module.exports = exports['default'];