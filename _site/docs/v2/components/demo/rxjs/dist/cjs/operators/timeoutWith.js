'use strict';

exports.__esModule = true;
exports['default'] = timeoutWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _schedulersImmediate = require('../schedulers/immediate');

var _schedulersImmediate2 = _interopRequireDefault(_schedulersImmediate);

var _utilIsDate = require('../util/isDate');

var _utilIsDate2 = _interopRequireDefault(_utilIsDate);

function timeoutWith(due, withObservable) {
    var scheduler = arguments.length <= 2 || arguments[2] === undefined ? _schedulersImmediate2['default'] : arguments[2];

    var waitFor = _utilIsDate2['default'](due) ? +due - Date.now() : due;
    return this.lift(new TimeoutWithOperator(waitFor, withObservable, scheduler));
}

var TimeoutWithOperator = (function () {
    function TimeoutWithOperator(waitFor, withObservable, scheduler) {
        _classCallCheck(this, TimeoutWithOperator);

        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }

    TimeoutWithOperator.prototype.call = function call(subscriber) {
        return new TimeoutWithSubscriber(subscriber, this.waitFor, this.withObservable, this.scheduler);
    };

    return TimeoutWithOperator;
})();

var TimeoutWithSubscriber = (function (_Subscriber) {
    _inherits(TimeoutWithSubscriber, _Subscriber);

    function TimeoutWithSubscriber(destination, waitFor, withObservable, scheduler) {
        _classCallCheck(this, TimeoutWithSubscriber);

        _Subscriber.call(this, destination);
        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
        var delay = waitFor;
        scheduler.schedule(dispatchTimeout, delay, { subscriber: this });
    }

    TimeoutWithSubscriber.prototype.handleTimeout = function handleTimeout() {
        var withObservable = this.withObservable;
        this.add(withObservable.subscribe(this));
    };

    return TimeoutWithSubscriber;
})(_Subscriber3['default']);

function dispatchTimeout(state) {
    var subscriber = state.subscriber;
    subscriber.handleTimeout();
}
module.exports = exports['default'];