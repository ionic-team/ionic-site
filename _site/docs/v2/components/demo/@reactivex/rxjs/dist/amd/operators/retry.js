var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber'], function (require, exports, Subscriber_1) {
    function retry(count) {
        if (count === void 0) { count = 0; }
        return this.lift(new RetryOperator(count, this));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = retry;
    var RetryOperator = (function () {
        function RetryOperator(count, original) {
            this.count = count;
            this.original = original;
        }
        RetryOperator.prototype.call = function (subscriber) {
            return new RetrySubscriber(subscriber, this.count, this.original);
        };
        return RetryOperator;
    })();
    var RetrySubscriber = (function (_super) {
        __extends(RetrySubscriber, _super);
        function RetrySubscriber(destination, count, original) {
            _super.call(this, destination);
            this.count = count;
            this.original = original;
            this.retries = 0;
        }
        RetrySubscriber.prototype._error = function (err) {
            var count = this.count;
            if (count && count === (this.retries += 1)) {
                this.destination.error(err);
            }
            else {
                this.resubscribe();
            }
        };
        RetrySubscriber.prototype.resubscribe = function () {
            this.original.subscribe(this);
        };
        return RetrySubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=retry.js.map