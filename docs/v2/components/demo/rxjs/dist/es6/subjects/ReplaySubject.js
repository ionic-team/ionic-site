import Subject from '../Subject';
import immediate from '../schedulers/immediate';
export default class ReplaySubject extends Subject {
    constructor(bufferSize = Number.POSITIVE_INFINITY, _windowTime = Number.POSITIVE_INFINITY, scheduler) {
        super();
        this.events = [];
        this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = _windowTime < 1 ? 1 : _windowTime;
        this.scheduler = scheduler;
    }
    _next(value) {
        const now = this._getNow();
        this.events.push(new ReplayEvent(now, value));
        this._getEvents(now);
        super._next(value);
    }
    _subscribe(subscriber) {
        const events = this._getEvents(this._getNow());
        let index = -1;
        const len = events.length;
        while (!subscriber.isUnsubscribed && ++index < len) {
            subscriber.next(events[index].value);
        }
        return super._subscribe(subscriber);
    }
    _getNow() {
        return (this.scheduler || immediate).now();
    }
    _getEvents(now) {
        const bufferSize = this.bufferSize;
        const _windowTime = this._windowTime;
        const events = this.events;
        let eventsCount = events.length;
        let spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount += 1;
        }
        if (eventsCount > bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
        }
        if (spliceCount > 0) {
            events.splice(0, spliceCount);
        }
        return events;
    }
}
class ReplayEvent {
    constructor(time, value) {
        this.time = time;
        this.value = value;
    }
}
