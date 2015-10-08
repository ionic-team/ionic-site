import Subscriber from '../Subscriber';
export default function take(total) {
    return this.lift(new TakeOperator(total));
}
class TakeOperator {
    constructor(total) {
        this.total = total;
    }
    call(subscriber) {
        return new TakeSubscriber(subscriber, this.total);
    }
}
class TakeSubscriber extends Subscriber {
    constructor(destination, total) {
        super(destination);
        this.count = 0;
        this.total = total;
    }
    _next(x) {
        const total = this.total;
        if (++this.count <= total) {
            this.destination.next(x);
            if (this.count === total) {
                this.destination.complete();
            }
        }
    }
}
