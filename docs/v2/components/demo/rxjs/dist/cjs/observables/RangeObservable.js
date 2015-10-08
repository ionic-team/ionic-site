'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var RangeObservable = (function (_Observable) {
    _inherits(RangeObservable, _Observable);

    function RangeObservable(start, end, scheduler) {
        _classCallCheck(this, RangeObservable);

        _Observable.call(this);
        this.start = start;
        this.end = end;
        this.scheduler = scheduler;
    }

    RangeObservable.create = function create(start, end, scheduler) {
        if (start === undefined) start = 0;
        if (end === undefined) end = 0;

        return new RangeObservable(start, end, scheduler);
    };

    RangeObservable.dispatch = function dispatch(state) {
        var start = state.start;
        var index = state.index;
        var end = state.end;
        var subscriber = state.subscriber;

        if (index >= end) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.isUnsubscribed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    };

    RangeObservable.prototype._subscribe = function _subscribe(subscriber) {
        var index = 0;
        var start = this.start;
        var end = this.end;
        var scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(scheduler.schedule(RangeObservable.dispatch, 0, {
                index: index, end: end, start: start, subscriber: subscriber
            }));
        } else {
            do {
                if (index++ >= end) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(start++);
                if (subscriber.isUnsubscribed) {
                    break;
                }
            } while (true);
        }
    };

    return RangeObservable;
})(_Observable3['default']);

exports['default'] = RangeObservable;
module.exports = exports['default'];