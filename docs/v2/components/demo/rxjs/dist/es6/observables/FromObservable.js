import PromiseObservable from './PromiseObservable';
import IteratorObservable from './IteratorObservable';
import ArrayObservable from './ArrayObservable';
import $$observable from '../util/Symbol_observable';
import $$iterator from '../util/Symbol_iterator';
import Observable from '../Observable';
import { ObserveOnSubscriber } from '../operators/observeOn-support';
import immediate from '../schedulers/immediate';
const isArray = Array.isArray;
export default class FromObservable extends Observable {
    constructor(ish, scheduler) {
        super(null);
        this.ish = ish;
        this.scheduler = scheduler;
    }
    static create(ish, scheduler = immediate) {
        if (ish) {
            if (isArray(ish)) {
                return new ArrayObservable(ish, scheduler);
            }
            else if (typeof ish.then === 'function') {
                return new PromiseObservable(ish, scheduler);
            }
            else if (typeof ish[$$observable] === 'function') {
                if (ish instanceof Observable) {
                    return ish;
                }
                return new FromObservable(ish, scheduler);
            }
            else if (typeof ish[$$iterator] === 'function') {
                return new IteratorObservable(ish, null, null, scheduler);
            }
        }
        throw new TypeError((typeof ish) + ' is not observable');
    }
    _subscribe(subscriber) {
        const ish = this.ish;
        const scheduler = this.scheduler;
        if (scheduler === immediate) {
            return this.ish[$$observable]().subscribe(subscriber);
        }
        else {
            return this.ish[$$observable]().subscribe(new ObserveOnSubscriber(subscriber, scheduler, 0));
        }
    }
}
