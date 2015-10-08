var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber'], function (require, exports, Subscriber_1) {
    function skip(total) {
        return this.lift(new SkipOperator(total));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = skip;
    var SkipOperator = (function () {
        function SkipOperator(total) {
            this.total = total;
        }
        SkipOperator.prototype.call = function (subscriber) {
            return new SkipSubscriber(subscriber, this.total);
        };
        return SkipOperator;
    })();
    var SkipSubscriber = (function (_super) {
        __extends(SkipSubscriber, _super);
        function SkipSubscriber(destination, total) {
            _super.call(this, destination);
            this.count = 0;
            this.total = total;
        }
        SkipSubscriber.prototype._next = function (x) {
            if (++this.count > this.total) {
                this.destination.next(x);
            }
        };
        return SkipSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=skip.js.map