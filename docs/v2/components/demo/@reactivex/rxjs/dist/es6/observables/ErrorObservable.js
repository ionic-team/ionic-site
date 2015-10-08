import Observable from '../Observable';
export default class ErrorObservable extends Observable {
    constructor(error, scheduler) {
        super();
        this.error = error;
        this.scheduler = scheduler;
    }
    static create(error, scheduler) {
        return new ErrorObservable(error, scheduler);
    }
    static dispatch({ error, subscriber }) {
        subscriber.error(error);
    }
    _subscribe(subscriber) {
        const error = this.error;
        const scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(scheduler.schedule(ErrorObservable.dispatch, 0, {
                error, subscriber
            }));
        }
        else {
            subscriber.error(error);
        }
    }
}
