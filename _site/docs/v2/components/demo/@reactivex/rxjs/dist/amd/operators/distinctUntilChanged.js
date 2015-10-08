var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../util/tryCatch', '../util/errorObject', '../util/bindCallback'], function (require, exports, Subscriber_1, tryCatch_1, errorObject_1, bindCallback_1) {
    function distinctUntilChanged(compare, thisArg) {
        return this.lift(new DistinctUntilChangedOperator(thisArg ?
            bindCallback_1.default(compare, thisArg, 2) :
            compare));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = distinctUntilChanged;
    var DistinctUntilChangedOperator = (function () {
        function DistinctUntilChangedOperator(compare) {
            this.compare = compare;
        }
        DistinctUntilChangedOperator.prototype.call = function (subscriber) {
            return new DistinctUntilChangedSubscriber(subscriber, this.compare);
        };
        return DistinctUntilChangedOperator;
    })();
    var DistinctUntilChangedSubscriber = (function (_super) {
        __extends(DistinctUntilChangedSubscriber, _super);
        function DistinctUntilChangedSubscriber(destination, compare) {
            _super.call(this, destination);
            this.hasValue = false;
            if (typeof compare === "function") {
                this.compare = compare;
            }
        }
        DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
            return x === y;
        };
        DistinctUntilChangedSubscriber.prototype._next = function (x) {
            var result = false;
            if (this.hasValue) {
                result = tryCatch_1.default(this.compare)(this.value, x);
                if (result === errorObject_1.errorObject) {
                    this.destination.error(errorObject_1.errorObject.e);
                    return;
                }
            }
            else {
                this.hasValue = true;
            }
            if (Boolean(result) === false) {
                this.value = x;
                this.destination.next(x);
            }
        };
        return DistinctUntilChangedSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=distinctUntilChanged.js.map