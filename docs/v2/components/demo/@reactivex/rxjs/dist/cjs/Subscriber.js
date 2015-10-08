'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilNoop = require('./util/noop');

var _utilNoop2 = _interopRequireDefault(_utilNoop);

var _utilThrowError = require('./util/throwError');

var _utilThrowError2 = _interopRequireDefault(_utilThrowError);

var _utilTryOrOnError = require('./util/tryOrOnError');

var _utilTryOrOnError2 = _interopRequireDefault(_utilTryOrOnError);

var _Subscription2 = require('./Subscription');

var _Subscription3 = _interopRequireDefault(_Subscription2);

var Subscriber = (function (_Subscription) {
    _inherits(Subscriber, _Subscription);

    function Subscriber(destination) {
        _classCallCheck(this, Subscriber);

        _Subscription.call(this);
        this._isUnsubscribed = false;
        this.destination = destination;
        if (!destination) {
            return;
        }
        var subscription = destination._subscription;
        if (subscription) {
            this._subscription = subscription;
        } else if (destination instanceof Subscriber) {
            this._subscription = destination;
        }
    }

    Subscriber.create = function create(next, error, complete) {
        var subscriber = new Subscriber();
        subscriber._next = typeof next === "function" && _utilTryOrOnError2['default'](next) || _utilNoop2['default'];
        subscriber._error = typeof error === "function" && error || _utilThrowError2['default'];
        subscriber._complete = typeof complete === "function" && complete || _utilNoop2['default'];
        return subscriber;
    };

    Subscriber.prototype._next = function _next(value) {
        this.destination.next(value);
    };

    Subscriber.prototype._error = function _error(err) {
        this.destination.error(err);
    };

    Subscriber.prototype._complete = function _complete() {
        this.destination.complete();
    };

    Subscriber.prototype.add = function add(sub) {
        // route add to the shared Subscription if it exists
        var _subscription = this._subscription;
        if (_subscription) {
            _subscription.add(sub);
        } else {
            _Subscription.prototype.add.call(this, sub);
        }
    };

    Subscriber.prototype.remove = function remove(sub) {
        // route remove to the shared Subscription if it exists
        if (this._subscription) {
            this._subscription.remove(sub);
        } else {
            _Subscription.prototype.remove.call(this, sub);
        }
    };

    Subscriber.prototype.unsubscribe = function unsubscribe() {
        if (this._isUnsubscribed) {
            return;
        } else if (this._subscription) {
            this._isUnsubscribed = true;
        } else {
            _Subscription.prototype.unsubscribe.call(this);
        }
    };

    Subscriber.prototype.next = function next(value) {
        if (!this.isUnsubscribed) {
            this._next(value);
        }
    };

    Subscriber.prototype.error = function error(_error2) {
        if (!this.isUnsubscribed) {
            this._error(_error2);
            this.unsubscribe();
        }
    };

    Subscriber.prototype.complete = function complete() {
        if (!this.isUnsubscribed) {
            this._complete();
            this.unsubscribe();
        }
    };

    _createClass(Subscriber, [{
        key: 'isUnsubscribed',
        get: function get() {
            var subscription = this._subscription;
            if (subscription) {
                // route to the shared Subscription if it exists
                return this._isUnsubscribed || subscription.isUnsubscribed;
            } else {
                return this._isUnsubscribed;
            }
        },
        set: function set(value) {
            var subscription = this._subscription;
            if (subscription) {
                // route to the shared Subscription if it exists
                subscription.isUnsubscribed = Boolean(value);
            } else {
                this._isUnsubscribed = Boolean(value);
            }
        }
    }]);

    return Subscriber;
})(_Subscription3['default']);

exports['default'] = Subscriber;
module.exports = exports['default'];