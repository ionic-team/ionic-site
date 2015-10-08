import mergeStatic from './merge-static';
export default function merge(...observables) {
    observables.unshift(this);
    return mergeStatic.apply(this, observables);
}
