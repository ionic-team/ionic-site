var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber'], function (require, exports, Subscriber_1) {
    function repeat(count) {
        return this.lift(new RepeatOperator(count, this));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = repeat;
    var RepeatOperator = (function () {
        function RepeatOperator(count, original) {
            this.count = count;
            this.original = original;
        }
        RepeatOperator.prototype.call = function (subscriber) {
            return new RepeatSubscriber(subscriber, this.count, this.original);
        };
        return RepeatOperator;
    })();
    var RepeatSubscriber = (function (_super) {
        __extends(RepeatSubscriber, _super);
        function RepeatSubscriber(destination, count, original) {
            _super.call(this, destination);
            this.count = count;
            this.original = original;
            this.repeated = 0;
        }
        RepeatSubscriber.prototype._complete = function () {
            if (this.count === (this.repeated += 1)) {
                this.destination.complete();
            }
            else {
                this.resubscribe();
            }
        };
        RepeatSubscriber.prototype.resubscribe = function () {
            this.original.subscribe(this);
        };
        return RepeatSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=repeat.js.map