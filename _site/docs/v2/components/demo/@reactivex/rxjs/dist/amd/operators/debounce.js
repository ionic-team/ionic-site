var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../schedulers/nextTick'], function (require, exports, Subscriber_1, nextTick_1) {
    function debounce(dueTime, scheduler) {
        if (scheduler === void 0) { scheduler = nextTick_1.default; }
        return this.lift(new DebounceOperator(dueTime, scheduler));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = debounce;
    var DebounceOperator = (function () {
        function DebounceOperator(dueTime, scheduler) {
            this.dueTime = dueTime;
            this.scheduler = scheduler;
        }
        DebounceOperator.prototype.call = function (subscriber) {
            return new DebounceSubscriber(subscriber, this.dueTime, this.scheduler);
        };
        return DebounceOperator;
    })();
    var DebounceSubscriber = (function (_super) {
        __extends(DebounceSubscriber, _super);
        function DebounceSubscriber(destination, dueTime, scheduler) {
            _super.call(this, destination);
            this.dueTime = dueTime;
            this.scheduler = scheduler;
        }
        DebounceSubscriber.prototype._next = function (value) {
            if (!this.debounced) {
                this.add(this.debounced = this.scheduler.schedule(dispatchNext, this.dueTime, { value: value, subscriber: this }));
            }
        };
        DebounceSubscriber.prototype.clearDebounce = function () {
            var debounced = this.debounced;
            if (debounced) {
                debounced.unsubscribe();
                this.remove(debounced);
            }
        };
        DebounceSubscriber.prototype.debouncedNext = function (value) {
            this.clearDebounce();
            this.destination.next(value);
        };
        return DebounceSubscriber;
    })(Subscriber_1.default);
    function dispatchNext(_a) {
        var value = _a.value, subscriber = _a.subscriber;
        subscriber.debouncedNext(value);
    }
});
//# sourceMappingURL=debounce.js.map