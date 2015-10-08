var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './flatMap-support'], function (require, exports, flatMap_support_1) {
    var FlatMapToOperator = (function () {
        function FlatMapToOperator(observable, projectResult, concurrent) {
            if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
            this.observable = observable;
            this.projectResult = projectResult;
            this.concurrent = concurrent;
        }
        FlatMapToOperator.prototype.call = function (subscriber) {
            return new FlatMapToSubscriber(subscriber, this.concurrent, this.observable, this.projectResult);
        };
        return FlatMapToOperator;
    })();
    exports.FlatMapToOperator = FlatMapToOperator;
    var FlatMapToSubscriber = (function (_super) {
        __extends(FlatMapToSubscriber, _super);
        function FlatMapToSubscriber(destination, concurrent, observable, projectResult) {
            _super.call(this, destination, concurrent, null, projectResult);
            this.observable = observable;
        }
        FlatMapToSubscriber.prototype._project = function (value, index) {
            return this.observable;
        };
        return FlatMapToSubscriber;
    })(flatMap_support_1.FlatMapSubscriber);
    exports.FlatMapToSubscriber = FlatMapToSubscriber;
});
//# sourceMappingURL=flatMapTo-support.js.map