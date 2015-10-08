'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ImmediateAction = require('./ImmediateAction');

var _ImmediateAction2 = _interopRequireDefault(_ImmediateAction);

var _FutureAction = require('./FutureAction');

var _FutureAction2 = _interopRequireDefault(_FutureAction);

var ImmediateScheduler = (function () {
    function ImmediateScheduler() {
        _classCallCheck(this, ImmediateScheduler);

        this.actions = [];
        this.active = false;
        this.scheduled = false;
    }

    ImmediateScheduler.prototype.now = function now() {
        return Date.now();
    };

    ImmediateScheduler.prototype.flush = function flush() {
        if (this.active || this.scheduled) {
            return;
        }
        this.active = true;
        var actions = this.actions;
        for (var action = undefined; action = actions.shift();) {
            action.execute();
        }
        this.active = false;
    };

    ImmediateScheduler.prototype.schedule = function schedule(work, delay, state) {
        if (delay === undefined) delay = 0;

        return delay <= 0 ? this.scheduleNow(work, state) : this.scheduleLater(work, delay, state);
    };

    ImmediateScheduler.prototype.scheduleNow = function scheduleNow(work, state) {
        return new _ImmediateAction2['default'](this, work).schedule(state);
    };

    ImmediateScheduler.prototype.scheduleLater = function scheduleLater(work, delay, state) {
        return new _FutureAction2['default'](this, work).schedule(state, delay);
    };

    return ImmediateScheduler;
})();

exports['default'] = ImmediateScheduler;
module.exports = exports['default'];