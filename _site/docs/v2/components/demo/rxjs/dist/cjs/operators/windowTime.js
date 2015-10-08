'use strict';

exports.__esModule = true;
exports['default'] = windowTime;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _Subject = require('../Subject');

var _Subject2 = _interopRequireDefault(_Subject);

var _schedulersNextTick = require('../schedulers/nextTick');

var _schedulersNextTick2 = _interopRequireDefault(_schedulersNextTick);

function windowTime(windowTimeSpan) {
    var windowCreationInterval = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var scheduler = arguments.length <= 2 || arguments[2] === undefined ? _schedulersNextTick2['default'] : arguments[2];

    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
}

var WindowTimeOperator = (function () {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
        _classCallCheck(this, WindowTimeOperator);

        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.scheduler = scheduler;
    }

    WindowTimeOperator.prototype.call = function call(subscriber) {
        return new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler);
    };

    return WindowTimeOperator;
})();

var WindowTimeSubscriber = (function (_Subscriber) {
    _inherits(WindowTimeSubscriber, _Subscriber);

    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
        _classCallCheck(this, WindowTimeSubscriber);

        _Subscriber.call(this, destination);
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.scheduler = scheduler;
        this.windows = [];
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            var _window = this.openWindow();
            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, { subscriber: this, window: _window, context: null }));
            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler }));
        } else {
            var _window2 = this.openWindow();
            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, { subscriber: this, window: _window2, windowTimeSpan: windowTimeSpan }));
        }
    }

    WindowTimeSubscriber.prototype._next = function _next(value) {
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len; i++) {
            windows[i].next(value);
        }
    };

    WindowTimeSubscriber.prototype._error = function _error(err) {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    };

    WindowTimeSubscriber.prototype._complete = function _complete() {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().complete();
        }
        this.destination.complete();
    };

    WindowTimeSubscriber.prototype.openWindow = function openWindow() {
        var window = new _Subject2['default']();
        this.windows.push(window);
        this.destination.next(window);
        return window;
    };

    WindowTimeSubscriber.prototype.closeWindow = function closeWindow(window) {
        window.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    };

    return WindowTimeSubscriber;
})(_Subscriber3['default']);

function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var windowTimeSpan = state.windowTimeSpan;
    var window = state.window;

    if (window) {
        window.complete();
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan;
    var subscriber = state.subscriber;
    var scheduler = state.scheduler;
    var windowCreationInterval = state.windowCreationInterval;

    var window = subscriber.openWindow();
    var action = this;
    var context = { action: action, subscription: null };
    action.add(context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, { subscriber: subscriber, window: window, context: context }));
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(_ref) {
    var subscriber = _ref.subscriber;
    var window = _ref.window;
    var context = _ref.context;

    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
module.exports = exports['default'];