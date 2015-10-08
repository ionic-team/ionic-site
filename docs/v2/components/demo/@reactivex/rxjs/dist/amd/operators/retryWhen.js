var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../Subject', '../util/tryCatch', '../util/errorObject'], function (require, exports, Subscriber_1, Subject_1, tryCatch_1, errorObject_1) {
    function retryWhen(notifier) {
        return this.lift(new RetryWhenOperator(notifier, this));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = retryWhen;
    var RetryWhenOperator = (function () {
        function RetryWhenOperator(notifier, original) {
            this.notifier = notifier;
            this.original = original;
        }
        RetryWhenOperator.prototype.call = function (subscriber) {
            return new RetryWhenSubscriber(subscriber, this.notifier, this.original);
        };
        return RetryWhenOperator;
    })();
    var RetryWhenSubscriber = (function (_super) {
        __extends(RetryWhenSubscriber, _super);
        function RetryWhenSubscriber(destination, notifier, original) {
            _super.call(this, destination);
            this.notifier = notifier;
            this.original = original;
        }
        RetryWhenSubscriber.prototype._error = function (err) {
            if (!this.retryNotifications) {
                this.errors = new Subject_1.default();
                var notifications = tryCatch_1.default(this.notifier).call(this, this.errors);
                if (notifications === errorObject_1.errorObject) {
                    this.destination.error(errorObject_1.errorObject.e);
                }
                else {
                    this.retryNotifications = notifications;
                    this.add(notifications._subscribe(new RetryNotificationSubscriber(this)));
                }
            }
            this.errors.next(err);
        };
        RetryWhenSubscriber.prototype.finalError = function (err) {
            this.destination.error(err);
        };
        RetryWhenSubscriber.prototype.resubscribe = function () {
            this.original.subscribe(this);
        };
        return RetryWhenSubscriber;
    })(Subscriber_1.default);
    var RetryNotificationSubscriber = (function (_super) {
        __extends(RetryNotificationSubscriber, _super);
        function RetryNotificationSubscriber(parent) {
            _super.call(this, null);
            this.parent = parent;
        }
        RetryNotificationSubscriber.prototype._next = function (value) {
            this.parent.resubscribe();
        };
        RetryNotificationSubscriber.prototype._error = function (err) {
            this.parent.finalError(err);
        };
        RetryNotificationSubscriber.prototype._complete = function () {
            this.parent.complete();
        };
        return RetryNotificationSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=retryWhen.js.map