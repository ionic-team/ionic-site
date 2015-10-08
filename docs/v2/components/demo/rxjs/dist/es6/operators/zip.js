import zip from './zip-static';
export default function zipProto(...observables) {
    observables.unshift(this);
    return zip.apply(this, observables);
}
