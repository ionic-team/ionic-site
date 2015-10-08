import ArrayObservable from '../observables/ArrayObservable';
import { MergeOperator } from './merge-support';
import immediate from '../schedulers/immediate';
export default function merge(...observables) {
    let concurrent = Number.POSITIVE_INFINITY;
    let scheduler = immediate;
    let last = observables[observables.length - 1];
    if (typeof last.schedule === 'function') {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (observables.length === 1) {
        return observables[0];
    }
    return new ArrayObservable(observables, scheduler).lift(new MergeOperator(concurrent));
}
