'use strict';

exports.__esModule = true;
exports['default'] = _do;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _utilNoop = require('../util/noop');

var _utilNoop2 = _interopRequireDefault(_utilNoop);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

function _do(next, error, complete) {
    return this.lift(new DoOperator(next || _utilNoop2['default'], error || _utilNoop2['default'], complete || _utilNoop2['default']));
}

var DoOperator = (function () {
    function DoOperator(next, error, complete) {
        _classCallCheck(this, DoOperator);

        this.next = next;
        this.error = error;
        this.complete = complete;
    }

    DoOperator.prototype.call = function call(subscriber) {
        return new DoSubscriber(subscriber, this.next, this.error, this.complete);
    };

    return DoOperator;
})();

var DoSubscriber = (function (_Subscriber) {
    _inherits(DoSubscriber, _Subscriber);

    function DoSubscriber(destination, next, error, complete) {
        _classCallCheck(this, DoSubscriber);

        _Subscriber.call(this, destination);
        this.__next = next;
        this.__error = error;
        this.__complete = complete;
    }

    DoSubscriber.prototype._next = function _next(x) {
        var result = _utilTryCatch2['default'](this.__next)(x);
        if (result === _utilErrorObject.errorObject) {
            this.destination.error(_utilErrorObject.errorObject.e);
        } else {
            this.destination.next(x);
        }
    };

    DoSubscriber.prototype._error = function _error(e) {
        var result = _utilTryCatch2['default'](this.__error)(e);
        if (result === _utilErrorObject.errorObject) {
            this.destination.error(_utilErrorObject.errorObject.e);
        } else {
            this.destination.error(e);
        }
    };

    DoSubscriber.prototype._complete = function _complete() {
        var result = _utilTryCatch2['default'](this.__complete)();
        if (result === _utilErrorObject.errorObject) {
            this.destination.error(_utilErrorObject.errorObject.e);
        } else {
            this.destination.complete();
        }
    };

    return DoSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];