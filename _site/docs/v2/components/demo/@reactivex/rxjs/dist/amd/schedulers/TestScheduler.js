var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../Observable', './VirtualTimeScheduler', '../Notification', '../Subject'], function (require, exports, Observable_1, VirtualTimeScheduler_1, Notification_1, Subject_1) {
    var TestScheduler = (function (_super) {
        __extends(TestScheduler, _super);
        function TestScheduler(assertDeepEqual) {
            _super.call(this);
            this.assertDeepEqual = assertDeepEqual;
            this.flushTests = [];
        }
        TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
            var _this = this;
            if (marbles.indexOf('^') !== -1) {
                throw new Error('cold observable cannot have subscription offset "^"');
            }
            var messages = TestScheduler.parseMarbles(marbles, values, error);
            return Observable_1.default.create(function (subscriber) {
                messages.forEach(function (_a) {
                    var notification = _a.notification, frame = _a.frame;
                    _this.schedule(function () {
                        notification.observe(subscriber);
                    }, frame);
                }, _this);
            });
        };
        TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
            var _this = this;
            var messages = TestScheduler.parseMarbles(marbles, values, error);
            var subject = new Subject_1.default();
            messages.forEach(function (_a) {
                var notification = _a.notification, frame = _a.frame;
                _this.schedule(function () {
                    notification.observe(subject);
                }, frame);
            }, this);
            return subject;
        };
        TestScheduler.prototype.expect = function (observable) {
            var _this = this;
            var actual = [];
            var flushTest = {
                observable: observable, actual: actual, marbles: null, ready: false
            };
            this.schedule(function () {
                observable.subscribe(function (value) {
                    actual.push({ frame: _this.frame, notification: Notification_1.default.createNext(value) });
                }, function (err) {
                    actual.push({ frame: _this.frame, notification: Notification_1.default.createError(err) });
                }, function () {
                    actual.push({ frame: _this.frame, notification: Notification_1.default.createComplete() });
                });
            }, 0);
            this.flushTests.push(flushTest);
            return {
                toBe: function (marbles, values, errorValue) {
                    flushTest.ready = true;
                    flushTest.marbles = marbles;
                    flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue);
                }
            };
        };
        TestScheduler.prototype.flush = function () {
            _super.prototype.flush.call(this);
            var flushTests = this.flushTests.filter(function (test) { return test.ready; });
            while (flushTests.length > 0) {
                var test = flushTests.shift();
                this.assertDeepEqual(test.actual, test.expected);
            }
        };
        TestScheduler.parseMarbles = function (marbles, values, errorValue) {
            var len = marbles.length;
            var results = [];
            var subIndex = marbles.indexOf('^');
            var frameOffset = subIndex === -1 ? 0 : (subIndex * -10);
            for (var i = 0; i < len; i++) {
                var frame = i * 10;
                var notification = void 0;
                var c = marbles[i];
                switch (c) {
                    case '-':
                        break;
                    case '|':
                        notification = Notification_1.default.createComplete();
                        break;
                    case '^':
                        break;
                    case '#':
                        notification = Notification_1.default.createError(errorValue || 'error');
                        break;
                    default:
                        notification = Notification_1.default.createNext(values[c]);
                        break;
                }
                frame += frameOffset;
                if (notification) {
                    results.push({ notification: notification, frame: frame });
                }
            }
            return results;
        };
        return TestScheduler;
    })(VirtualTimeScheduler_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TestScheduler;
});
//# sourceMappingURL=TestScheduler.js.map