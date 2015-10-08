var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../Notification', '../schedulers/immediate'], function (require, exports, Subscriber_1, Notification_1, immediate_1) {
    function delay(delay, scheduler) {
        if (scheduler === void 0) { scheduler = immediate_1.default; }
        return this.lift(new DelayOperator(delay, scheduler));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = delay;
    var DelayOperator = (function () {
        function DelayOperator(delay, scheduler) {
            this.delay = delay;
            this.scheduler = scheduler;
        }
        DelayOperator.prototype.call = function (subscriber) {
            return new DelaySubscriber(subscriber, this.delay, this.scheduler);
        };
        return DelayOperator;
    })();
    var DelaySubscriber = (function (_super) {
        __extends(DelaySubscriber, _super);
        function DelaySubscriber(destination, delay, scheduler) {
            _super.call(this, destination);
            this.queue = [];
            this.active = false;
            this.errored = false;
            this.delay = delay;
            this.scheduler = scheduler;
        }
        DelaySubscriber.dispatch = function (state) {
            var source = state.source;
            var queue = source.queue;
            var scheduler = state.scheduler;
            var destination = state.destination;
            while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
                queue.shift().notification.observe(destination);
            }
            if (queue.length > 0) {
                var delay_1 = Math.max(0, queue[0].time - scheduler.now());
                this.schedule(state, delay_1);
            }
            else {
                source.active = false;
            }
        };
        DelaySubscriber.prototype._next = function (x) {
            if (this.errored) {
                return;
            }
            var scheduler = this.scheduler;
            this.queue.push(new DelayMessage(scheduler.now() + this.delay, Notification_1.default.createNext(x)));
            if (this.active === false) {
                this._schedule(scheduler);
            }
        };
        DelaySubscriber.prototype._error = function (e) {
            var scheduler = this.scheduler;
            this.errored = true;
            this.queue = [new DelayMessage(scheduler.now() + this.delay, Notification_1.default.createError(e))];
            if (this.active === false) {
                this._schedule(scheduler);
            }
        };
        DelaySubscriber.prototype._complete = function () {
            if (this.errored) {
                return;
            }
            var scheduler = this.scheduler;
            this.queue.push(new DelayMessage(scheduler.now() + this.delay, Notification_1.default.createComplete()));
            if (this.active === false) {
                this._schedule(scheduler);
            }
        };
        DelaySubscriber.prototype._schedule = function (scheduler) {
            this.active = true;
            this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
                source: this, destination: this.destination, scheduler: scheduler
            }));
        };
        return DelaySubscriber;
    })(Subscriber_1.default);
    var DelayMessage = (function () {
        function DelayMessage(time, notification) {
            this.time = time;
            this.notification = notification;
        }
        return DelayMessage;
    })();
});
//# sourceMappingURL=delay.js.map