import BehaviorSubject from '../subjects/BehaviorSubject';
import multicast from './multicast';
export default function publishBehavior(value) {
    return multicast.call(this, () => new BehaviorSubject(value));
}
