import Subscriber from '../Subscriber';
export default function repeat(count) {
    return this.lift(new RepeatOperator(count, this));
}
class RepeatOperator {
    constructor(count, original) {
        this.count = count;
        this.original = original;
    }
    call(subscriber) {
        return new RepeatSubscriber(subscriber, this.count, this.original);
    }
}
class RepeatSubscriber extends Subscriber {
    constructor(destination, count, original) {
        super(destination);
        this.count = count;
        this.original = original;
        this.repeated = 0;
    }
    _complete() {
        if (this.count === (this.repeated += 1)) {
            this.destination.complete();
        }
        else {
            this.resubscribe();
        }
    }
    resubscribe() {
        this.original.subscribe(this);
    }
}
