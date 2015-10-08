import Subscriber from '../Subscriber';
import Notification from '../Notification';
export default function materialize() {
    return this.lift(new MaterializeOperator());
}
class MaterializeOperator {
    call(subscriber) {
        return new MaterializeSubscriber(subscriber);
    }
}
class MaterializeSubscriber extends Subscriber {
    constructor(destination) {
        super(destination);
    }
    _next(value) {
        this.destination.next(Notification.createNext(value));
    }
    _error(err) {
        const destination = this.destination;
        destination.next(Notification.createError(err));
        destination.complete();
    }
    _complete() {
        const destination = this.destination;
        destination.next(Notification.createComplete());
        destination.complete();
    }
}
