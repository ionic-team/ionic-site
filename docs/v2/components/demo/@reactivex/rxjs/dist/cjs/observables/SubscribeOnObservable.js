'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var _schedulersNextTick = require('../schedulers/nextTick');

var _schedulersNextTick2 = _interopRequireDefault(_schedulersNextTick);

var SubscribeOnObservable = (function (_Observable) {
    _inherits(SubscribeOnObservable, _Observable);

    function SubscribeOnObservable(source) {
        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        var scheduler = arguments.length <= 2 || arguments[2] === undefined ? _schedulersNextTick2['default'] : arguments[2];

        _classCallCheck(this, SubscribeOnObservable);

        _Observable.call(this);
        this.source = source;
        this.delayTime = delay;
        this.scheduler = scheduler;
    }

    SubscribeOnObservable.create = function create(source) {
        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        var scheduler = arguments.length <= 2 || arguments[2] === undefined ? _schedulersNextTick2['default'] : arguments[2];

        return new SubscribeOnObservable(source, delay, scheduler);
    };

    SubscribeOnObservable.dispatch = function dispatch(_ref) {
        var source = _ref.source;
        var subscriber = _ref.subscriber;

        return source.subscribe(subscriber);
    };

    SubscribeOnObservable.prototype._subscribe = function _subscribe(subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        }));
    };

    return SubscribeOnObservable;
})(_Observable3['default']);

exports['default'] = SubscribeOnObservable;
module.exports = exports['default'];