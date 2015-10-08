var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscription'], function (require, exports, Subscription_1) {
    var ImmediateAction = (function (_super) {
        __extends(ImmediateAction, _super);
        function ImmediateAction(scheduler, work) {
            _super.call(this);
            this.scheduler = scheduler;
            this.work = work;
        }
        ImmediateAction.prototype.schedule = function (state) {
            if (this.isUnsubscribed) {
                return this;
            }
            this.state = state;
            var scheduler = this.scheduler;
            scheduler.actions.push(this);
            scheduler.flush();
            return this;
        };
        ImmediateAction.prototype.execute = function () {
            if (this.isUnsubscribed) {
                throw new Error("How did did we execute a canceled Action?");
            }
            this.work(this.state);
        };
        ImmediateAction.prototype.unsubscribe = function () {
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = void 0;
            this.state = void 0;
            this.scheduler = void 0;
            if (index !== -1) {
                actions.splice(index, 1);
            }
            _super.prototype.unsubscribe.call(this);
        };
        return ImmediateAction;
    })(Subscription_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ImmediateAction;
});
//# sourceMappingURL=ImmediateAction.js.map