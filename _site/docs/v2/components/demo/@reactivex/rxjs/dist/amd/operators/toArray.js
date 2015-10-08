var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber'], function (require, exports, Subscriber_1) {
    function toArray() {
        return this.lift(new ToArrayOperator());
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = toArray;
    var ToArrayOperator = (function () {
        function ToArrayOperator() {
        }
        ToArrayOperator.prototype.call = function (subscriber) {
            return new ToArraySubscriber(subscriber);
        };
        return ToArrayOperator;
    })();
    var ToArraySubscriber = (function (_super) {
        __extends(ToArraySubscriber, _super);
        function ToArraySubscriber(destination) {
            _super.call(this, destination);
            this.array = [];
        }
        ToArraySubscriber.prototype._next = function (x) {
            this.array.push(x);
        };
        ToArraySubscriber.prototype._complete = function () {
            this.destination.next(this.array);
            this.destination.complete();
        };
        return ToArraySubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=toArray.js.map