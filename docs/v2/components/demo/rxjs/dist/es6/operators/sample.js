import Subscriber from '../Subscriber';
export default function sample(notifier) {
    return this.lift(new SampleOperator(notifier));
}
class SampleOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber) {
        return new SampleSubscriber(subscriber, this.notifier);
    }
}
class SampleSubscriber extends Subscriber {
    constructor(destination, notifier) {
        super(destination);
        this.notifier = notifier;
        this.hasValue = false;
        this.add(notifier._subscribe(new SampleNoficationSubscriber(this)));
    }
    _next(value) {
        this.lastValue = value;
        this.hasValue = true;
    }
    notifyNext() {
        if (this.hasValue) {
            this.destination.next(this.lastValue);
        }
    }
}
class SampleNoficationSubscriber extends Subscriber {
    constructor(parent) {
        super(null);
        this.parent = parent;
    }
    _next() {
        this.parent.notifyNext();
    }
    _error(err) {
        this.parent.error(err);
    }
    _complete() {
        //noop
    }
}
