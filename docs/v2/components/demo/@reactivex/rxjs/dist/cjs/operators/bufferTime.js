'use strict';

exports.__esModule = true;
exports['default'] = bufferTime;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _schedulersNextTick = require('../schedulers/nextTick');

var _schedulersNextTick2 = _interopRequireDefault(_schedulersNextTick);

function bufferTime(bufferTimeSpan) {
    var bufferCreationInterval = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var scheduler = arguments.length <= 2 || arguments[2] === undefined ? _schedulersNextTick2['default'] : arguments[2];

    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
}

var BufferTimeOperator = (function () {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
        _classCallCheck(this, BufferTimeOperator);

        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.scheduler = scheduler;
    }

    BufferTimeOperator.prototype.call = function call(subscriber) {
        return new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler);
    };

    return BufferTimeOperator;
})();

var BufferTimeSubscriber = (function (_Subscriber) {
    _inherits(BufferTimeSubscriber, _Subscriber);

    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
        _classCallCheck(this, BufferTimeSubscriber);

        _Subscriber.call(this, destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.scheduler = scheduler;
        this.buffers = [];
        var buffer = this.openBuffer();
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
            this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: this, buffer: buffer }));
            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler }));
        } else {
            this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, { subscriber: this, buffer: buffer, bufferTimeSpan: bufferTimeSpan }));
        }
    }

    BufferTimeSubscriber.prototype._next = function _next(value) {
        var buffers = this.buffers;
        var len = buffers.length;
        for (var i = 0; i < len; i++) {
            buffers[i].push(value);
        }
    };

    BufferTimeSubscriber.prototype._error = function _error(err) {
        this.buffers.length = 0;
        this.destination.error(err);
    };

    BufferTimeSubscriber.prototype._complete = function _complete() {
        var buffers = this.buffers;
        while (buffers.length > 0) {
            this.destination.next(buffers.shift());
        }
        this.destination.complete();
    };

    BufferTimeSubscriber.prototype.openBuffer = function openBuffer() {
        var buffer = [];
        this.buffers.push(buffer);
        return buffer;
    };

    BufferTimeSubscriber.prototype.closeBuffer = function closeBuffer(buffer) {
        this.destination.next(buffer);
        var buffers = this.buffers;
        buffers.splice(buffers.indexOf(buffer), 1);
    };

    return BufferTimeSubscriber;
})(_Subscriber3['default']);

function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevBuffer = state.buffer;
    if (prevBuffer) {
        subscriber.closeBuffer(prevBuffer);
    }
    state.buffer = subscriber.openBuffer();
    this.schedule(state, state.bufferTimeSpan);
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval;
    var bufferTimeSpan = state.bufferTimeSpan;
    var subscriber = state.subscriber;
    var scheduler = state.scheduler;

    var buffer = subscriber.openBuffer();
    var action = this;
    action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, buffer: buffer }));
    action.schedule(state, bufferCreationInterval);
}
function dispatchBufferClose(_ref) {
    var subscriber = _ref.subscriber;
    var buffer = _ref.buffer;

    subscriber.closeBuffer(buffer);
}
module.exports = exports['default'];