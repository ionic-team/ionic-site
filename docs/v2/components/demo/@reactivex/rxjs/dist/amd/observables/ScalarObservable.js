var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable'], function (require, exports, Observable_1) {
    var ScalarObservable = (function (_super) {
        __extends(ScalarObservable, _super);
        function ScalarObservable(value, scheduler) {
            _super.call(this);
            this.value = value;
            this.scheduler = scheduler;
            this._isScalar = true;
        }
        ScalarObservable.create = function (value, scheduler) {
            return new ScalarObservable(value, scheduler);
        };
        ScalarObservable.dispatch = function (state) {
            var done = state.done, value = state.value, subscriber = state.subscriber;
            if (done) {
                subscriber.complete();
                return;
            }
            subscriber.next(value);
            if (subscriber.isUnsubscribed) {
                return;
            }
            state.done = true;
            this.schedule(state);
        };
        ScalarObservable.prototype._subscribe = function (subscriber) {
            var value = this.value;
            var scheduler = this.scheduler;
            if (scheduler) {
                subscriber.add(scheduler.schedule(ScalarObservable.dispatch, 0, {
                    done: false, value: value, subscriber: subscriber
                }));
            }
            else {
                subscriber.next(value);
                if (!subscriber.isUnsubscribed) {
                    subscriber.complete();
                }
            }
        };
        return ScalarObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ScalarObservable;
});
//# sourceMappingURL=ScalarObservable.js.map