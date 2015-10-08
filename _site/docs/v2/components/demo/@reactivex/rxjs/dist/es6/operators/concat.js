import merge from './merge-static';
export default function concatProto(...observables) {
    observables.unshift(this);
    observables.push(1);
    return merge.apply(this, observables);
}
