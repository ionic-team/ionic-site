var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../util/tryCatch', '../util/errorObject'], function (require, exports, Subscriber_1, tryCatch_1, errorObject_1) {
    function scan(project, acc) {
        return this.lift(new ScanOperator(project));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = scan;
    var ScanOperator = (function () {
        function ScanOperator(project, acc) {
            this.acc = acc;
            this.project = project;
        }
        ScanOperator.prototype.call = function (subscriber) {
            return new ScanSubscriber(subscriber, this.project, this.acc);
        };
        return ScanOperator;
    })();
    var ScanSubscriber = (function (_super) {
        __extends(ScanSubscriber, _super);
        function ScanSubscriber(destination, project, acc) {
            _super.call(this, destination);
            this.hasValue = false;
            this.acc = acc;
            this.project = project;
            this.hasSeed = typeof acc !== "undefined";
        }
        ScanSubscriber.prototype._next = function (x) {
            if (this.hasValue || (this.hasValue = this.hasSeed)) {
                var result = tryCatch_1.default(this.project).call(this, this.acc, x);
                if (result === errorObject_1.errorObject) {
                    this.destination.error(errorObject_1.errorObject.e);
                }
                else {
                    this.destination.next(this.acc = result);
                }
            }
            else {
                return this.destination.next((this.hasValue = true) && (this.acc = x));
            }
        };
        ScanSubscriber.prototype._complete = function () {
            if (!this.hasValue && this.hasSeed) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        };
        return ScanSubscriber;
    })(Subscriber_1.default);
});
//# sourceMappingURL=scan.js.map