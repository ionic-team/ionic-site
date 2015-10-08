import Observable from '../Observable';
import ScalarObservable from './ScalarObservable';
import EmptyObservable from './EmptyObservable';
export default class ArrayObservable extends Observable {
    constructor(array, scheduler) {
        super();
        this.array = array;
        this.scheduler = scheduler;
    }
    static create(array, scheduler) {
        return new ArrayObservable(array, scheduler);
    }
    static of(...array) {
        let scheduler = array[array.length - 1];
        if (scheduler && typeof scheduler.schedule === "function") {
            array.pop();
        }
        else {
            scheduler = void 0;
        }
        const len = array.length;
        if (len > 1) {
            return new ArrayObservable(array, scheduler);
        }
        else if (len === 1) {
            return new ScalarObservable(array[0], scheduler);
        }
        else {
            return new EmptyObservable(scheduler);
        }
    }
    static dispatch(state) {
        const { array, index, count, subscriber } = state;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.isUnsubscribed) {
            return;
        }
        state.index = index + 1;
        this.schedule(state);
    }
    _subscribe(subscriber) {
        let index = 0;
        const array = this.array;
        const count = array.length;
        const scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(scheduler.schedule(ArrayObservable.dispatch, 0, {
                array, index, count, subscriber
            }));
        }
        else {
            do {
                if (index >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(array[index++]);
                if (subscriber.isUnsubscribed) {
                    break;
                }
            } while (true);
        }
    }
}
