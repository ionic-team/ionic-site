import Subscriber from '../Subscriber';
import nextTick from '../schedulers/nextTick';
export default function bufferTime(bufferTimeSpan, bufferCreationInterval = null, scheduler = nextTick) {
    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
}
class BufferTimeOperator {
    constructor(bufferTimeSpan, bufferCreationInterval, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.scheduler = scheduler;
    }
    call(subscriber) {
        return new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler);
    }
}
class BufferTimeSubscriber extends Subscriber {
    constructor(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
        super(destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.scheduler = scheduler;
        this.buffers = [];
        let buffer = this.openBuffer();
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
            this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: this, buffer }));
            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, { bufferTimeSpan, bufferCreationInterval, subscriber: this, scheduler }));
        }
        else {
            this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, { subscriber: this, buffer, bufferTimeSpan }));
        }
    }
    _next(value) {
        const buffers = this.buffers;
        const len = buffers.length;
        for (let i = 0; i < len; i++) {
            buffers[i].push(value);
        }
    }
    _error(err) {
        this.buffers.length = 0;
        this.destination.error(err);
    }
    _complete() {
        const buffers = this.buffers;
        while (buffers.length > 0) {
            this.destination.next(buffers.shift());
        }
        this.destination.complete();
    }
    openBuffer() {
        let buffer = [];
        this.buffers.push(buffer);
        return buffer;
    }
    closeBuffer(buffer) {
        this.destination.next(buffer);
        const buffers = this.buffers;
        buffers.splice(buffers.indexOf(buffer), 1);
    }
}
function dispatchBufferTimeSpanOnly(state) {
    const subscriber = state.subscriber;
    const prevBuffer = state.buffer;
    if (prevBuffer) {
        subscriber.closeBuffer(prevBuffer);
    }
    state.buffer = subscriber.openBuffer();
    this.schedule(state, state.bufferTimeSpan);
}
function dispatchBufferCreation(state) {
    let { bufferCreationInterval, bufferTimeSpan, subscriber, scheduler } = state;
    let buffer = subscriber.openBuffer();
    var action = this;
    action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber, buffer }));
    action.schedule(state, bufferCreationInterval);
}
function dispatchBufferClose({ subscriber, buffer }) {
    subscriber.closeBuffer(buffer);
}
