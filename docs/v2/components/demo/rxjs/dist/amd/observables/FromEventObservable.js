var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable', '../util/tryCatch', '../util/errorObject', '../Subscription'], function (require, exports, Observable_1, tryCatch_1, errorObject_1, Subscription_1) {
    var FromEventObservable = (function (_super) {
        __extends(FromEventObservable, _super);
        function FromEventObservable(sourceObj, eventName, selector) {
            _super.call(this);
            this.sourceObj = sourceObj;
            this.eventName = eventName;
            this.selector = selector;
        }
        FromEventObservable.create = function (sourceObj, eventName, selector) {
            return new FromEventObservable(sourceObj, eventName, selector);
        };
        FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber) {
            var unsubscribe;
            var tag = sourceObj.toString();
            if (tag === '[object NodeList]' || tag === '[object HTMLCollection]') {
                for (var i = 0, len = sourceObj.length; i < len; i++) {
                    FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
                }
            }
            else if (typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function') {
                sourceObj.addEventListener(eventName, handler);
                unsubscribe = function () { return sourceObj.removeEventListener(eventName, handler); };
            }
            else if (typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function') {
                sourceObj.on(eventName, handler);
                unsubscribe = function () { return sourceObj.off(eventName, handler); };
            }
            else if (typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function') {
                sourceObj.addListener(eventName, handler);
                unsubscribe = function () { return sourceObj.removeListener(eventName, handler); };
            }
            subscriber.add(new Subscription_1.default(unsubscribe));
        };
        FromEventObservable.prototype._subscribe = function (subscriber) {
            var sourceObj = this.sourceObj;
            var eventName = this.eventName;
            var selector = this.selector;
            var handler = selector ? function (e) {
                var result = tryCatch_1.default(selector)(e);
                if (result === errorObject_1.errorObject) {
                    subscriber.error(result.e);
                }
                else {
                    subscriber.next(result);
                }
            } : function (e) { return subscriber.next(e); };
            FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
        };
        return FromEventObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = FromEventObservable;
});
//# sourceMappingURL=FromEventObservable.js.map