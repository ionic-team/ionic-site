import ArrayObservable from '../observables/ArrayObservable';
import { ZipOperator } from './zip-support';
export default function zip(...observables) {
    const project = observables[observables.length - 1];
    if (typeof project === "function") {
        observables.pop();
    }
    return new ArrayObservable(observables).lift(new ZipOperator(project));
}
