var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './merge-support', '../util/tryCatch', '../util/errorObject'], function (require, exports, merge_support_1, tryCatch_1, errorObject_1) {
    var FlatMapOperator = (function () {
        function FlatMapOperator(project, projectResult, concurrent) {
            if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
            this.project = project;
            this.projectResult = projectResult;
            this.concurrent = concurrent;
        }
        FlatMapOperator.prototype.call = function (subscriber) {
            return new FlatMapSubscriber(subscriber, this.concurrent, this.project, this.projectResult);
        };
        return FlatMapOperator;
    })();
    exports.FlatMapOperator = FlatMapOperator;
    var FlatMapSubscriber = (function (_super) {
        __extends(FlatMapSubscriber, _super);
        function FlatMapSubscriber(destination, concurrent, project, projectResult) {
            _super.call(this, destination, concurrent);
            this.project = project;
            this.projectResult = projectResult;
        }
        FlatMapSubscriber.prototype._project = function (value, index) {
            var observable = tryCatch_1.default(this.project).call(this, value, index);
            if (observable === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
            return observable;
        };
        FlatMapSubscriber.prototype._subscribeInner = function (observable, value, index) {
            var projectResult = this.projectResult;
            if (projectResult) {
                return observable._subscribe(new FlatMapInnerSubscriber(this.destination, this, value, index, projectResult));
            }
            else if (observable._isScalar) {
                this.destination.next(observable.value);
                this._innerComplete();
            }
            else {
                return observable._subscribe(new merge_support_1.MergeInnerSubscriber(this.destination, this));
            }
        };
        return FlatMapSubscriber;
    })(merge_support_1.MergeSubscriber);
    exports.FlatMapSubscriber = FlatMapSubscriber;
    var FlatMapInnerSubscriber = (function (_super) {
        __extends(FlatMapInnerSubscriber, _super);
        function FlatMapInnerSubscriber(destination, parent, value, index, project) {
            _super.call(this, destination, parent);
            this.count = 0;
            this.value = value;
            this.index = index;
            this.project = project;
        }
        FlatMapInnerSubscriber.prototype._next = function (value) {
            var result = value;
            var index = this.count++;
            result = tryCatch_1.default(this.project).call(this, this.value, value, this.index, index);
            if (result === errorObject_1.errorObject) {
                this.destination.error(errorObject_1.errorObject.e);
            }
            else {
                this.destination.next(result);
            }
        };
        return FlatMapInnerSubscriber;
    })(merge_support_1.MergeInnerSubscriber);
    exports.FlatMapInnerSubscriber = FlatMapInnerSubscriber;
});
//# sourceMappingURL=flatMap-support.js.map