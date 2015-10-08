'use strict';

exports.__esModule = true;
exports['default'] = windowToggle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber4 = require('../Subscriber');

var _Subscriber5 = _interopRequireDefault(_Subscriber4);

var _Subject = require('../Subject');

var _Subject2 = _interopRequireDefault(_Subject);

var _Subscription = require('../Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

function windowToggle(openings, closingSelector) {
    return this.lift(new WindowToggleOperator(openings, closingSelector));
}

var WindowToggleOperator = (function () {
    function WindowToggleOperator(openings, closingSelector) {
        _classCallCheck(this, WindowToggleOperator);

        this.openings = openings;
        this.closingSelector = closingSelector;
    }

    WindowToggleOperator.prototype.call = function call(subscriber) {
        return new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector);
    };

    return WindowToggleOperator;
})();

var WindowToggleSubscriber = (function (_Subscriber) {
    _inherits(WindowToggleSubscriber, _Subscriber);

    function WindowToggleSubscriber(destination, openings, closingSelector) {
        _classCallCheck(this, WindowToggleSubscriber);

        _Subscriber.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.windows = [];
        this.add(this.openings._subscribe(new WindowToggleOpeningsSubscriber(this)));
    }

    WindowToggleSubscriber.prototype._next = function _next(value) {
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len; i++) {
            windows[i].next(value);
        }
    };

    WindowToggleSubscriber.prototype._error = function _error(err) {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    };

    WindowToggleSubscriber.prototype._complete = function _complete() {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().complete();
        }
        this.destination.complete();
    };

    WindowToggleSubscriber.prototype.openWindow = function openWindow(value) {
        var window = new _Subject2['default']();
        this.windows.push(window);
        this.destination.next(window);
        var windowContext = {
            window: window,
            subscription: new _Subscription2['default']()
        };
        var closingSelector = this.closingSelector;
        var closingNotifier = _utilTryCatch2['default'](closingSelector)(value);
        if (closingNotifier === _utilErrorObject.errorObject) {
            this.error(closingNotifier.e);
        } else {
            this.add(windowContext.subscription.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this, windowContext))));
        }
    };

    WindowToggleSubscriber.prototype.closeWindow = function closeWindow(windowContext) {
        var window = windowContext.window;
        var subscription = windowContext.subscription;

        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
        window.complete();
        this.remove(subscription);
    };

    return WindowToggleSubscriber;
})(_Subscriber5['default']);

var WindowClosingNotifierSubscriber = (function (_Subscriber2) {
    _inherits(WindowClosingNotifierSubscriber, _Subscriber2);

    function WindowClosingNotifierSubscriber(parent, windowContext) {
        _classCallCheck(this, WindowClosingNotifierSubscriber);

        _Subscriber2.call(this, null);
        this.parent = parent;
        this.windowContext = windowContext;
    }

    WindowClosingNotifierSubscriber.prototype._next = function _next() {
        this.parent.closeWindow(this.windowContext);
    };

    WindowClosingNotifierSubscriber.prototype._error = function _error(err) {
        this.parent.error(err);
    };

    WindowClosingNotifierSubscriber.prototype._complete = function _complete() {
        // noop
    };

    return WindowClosingNotifierSubscriber;
})(_Subscriber5['default']);

var WindowToggleOpeningsSubscriber = (function (_Subscriber3) {
    _inherits(WindowToggleOpeningsSubscriber, _Subscriber3);

    function WindowToggleOpeningsSubscriber(parent) {
        _classCallCheck(this, WindowToggleOpeningsSubscriber);

        _Subscriber3.call(this);
        this.parent = parent;
    }

    WindowToggleOpeningsSubscriber.prototype._next = function _next(value) {
        this.parent.openWindow(value);
    };

    WindowToggleOpeningsSubscriber.prototype._error = function _error(err) {
        this.parent.error(err);
    };

    WindowToggleOpeningsSubscriber.prototype._complete = function _complete() {
        // noop
    };

    return WindowToggleOpeningsSubscriber;
})(_Subscriber5['default']);

module.exports = exports['default'];