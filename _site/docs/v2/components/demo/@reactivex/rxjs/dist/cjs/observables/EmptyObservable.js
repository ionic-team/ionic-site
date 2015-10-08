'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var EmptyObservable = (function (_Observable) {
    _inherits(EmptyObservable, _Observable);

    function EmptyObservable(scheduler) {
        _classCallCheck(this, EmptyObservable);

        _Observable.call(this);
        this.scheduler = scheduler;
    }

    EmptyObservable.create = function create(scheduler) {
        return new EmptyObservable(scheduler);
    };

    EmptyObservable.dispatch = function dispatch(_ref) {
        var subscriber = _ref.subscriber;

        subscriber.complete();
    };

    EmptyObservable.prototype._subscribe = function _subscribe(subscriber) {
        var scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber }));
        } else {
            subscriber.complete();
        }
    };

    return EmptyObservable;
})(_Observable3['default']);

exports['default'] = EmptyObservable;
module.exports = exports['default'];