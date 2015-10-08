var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable', '../Subscription', '../util/tryCatch', '../util/errorObject'], function (require, exports, Observable_1, Subscription_1, tryCatch_1, errorObject_1) {
    var FromEventPatternObservable = (function (_super) {
        __extends(FromEventPatternObservable, _super);
        function FromEventPatternObservable(addHandler, removeHandler, selector) {
            _super.call(this);
            this.addHandler = addHandler;
            this.removeHandler = removeHandler;
            this.selector = selector;
        }
        FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
            return new FromEventPatternObservable(addHandler, removeHandler, selector);
            ;
        };
        FromEventPatternObservable.prototype._subscribe = function (subscriber) {
            var addHandler = this.addHandler;
            var removeHandler = this.removeHandler;
            var selector = this.selector;
            var handler = selector ? function (e) {
                var result = tryCatch_1.default(selector).apply(null, arguments);
                if (result === errorObject_1.errorObject) {
                    subscriber.error(result.e);
                }
                else {
                    subscriber.next(result);
                }
            } : function (e) { subscriber.next(e); };
            var result = tryCatch_1.default(addHandler)(handler);
            if (result === errorObject_1.errorObject) {
                subscriber.error(result.e);
            }
            subscriber.add(new Subscription_1.default(function () {
                //TODO: determine whether or not to forward to error handler
                removeHandler(handler);
            }));
        };
        return FromEventPatternObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = FromEventPatternObservable;
});
//# sourceMappingURL=FromEventPatternObservable.js.map