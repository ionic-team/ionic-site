'use strict';

exports.__esModule = true;
exports['default'] = materialize;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _Notification = require('../Notification');

var _Notification2 = _interopRequireDefault(_Notification);

function materialize() {
    return this.lift(new MaterializeOperator());
}

var MaterializeOperator = (function () {
    function MaterializeOperator() {
        _classCallCheck(this, MaterializeOperator);
    }

    MaterializeOperator.prototype.call = function call(subscriber) {
        return new MaterializeSubscriber(subscriber);
    };

    return MaterializeOperator;
})();

var MaterializeSubscriber = (function (_Subscriber) {
    _inherits(MaterializeSubscriber, _Subscriber);

    function MaterializeSubscriber(destination) {
        _classCallCheck(this, MaterializeSubscriber);

        _Subscriber.call(this, destination);
    }

    MaterializeSubscriber.prototype._next = function _next(value) {
        this.destination.next(_Notification2['default'].createNext(value));
    };

    MaterializeSubscriber.prototype._error = function _error(err) {
        var destination = this.destination;
        destination.next(_Notification2['default'].createError(err));
        destination.complete();
    };

    MaterializeSubscriber.prototype._complete = function _complete() {
        var destination = this.destination;
        destination.next(_Notification2['default'].createComplete());
        destination.complete();
    };

    return MaterializeSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];