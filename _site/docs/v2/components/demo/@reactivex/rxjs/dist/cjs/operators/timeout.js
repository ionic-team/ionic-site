'use strict';

exports.__esModule = true;
exports['default'] = timeout;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _schedulersImmediate = require('../schedulers/immediate');

var _schedulersImmediate2 = _interopRequireDefault(_schedulersImmediate);

var _utilIsDate = require('../util/isDate');

var _utilIsDate2 = _interopRequireDefault(_utilIsDate);

function timeout(due) {
    var errorToSend = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var scheduler = arguments.length <= 2 || arguments[2] === undefined ? _schedulersImmediate2['default'] : arguments[2];

    var waitFor = _utilIsDate2['default'](due) ? +due - Date.now() : due;
    return this.lift(new TimeoutOperator(waitFor, errorToSend, scheduler));
}

var TimeoutOperator = (function () {
    function TimeoutOperator(waitFor, errorToSend, scheduler) {
        _classCallCheck(this, TimeoutOperator);

        this.waitFor = waitFor;
        this.errorToSend = errorToSend;
        this.scheduler = scheduler;
    }

    TimeoutOperator.prototype.call = function call(subscriber) {
        return new TimeoutSubscriber(subscriber, this.waitFor, this.errorToSend, this.scheduler);
    };

    return TimeoutOperator;
})();

var TimeoutSubscriber = (function (_Subscriber) {
    _inherits(TimeoutSubscriber, _Subscriber);

    function TimeoutSubscriber(destination, waitFor, errorToSend, scheduler) {
        _classCallCheck(this, TimeoutSubscriber);

        _Subscriber.call(this, destination);
        this.waitFor = waitFor;
        this.errorToSend = errorToSend;
        this.scheduler = scheduler;
        var delay = waitFor;
        scheduler.schedule(dispatchTimeout, delay, { subscriber: this });
    }

    TimeoutSubscriber.prototype.sendTimeoutError = function sendTimeoutError() {
        this.error(this.errorToSend || new Error('timeout'));
    };

    return TimeoutSubscriber;
})(_Subscriber3['default']);

function dispatchTimeout(state) {
    var subscriber = state.subscriber;
    subscriber.sendTimeoutError();
}
module.exports = exports['default'];