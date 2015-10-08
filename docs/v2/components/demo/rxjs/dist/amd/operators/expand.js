var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './merge-support', '../observables/EmptyObservable', '../util/tryCatch', '../util/errorObject'], function (require, exports, merge_support_1, EmptyObservable_1, tryCatch_1, errorObject_1) {
    function expand(project) {
        return this.lift(new ExpandOperator(project));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = expand;
    var ExpandOperator = (function () {
        function ExpandOperator(project) {
            this.project = project;
        }
        ExpandOperator.prototype.call = function (subscriber) {
            return new ExpandSubscriber(subscriber, this.project);
        };
        return ExpandOperator;
    })();
    var ExpandSubscriber = (function (_super) {
        __extends(ExpandSubscriber, _super);
        function ExpandSubscriber(destination, project) {
            _super.call(this, destination, Number.POSITIVE_INFINITY);
            this.project = project;
        }
        ExpandSubscriber.prototype._project = function (value, index) {
            var observable = tryCatch_1.default(this.project).call(this, value, index);
            if (observable === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
            return observable;
        };
        ExpandSubscriber.prototype._subscribeInner = function (observable, value, index) {
            if (observable._isScalar) {
                this.destination.next(observable.value);
                this._innerComplete();
                this._next(observable.value);
            }
            else if (observable instanceof EmptyObservable_1.default) {
                this._innerComplete();
            }
            else {
                return observable._subscribe(new ExpandInnerSubscriber(this.destination, this));
            }
        };
        return ExpandSubscriber;
    })(merge_support_1.MergeSubscriber);
    var ExpandInnerSubscriber = (function (_super) {
        __extends(ExpandInnerSubscriber, _super);
        function ExpandInnerSubscriber(destination, parent) {
            _super.call(this, destination, parent);
        }
        ExpandInnerSubscriber.prototype._next = function (value) {
            this.destination.next(value);
            this.parent.next(value);
        };
        return ExpandInnerSubscriber;
    })(merge_support_1.MergeInnerSubscriber);
});
//# sourceMappingURL=expand.js.map