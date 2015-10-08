import Subscriber from '../Subscriber';
import immediate from '../schedulers/immediate';
import isDate from '../util/isDate';
export default function timeout(due, errorToSend = null, scheduler = immediate) {
    let waitFor = isDate(due) ? (+due - Date.now()) : due;
    return this.lift(new TimeoutOperator(waitFor, errorToSend, scheduler));
}
class TimeoutOperator {
    constructor(waitFor, errorToSend, scheduler) {
        this.waitFor = waitFor;
        this.errorToSend = errorToSend;
        this.scheduler = scheduler;
    }
    call(subscriber) {
        return new TimeoutSubscriber(subscriber, this.waitFor, this.errorToSend, this.scheduler);
    }
}
class TimeoutSubscriber extends Subscriber {
    constructor(destination, waitFor, errorToSend, scheduler) {
        super(destination);
        this.waitFor = waitFor;
        this.errorToSend = errorToSend;
        this.scheduler = scheduler;
        let delay = waitFor;
        scheduler.schedule(dispatchTimeout, delay, { subscriber: this });
    }
    sendTimeoutError() {
        this.error(this.errorToSend || new Error('timeout'));
    }
}
function dispatchTimeout(state) {
    const subscriber = state.subscriber;
    subscriber.sendTimeoutError();
}
