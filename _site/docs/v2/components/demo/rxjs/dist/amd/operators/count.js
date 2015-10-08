var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber'], function (require, exports, Subscriber_1) {
    function count() {
        return this.lift(new CountOperator());
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = count;
    var CountOperator = (function () {
        function CountOperator() {
        }
        CountOperator.prototype.call = function (subscriber) {
            return new CountSubscriber(subscriber);
        };
        return CountOperator;
    })();
    var CountSubscriber = (function (_super) {
        __extends(CountSubscriber, _super);
        function CountSubscriber(destination) {
            _super.call(this, destination);
            this.count = 0;
        }
        CountSubscriber.prototype._next = function (x) {
            this.count += 1;
        };
        CountSubscriber.prototype._complete = function () {
            this.destination.next(this.count);
            this.destination.complete();
        };
        return CountSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=count.js.map