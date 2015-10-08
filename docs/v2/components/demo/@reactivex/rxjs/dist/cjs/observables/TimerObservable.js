'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilIsNumeric = require('../util/isNumeric');

var _utilIsNumeric2 = _interopRequireDefault(_utilIsNumeric);

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var _schedulersNextTick = require('../schedulers/nextTick');

var _schedulersNextTick2 = _interopRequireDefault(_schedulersNextTick);

var TimerObservable = (function (_Observable) {
    _inherits(TimerObservable, _Observable);

    function TimerObservable(dueTime, period, scheduler) {
        if (dueTime === undefined) dueTime = 0;

        _classCallCheck(this, TimerObservable);

        _Observable.call(this);
        this.dueTime = dueTime;
        this.period = period;
        this.scheduler = scheduler;
        if (_utilIsNumeric2['default'](period)) {
            this._period = Number(period) < 1 && 1 || Number(period);
        } else if (period && typeof period.schedule === "function") {
            scheduler = period;
        }
        if (!scheduler || typeof scheduler.schedule !== "function") {
            scheduler = _schedulersNextTick2['default'];
        }
        this.scheduler = scheduler;
    }

    TimerObservable.create = function create(dueTime, period, scheduler) {
        if (dueTime === undefined) dueTime = 0;

        return new TimerObservable(dueTime, period, scheduler);
    };

    TimerObservable.dispatch = function dispatch(state) {
        var index = state.index;
        var period = state.period;
        var subscriber = state.subscriber;

        var action = this;
        subscriber.next(index);
        if (typeof period === "undefined") {
            subscriber.complete();
            return;
        } else if (subscriber.isUnsubscribed) {
            return;
        }
        if (typeof action.delay === 'undefined') {
            action.add(action.scheduler.schedule(TimerObservable.dispatch, period, {
                index: index + 1, period: period, subscriber: subscriber
            }));
        } else {
            state.index = index + 1;
            action.schedule(state, period);
        }
    };

    TimerObservable.prototype._subscribe = function _subscribe(subscriber) {
        var index = 0;
        var period = this._period;
        var dueTime = this.dueTime;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(TimerObservable.dispatch, dueTime, { index: index, period: period, subscriber: subscriber }));
    };

    return TimerObservable;
})(_Observable3['default']);

exports['default'] = TimerObservable;
module.exports = exports['default'];