'use strict';

exports.__esModule = true;
exports['default'] = window;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber3 = require('../Subscriber');

var _Subscriber4 = _interopRequireDefault(_Subscriber3);

var _Subject = require('../Subject');

var _Subject2 = _interopRequireDefault(_Subject);

var _Subscription = require('../Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

function window(closingSelector) {
    return this.lift(new WindowOperator(closingSelector));
}

var WindowOperator = (function () {
    function WindowOperator(closingSelector) {
        _classCallCheck(this, WindowOperator);

        this.closingSelector = closingSelector;
    }

    WindowOperator.prototype.call = function call(subscriber) {
        return new WindowSubscriber(subscriber, this.closingSelector);
    };

    return WindowOperator;
})();

var WindowSubscriber = (function (_Subscriber) {
    _inherits(WindowSubscriber, _Subscriber);

    function WindowSubscriber(destination, closingSelector) {
        _classCallCheck(this, WindowSubscriber);

        _Subscriber.call(this, destination);
        this.closingSelector = closingSelector;
        this.window = new _Subject2['default']();
        this.openWindow();
    }

    WindowSubscriber.prototype._next = function _next(value) {
        this.window.next(value);
    };

    WindowSubscriber.prototype._error = function _error(err) {
        this.window.error(err);
        this.destination.error(err);
    };

    WindowSubscriber.prototype._complete = function _complete() {
        this.window.complete();
        this.destination.complete();
    };

    WindowSubscriber.prototype.openWindow = function openWindow() {
        var prevClosingNotification = this.closingNotification;
        if (prevClosingNotification) {
            this.remove(prevClosingNotification);
            prevClosingNotification.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        this.destination.next(this.window = new _Subject2['default']());
        var closingNotifier = _utilTryCatch2['default'](this.closingSelector)();
        if (closingNotifier === _utilErrorObject.errorObject) {
            var err = closingNotifier.e;
            this.destination.error(err);
            this.window.error(err);
        } else {
            var closingNotification = this.closingNotification = new _Subscription2['default']();
            this.add(closingNotification.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this))));
        }
    };

    return WindowSubscriber;
})(_Subscriber4['default']);

var WindowClosingNotifierSubscriber = (function (_Subscriber2) {
    _inherits(WindowClosingNotifierSubscriber, _Subscriber2);

    function WindowClosingNotifierSubscriber(parent) {
        _classCallCheck(this, WindowClosingNotifierSubscriber);

        _Subscriber2.call(this, null);
        this.parent = parent;
    }

    WindowClosingNotifierSubscriber.prototype._next = function _next() {
        this.parent.openWindow();
    };

    WindowClosingNotifierSubscriber.prototype._error = function _error(err) {
        this.parent.error(err);
    };

    WindowClosingNotifierSubscriber.prototype._complete = function _complete() {
        // noop
    };

    return WindowClosingNotifierSubscriber;
})(_Subscriber4['default']);

module.exports = exports['default'];