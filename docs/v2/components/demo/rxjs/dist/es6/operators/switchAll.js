import Subscription from '../Subscription';
import { MergeSubscriber } from './merge-support';
export default function switchAll() {
    return this.lift(new SwitchOperator());
}
class SwitchOperator {
    constructor() {
    }
    call(subscriber) {
        return new SwitchSubscriber(subscriber);
    }
}
class SwitchSubscriber extends MergeSubscriber {
    constructor(destination) {
        super(destination, 1);
    }
    _buffer(value) {
        const active = this.active;
        if (active > 0) {
            this.active = active - 1;
            const inner = this.innerSubscription;
            if (inner) {
                inner.unsubscribe();
                this.innerSubscription = null;
            }
        }
        this._next(value);
    }
    _subscribeInner(observable, value, index) {
        this.innerSubscription = new Subscription();
        this.innerSubscription.add(super._subscribeInner(observable, value, index));
        return this.innerSubscription;
    }
}
