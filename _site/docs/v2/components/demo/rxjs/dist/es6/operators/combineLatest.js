import ArrayObservable from '../observables/ArrayObservable';
import { CombineLatestOperator } from './combineLatest-support';
export default function combineLatest(...observables) {
    const project = observables[observables.length - 1];
    if (typeof project === "function") {
        observables.pop();
    }
    observables.unshift(this);
    return new ArrayObservable(observables).lift(new CombineLatestOperator(project));
}
