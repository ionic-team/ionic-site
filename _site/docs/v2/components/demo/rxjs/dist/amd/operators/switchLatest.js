var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscription', './flatMap-support'], function (require, exports, Subscription_1, flatMap_support_1) {
    function switchLatest(project, projectResult) {
        return this.lift(new SwitchLatestOperator(project, projectResult));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = switchLatest;
    var SwitchLatestOperator = (function (_super) {
        __extends(SwitchLatestOperator, _super);
        function SwitchLatestOperator(project, projectResult) {
            _super.call(this, project, projectResult, 1);
        }
        SwitchLatestOperator.prototype.call = function (subscriber) {
            return new SwitchLatestSubscriber(subscriber, this.project, this.projectResult);
        };
        return SwitchLatestOperator;
    })(flatMap_support_1.FlatMapOperator);
    var SwitchLatestSubscriber = (function (_super) {
        __extends(SwitchLatestSubscriber, _super);
        function SwitchLatestSubscriber(destination, project, projectResult) {
            _super.call(this, destination, 1, project, projectResult);
        }
        SwitchLatestSubscriber.prototype._buffer = function (value) {
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
        SwitchLatestSubscriber.prototype._subscribeInner = function (observable, value, index) {
            this.innerSubscription = new Subscription_1.default();
            this.innerSubscription.add(_super.prototype._subscribeInner.call(this, observable, value, index));
            return this.innerSubscription;
        };
        return SwitchLatestSubscriber;
    })(flatMap_support_1.FlatMapSubscriber);
});
//# sourceMappingURL=switchLatest.js.map