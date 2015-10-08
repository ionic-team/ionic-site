var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../util/tryCatch', '../util/errorObject'], function (require, exports, Subscriber_1, tryCatch_1, errorObject_1) {
    function _catch(selector) {
        var catchOperator = new CatchOperator(selector);
        var caught = this.lift(catchOperator);
        catchOperator.caught = caught;
        return caught;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = _catch;
    var CatchOperator = (function () {
        function CatchOperator(selector) {
            this.selector = selector;
        }
        CatchOperator.prototype.call = function (subscriber) {
            return new CatchSubscriber(subscriber, this.selector, this.caught);
        };
        return CatchOperator;
    })();
    var CatchSubscriber = (function (_super) {
        __extends(CatchSubscriber, _super);
        function CatchSubscriber(destination, selector, caught) {
            _super.call(this, destination);
            this.selector = selector;
            this.caught = caught;
        }
        CatchSubscriber.prototype._error = function (err) {
            var result = tryCatch_1.default(this.selector)(err, this.caught);
            if (result === errorObject_1.errorObject) {
                this.destination.error(errorObject_1.errorObject.e);
            }
            else {
                this.add(result.subscribe(this.destination));
            }
        };
        return CatchSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=catch.js.map