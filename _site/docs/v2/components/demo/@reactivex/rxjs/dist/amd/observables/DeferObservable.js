var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable', '../util/tryCatch', '../util/errorObject'], function (require, exports, Observable_1, tryCatch_1, errorObject_1) {
    var DeferObservable = (function (_super) {
        __extends(DeferObservable, _super);
        function DeferObservable(observableFactory) {
            _super.call(this);
            this.observableFactory = observableFactory;
        }
        DeferObservable.create = function (observableFactory) {
            return new DeferObservable(observableFactory);
        };
        DeferObservable.prototype._subscribe = function (subscriber) {
            var result = tryCatch_1.default(this.observableFactory)();
            if (result === errorObject_1.errorObject) {
                subscriber.error(errorObject_1.errorObject.e);
            }
            else {
                result.subscribe(subscriber);
            }
        };
        return DeferObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = DeferObservable;
});
//# sourceMappingURL=DeferObservable.js.map