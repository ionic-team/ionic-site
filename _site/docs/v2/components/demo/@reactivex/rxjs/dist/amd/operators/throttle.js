var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../schedulers/nextTick'], function (require, exports, Subscriber_1, nextTick_1) {
    function throttle(delay, scheduler) {
        if (scheduler === void 0) { scheduler = nextTick_1.default; }
        return this.lift(new ThrottleOperator(delay, scheduler));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = throttle;
    var ThrottleOperator = (function () {
        function ThrottleOperator(delay, scheduler) {
            this.delay = delay;
            this.scheduler = scheduler;
        }
        ThrottleOperator.prototype.call = function (subscriber) {
            return new ThrottleSubscriber(subscriber, this.delay, this.scheduler);
        };
        return ThrottleOperator;
    })();
    var ThrottleSubscriber = (function (_super) {
        __extends(ThrottleSubscriber, _super);
        function ThrottleSubscriber(destination, delay, scheduler) {
            _super.call(this, destination);
            this.delay = delay;
            this.scheduler = scheduler;
        }
        ThrottleSubscriber.prototype._next = function (x) {
            this.clearThrottle();
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, { value: x, subscriber: this }));
        };
        ThrottleSubscriber.prototype.throttledNext = function (x) {
            this.clearThrottle();
            this.destination.next(x);
        };
        ThrottleSubscriber.prototype.clearThrottle = function () {
            var throttled = this.throttled;
            if (throttled) {
                this.remove(throttled);
                throttled.unsubscribe();
                this.throttled = null;
            }
        };
        return ThrottleSubscriber;
    })(Subscriber_1.default);
    function dispatchNext(_a) {
        var value = _a.value, subscriber = _a.subscriber;
        subscriber.throttledNext(value);
    }
});
//# sourceMappingURL=throttle.js.map