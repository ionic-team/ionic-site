var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../Subscription', '../util/bindCallback'], function (require, exports, Subscriber_1, Subscription_1, bindCallback_1) {
    function _finally(finallySelector, thisArg) {
        return this.lift(new FinallyOperator(thisArg ?
            bindCallback_1.default(finallySelector, thisArg, 2) :
            finallySelector));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = _finally;
    var FinallyOperator = (function () {
        function FinallyOperator(finallySelector) {
            this.finallySelector = finallySelector;
        }
        FinallyOperator.prototype.call = function (subscriber) {
            return new FinallySubscriber(subscriber, this.finallySelector);
        };
        return FinallyOperator;
    })();
    var FinallySubscriber = (function (_super) {
        __extends(FinallySubscriber, _super);
        function FinallySubscriber(destination, finallySelector) {
            _super.call(this, destination);
            this.add(new Subscription_1.default(finallySelector));
        }
        return FinallySubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=finally.js.map