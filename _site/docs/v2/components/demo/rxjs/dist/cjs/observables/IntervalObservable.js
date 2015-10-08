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

var IntervalObservable = (function (_Observable) {
    _inherits(IntervalObservable, _Observable);

    function IntervalObservable() {
        var period = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _schedulersNextTick2['default'] : arguments[1];

        _classCallCheck(this, IntervalObservable);

        _Observable.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!_utilIsNumeric2['default'](period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== "function") {
            this.scheduler = _schedulersNextTick2['default'];
        }
    }

    IntervalObservable.create = function create() {
        var period = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _schedulersNextTick2['default'] : arguments[1];

        return new IntervalObservable(period, scheduler);
    };

    IntervalObservable.dispatch = function dispatch(state) {
        var index = state.index;
        var subscriber = state.subscriber;
        var period = state.period;

        subscriber.next(index);
        if (subscriber.isUnsubscribed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };

    IntervalObservable.prototype._subscribe = function _subscribe(subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };

    return IntervalObservable;
})(_Observable3['default']);

exports['default'] = IntervalObservable;
module.exports = exports['default'];