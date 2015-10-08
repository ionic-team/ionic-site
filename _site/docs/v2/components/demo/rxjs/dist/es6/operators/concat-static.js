import merge from './merge-static';
import immediate from '../schedulers/immediate';
export default function concat(...observables) {
    let scheduler = immediate;
    const len = observables.length;
    if (typeof observables[observables.length - 1].schedule === 'function') {
        scheduler = observables.pop();
        observables.push(1, scheduler);
    }
    return merge.apply(this, observables);
}
