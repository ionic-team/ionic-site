'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Subject2 = require('../Subject');

var _Subject3 = _interopRequireDefault(_Subject2);

var BehaviorSubject = (function (_Subject) {
    _inherits(BehaviorSubject, _Subject);

    function BehaviorSubject(value) {
        _classCallCheck(this, BehaviorSubject);

        _Subject.call(this);
        this.value = value;
    }

    BehaviorSubject.prototype._subscribe = function _subscribe(subscriber) {
        var subscription = _Subject.prototype._subscribe.call(this, subscriber);
        if (!subscription) {
            return;
        } else if (!subscription.isUnsubscribed) {
            subscriber.next(this.value);
        }
        return subscription;
    };

    BehaviorSubject.prototype._next = function _next(value) {
        _Subject.prototype._next.call(this, this.value = value);
    };

    return BehaviorSubject;
})(_Subject3['default']);

exports['default'] = BehaviorSubject;
module.exports = exports['default'];