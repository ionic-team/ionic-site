import Observable from '../Observable';
export default class ScalarObservable extends Observable {
    constructor(value, scheduler) {
        super();
        this.value = value;
        this.scheduler = scheduler;
        this._isScalar = true;
    }
    static create(value, scheduler) {
        return new ScalarObservable(value, scheduler);
    }
    static dispatch(state) {
        const { done, value, subscriber } = state;
        if (done) {
            subscriber.complete();
            return;
        }
        subscriber.next(value);
        if (subscriber.isUnsubscribed) {
            return;
        }
        state.done = true;
        this.schedule(state);
    }
    _subscribe(subscriber) {
        const value = this.value;
        const scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(scheduler.schedule(ScalarObservable.dispatch, 0, {
                done: false, value, subscriber
            }));
        }
        else {
            subscriber.next(value);
            if (!subscriber.isUnsubscribed) {
                subscriber.complete();
            }
        }
    }
}
