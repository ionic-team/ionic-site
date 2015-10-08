var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './flatMapTo-support'], function (require, exports, flatMapTo_support_1) {
    function switchLatestTo(observable, projectResult) {
        return this.lift(new SwitchLatestToOperator(observable, projectResult));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = switchLatestTo;
    var SwitchLatestToOperator = (function (_super) {
        __extends(SwitchLatestToOperator, _super);
        function SwitchLatestToOperator(observable, projectResult) {
            _super.call(this, observable, projectResult, 1);
        }
        SwitchLatestToOperator.prototype.call = function (subscriber) {
            return new SwitchLatestToSubscriber(subscriber, this.observable, this.projectResult);
        };
        return SwitchLatestToOperator;
    })(flatMapTo_support_1.FlatMapToOperator);
    var SwitchLatestToSubscriber = (function (_super) {
        __extends(SwitchLatestToSubscriber, _super);
        function SwitchLatestToSubscriber(destination, observable, projectResult) {
            _super.call(this, destination, 1, observable, projectResult);
        }
        SwitchLatestToSubscriber.prototype._buffer = function (value) {
            var active = this.active;
            if (active > 0) {
                this.active = active - 1;
                var inner = this.innerSubscription;
                if (inner) {
                    inner.unsubscribe();
                }
            }
            this._next(value);
        };
        SwitchLatestToSubscriber.prototype._subscribeInner = function (observable, value, index) {
            return (this.innerSubscription = _super.prototype._subscribeInner.call(this, observable, value, index));
        };
        return SwitchLatestToSubscriber;
    })(flatMapTo_support_1.FlatMapToSubscriber);
});
//# sourceMappingURL=switchLatestTo.js.map