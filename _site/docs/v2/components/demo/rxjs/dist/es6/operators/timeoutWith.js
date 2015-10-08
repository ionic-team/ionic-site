import Subscriber from '../Subscriber';
import immediate from '../schedulers/immediate';
import isDate from '../util/isDate';
export default function timeoutWith(due, withObservable, scheduler = immediate) {
    let waitFor = isDate(due) ? (+due - Date.now()) : due;
    return this.lift(new TimeoutWithOperator(waitFor, withObservable, scheduler));
}
class TimeoutWithOperator {
    constructor(waitFor, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    call(subscriber) {
        return new TimeoutWithSubscriber(subscriber, this.waitFor, this.withObservable, this.scheduler);
    }
}
class TimeoutWithSubscriber extends Subscriber {
    constructor(destination, waitFor, withObservable, scheduler) {
        super(destination);
        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
        let delay = waitFor;
        scheduler.schedule(dispatchTimeout, delay, { subscriber: this });
    }
    handleTimeout() {
        const withObservable = this.withObservable;
        this.add(withObservable.subscribe(this));
    }
}
function dispatchTimeout(state) {
    const subscriber = state.subscriber;
    subscriber.handleTimeout();
}
