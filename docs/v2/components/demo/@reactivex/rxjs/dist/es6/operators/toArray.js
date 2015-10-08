import Subscriber from '../Subscriber';
export default function toArray() {
    return this.lift(new ToArrayOperator());
}
class ToArrayOperator {
    call(subscriber) {
        return new ToArraySubscriber(subscriber);
    }
}
class ToArraySubscriber extends Subscriber {
    constructor(destination) {
        super(destination);
        this.array = [];
    }
    _next(x) {
        this.array.push(x);
    }
    _complete() {
        this.destination.next(this.array);
        this.destination.complete();
    }
}
