'use strict';

exports.__esModule = true;
exports['default'] = throttle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _schedulersNextTick = require('../schedulers/nextTick');

var _schedulersNextTick2 = _interopRequireDefault(_schedulersNextTick);

function throttle(delay) {
    var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _schedulersNextTick2['default'] : arguments[1];

    return this.lift(new ThrottleOperator(delay, scheduler));
}

var ThrottleOperator = (function () {
    function ThrottleOperator(delay, scheduler) {
        _classCallCheck(this, ThrottleOperator);

        this.delay = delay;
        this.scheduler = scheduler;
    }

    ThrottleOperator.prototype.call = function call(subscriber) {
        return new ThrottleSubscriber(subscriber, this.delay, this.scheduler);
    };

    return ThrottleOperator;
})();

var ThrottleSubscriber = (function (_Subscriber) {
    _inherits(ThrottleSubscriber, _Subscriber);

    function ThrottleSubscriber(destination, delay, scheduler) {
        _classCallCheck(this, ThrottleSubscriber);

        _Subscriber.call(this, destination);
        this.delay = delay;
        this.scheduler = scheduler;
    }

    ThrottleSubscriber.prototype._next = function _next(x) {
        this.clearThrottle();
        this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, { value: x, subscriber: this }));
    };

    ThrottleSubscriber.prototype.throttledNext = function throttledNext(x) {
        this.clearThrottle();
        this.destination.next(x);
    };

    ThrottleSubscriber.prototype.clearThrottle = function clearThrottle() {
        var throttled = this.throttled;
        if (throttled) {
            this.remove(throttled);
            throttled.unsubscribe();
            this.throttled = null;
        }
    };

    return ThrottleSubscriber;
})(_Subscriber3['default']);

function dispatchNext(_ref) {
    var value = _ref.value;
    var subscriber = _ref.subscriber;

    subscriber.throttledNext(value);
}
module.exports = exports['default'];