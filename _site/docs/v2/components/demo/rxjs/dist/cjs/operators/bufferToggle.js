'use strict';

exports.__esModule = true;
exports['default'] = bufferToggle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber4 = require('../Subscriber');

var _Subscriber5 = _interopRequireDefault(_Subscriber4);

var _Subscription = require('../Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

function bufferToggle(openings, closingSelector) {
    return this.lift(new BufferToggleOperator(openings, closingSelector));
}

var BufferToggleOperator = (function () {
    function BufferToggleOperator(openings, closingSelector) {
        _classCallCheck(this, BufferToggleOperator);

        this.openings = openings;
        this.closingSelector = closingSelector;
    }

    BufferToggleOperator.prototype.call = function call(subscriber) {
        return new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector);
    };

    return BufferToggleOperator;
})();

var BufferToggleSubscriber = (function (_Subscriber) {
    _inherits(BufferToggleSubscriber, _Subscriber);

    function BufferToggleSubscriber(destination, openings, closingSelector) {
        _classCallCheck(this, BufferToggleSubscriber);

        _Subscriber.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.buffers = [];
        this.add(this.openings._subscribe(new BufferToggleOpeningsSubscriber(this)));
    }

    BufferToggleSubscriber.prototype._next = function _next(value) {
        var buffers = this.buffers;
        var len = buffers.length;
        for (var i = 0; i < len; i++) {
            buffers[i].push(value);
        }
    };

    BufferToggleSubscriber.prototype._error = function _error(err) {
        this.buffers = null;
        this.destination.error(err);
    };

    BufferToggleSubscriber.prototype._complete = function _complete() {
        var buffers = this.buffers;
        while (buffers.length > 0) {
            this.destination.next(buffers.shift());
        }
        this.destination.complete();
    };

    BufferToggleSubscriber.prototype.openBuffer = function openBuffer(value) {
        var closingSelector = this.closingSelector;
        var buffers = this.buffers;
        var closingNotifier = _utilTryCatch2['default'](closingSelector)(value);
        if (closingNotifier === _utilErrorObject.errorObject) {
            var err = closingNotifier.e;
            this.buffers = null;
            this.destination.error(err);
        } else {
            var buffer = [];
            var context = {
                buffer: buffer,
                subscription: new _Subscription2['default']()
            };
            buffers.push(buffer);
            this.add(context.subscription.add(closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this, context))));
        }
    };

    BufferToggleSubscriber.prototype.closeBuffer = function closeBuffer(context) {
        var buffer = context.buffer;
        var subscription = context.subscription;

        var buffers = this.buffers;
        this.destination.next(buffer);
        buffers.splice(buffers.indexOf(buffer), 1);
        this.remove(subscription);
        subscription.unsubscribe();
    };

    return BufferToggleSubscriber;
})(_Subscriber5['default']);

var BufferClosingNotifierSubscriber = (function (_Subscriber2) {
    _inherits(BufferClosingNotifierSubscriber, _Subscriber2);

    function BufferClosingNotifierSubscriber(parent, context) {
        _classCallCheck(this, BufferClosingNotifierSubscriber);

        _Subscriber2.call(this, null);
        this.parent = parent;
        this.context = context;
    }

    BufferClosingNotifierSubscriber.prototype._next = function _next() {
        this.parent.closeBuffer(this.context);
    };

    BufferClosingNotifierSubscriber.prototype._error = function _error(err) {
        this.parent.error(err);
    };

    BufferClosingNotifierSubscriber.prototype._complete = function _complete() {
        // noop
    };

    return BufferClosingNotifierSubscriber;
})(_Subscriber5['default']);

var BufferToggleOpeningsSubscriber = (function (_Subscriber3) {
    _inherits(BufferToggleOpeningsSubscriber, _Subscriber3);

    function BufferToggleOpeningsSubscriber(parent) {
        _classCallCheck(this, BufferToggleOpeningsSubscriber);

        _Subscriber3.call(this, null);
        this.parent = parent;
    }

    BufferToggleOpeningsSubscriber.prototype._next = function _next(value) {
        this.parent.openBuffer(value);
    };

    BufferToggleOpeningsSubscriber.prototype._error = function _error(err) {
        this.parent.error(err);
    };

    BufferToggleOpeningsSubscriber.prototype._complete = function _complete() {
        // noop
    };

    return BufferToggleOpeningsSubscriber;
})(_Subscriber5['default']);

module.exports = exports['default'];