var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subject'], function (require, exports, Subject_1) {
    var BehaviorSubject = (function (_super) {
        __extends(BehaviorSubject, _super);
        function BehaviorSubject(value) {
            _super.call(this);
            this.value = value;
        }
        BehaviorSubject.prototype._subscribe = function (subscriber) {
            var subscription = _super.prototype._subscribe.call(this, subscriber);
            if (!subscription) {
                return;
            }
            else if (!subscription.isUnsubscribed) {
                subscriber.next(this.value);
            }
            return subscription;
        };
        BehaviorSubject.prototype._next = function (value) {
            _super.prototype._next.call(this, this.value = value);
        };
        return BehaviorSubject;
    })(Subject_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BehaviorSubject;
});
//# sourceMappingURL=BehaviorSubject.js.map