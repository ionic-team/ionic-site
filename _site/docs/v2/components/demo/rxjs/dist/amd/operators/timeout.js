var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../schedulers/immediate', '../util/isDate'], function (require, exports, Subscriber_1, immediate_1, isDate_1) {
    function timeout(due, errorToSend, scheduler) {
        if (errorToSend === void 0) { errorToSend = null; }
        if (scheduler === void 0) { scheduler = immediate_1.default; }
        var waitFor = isDate_1.default(due) ? (+due - Date.now()) : due;
        return this.lift(new TimeoutOperator(waitFor, errorToSend, scheduler));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = timeout;
    var TimeoutOperator = (function () {
        function TimeoutOperator(waitFor, errorToSend, scheduler) {
            this.waitFor = waitFor;
            this.errorToSend = errorToSend;
            this.scheduler = scheduler;
        }
        TimeoutOperator.prototype.call = function (subscriber) {
            return new TimeoutSubscriber(subscriber, this.waitFor, this.errorToSend, this.scheduler);
        };
        return TimeoutOperator;
    })();
    var TimeoutSubscriber = (function (_super) {
        __extends(TimeoutSubscriber, _super);
        function TimeoutSubscriber(destination, waitFor, errorToSend, scheduler) {
            _super.call(this, destination);
            this.waitFor = waitFor;
            this.errorToSend = errorToSend;
            this.scheduler = scheduler;
            var delay = waitFor;
            scheduler.schedule(dispatchTimeout, delay, { subscriber: this });
        }
        TimeoutSubscriber.prototype.sendTimeoutError = function () {
            this.error(this.errorToSend || new Error('timeout'));
        };
        return TimeoutSubscriber;
    })(Subscriber_1.default);
    function dispatchTimeout(state) {
        var subscriber = state.subscriber;
        subscriber.sendTimeoutError();
    }
});
//# sourceMappingURL=timeout.js.map