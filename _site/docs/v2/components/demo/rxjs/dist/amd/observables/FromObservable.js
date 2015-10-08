var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './PromiseObservable', './IteratorObservable', './ArrayObservable', '../util/Symbol_observable', '../util/Symbol_iterator', '../Observable', '../operators/observeOn-support', '../schedulers/immediate'], function (require, exports, PromiseObservable_1, IteratorObservable_1, ArrayObservable_1, Symbol_observable_1, Symbol_iterator_1, Observable_1, observeOn_support_1, immediate_1) {
    var isArray = Array.isArray;
    var FromObservable = (function (_super) {
        __extends(FromObservable, _super);
        function FromObservable(ish, scheduler) {
            _super.call(this, null);
            this.ish = ish;
            this.scheduler = scheduler;
        }
        FromObservable.create = function (ish, scheduler) {
            if (scheduler === void 0) { scheduler = immediate_1.default; }
            if (ish) {
                if (isArray(ish)) {
                    return new ArrayObservable_1.default(ish, scheduler);
                }
                else if (typeof ish.then === 'function') {
                    return new PromiseObservable_1.default(ish, scheduler);
                }
                else if (typeof ish[Symbol_observable_1.default] === 'function') {
                    if (ish instanceof Observable_1.default) {
                        return ish;
                    }
                    return new FromObservable(ish, scheduler);
                }
                else if (typeof ish[Symbol_iterator_1.default] === 'function') {
                    return new IteratorObservable_1.default(ish, null, null, scheduler);
                }
            }
            throw new TypeError((typeof ish) + ' is not observable');
        };
        FromObservable.prototype._subscribe = function (subscriber) {
            var ish = this.ish;
            var scheduler = this.scheduler;
            if (scheduler === immediate_1.default) {
                return this.ish[Symbol_observable_1.default]().subscribe(subscriber);
            }
            else {
                return this.ish[Symbol_observable_1.default]().subscribe(new observeOn_support_1.ObserveOnSubscriber(subscriber, scheduler, 0));
            }
        };
        return FromObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = FromObservable;
});
//# sourceMappingURL=FromObservable.js.map