var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Subject', '../schedulers/immediate'], function (require, exports, Subject_1, immediate_1) {
    var ReplaySubject = (function (_super) {
        __extends(ReplaySubject, _super);
        function ReplaySubject(bufferSize, _windowTime, scheduler) {
            if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
            if (_windowTime === void 0) { _windowTime = Number.POSITIVE_INFINITY; }
            _super.call(this);
            this.events = [];
            this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
            this._windowTime = _windowTime < 1 ? 1 : _windowTime;
            this.scheduler = scheduler;
        }
        ReplaySubject.prototype._next = function (value) {
            var now = this._getNow();
            this.events.push(new ReplayEvent(now, value));
            this._getEvents(now);
            _super.prototype._next.call(this, value);
        };
        ReplaySubject.prototype._subscribe = function (subscriber) {
            var events = this._getEvents(this._getNow());
            var index = -1;
            var len = events.length;
            while (!subscriber.isUnsubscribed && ++index < len) {
                subscriber.next(events[index].value);
            }
            return _super.prototype._subscribe.call(this, subscriber);
        };
        ReplaySubject.prototype._getNow = function () {
            return (this.scheduler || immediate_1.default).now();
        };
        ReplaySubject.prototype._getEvents = function (now) {
            var bufferSize = this.bufferSize;
            var _windowTime = this._windowTime;
            var events = this.events;
            var eventsCount = events.length;
            var spliceCount = 0;
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
        };
        return ReplaySubject;
    })(Subject_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ReplaySubject;
    var ReplayEvent = (function () {
        function ReplayEvent(time, value) {
            this.time = time;
            this.value = value;
        }
        return ReplayEvent;
    })();
});
//# sourceMappingURL=ReplaySubject.js.map