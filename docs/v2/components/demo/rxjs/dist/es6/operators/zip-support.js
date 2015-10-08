import Subscriber from '../Subscriber';
import tryCatch from '../util/tryCatch';
import { errorObject } from '../util/errorObject';
export class ZipOperator {
    constructor(project) {
        this.project = project;
    }
    call(subscriber) {
        return new ZipSubscriber(subscriber, this.project);
    }
}
export class ZipSubscriber extends Subscriber {
    constructor(destination, project, values = Object.create(null)) {
        super(destination);
        this.active = 0;
        this.observables = [];
        this.limit = Number.POSITIVE_INFINITY;
        this.project = (typeof project === "function") ? project : null;
        this.values = values;
    }
    _next(observable) {
        this.observables.push(observable);
    }
    _complete() {
        const values = this.values;
        const observables = this.observables;
        let index = -1;
        const len = observables.length;
        this.active = len;
        while (++index < len) {
            this.add(this._subscribeInner(observables[index], values, index, len));
        }
    }
    _subscribeInner(observable, values, index, total) {
        return observable._subscribe(new ZipInnerSubscriber(this.destination, this, values, index, total));
    }
    _innerComplete(innerSubscriber) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
        else {
            this.limit = innerSubscriber.events;
        }
    }
}
function arrayInitialize(length) {
    var arr = Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = null;
    }
    return arr;
}
export class ZipInnerSubscriber extends Subscriber {
    constructor(destination, parent, values, index, total) {
        super(destination);
        this.events = 0;
        this.parent = parent;
        this.values = values;
        this.index = index;
        this.total = total;
    }
    _next(x) {
        const parent = this.parent;
        const events = this.events;
        const total = this.total;
        const limit = parent.limit;
        if (events >= limit) {
            this.destination.complete();
            return;
        }
        const index = this.index;
        const values = this.values;
        const zipped = values[events] || (values[events] = arrayInitialize(total));
        zipped[index] = [x];
        if (zipped.every(hasValue)) {
            this._projectNext(zipped, parent.project);
            values[events] = undefined;
        }
        this.events = events + 1;
    }
    _projectNext(values, project) {
        if (project && typeof project === "function") {
            const result = tryCatch(project).apply(null, values.map(mapValue));
            if (result === errorObject) {
                this.destination.error(errorObject.e);
                return;
            }
            else {
                this.destination.next(result);
            }
        }
        else {
            this.destination.next(values.map(mapValue));
        }
    }
    _complete() {
        this.parent._innerComplete(this);
    }
}
export function mapValue(xs) { return xs[0]; }
export function hasValue(xs) { return xs && xs.length === 1; }
