'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var ScalarObservable = (function (_Observable) {
    _inherits(ScalarObservable, _Observable);

    function ScalarObservable(value, scheduler) {
        _classCallCheck(this, ScalarObservable);

        _Observable.call(this);
        this.value = value;
        this.scheduler = scheduler;
        this._isScalar = true;
    }

    ScalarObservable.create = function create(value, scheduler) {
        return new ScalarObservable(value, scheduler);
    };

    ScalarObservable.dispatch = function dispatch(state) {
        var done = state.done;
        var value = state.value;
        var subscriber = state.subscriber;

        if (done) {
            subscriber.complete();
            return;
        }
        subscriber.next(value);
        if (subscriber.isUnsubscribed) {
            return;
        }
        state.done = true;
        this.schedule(state);
    };

    ScalarObservable.prototype._subscribe = function _subscribe(subscriber) {
        var value = this.value;
        var scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(scheduler.schedule(ScalarObservable.dispatch, 0, {
                done: false, value: value, subscriber: subscriber
            }));
        } else {
            subscriber.next(value);
            if (!subscriber.isUnsubscribed) {
                subscriber.complete();
            }
        }
    };

    return ScalarObservable;
})(_Observable3['default']);

exports['default'] = ScalarObservable;
module.exports = exports['default'];