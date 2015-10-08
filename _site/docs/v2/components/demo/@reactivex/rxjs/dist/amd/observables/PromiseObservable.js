var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable', '../Subscription', '../schedulers/immediate'], function (require, exports, Observable_1, Subscription_1, immediate_1) {
    var PromiseObservable = (function (_super) {
        __extends(PromiseObservable, _super);
        function PromiseObservable(promise, scheduler) {
            _super.call(this);
            this.promise = promise;
            this.scheduler = scheduler;
            this._isScalar = false;
        }
        PromiseObservable.create = function (promise, scheduler) {
            if (scheduler === void 0) { scheduler = immediate_1.default; }
            return new PromiseObservable(promise, scheduler);
        };
        PromiseObservable.prototype._subscribe = function (subscriber) {
            var _this = this;
            var scheduler = this.scheduler;
            var promise = this.promise;
            if (scheduler === immediate_1.default) {
                if (this._isScalar) {
                    subscriber.next(this.value);
                    subscriber.complete();
                }
                else {
                    promise.then(function (value) {
                        _this._isScalar = true;
                        _this.value = value;
                        subscriber.next(value);
                        subscriber.complete();
                    }, function (err) { return subscriber.error(err); });
                }
            }
            else {
                var subscription = new Subscription_1.default();
                if (this._isScalar) {
                    var value = this.value;
                    subscription.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                }
                else {
                    promise.then(function (value) {
                        _this._isScalar = true;
                        _this.value = value;
                        subscription.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                    }, function (err) { return subscription.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber })); });
                }
                return subscription;
            }
        };
        return PromiseObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PromiseObservable;
    function dispatchNext(_a) {
        var value = _a.value, subscriber = _a.subscriber;
        subscriber.next(value);
        subscriber.complete();
    }
    function dispatchError(_a) {
        var err = _a.err, subscriber = _a.subscriber;
        subscriber.error(err);
    }
});
//# sourceMappingURL=PromiseObservable.js.map