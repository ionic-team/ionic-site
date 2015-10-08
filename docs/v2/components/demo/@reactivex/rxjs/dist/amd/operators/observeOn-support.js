var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../Notification'], function (require, exports, Subscriber_1, Notification_1) {
    var ObserveOnOperator = (function () {
        function ObserveOnOperator(scheduler, delay) {
            if (delay === void 0) { delay = 0; }
            this.delay = delay;
            this.scheduler = scheduler;
        }
        ObserveOnOperator.prototype.call = function (subscriber) {
            return new ObserveOnSubscriber(subscriber, this.scheduler, this.delay);
        };
        return ObserveOnOperator;
    })();
    exports.ObserveOnOperator = ObserveOnOperator;
    var ObserveOnSubscriber = (function (_super) {
        __extends(ObserveOnSubscriber, _super);
        function ObserveOnSubscriber(destination, scheduler, delay) {
            if (delay === void 0) { delay = 0; }
            _super.call(this, destination);
            this.delay = delay;
            this.scheduler = scheduler;
        }
        ObserveOnSubscriber.dispatch = function (_a) {
            var notification = _a.notification, destination = _a.destination;
            notification.observe(destination);
        };
        ObserveOnSubscriber.prototype._next = function (x) {
            this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification_1.default.createNext(x), this.destination)));
        };
        ObserveOnSubscriber.prototype._error = function (e) {
            this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification_1.default.createError(e), this.destination)));
        };
        ObserveOnSubscriber.prototype._complete = function () {
            this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification_1.default.createComplete(), this.destination)));
        };
        return ObserveOnSubscriber;
    })(Subscriber_1.default);
    exports.ObserveOnSubscriber = ObserveOnSubscriber;
    var ObserveOnMessage = (function () {
        function ObserveOnMessage(notification, destination) {
            this.notification = notification;
            this.destination = destination;
        }
        return ObserveOnMessage;
    })();
});
//# sourceMappingURL=observeOn-support.js.map