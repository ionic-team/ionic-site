import distinctUntilChanged from './distinctUntilChanged';
export default function distinctUntilKeyChanged(key, compare, thisArg) {
    return distinctUntilChanged.call(this, function (x, y) {
        if (compare) {
            return compare.call(thisArg, x[key], y[key]);
        }
        return x[key] === y[key];
    });
}
