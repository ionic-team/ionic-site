var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../util/Immediate', './ImmediateAction'], function (require, exports, Immediate_1, ImmediateAction_1) {
    var NextTickAction = (function (_super) {
        __extends(NextTickAction, _super);
        function NextTickAction() {
            _super.apply(this, arguments);
        }
        NextTickAction.prototype.schedule = function (state) {
            var _this = this;
            if (this.isUnsubscribed) {
                return this;
            }
            this.state = state;
            var scheduler = this.scheduler;
            scheduler.actions.push(this);
            if (!scheduler.scheduled) {
                scheduler.scheduled = true;
                this.id = Immediate_1.Immediate.setImmediate(function () {
                    _this.id = void 0;
                    _this.scheduler.scheduled = false;
                    _this.scheduler.flush();
                });
            }
            return this;
        };
        NextTickAction.prototype.unsubscribe = function () {
            var id = this.id;
            var scheduler = this.scheduler;
            _super.prototype.unsubscribe.call(this);
            if (scheduler.actions.length === 0) {
                scheduler.active = false;
                scheduler.scheduled = false;
                if (id) {
                    this.id = void 0;
                    Immediate_1.Immediate.clearImmediate(id);
                }
            }
        };
        return NextTickAction;
    })(ImmediateAction_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NextTickAction;
});
//# sourceMappingURL=NextTickAction.js.map