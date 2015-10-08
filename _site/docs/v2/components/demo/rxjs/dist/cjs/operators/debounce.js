'use strict';

exports.__esModule = true;
exports['default'] = debounce;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _schedulersNextTick = require('../schedulers/nextTick');

var _schedulersNextTick2 = _interopRequireDefault(_schedulersNextTick);

function debounce(dueTime) {
    var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _schedulersNextTick2['default'] : arguments[1];

    return this.lift(new DebounceOperator(dueTime, scheduler));
}

var DebounceOperator = (function () {
    function DebounceOperator(dueTime, scheduler) {
        _classCallCheck(this, DebounceOperator);

        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }

    DebounceOperator.prototype.call = function call(subscriber) {
        return new DebounceSubscriber(subscriber, this.dueTime, this.scheduler);
    };

    return DebounceOperator;
})();

var DebounceSubscriber = (function (_Subscriber) {
    _inherits(DebounceSubscriber, _Subscriber);

    function DebounceSubscriber(destination, dueTime, scheduler) {
        _classCallCheck(this, DebounceSubscriber);

        _Subscriber.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }

    DebounceSubscriber.prototype._next = function _next(value) {
        if (!this.debounced) {
            this.add(this.debounced = this.scheduler.schedule(dispatchNext, this.dueTime, { value: value, subscriber: this }));
        }
    };

    DebounceSubscriber.prototype.clearDebounce = function clearDebounce() {
        var debounced = this.debounced;
        if (debounced) {
            debounced.unsubscribe();
            this.remove(debounced);
        }
    };

    DebounceSubscriber.prototype.debouncedNext = function debouncedNext(value) {
        this.clearDebounce();
        this.destination.next(value);
    };

    return DebounceSubscriber;
})(_Subscriber3['default']);

function dispatchNext(_ref) {
    var value = _ref.value;
    var subscriber = _ref.subscriber;

    subscriber.debouncedNext(value);
}
module.exports = exports['default'];