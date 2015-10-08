var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable', '../Subscriber'], function (require, exports, Observable_1, Subscriber_1) {
    var ForkJoinObservable = (function (_super) {
        __extends(ForkJoinObservable, _super);
        function ForkJoinObservable(observables) {
            _super.call(this);
            this.observables = observables;
        }
        ForkJoinObservable.create = function () {
            var observables = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                observables[_i - 0] = arguments[_i];
            }
            return new ForkJoinObservable(observables);
        };
        ForkJoinObservable.prototype._subscribe = function (subscriber) {
            var observables = this.observables;
            var len = observables.length;
            var context = { complete: 0, total: len, values: emptyArray(len) };
            for (var i = 0; i < len; i++) {
                observables[i].subscribe(new AllSubscriber(subscriber, this, i, context));
            }
        };
        return ForkJoinObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ForkJoinObservable;
    var AllSubscriber = (function (_super) {
        __extends(AllSubscriber, _super);
        function AllSubscriber(destination, parent, index, context) {
            _super.call(this, destination);
            this.parent = parent;
            this.index = index;
            this.context = context;
        }
        AllSubscriber.prototype._next = function (value) {
            this._value = value;
        };
        AllSubscriber.prototype._complete = function () {
            var context = this.context;
            context.values[this.index] = this._value;
            if (context.values.every(hasValue)) {
                this.destination.next(context.values);
                this.destination.complete();
            }
        };
        return AllSubscriber;
    })(Subscriber_1.default);
    function hasValue(x) {
        return x !== null;
    }
    function emptyArray(len) {
        var arr = [];
        for (var i = 0; i < len; i++) {
            arr.push(null);
        }
        return arr;
    }
});
//# sourceMappingURL=ForkJoinObservable.js.map