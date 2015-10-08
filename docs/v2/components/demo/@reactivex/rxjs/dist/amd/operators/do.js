var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../util/noop', '../util/tryCatch', '../util/errorObject'], function (require, exports, Subscriber_1, noop_1, tryCatch_1, errorObject_1) {
    function _do(next, error, complete) {
        return this.lift(new DoOperator(next || noop_1.default, error || noop_1.default, complete || noop_1.default));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = _do;
    var DoOperator = (function () {
        function DoOperator(next, error, complete) {
            this.next = next;
            this.error = error;
            this.complete = complete;
        }
        DoOperator.prototype.call = function (subscriber) {
            return new DoSubscriber(subscriber, this.next, this.error, this.complete);
        };
        return DoOperator;
    })();
    var DoSubscriber = (function (_super) {
        __extends(DoSubscriber, _super);
        function DoSubscriber(destination, next, error, complete) {
            _super.call(this, destination);
            this.__next = next;
            this.__error = error;
            this.__complete = complete;
        }
        DoSubscriber.prototype._next = function (x) {
            var result = tryCatch_1.default(this.__next)(x);
            if (result === errorObject_1.errorObject) {
                this.destination.error(errorObject_1.errorObject.e);
            }
            else {
                this.destination.next(x);
            }
        };
        DoSubscriber.prototype._error = function (e) {
            var result = tryCatch_1.default(this.__error)(e);
            if (result === errorObject_1.errorObject) {
                this.destination.error(errorObject_1.errorObject.e);
            }
            else {
                this.destination.error(e);
            }
        };
        DoSubscriber.prototype._complete = function () {
            var result = tryCatch_1.default(this.__complete)();
            if (result === errorObject_1.errorObject) {
                this.destination.error(errorObject_1.errorObject.e);
            }
            else {
                this.destination.complete();
            }
        };
        return DoSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=do.js.map