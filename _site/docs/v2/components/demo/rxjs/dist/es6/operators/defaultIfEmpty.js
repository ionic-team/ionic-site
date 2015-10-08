import Subscriber from '../Subscriber';
export default function defaultIfEmpty(defaultValue = null) {
    return this.lift(new DefaultIfEmptyOperator(defaultValue));
}
class DefaultIfEmptyOperator {
    constructor(defaultValue) {
        this.defaultValue = defaultValue;
    }
    call(subscriber) {
        return new DefaultIfEmptySubscriber(subscriber, this.defaultValue);
    }
}
class DefaultIfEmptySubscriber extends Subscriber {
    constructor(destination, defaultValue) {
        super(destination);
        this.defaultValue = defaultValue;
        this.isEmpty = true;
    }
    _next(x) {
        this.isEmpty = false;
        this.destination.next(x);
    }
    _complete() {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    }
}
