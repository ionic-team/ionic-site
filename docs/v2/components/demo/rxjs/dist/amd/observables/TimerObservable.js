var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../util/isNumeric', '../Observable', '../schedulers/nextTick'], function (require, exports, isNumeric_1, Observable_1, nextTick_1) {
    var TimerObservable = (function (_super) {
        __extends(TimerObservable, _super);
        function TimerObservable(dueTime, period, scheduler) {
            if (dueTime === void 0) { dueTime = 0; }
            _super.call(this);
            this.dueTime = dueTime;
            this.period = period;
            this.scheduler = scheduler;
            if (isNumeric_1.default(period)) {
                this._period = Number(period) < 1 && 1 || Number(period);
            }
            else if (period && typeof period.schedule === "function") {
                scheduler = period;
            }
            if (!scheduler || typeof scheduler.schedule !== "function") {
                scheduler = nextTick_1.default;
            }
            this.scheduler = scheduler;
        }
        TimerObservable.create = function (dueTime, period, scheduler) {
            if (dueTime === void 0) { dueTime = 0; }
            return new TimerObservable(dueTime, period, scheduler);
        };
        TimerObservable.dispatch = function (state) {
            var index = state.index, period = state.period, subscriber = state.subscriber;
            var action = this;
            subscriber.next(index);
            if (typeof period === "undefined") {
                subscriber.complete();
                return;
            }
            else if (subscriber.isUnsubscribed) {
                return;
            }
            if (typeof action.delay === 'undefined') {
                action.add(action.scheduler.schedule(TimerObservable.dispatch, period, {
                    index: index + 1, period: period, subscriber: subscriber
                }));
            }
            else {
                state.index = index + 1;
                action.schedule(state, period);
            }
        };
        TimerObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var period = this._period;
            var dueTime = this.dueTime;
            var scheduler = this.scheduler;
            subscriber.add(scheduler.schedule(TimerObservable.dispatch, dueTime, { index: index, period: period, subscriber: subscriber }));
        };
        return TimerObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TimerObservable;
});
//# sourceMappingURL=TimerObservable.js.map