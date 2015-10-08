import Subscription from '../Subscription';
import { FlatMapOperator, FlatMapSubscriber } from './flatMap-support';
export default function switchLatest(project, projectResult) {
    return this.lift(new SwitchLatestOperator(project, projectResult));
}
class SwitchLatestOperator extends FlatMapOperator {
    constructor(project, projectResult) {
        super(project, projectResult, 1);
    }
    call(subscriber) {
        return new SwitchLatestSubscriber(subscriber, this.project, this.projectResult);
    }
}
class SwitchLatestSubscriber extends FlatMapSubscriber {
    constructor(destination, project, projectResult) {
        super(destination, 1, project, projectResult);
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
        this.innerSubscription = new Subscription();
        this.innerSubscription.add(super._subscribeInner(observable, value, index));
        return this.innerSubscription;
    }
}
