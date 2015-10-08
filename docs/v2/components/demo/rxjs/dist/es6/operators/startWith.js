import ScalarObservable from '../observables/ScalarObservable';
import concat from './concat-static';
export default function startWith(x) {
    return concat(new ScalarObservable(x), this);
}
