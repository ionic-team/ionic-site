import Subscriber from '../Subscriber';
export default function takeUntil(observable) {
    return this.lift(new TakeUntilOperator(observable));
}
class TakeUntilOperator {
    constructor(observable) {
        this.observable = observable;
    }
    call(subscriber) {
        return new TakeUntilSubscriber(subscriber, this.observable);
    }
}
class TakeUntilSubscriber extends Subscriber {
    constructor(destination, observable) {
        super(destination);
        this.add(observable._subscribe(new TakeUntilInnerSubscriber(destination)));
    }
}
class TakeUntilInnerSubscriber extends Subscriber {
    constructor(destination) {
        super(destination);
    }
    _next() {
        this.destination.complete();
    }
    _error(e) {
        this.destination.error(e);
    }
    _complete() {
    }
}
