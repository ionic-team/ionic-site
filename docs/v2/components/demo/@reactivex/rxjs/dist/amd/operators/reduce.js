var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../util/tryCatch', '../util/errorObject'], function (require, exports, Subscriber_1, tryCatch_1, errorObject_1) {
    function reduce(project, acc) {
        return this.lift(new ReduceOperator(project, acc));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = reduce;
    var ReduceOperator = (function () {
        function ReduceOperator(project, acc) {
            this.acc = acc;
            this.project = project;
        }
        ReduceOperator.prototype.call = function (subscriber) {
            return new ReduceSubscriber(subscriber, this.project, this.acc);
        };
        return ReduceOperator;
    })();
    var ReduceSubscriber = (function (_super) {
        __extends(ReduceSubscriber, _super);
        function ReduceSubscriber(destination, project, acc) {
            _super.call(this, destination);
            this.hasValue = false;
            this.acc = acc;
            this.project = project;
            this.hasSeed = typeof acc !== "undefined";
        }
        ReduceSubscriber.prototype._next = function (x) {
            if (this.hasValue || (this.hasValue = this.hasSeed)) {
                var result = tryCatch_1.default(this.project).call(this, this.acc, x);
                if (result === errorObject_1.errorObject) {
                    this.destination.error(errorObject_1.errorObject.e);
                }
                else {
                    this.acc = result;
                }
            }
            else {
                this.acc = x;
                this.hasValue = true;
            }
        };
        ReduceSubscriber.prototype._complete = function () {
            if (this.hasValue || this.hasSeed) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        };
        return ReduceSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=reduce.js.map