var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './ImmediateScheduler', './NextTickAction', './ImmediateAction'], function (require, exports, ImmediateScheduler_1, NextTickAction_1, ImmediateAction_1) {
    var NextTickScheduler = (function (_super) {
        __extends(NextTickScheduler, _super);
        function NextTickScheduler() {
            _super.apply(this, arguments);
        }
        NextTickScheduler.prototype.scheduleNow = function (work, state) {
            return (this.scheduled ?
                new ImmediateAction_1.default(this, work) :
                new NextTickAction_1.default(this, work)).schedule(state);
        };
        return NextTickScheduler;
    })(ImmediateScheduler_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NextTickScheduler;
});
//# sourceMappingURL=NextTickScheduler.js.map