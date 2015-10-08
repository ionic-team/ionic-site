'use strict';

exports.__esModule = true;
exports['default'] = delay;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _Notification = require('../Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _schedulersImmediate = require('../schedulers/immediate');

var _schedulersImmediate2 = _interopRequireDefault(_schedulersImmediate);

function delay(delay) {
    var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _schedulersImmediate2['default'] : arguments[1];

    return this.lift(new DelayOperator(delay, scheduler));
}

var DelayOperator = (function () {
    function DelayOperator(delay, scheduler) {
        _classCallCheck(this, DelayOperator);

        this.delay = delay;
        this.scheduler = scheduler;
    }

    DelayOperator.prototype.call = function call(subscriber) {
        return new DelaySubscriber(subscriber, this.delay, this.scheduler);
    };

    return DelayOperator;
})();

var DelaySubscriber = (function (_Subscriber) {
    _inherits(DelaySubscriber, _Subscriber);

    function DelaySubscriber(destination, delay, scheduler) {
        _classCallCheck(this, DelaySubscriber);

        _Subscriber.call(this, destination);
        this.queue = [];
        this.active = false;
        this.errored = false;
        this.delay = delay;
        this.scheduler = scheduler;
    }

    DelaySubscriber.dispatch = function dispatch(state) {
        var source = state.source;
        var queue = source.queue;
        var scheduler = state.scheduler;
        var destination = state.destination;
        while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            var _delay = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, _delay);
        } else {
            source.active = false;
        }
    };

    DelaySubscriber.prototype._next = function _next(x) {
        if (this.errored) {
            return;
        }
        var scheduler = this.scheduler;
        this.queue.push(new DelayMessage(scheduler.now() + this.delay, _Notification2['default'].createNext(x)));
        if (this.active === false) {
            this._schedule(scheduler);
        }
    };

    DelaySubscriber.prototype._error = function _error(e) {
        var scheduler = this.scheduler;
        this.errored = true;
        this.queue = [new DelayMessage(scheduler.now() + this.delay, _Notification2['default'].createError(e))];
        if (this.active === false) {
            this._schedule(scheduler);
        }
    };

    DelaySubscriber.prototype._complete = function _complete() {
        if (this.errored) {
            return;
        }
        var scheduler = this.scheduler;
        this.queue.push(new DelayMessage(scheduler.now() + this.delay, _Notification2['default'].createComplete()));
        if (this.active === false) {
            this._schedule(scheduler);
        }
    };

    DelaySubscriber.prototype._schedule = function _schedule(scheduler) {
        this.active = true;
        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    };

    return DelaySubscriber;
})(_Subscriber3['default']);

var DelayMessage = function DelayMessage(time, notification) {
    _classCallCheck(this, DelayMessage);

    this.time = time;
    this.notification = notification;
};

module.exports = exports['default'];