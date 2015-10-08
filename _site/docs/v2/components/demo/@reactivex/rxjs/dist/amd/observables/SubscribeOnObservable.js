var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable', '../schedulers/nextTick'], function (require, exports, Observable_1, nextTick_1) {
    var SubscribeOnObservable = (function (_super) {
        __extends(SubscribeOnObservable, _super);
        function SubscribeOnObservable(source, delay, scheduler) {
            if (delay === void 0) { delay = 0; }
            if (scheduler === void 0) { scheduler = nextTick_1.default; }
            _super.call(this);
            this.source = source;
            this.delayTime = delay;
            this.scheduler = scheduler;
        }
        SubscribeOnObservable.create = function (source, delay, scheduler) {
            if (delay === void 0) { delay = 0; }
            if (scheduler === void 0) { scheduler = nextTick_1.default; }
            return new SubscribeOnObservable(source, delay, scheduler);
        };
        SubscribeOnObservable.dispatch = function (_a) {
            var source = _a.source, subscriber = _a.subscriber;
            return source.subscribe(subscriber);
        };
        SubscribeOnObservable.prototype._subscribe = function (subscriber) {
            var delay = this.delayTime;
            var source = this.source;
            var scheduler = this.scheduler;
            subscriber.add(scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
                source: source, subscriber: subscriber
            }));
        };
        return SubscribeOnObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SubscribeOnObservable;
});
//# sourceMappingURL=SubscribeOnObservable.js.map