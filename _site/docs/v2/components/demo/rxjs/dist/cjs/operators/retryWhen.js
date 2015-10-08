'use strict';

exports.__esModule = true;
exports['default'] = retryWhen;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber3 = require('../Subscriber');

var _Subscriber4 = _interopRequireDefault(_Subscriber3);

var _Subject = require('../Subject');

var _Subject2 = _interopRequireDefault(_Subject);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

function retryWhen(notifier) {
    return this.lift(new RetryWhenOperator(notifier, this));
}

var RetryWhenOperator = (function () {
    function RetryWhenOperator(notifier, original) {
        _classCallCheck(this, RetryWhenOperator);

        this.notifier = notifier;
        this.original = original;
    }

    RetryWhenOperator.prototype.call = function call(subscriber) {
        return new RetryWhenSubscriber(subscriber, this.notifier, this.original);
    };

    return RetryWhenOperator;
})();

var RetryWhenSubscriber = (function (_Subscriber) {
    _inherits(RetryWhenSubscriber, _Subscriber);

    function RetryWhenSubscriber(destination, notifier, original) {
        _classCallCheck(this, RetryWhenSubscriber);

        _Subscriber.call(this, destination);
        this.notifier = notifier;
        this.original = original;
    }

    RetryWhenSubscriber.prototype._error = function _error(err) {
        if (!this.retryNotifications) {
            this.errors = new _Subject2['default']();
            var notifications = _utilTryCatch2['default'](this.notifier).call(this, this.errors);
            if (notifications === _utilErrorObject.errorObject) {
                this.destination.error(_utilErrorObject.errorObject.e);
            } else {
                this.retryNotifications = notifications;
                this.add(notifications._subscribe(new RetryNotificationSubscriber(this)));
            }
        }
        this.errors.next(err);
    };

    RetryWhenSubscriber.prototype.finalError = function finalError(err) {
        this.destination.error(err);
    };

    RetryWhenSubscriber.prototype.resubscribe = function resubscribe() {
        this.original.subscribe(this);
    };

    return RetryWhenSubscriber;
})(_Subscriber4['default']);

var RetryNotificationSubscriber = (function (_Subscriber2) {
    _inherits(RetryNotificationSubscriber, _Subscriber2);

    function RetryNotificationSubscriber(parent) {
        _classCallCheck(this, RetryNotificationSubscriber);

        _Subscriber2.call(this, null);
        this.parent = parent;
    }

    RetryNotificationSubscriber.prototype._next = function _next(value) {
        this.parent.resubscribe();
    };

    RetryNotificationSubscriber.prototype._error = function _error(err) {
        this.parent.finalError(err);
    };

    RetryNotificationSubscriber.prototype._complete = function _complete() {
        this.parent.complete();
    };

    return RetryNotificationSubscriber;
})(_Subscriber4['default']);

module.exports = exports['default'];