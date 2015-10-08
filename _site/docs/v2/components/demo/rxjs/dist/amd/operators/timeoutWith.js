var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../schedulers/immediate', '../util/isDate'], function (require, exports, Subscriber_1, immediate_1, isDate_1) {
    function timeoutWith(due, withObservable, scheduler) {
        if (scheduler === void 0) { scheduler = immediate_1.default; }
        var waitFor = isDate_1.default(due) ? (+due - Date.now()) : due;
        return this.lift(new TimeoutWithOperator(waitFor, withObservable, scheduler));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = timeoutWith;
    var TimeoutWithOperator = (function () {
        function TimeoutWithOperator(waitFor, withObservable, scheduler) {
            this.waitFor = waitFor;
            this.withObservable = withObservable;
            this.scheduler = scheduler;
        }
        TimeoutWithOperator.prototype.call = function (subscriber) {
            return new TimeoutWithSubscriber(subscriber, this.waitFor, this.withObservable, this.scheduler);
        };
        return TimeoutWithOperator;
    })();
    var TimeoutWithSubscriber = (function (_super) {
        __extends(TimeoutWithSubscriber, _super);
        function TimeoutWithSubscriber(destination, waitFor, withObservable, scheduler) {
            _super.call(this, destination);
            this.waitFor = waitFor;
            this.withObservable = withObservable;
            this.scheduler = scheduler;
            var delay = waitFor;
            scheduler.schedule(dispatchTimeout, delay, { subscriber: this });
        }
        TimeoutWithSubscriber.prototype.handleTimeout = function () {
            var withObservable = this.withObservable;
            this.add(withObservable.subscribe(this));
        };
        return TimeoutWithSubscriber;
    })(Subscriber_1.default);
    function dispatchTimeout(state) {
        var subscriber = state.subscriber;
        subscriber.handleTimeout();
    }
});
//# sourceMappingURL=timeoutWith.js.map