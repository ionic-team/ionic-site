var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable', './ScalarObservable', './EmptyObservable'], function (require, exports, Observable_1, ScalarObservable_1, EmptyObservable_1) {
    var ArrayObservable = (function (_super) {
        __extends(ArrayObservable, _super);
        function ArrayObservable(array, scheduler) {
            _super.call(this);
            this.array = array;
            this.scheduler = scheduler;
        }
        ArrayObservable.create = function (array, scheduler) {
            return new ArrayObservable(array, scheduler);
        };
        ArrayObservable.of = function () {
            var array = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                array[_i - 0] = arguments[_i];
            }
            var scheduler = array[array.length - 1];
            if (scheduler && typeof scheduler.schedule === "function") {
                array.pop();
            }
            else {
                scheduler = void 0;
            }
            var len = array.length;
            if (len > 1) {
                return new ArrayObservable(array, scheduler);
            }
            else if (len === 1) {
                return new ScalarObservable_1.default(array[0], scheduler);
            }
            else {
                return new EmptyObservable_1.default(scheduler);
            }
        };
        ArrayObservable.dispatch = function (state) {
            var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
            if (index >= count) {
                subscriber.complete();
                return;
            }
            subscriber.next(array[index]);
            if (subscriber.isUnsubscribed) {
                return;
            }
            state.index = index + 1;
            this.schedule(state);
        };
        ArrayObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var array = this.array;
            var count = array.length;
            var scheduler = this.scheduler;
            if (scheduler) {
                subscriber.add(scheduler.schedule(ArrayObservable.dispatch, 0, {
                    array: array, index: index, count: count, subscriber: subscriber
                }));
            }
            else {
                do {
                    if (index >= count) {
                        subscriber.complete();
                        break;
                    }
                    subscriber.next(array[index++]);
                    if (subscriber.isUnsubscribed) {
                        break;
                    }
                } while (true);
            }
        };
        return ArrayObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ArrayObservable;
});
//# sourceMappingURL=ArrayObservable.js.map