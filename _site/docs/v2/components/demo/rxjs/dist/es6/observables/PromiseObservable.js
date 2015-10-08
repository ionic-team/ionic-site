import Observable from '../Observable';
import Subscription from '../Subscription';
import immediate from '../schedulers/immediate';
export default class PromiseObservable extends Observable {
    constructor(promise, scheduler) {
        super();
        this.promise = promise;
        this.scheduler = scheduler;
        this._isScalar = false;
    }
    static create(promise, scheduler = immediate) {
        return new PromiseObservable(promise, scheduler);
    }
    _subscribe(subscriber) {
        const scheduler = this.scheduler;
        const promise = this.promise;
        if (scheduler === immediate) {
            if (this._isScalar) {
                subscriber.next(this.value);
                subscriber.complete();
            }
            else {
                promise.then(value => {
                    this._isScalar = true;
                    this.value = value;
                    subscriber.next(value);
                    subscriber.complete();
                }, err => subscriber.error(err));
            }
        }
        else {
            let subscription = new Subscription();
            if (this._isScalar) {
                const value = this.value;
                subscription.add(scheduler.schedule(dispatchNext, 0, { value, subscriber }));
            }
            else {
                promise.then(value => {
                    this._isScalar = true;
                    this.value = value;
                    subscription.add(scheduler.schedule(dispatchNext, 0, { value, subscriber }));
                }, err => subscription.add(scheduler.schedule(dispatchError, 0, { err, subscriber })));
            }
            return subscription;
        }
    }
}
function dispatchNext({ value, subscriber }) {
    subscriber.next(value);
    subscriber.complete();
}
function dispatchError({ err, subscriber }) {
    subscriber.error(err);
}
