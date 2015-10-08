var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber'], function (require, exports, Subscriber_1) {
    function skipUntil(total) {
        return this.lift(new SkipUntilOperator(total));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = skipUntil;
    var SkipUntilOperator = (function () {
        function SkipUntilOperator(notifier) {
            this.notifier = notifier;
        }
        SkipUntilOperator.prototype.call = function (subscriber) {
            return new SkipUntilSubscriber(subscriber, this.notifier);
        };
        return SkipUntilOperator;
    })();
    var SkipUntilSubscriber = (function (_super) {
        __extends(SkipUntilSubscriber, _super);
        function SkipUntilSubscriber(destination, notifier) {
            _super.call(this, destination);
            this.notifier = notifier;
            this.notificationSubscriber = new NotificationSubscriber();
            this.add(this.notifier.subscribe(this.notificationSubscriber));
        }
        SkipUntilSubscriber.prototype._next = function (x) {
            if (this.notificationSubscriber.hasNotified) {
                this.destination.next(x);
            }
        };
        return SkipUntilSubscriber;
    })(Subscriber_1.default);
    var NotificationSubscriber = (function (_super) {
        __extends(NotificationSubscriber, _super);
        function NotificationSubscriber() {
            _super.call(this, null);
            this.hasNotified = false;
        }
        NotificationSubscriber.prototype._next = function () {
            this.hasNotified = true;
            this.unsubscribe();
        };
        return NotificationSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=skipUntil.js.map