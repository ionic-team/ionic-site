'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var _ScalarObservable = require('./ScalarObservable');

var _ScalarObservable2 = _interopRequireDefault(_ScalarObservable);

var _EmptyObservable = require('./EmptyObservable');

var _EmptyObservable2 = _interopRequireDefault(_EmptyObservable);

var ArrayObservable = (function (_Observable) {
    _inherits(ArrayObservable, _Observable);

    function ArrayObservable(array, scheduler) {
        _classCallCheck(this, ArrayObservable);

        _Observable.call(this);
        this.array = array;
        this.scheduler = scheduler;
    }

    ArrayObservable.create = function create(array, scheduler) {
        return new ArrayObservable(array, scheduler);
    };

    ArrayObservable.of = function of() {
        for (var _len = arguments.length, array = Array(_len), _key = 0; _key < _len; _key++) {
            array[_key] = arguments[_key];
        }

        var scheduler = array[array.length - 1];
        if (scheduler && typeof scheduler.schedule === "function") {
            array.pop();
        } else {
            scheduler = void 0;
        }
        var len = array.length;
        if (len > 1) {
            return new ArrayObservable(array, scheduler);
        } else if (len === 1) {
            return new _ScalarObservable2['default'](array[0], scheduler);
        } else {
            return new _EmptyObservable2['default'](scheduler);
        }
    };

    ArrayObservable.dispatch = function dispatch(state) {
        var array = state.array;
        var index = state.index;
        var count = state.count;
        var subscriber = state.subscriber;

        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.isUnsubscribed) {
            return;
        }
        state.index = index + 1;
        this.schedule(state);
    };

    ArrayObservable.prototype._subscribe = function _subscribe(subscriber) {
        var index = 0;
        var array = this.array;
        var count = array.length;
        var scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(scheduler.schedule(ArrayObservable.dispatch, 0, {
                array: array, index: index, count: count, subscriber: subscriber
            }));
        } else {
            do {
                if (index >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(array[index++]);
                if (subscriber.isUnsubscribed) {
                    break;
                }
            } while (true);
        }
    };

    return ArrayObservable;
})(_Observable3['default']);

exports['default'] = ArrayObservable;
module.exports = exports['default'];