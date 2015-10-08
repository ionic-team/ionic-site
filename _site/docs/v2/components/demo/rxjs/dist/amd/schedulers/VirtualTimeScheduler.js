var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscription'], function (require, exports, Subscription_1) {
    var VirtualTimeScheduler = (function () {
        function VirtualTimeScheduler() {
            this.actions = [];
            this.active = false;
            this.scheduled = false;
            this.index = 0;
            this.sorted = false;
            this.frame = 0;
        }
        VirtualTimeScheduler.prototype.now = function () {
            return 0;
        };
        VirtualTimeScheduler.prototype.sortActions = function () {
            if (!this.sorted) {
                this.actions.sort(function (a, b) {
                    return a.delay === b.delay ? (a.index > b.index ? 1 : -1) : (a.delay > b.delay ? 1 : -1);
                });
                this.sorted = true;
            }
        };
        VirtualTimeScheduler.prototype.flush = function () {
            this.sortActions();
            var actions = this.actions;
            while (actions.length > 0) {
                var action = actions.shift();
                this.frame = action.delay;
                action.execute();
            }
            this.frame = 0;
        };
        VirtualTimeScheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) { delay = 0; }
            this.sorted = false;
            return new VirtualAction(this, work, this.index++).schedule(state, delay);
        };
        return VirtualTimeScheduler;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = VirtualTimeScheduler;
    var VirtualAction = (function (_super) {
        __extends(VirtualAction, _super);
        function VirtualAction(scheduler, work, index) {
            _super.call(this);
            this.scheduler = scheduler;
            this.work = work;
            this.index = index;
        }
        VirtualAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) { delay = 0; }
            if (this.isUnsubscribed) {
                return this;
            }
            var scheduler = this.scheduler;
            var action = scheduler.frame === this.delay ? this :
                new VirtualAction(scheduler, this.work, scheduler.index += 1);
            action.state = state;
            action.delay = scheduler.frame + delay;
            scheduler.actions.push(action);
            return this;
        };
        VirtualAction.prototype.execute = function () {
            if (this.isUnsubscribed) {
                throw new Error("How did did we execute a canceled Action?");
            }
            this.work(this.state);
        };
        VirtualAction.prototype.unsubscribe = function () {
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
        return VirtualAction;
    })(Subscription_1.default);
});
//# sourceMappingURL=VirtualTimeScheduler.js.map