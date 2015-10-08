define(["require", "exports", './ImmediateAction', './FutureAction'], function (require, exports, ImmediateAction_1, FutureAction_1) {
    var ImmediateScheduler = (function () {
        function ImmediateScheduler() {
            this.actions = [];
            this.active = false;
            this.scheduled = false;
        }
        ImmediateScheduler.prototype.now = function () {
            return Date.now();
        };
        ImmediateScheduler.prototype.flush = function () {
            if (this.active || this.scheduled) {
                return;
            }
            this.active = true;
            var actions = this.actions;
            for (var action = void 0; action = actions.shift();) {
                action.execute();
            }
            this.active = false;
        };
        ImmediateScheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) { delay = 0; }
            return (delay <= 0) ?
                this.scheduleNow(work, state) :
                this.scheduleLater(work, delay, state);
        };
        ImmediateScheduler.prototype.scheduleNow = function (work, state) {
            return new ImmediateAction_1.default(this, work).schedule(state);
        };
        ImmediateScheduler.prototype.scheduleLater = function (work, delay, state) {
            return new FutureAction_1.default(this, work).schedule(state, delay);
        };
        return ImmediateScheduler;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ImmediateScheduler;
});
//# sourceMappingURL=ImmediateScheduler.js.map