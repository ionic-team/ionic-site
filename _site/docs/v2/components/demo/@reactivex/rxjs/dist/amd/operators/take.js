var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber'], function (require, exports, Subscriber_1) {
    function take(total) {
        return this.lift(new TakeOperator(total));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = take;
    var TakeOperator = (function () {
        function TakeOperator(total) {
            this.total = total;
        }
        TakeOperator.prototype.call = function (subscriber) {
            return new TakeSubscriber(subscriber, this.total);
        };
        return TakeOperator;
    })();
    var TakeSubscriber = (function (_super) {
        __extends(TakeSubscriber, _super);
        function TakeSubscriber(destination, total) {
            _super.call(this, destination);
            this.count = 0;
            this.total = total;
        }
        TakeSubscriber.prototype._next = function (x) {
            var total = this.total;
            if (++this.count <= total) {
                this.destination.next(x);
                if (this.count === total) {
                    this.destination.complete();
                }
            }
        };
        return TakeSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=take.js.map