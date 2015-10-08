"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Subscription2 = require('../Subscription');

var _Subscription3 = _interopRequireDefault(_Subscription2);

var VirtualTimeScheduler = (function () {
    function VirtualTimeScheduler() {
        _classCallCheck(this, VirtualTimeScheduler);

        this.actions = [];
        this.active = false;
        this.scheduled = false;
        this.index = 0;
        this.sorted = false;
        this.frame = 0;
    }

    VirtualTimeScheduler.prototype.now = function now() {
        return 0;
    };

    VirtualTimeScheduler.prototype.sortActions = function sortActions() {
        if (!this.sorted) {
            this.actions.sort(function (a, b) {
                return a.delay === b.delay ? a.index > b.index ? 1 : -1 : a.delay > b.delay ? 1 : -1;
            });
            this.sorted = true;
        }
    };

    VirtualTimeScheduler.prototype.flush = function flush() {
        this.sortActions();
        var actions = this.actions;
        while (actions.length > 0) {
            var action = actions.shift();
            this.frame = action.delay;
            action.execute();
        }
        this.frame = 0;
    };

    VirtualTimeScheduler.prototype.schedule = function schedule(work, delay, state) {
        if (delay === undefined) delay = 0;

        this.sorted = false;
        return new VirtualAction(this, work, this.index++).schedule(state, delay);
    };

    return VirtualTimeScheduler;
})();

exports["default"] = VirtualTimeScheduler;

var VirtualAction = (function (_Subscription) {
    _inherits(VirtualAction, _Subscription);

    function VirtualAction(scheduler, work, index) {
        _classCallCheck(this, VirtualAction);

        _Subscription.call(this);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
    }

    VirtualAction.prototype.schedule = function schedule(state) {
        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        if (this.isUnsubscribed) {
            return this;
        }
        var scheduler = this.scheduler;
        var action = scheduler.frame === this.delay ? this : new VirtualAction(scheduler, this.work, scheduler.index += 1);
        action.state = state;
        action.delay = scheduler.frame + delay;
        scheduler.actions.push(action);
        return this;
    };

    VirtualAction.prototype.execute = function execute() {
        if (this.isUnsubscribed) {
            throw new Error("How did did we execute a canceled Action?");
        }
        this.work(this.state);
    };

    VirtualAction.prototype.unsubscribe = function unsubscribe() {
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = void 0;
        this.state = void 0;
        this.scheduler = void 0;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        _Subscription.prototype.unsubscribe.call(this);
    };

    return VirtualAction;
})(_Subscription3["default"]);

module.exports = exports["default"];