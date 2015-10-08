import Subscriber from '../Subscriber';
export default function retry(count = 0) {
    return this.lift(new RetryOperator(count, this));
}
class RetryOperator {
    constructor(count, original) {
        this.count = count;
        this.original = original;
    }
    call(subscriber) {
        return new RetrySubscriber(subscriber, this.count, this.original);
    }
}
class RetrySubscriber extends Subscriber {
    constructor(destination, count, original) {
        super(destination);
        this.count = count;
        this.original = original;
        this.retries = 0;
    }
    _error(err) {
        const count = this.count;
        if (count && count === (this.retries += 1)) {
            this.destination.error(err);
        }
        else {
            this.resubscribe();
        }
    }
    resubscribe() {
        this.original.subscribe(this);
    }
}
