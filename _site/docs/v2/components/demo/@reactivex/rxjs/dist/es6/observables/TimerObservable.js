import isNumeric from '../util/isNumeric';
import Observable from '../Observable';
import nextTick from '../schedulers/nextTick';
export default class TimerObservable extends Observable {
    constructor(dueTime = 0, period, scheduler) {
        super();
        this.dueTime = dueTime;
        this.period = period;
        this.scheduler = scheduler;
        if (isNumeric(period)) {
            this._period = Number(period) < 1 && 1 || Number(period);
        }
        else if (period && typeof period.schedule === "function") {
            scheduler = period;
        }
        if (!scheduler || typeof scheduler.schedule !== "function") {
            scheduler = nextTick;
        }
        this.scheduler = scheduler;
    }
    static create(dueTime = 0, period, scheduler) {
        return new TimerObservable(dueTime, period, scheduler);
    }
    static dispatch(state) {
        const { index, period, subscriber } = state;
        const action = this;
        subscriber.next(index);
        if (typeof period === "undefined") {
            subscriber.complete();
            return;
        }
        else if (subscriber.isUnsubscribed) {
            return;
        }
        if (typeof action.delay === 'undefined') {
            action.add(action.scheduler.schedule(TimerObservable.dispatch, period, {
                index: index + 1, period, subscriber
            }));
        }
        else {
            state.index = index + 1;
            action.schedule(state, period);
        }
    }
    _subscribe(subscriber) {
        const index = 0;
        const period = this._period;
        const dueTime = this.dueTime;
        const scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(TimerObservable.dispatch, dueTime, { index, period, subscriber }));
    }
}
