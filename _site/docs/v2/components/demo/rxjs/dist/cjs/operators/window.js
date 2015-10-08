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

function window(closingNotifier) {
    return this.lift(new WindowOperator(closingNotifier));
}

var WindowOperator = (function () {
    function WindowOperator(closingNotifier) {
        _classCallCheck(this, WindowOperator);

        this.closingNotifier = closingNotifier;
    }

    WindowOperator.prototype.call = function call(subscriber) {
        return new WindowSubscriber(subscriber, this.closingNotifier);
    };

    return WindowOperator;
})();

var WindowSubscriber = (function (_Subscriber) {
    _inherits(WindowSubscriber, _Subscriber);

    function WindowSubscriber(destination, closingNotifier) {
        _classCallCheck(this, WindowSubscriber);

        _Subscriber.call(this, destination);
        this.closingNotifier = closingNotifier;
        this.window = new _Subject2['default']();
        this.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this)));
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
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        this.destination.next(this.window = new _Subject2['default']());
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

    return WindowClosingNotifierSubscriber;
})(_Subscriber4['default']);

module.exports = exports['default'];