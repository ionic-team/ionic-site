var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../util/isNumeric', '../Observable', '../schedulers/nextTick'], function (require, exports, isNumeric_1, Observable_1, nextTick_1) {
    var IntervalObservable = (function (_super) {
        __extends(IntervalObservable, _super);
        function IntervalObservable(period, scheduler) {
            if (period === void 0) { period = 0; }
            if (scheduler === void 0) { scheduler = nextTick_1.default; }
            _super.call(this);
            this.period = period;
            this.scheduler = scheduler;
            if (!isNumeric_1.default(period) || period < 0) {
                this.period = 0;
            }
            if (!scheduler || typeof scheduler.schedule !== "function") {
                this.scheduler = nextTick_1.default;
            }
        }
        IntervalObservable.create = function (period, scheduler) {
            if (period === void 0) { period = 0; }
            if (scheduler === void 0) { scheduler = nextTick_1.default; }
            return new IntervalObservable(period, scheduler);
        };
        IntervalObservable.dispatch = function (state) {
            var index = state.index, subscriber = state.subscriber, period = state.period;
            subscriber.next(index);
            if (subscriber.isUnsubscribed) {
                return;
            }
            state.index += 1;
            this.schedule(state, period);
        };
        IntervalObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var period = this.period;
            var scheduler = this.scheduler;
            subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
                index: index, subscriber: subscriber, period: period
            }));
        };
        return IntervalObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = IntervalObservable;
});
//# sourceMappingURL=IntervalObservable.js.map