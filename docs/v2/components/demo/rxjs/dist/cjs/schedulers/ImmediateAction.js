"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Subscription2 = require('../Subscription');

var _Subscription3 = _interopRequireDefault(_Subscription2);

var ImmediateAction = (function (_Subscription) {
    _inherits(ImmediateAction, _Subscription);

    function ImmediateAction(scheduler, work) {
        _classCallCheck(this, ImmediateAction);

        _Subscription.call(this);
        this.scheduler = scheduler;
        this.work = work;
    }

    ImmediateAction.prototype.schedule = function schedule(state) {
        if (this.isUnsubscribed) {
            return this;
        }
        this.state = state;
        var scheduler = this.scheduler;
        scheduler.actions.push(this);
        scheduler.flush();
        return this;
    };

    ImmediateAction.prototype.execute = function execute() {
        if (this.isUnsubscribed) {
            throw new Error("How did did we execute a canceled Action?");
        }
        this.work(this.state);
    };

    ImmediateAction.prototype.unsubscribe = function unsubscribe() {
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

    return ImmediateAction;
})(_Subscription3["default"]);

exports["default"] = ImmediateAction;
module.exports = exports["default"];