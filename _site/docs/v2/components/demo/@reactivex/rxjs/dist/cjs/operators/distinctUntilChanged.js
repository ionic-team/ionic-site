'use strict';

exports.__esModule = true;
exports['default'] = distinctUntilChanged;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

var _utilBindCallback = require('../util/bindCallback');

var _utilBindCallback2 = _interopRequireDefault(_utilBindCallback);

function distinctUntilChanged(compare, thisArg) {
    return this.lift(new DistinctUntilChangedOperator(thisArg ? _utilBindCallback2['default'](compare, thisArg, 2) : compare));
}

var DistinctUntilChangedOperator = (function () {
    function DistinctUntilChangedOperator(compare) {
        _classCallCheck(this, DistinctUntilChangedOperator);

        this.compare = compare;
    }

    DistinctUntilChangedOperator.prototype.call = function call(subscriber) {
        return new DistinctUntilChangedSubscriber(subscriber, this.compare);
    };

    return DistinctUntilChangedOperator;
})();

var DistinctUntilChangedSubscriber = (function (_Subscriber) {
    _inherits(DistinctUntilChangedSubscriber, _Subscriber);

    function DistinctUntilChangedSubscriber(destination, compare) {
        _classCallCheck(this, DistinctUntilChangedSubscriber);

        _Subscriber.call(this, destination);
        this.hasValue = false;
        if (typeof compare === "function") {
            this.compare = compare;
        }
    }

    DistinctUntilChangedSubscriber.prototype.compare = function compare(x, y) {
        return x === y;
    };

    DistinctUntilChangedSubscriber.prototype._next = function _next(x) {
        var result = false;
        if (this.hasValue) {
            result = _utilTryCatch2['default'](this.compare)(this.value, x);
            if (result === _utilErrorObject.errorObject) {
                this.destination.error(_utilErrorObject.errorObject.e);
                return;
            }
        } else {
            this.hasValue = true;
        }
        if (Boolean(result) === false) {
            this.value = x;
            this.destination.next(x);
        }
    };

    return DistinctUntilChangedSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];