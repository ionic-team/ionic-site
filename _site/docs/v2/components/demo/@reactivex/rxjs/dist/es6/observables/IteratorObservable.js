import Observable from '../Observable';
import { root } from '../util/root';
import $$iterator from '../util/Symbol_iterator';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export default class IteratorObservable extends Observable {
    constructor(iterator, project, thisArg, scheduler) {
        super();
        this.iterator = iterator;
        this.project = project;
        this.thisArg = thisArg;
        this.scheduler = scheduler;
    }
    static create(iterator, project, thisArg, scheduler) {
        if (iterator == null) {
            throw new Error('iterator cannot be null.');
        }
        if (project && typeof project !== "function") {
            throw new Error('When provided, `project` must be a function.');
        }
        return new IteratorObservable(iterator, project, thisArg, scheduler);
    }
    static dispatch(state) {
        const { index, hasError, thisArg, project, iterator, subscriber } = state;
        if (hasError) {
            subscriber.error(state.error);
            return;
        }
        let result = iterator.next();
        if (result.done) {
            subscriber.complete();
            return;
        }
        if (project) {
            result = tryCatch(project).call(thisArg, result.value, index);
            if (result === errorObject) {
                state.error = errorObject.e;
                state.hasError = true;
            }
            else {
                subscriber.next(result);
                state.index = index + 1;
            }
        }
        else {
            subscriber.next(result.value);
            state.index = index + 1;
        }
        if (subscriber.isUnsubscribed) {
            return;
        }
        this.schedule(state);
    }
    _subscribe(subscriber) {
        let index = 0;
        const project = this.project;
        const thisArg = this.thisArg;
        const iterator = getIterator(Object(this.iterator));
        const scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(scheduler.schedule(IteratorObservable.dispatch, 0, {
                index, thisArg, project, iterator, subscriber
            }));
        }
        else {
            do {
                let result = iterator.next();
                if (result.done) {
                    subscriber.complete();
                    break;
                }
                else if (project) {
                    result = tryCatch(project).call(thisArg, result.value, index++);
                    if (result === errorObject) {
                        subscriber.error(errorObject.e);
                        break;
                    }
                    subscriber.next(result);
                }
                else {
                    subscriber.next(result.value);
                }
                if (subscriber.isUnsubscribed) {
                    break;
                }
            } while (true);
        }
    }
}
const maxSafeInteger = Math.pow(2, 53) - 1;
class StringIterator {
    constructor(str, idx = 0, len = str.length) {
        this.str = str;
        this.idx = idx;
        this.len = len;
    }
    [$$iterator]() { return (this); }
    next() {
        return this.idx < this.len ? {
            done: false,
            value: this.str.charAt(this.idx++)
        } : {
            done: true,
            value: undefined
        };
    }
}
class ArrayIterator {
    constructor(arr, idx = 0, len = toLength(arr)) {
        this.arr = arr;
        this.idx = idx;
        this.len = len;
    }
    [$$iterator]() { return this; }
    next() {
        return this.idx < this.len ? {
            done: false,
            value: this.arr[this.idx++]
        } : {
            done: true,
            value: undefined
        };
    }
}
function getIterator(o) {
    const i = o[$$iterator];
    if (!i && typeof o === 'string') {
        return new StringIterator(o);
    }
    if (!i && o.length !== undefined) {
        return new ArrayIterator(o);
    }
    if (!i) {
        throw new TypeError('Object is not iterable');
    }
    return o[$$iterator]();
}
function toLength(o) {
    var len = +o.length;
    if (isNaN(len)) {
        return 0;
    }
    if (len === 0 || !numberIsFinite(len)) {
        return len;
    }
    len = sign(len) * Math.floor(Math.abs(len));
    if (len <= 0) {
        return 0;
    }
    if (len > maxSafeInteger) {
        return maxSafeInteger;
    }
    return len;
}
function numberIsFinite(value) {
    return typeof value === 'number' && root.isFinite(value);
}
function isNan(n) {
    return n !== n;
}
function sign(value) {
    var valueAsNumber = +value;
    if (valueAsNumber === 0) {
        return valueAsNumber;
    }
    if (isNaN(valueAsNumber)) {
        return valueAsNumber;
    }
    return valueAsNumber < 0 ? -1 : 1;
}
