'use strict';

exports.__esModule = true;
exports['default'] = skipUntil;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber3 = require('../Subscriber');

var _Subscriber4 = _interopRequireDefault(_Subscriber3);

function skipUntil(total) {
    return this.lift(new SkipUntilOperator(total));
}

var SkipUntilOperator = (function () {
    function SkipUntilOperator(notifier) {
        _classCallCheck(this, SkipUntilOperator);

        this.notifier = notifier;
    }

    SkipUntilOperator.prototype.call = function call(subscriber) {
        return new SkipUntilSubscriber(subscriber, this.notifier);
    };

    return SkipUntilOperator;
})();

var SkipUntilSubscriber = (function (_Subscriber) {
    _inherits(SkipUntilSubscriber, _Subscriber);

    function SkipUntilSubscriber(destination, notifier) {
        _classCallCheck(this, SkipUntilSubscriber);

        _Subscriber.call(this, destination);
        this.notifier = notifier;
        this.notificationSubscriber = new NotificationSubscriber();
        this.add(this.notifier.subscribe(this.notificationSubscriber));
    }

    SkipUntilSubscriber.prototype._next = function _next(x) {
        if (this.notificationSubscriber.hasNotified) {
            this.destination.next(x);
        }
    };

    return SkipUntilSubscriber;
})(_Subscriber4['default']);

var NotificationSubscriber = (function (_Subscriber2) {
    _inherits(NotificationSubscriber, _Subscriber2);

    function NotificationSubscriber() {
        _classCallCheck(this, NotificationSubscriber);

        _Subscriber2.call(this, null);
        this.hasNotified = false;
    }

    NotificationSubscriber.prototype._next = function _next() {
        this.hasNotified = true;
        this.unsubscribe();
    };

    return NotificationSubscriber;
})(_Subscriber4['default']);

module.exports = exports['default'];