var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscription'], function (require, exports, Subscription_1) {
    var SubjectSubscription = (function (_super) {
        __extends(SubjectSubscription, _super);
        function SubjectSubscription(subject, observer) {
            _super.call(this);
            this.subject = subject;
            this.observer = observer;
            this.isUnsubscribed = false;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.isUnsubscribed) {
                return;
            }
            this.isUnsubscribed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = void 0;
            if (!observers || observers.length === 0 || subject.isUnsubscribed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.observer);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    })(Subscription_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SubjectSubscription;
});
//# sourceMappingURL=SubjectSubscription.js.map