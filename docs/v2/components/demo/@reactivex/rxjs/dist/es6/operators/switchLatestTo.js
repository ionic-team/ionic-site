import { FlatMapToOperator, FlatMapToSubscriber } from './flatMapTo-support';
export default function switchLatestTo(observable, projectResult) {
    return this.lift(new SwitchLatestToOperator(observable, projectResult));
}
class SwitchLatestToOperator extends FlatMapToOperator {
    constructor(observable, projectResult) {
        super(observable, projectResult, 1);
    }
    call(subscriber) {
        return new SwitchLatestToSubscriber(subscriber, this.observable, this.projectResult);
    }
}
class SwitchLatestToSubscriber extends FlatMapToSubscriber {
    constructor(destination, observable, projectResult) {
        super(destination, 1, observable, projectResult);
    }
    _buffer(value) {
        const active = this.active;
        if (active > 0) {
            this.active = active - 1;
            const inner = this.innerSubscription;
            if (inner) {
                inner.unsubscribe();
            }
        }
        this._next(value);
    }
    _subscribeInner(observable, value, index) {
        return (this.innerSubscription = super._subscribeInner(observable, value, index));
    }
}
