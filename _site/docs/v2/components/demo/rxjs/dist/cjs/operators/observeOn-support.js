'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _Notification = require('../Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler) {
        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        _classCallCheck(this, ObserveOnOperator);

        this.delay = delay;
        this.scheduler = scheduler;
    }

    ObserveOnOperator.prototype.call = function call(subscriber) {
        return new ObserveOnSubscriber(subscriber, this.scheduler, this.delay);
    };

    return ObserveOnOperator;
})();

exports.ObserveOnOperator = ObserveOnOperator;

var ObserveOnSubscriber = (function (_Subscriber) {
    _inherits(ObserveOnSubscriber, _Subscriber);

    function ObserveOnSubscriber(destination, scheduler) {
        var delay = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

        _classCallCheck(this, ObserveOnSubscriber);

        _Subscriber.call(this, destination);
        this.delay = delay;
        this.scheduler = scheduler;
    }

    ObserveOnSubscriber.dispatch = function dispatch(_ref) {
        var notification = _ref.notification;
        var destination = _ref.destination;

        notification.observe(destination);
    };

    ObserveOnSubscriber.prototype._next = function _next(x) {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(_Notification2['default'].createNext(x), this.destination)));
    };

    ObserveOnSubscriber.prototype._error = function _error(e) {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(_Notification2['default'].createError(e), this.destination)));
    };

    ObserveOnSubscriber.prototype._complete = function _complete() {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(_Notification2['default'].createComplete(), this.destination)));
    };

    return ObserveOnSubscriber;
})(_Subscriber3['default']);

exports.ObserveOnSubscriber = ObserveOnSubscriber;

var ObserveOnMessage = function ObserveOnMessage(notification, destination) {
    _classCallCheck(this, ObserveOnMessage);

    this.notification = notification;
    this.destination = destination;
};