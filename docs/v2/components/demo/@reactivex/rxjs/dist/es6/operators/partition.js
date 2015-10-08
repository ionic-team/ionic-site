import not from '../util/not';
import filter from './filter';
export default function partition(predicate, thisArg) {
    return [
        filter.call(this, predicate),
        filter.call(this, not(predicate, thisArg))
    ];
}
