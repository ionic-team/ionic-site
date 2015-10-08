var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subscriber', '../schedulers/nextTick'], function (require, exports, Subscriber_1, nextTick_1) {
    function bufferTime(bufferTimeSpan, bufferCreationInterval, scheduler) {
        if (bufferCreationInterval === void 0) { bufferCreationInterval = null; }
        if (scheduler === void 0) { scheduler = nextTick_1.default; }
        return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = bufferTime;
    var BufferTimeOperator = (function () {
        function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
            this.bufferTimeSpan = bufferTimeSpan;
            this.bufferCreationInterval = bufferCreationInterval;
            this.scheduler = scheduler;
        }
        BufferTimeOperator.prototype.call = function (subscriber) {
            return new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler);
        };
        return BufferTimeOperator;
    })();
    var BufferTimeSubscriber = (function (_super) {
        __extends(BufferTimeSubscriber, _super);
        function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
            _super.call(this, destination);
            this.bufferTimeSpan = bufferTimeSpan;
            this.bufferCreationInterval = bufferCreationInterval;
            this.scheduler = scheduler;
            this.buffers = [];
            var buffer = this.openBuffer();
            if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
                this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: this, buffer: buffer }));
                this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler }));
            }
            else {
                this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, { subscriber: this, buffer: buffer, bufferTimeSpan: bufferTimeSpan }));
            }
        }
        BufferTimeSubscriber.prototype._next = function (value) {
            var buffers = this.buffers;
            var len = buffers.length;
            for (var i = 0; i < len; i++) {
                buffers[i].push(value);
            }
        };
        BufferTimeSubscriber.prototype._error = function (err) {
            this.buffers.length = 0;
            this.destination.error(err);
        };
        BufferTimeSubscriber.prototype._complete = function () {
            var buffers = this.buffers;
            while (buffers.length > 0) {
                this.destination.next(buffers.shift());
            }
            this.destination.complete();
        };
        BufferTimeSubscriber.prototype.openBuffer = function () {
            var buffer = [];
            this.buffers.push(buffer);
            return buffer;
        };
        BufferTimeSubscriber.prototype.closeBuffer = function (buffer) {
            this.destination.next(buffer);
            var buffers = this.buffers;
            buffers.splice(buffers.indexOf(buffer), 1);
        };
        return BufferTimeSubscriber;
    })(Subscriber_1.default);
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
        var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
        var buffer = subscriber.openBuffer();
        var action = this;
        action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, buffer: buffer }));
        action.schedule(state, bufferCreationInterval);
    }
    function dispatchBufferClose(_a) {
        var subscriber = _a.subscriber, buffer = _a.buffer;
        subscriber.closeBuffer(buffer);
    }
});
//# sourceMappingURL=bufferTime.js.map