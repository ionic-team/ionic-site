import Subscriber from '../Subscriber';
/**
 * buffers the incoming observable values until the passed `closingNotifier` emits a value, at which point
 * it emits the buffer on the returned observable and starts a new buffer internally, awaiting the
 * next time `closingNotifier` emits
 *
 * @param {Observable<any>} closingNotifier an observable, that signals the buffer to be emitted from the returned observable
 * @returns {Observable<T[]>} an observable of buffers, which are arrays of values
 */
export default function buffer(closingNotifier) {
    return this.lift(new BufferOperator(closingNotifier));
}
class BufferOperator {
    constructor(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    call(subscriber) {
        return new BufferSubscriber(subscriber, this.closingNotifier);
    }
}
class BufferSubscriber extends Subscriber {
    constructor(destination, closingNotifier) {
        super(destination);
        this.buffer = [];
        this.add(closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this)));
    }
    _next(value) {
        this.buffer.push(value);
    }
    _error(err) {
        this.destination.error(err);
    }
    _complete() {
        this.flushBuffer();
        this.destination.complete();
    }
    flushBuffer() {
        const buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    }
}
class BufferClosingNotifierSubscriber extends Subscriber {
    constructor(parent) {
        super(null);
        this.parent = parent;
    }
    _next(value) {
        this.parent.flushBuffer();
    }
    _error(err) {
        this.parent.error(err);
    }
    _complete() {
        // noop
    }
}
