import Observable from '../Observable';
import nextTick from '../schedulers/nextTick';
export default class SubscribeOnObservable extends Observable {
    constructor(source, delay = 0, scheduler = nextTick) {
        super();
        this.source = source;
        this.delayTime = delay;
        this.scheduler = scheduler;
    }
    static create(source, delay = 0, scheduler = nextTick) {
        return new SubscribeOnObservable(source, delay, scheduler);
    }
    static dispatch({ source, subscriber }) {
        return source.subscribe(subscriber);
    }
    _subscribe(subscriber) {
        const delay = this.delayTime;
        const source = this.source;
        const scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source, subscriber
        }));
    }
}
