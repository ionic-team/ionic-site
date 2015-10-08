var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscription', './merge-support'], function (require, exports, Subscription_1, merge_support_1) {
    function switchAll() {
        return this.lift(new SwitchOperator());
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = switchAll;
    var SwitchOperator = (function () {
        function SwitchOperator() {
        }
        SwitchOperator.prototype.call = function (subscriber) {
            return new SwitchSubscriber(subscriber);
        };
        return SwitchOperator;
    })();
    var SwitchSubscriber = (function (_super) {
        __extends(SwitchSubscriber, _super);
        function SwitchSubscriber(destination) {
            _super.call(this, destination, 1);
        }
        SwitchSubscriber.prototype._buffer = function (value) {
            var active = this.active;
            if (active > 0) {
                this.active = active - 1;
                var inner = this.innerSubscription;
                if (inner) {
                    inner.unsubscribe();
                    this.innerSubscription = null;
                }
            }
            this._next(value);
        };
        SwitchSubscriber.prototype._subscribeInner = function (observable, value, index) {
            this.innerSubscription = new Subscription_1.default();
            this.innerSubscription.add(_super.prototype._subscribeInner.call(this, observable, value, index));
            return this.innerSubscription;
        };
        return SwitchSubscriber;
    })(merge_support_1.MergeSubscriber);
});
//# sourceMappingURL=switchAll.js.map