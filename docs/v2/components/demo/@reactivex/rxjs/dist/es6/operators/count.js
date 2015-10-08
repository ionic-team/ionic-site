import Subscriber from '../Subscriber';
export default function count() {
    return this.lift(new CountOperator());
}
class CountOperator {
    call(subscriber) {
        return new CountSubscriber(subscriber);
    }
}
class CountSubscriber extends Subscriber {
    constructor(destination) {
        super(destination);
        this.count = 0;
    }
    _next(x) {
        this.count += 1;
    }
    _complete() {
        this.destination.next(this.count);
        this.destination.complete();
    }
}
