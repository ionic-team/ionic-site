import ReplaySubject from '../subjects/ReplaySubject';
import multicast from './multicast';
export default function publishReplay(bufferSize = Number.POSITIVE_INFINITY, windowTime = Number.POSITIVE_INFINITY, scheduler) {
    return multicast.call(this, () => new ReplaySubject(bufferSize, windowTime, scheduler));
}
