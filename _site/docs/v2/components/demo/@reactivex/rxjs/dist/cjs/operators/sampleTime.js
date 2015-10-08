'use strict';

exports.__esModule = true;
exports['default'] = sampleTime;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _schedulersNextTick = require('../schedulers/nextTick');

var _schedulersNextTick2 = _interopRequireDefault(_schedulersNextTick);

function sampleTime(delay) {
    var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _schedulersNextTick2['default'] : arguments[1];

    return this.lift(new SampleTimeOperator(delay, scheduler));
}

var SampleTimeOperator = (function () {
    function SampleTimeOperator(delay, scheduler) {
        _classCallCheck(this, SampleTimeOperator);

        this.delay = delay;
        this.scheduler = scheduler;
    }

    SampleTimeOperator.prototype.call = function call(subscriber) {
        return new SampleTimeSubscriber(subscriber, this.delay, this.scheduler);
    };

    return SampleTimeOperator;
})();

var SampleTimeSubscriber = (function (_Subscriber) {
    _inherits(SampleTimeSubscriber, _Subscriber);

    function SampleTimeSubscriber(destination, delay, scheduler) {
        _classCallCheck(this, SampleTimeSubscriber);

        _Subscriber.call(this, destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.hasValue = false;
        this.add(scheduler.schedule(dispatchNotification, delay, { subscriber: this, delay: delay }));
    }

    SampleTimeSubscriber.prototype._next = function _next(value) {
        this.lastValue = value;
        this.hasValue = true;
    };

    SampleTimeSubscriber.prototype.notifyNext = function notifyNext() {
        if (this.hasValue) {
            this.destination.next(this.lastValue);
        }
    };

    return SampleTimeSubscriber;
})(_Subscriber3['default']);

function dispatchNotification(state) {
    var subscriber = state.subscriber;
    var delay = state.delay;

    subscriber.notifyNext();
    this.schedule(state, delay);
}
module.exports = exports['default'];