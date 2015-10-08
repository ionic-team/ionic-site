'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var ErrorObservable = (function (_Observable) {
    _inherits(ErrorObservable, _Observable);

    function ErrorObservable(error, scheduler) {
        _classCallCheck(this, ErrorObservable);

        _Observable.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }

    ErrorObservable.create = function create(error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };

    ErrorObservable.dispatch = function dispatch(_ref) {
        var error = _ref.error;
        var subscriber = _ref.subscriber;

        subscriber.error(error);
    };

    ErrorObservable.prototype._subscribe = function _subscribe(subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        if (scheduler) {
            subscriber.add(scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            }));
        } else {
            subscriber.error(error);
        }
    };

    return ErrorObservable;
})(_Observable3['default']);

exports['default'] = ErrorObservable;
module.exports = exports['default'];