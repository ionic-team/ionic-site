import Subscriber from '../Subscriber';
export class MergeOperator {
    constructor(concurrent = Number.POSITIVE_INFINITY) {
        this.concurrent = concurrent;
    }
    call(subscriber) {
        return new MergeSubscriber(subscriber, this.concurrent);
    }
}
export class MergeSubscriber extends Subscriber {
    constructor(destination, concurrent) {
        super(destination);
        this.count = 0;
        this.active = 0;
        this.stopped = false;
        this.buffer = [];
        this.concurrent = concurrent;
    }
    _next(value) {
        const active = this.active;
        if (active < this.concurrent) {
            const index = this.count;
            const observable = this._project(value, index);
            if (observable) {
                this.count = index + 1;
                this.active = active + 1;
                this.add(this._subscribeInner(observable, value, index));
            }
        }
        else {
            this._buffer(value);
        }
    }
    complete() {
        this.stopped = true;
        if (this.active === 0 && this.buffer.length === 0) {
            super.complete();
        }
    }
    _unsubscribe() {
        this.buffer = void 0;
    }
    _project(value, index) {
        return value;
    }
    _buffer(value) {
        this.buffer.push(value);
    }
    _subscribeInner(observable, value, index) {
        const destination = this.destination;
        if (observable._isScalar) {
            destination.next(observable.value);
            this._innerComplete();
        }
        else {
            const subscriber = new MergeInnerSubscriber(destination, this);
            observable._subscribe(subscriber);
            return subscriber;
        }
    }
    _innerComplete() {
        const buffer = this.buffer;
        const active = this.active -= 1;
        const stopped = this.stopped;
        const pending = buffer.length;
        if (stopped && active === 0 && pending === 0) {
            super.complete();
        }
        else if (active < this.concurrent && pending > 0) {
            this._next(buffer.shift());
        }
    }
}
export class MergeInnerSubscriber extends Subscriber {
    constructor(destination, parent) {
        super(destination);
        this.parent = parent;
    }
    _complete() {
        this.parent._innerComplete();
    }
}
