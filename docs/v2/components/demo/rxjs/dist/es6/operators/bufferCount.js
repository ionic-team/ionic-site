import Subscriber from '../Subscriber';
export default function bufferCount(bufferSize, startBufferEvery = null) {
    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
}
class BufferCountOperator {
    constructor(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
    }
    call(subscriber) {
        return new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery);
    }
}
class BufferCountSubscriber extends Subscriber {
    constructor(destination, bufferSize, startBufferEvery) {
        super(destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [[]];
        this.count = 0;
    }
    _next(value) {
        const count = (this.count += 1);
        const destination = this.destination;
        const bufferSize = this.bufferSize;
        const startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
        const buffers = this.buffers;
        const len = buffers.length;
        let remove = -1;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (let i = 0; i < len; i++) {
            let buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                remove = i;
                this.destination.next(buffer);
            }
        }
        if (remove !== -1) {
            buffers.splice(remove, 1);
        }
    }
    _error(err) {
        this.destination.error(err);
    }
    _complete() {
        const destination = this.destination;
        const buffers = this.buffers;
        while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        destination.complete();
    }
}
