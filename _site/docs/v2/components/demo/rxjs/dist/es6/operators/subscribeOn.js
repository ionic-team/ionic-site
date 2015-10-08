import SubscribeOnObservable from '../observables/SubscribeOnObservable';
export default function subscribeOn(scheduler, delay = 0) {
    return new SubscribeOnObservable(this, delay, scheduler);
}
