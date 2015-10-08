var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable'], function (require, exports, Observable_1) {
    var EmptyObservable = (function (_super) {
        __extends(EmptyObservable, _super);
        function EmptyObservable(scheduler) {
            _super.call(this);
            this.scheduler = scheduler;
        }
        EmptyObservable.create = function (scheduler) {
            return new EmptyObservable(scheduler);
        };
        EmptyObservable.dispatch = function (_a) {
            var subscriber = _a.subscriber;
            subscriber.complete();
        };
        EmptyObservable.prototype._subscribe = function (subscriber) {
            var scheduler = this.scheduler;
            if (scheduler) {
                subscriber.add(scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber }));
            }
            else {
                subscriber.complete();
            }
        };
        return EmptyObservable;
    })(Observable_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = EmptyObservable;
});
//# sourceMappingURL=EmptyObservable.js.map