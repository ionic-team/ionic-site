'use strict';

exports.__esModule = true;
exports['default'] = filter;

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

/**
 * Similar to the well-known `Array.prototype.filter` method, this operator filters values down to a set
 * allowed by a `select` function
 *
 * @param {Function} select a function that is used to select the resulting values
 *  if it returns `true`, the value is emitted, if `false` the value is not passed to the resulting observable
 * @param {any} [thisArg] an optional argument to determine the value of `this` in the `select` function
 * @returns {Observable} an observable of values allowed by the select function
 */

function filter(select, thisArg) {
    return this.lift(new FilterOperator(select, thisArg));
}

var FilterOperator = (function () {
    function FilterOperator(select, thisArg) {
        _classCallCheck(this, FilterOperator);

        this.select = _utilBindCallback2['default'](select, thisArg, 2);
    }

    FilterOperator.prototype.call = function call(subscriber) {
        return new FilterSubscriber(subscriber, this.select);
    };

    return FilterOperator;
})();

var FilterSubscriber = (function (_Subscriber) {
    _inherits(FilterSubscriber, _Subscriber);

    function FilterSubscriber(destination, select) {
        _classCallCheck(this, FilterSubscriber);

        _Subscriber.call(this, destination);
        this.count = 0;
        this.select = select;
    }

    FilterSubscriber.prototype._next = function _next(x) {
        var result = _utilTryCatch2['default'](this.select)(x, this.count++);
        if (result === _utilErrorObject.errorObject) {
            this.destination.error(_utilErrorObject.errorObject.e);
        } else if (Boolean(result)) {
            this.destination.next(x);
        }
    };

    return FilterSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];