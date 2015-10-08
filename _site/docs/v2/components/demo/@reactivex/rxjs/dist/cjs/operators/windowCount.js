'use strict';

exports.__esModule = true;
exports['default'] = windowCount;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _Subject = require('../Subject');

var _Subject2 = _interopRequireDefault(_Subject);

function windowCount(windowSize) {
    var startWindowEvery = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
}

var WindowCountOperator = (function () {
    function WindowCountOperator(windowSize, startWindowEvery) {
        _classCallCheck(this, WindowCountOperator);

        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }

    WindowCountOperator.prototype.call = function call(subscriber) {
        return new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery);
    };

    return WindowCountOperator;
})();

var WindowCountSubscriber = (function (_Subscriber) {
    _inherits(WindowCountSubscriber, _Subscriber);

    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
        _classCallCheck(this, WindowCountSubscriber);

        _Subscriber.call(this, destination);
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
        this.windows = [{ count: 0, notified: false, window: new _Subject2['default']() }];
        this.count = 0;
    }

    WindowCountSubscriber.prototype._next = function _next(value) {
        var count = this.count += 1;
        var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        if (count % startWindowEvery === 0) {
            var _window = new _Subject2['default']();
            windows.push({ count: 0, notified: false, window: _window });
        }
        for (var i = 0; i < len; i++) {
            var w = windows[i];
            var _window2 = w.window;
            if (!w.notified) {
                w.notified = true;
                this.destination.next(_window2);
            }
            _window2.next(value);
            if (windowSize === (w.count += 1)) {
                _window2.complete();
            }
        }
    };

    WindowCountSubscriber.prototype._error = function _error(err) {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().window.error(err);
        }
        this.destination.error(err);
    };

    WindowCountSubscriber.prototype._complete = function _complete() {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().window.complete();
        }
        this.destination.complete();
    };

    return WindowCountSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];