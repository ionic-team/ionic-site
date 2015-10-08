import ArrayObservable from '../observables/ArrayObservable';
import { ZipSubscriber, ZipInnerSubscriber } from './zip-support';
export function combineLatest(...observables) {
    const project = observables[observables.length - 1];
    if (typeof project === "function") {
        observables.pop();
    }
    return new ArrayObservable(observables).lift(new CombineLatestOperator(project));
}
export function combineLatestProto(...observables) {
    const project = observables[observables.length - 1];
    if (typeof project === "function") {
        observables.pop();
    }
    observables.unshift(this);
    return new ArrayObservable(observables).lift(new CombineLatestOperator(project));
}
export class CombineLatestOperator {
    constructor(project) {
        this.project = project;
    }
    call(subscriber) {
        return new CombineLatestSubscriber(subscriber, this.project);
    }
}
export class CombineLatestSubscriber extends ZipSubscriber {
    constructor(destination, project) {
        super(destination, project, []);
        this.limit = 0;
    }
    _subscribeInner(observable, values, index, total) {
        return observable._subscribe(new CombineLatestInnerSubscriber(this.destination, this, values, index, total));
    }
    _innerComplete(innerSubscriber) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    }
}
export class CombineLatestInnerSubscriber extends ZipInnerSubscriber {
    constructor(destination, parent, values, index, total) {
        super(destination, parent, values, index, total);
    }
    _next(x) {
        const index = this.index;
        const total = this.total;
        const parent = this.parent;
        const values = this.values;
        const valueBox = values[index];
        let limit;
        if (valueBox) {
            valueBox[0] = x;
            limit = parent.limit;
        }
        else {
            limit = parent.limit += 1;
            values[index] = [x];
        }
        if (limit >= total) {
            this._projectNext(values, parent.project);
        }
    }
}
