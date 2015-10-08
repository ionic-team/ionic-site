'use strict';

exports.__esModule = true;
exports['default'] = map;

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
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the returned observable
 *
 * @param {Function} project the function to create projection
 * @param {any} [thisArg] an optional argument to define what `this` is in the project function
 * @returns {Observable} a observable of projected values
 */

function map(project, thisArg) {
    return this.lift(new MapOperator(project, thisArg));
}

var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        _classCallCheck(this, MapOperator);

        this.project = _utilBindCallback2['default'](project, thisArg, 2);
    }

    MapOperator.prototype.call = function call(subscriber) {
        return new MapSubscriber(subscriber, this.project);
    };

    return MapOperator;
})();

var MapSubscriber = (function (_Subscriber) {
    _inherits(MapSubscriber, _Subscriber);

    function MapSubscriber(destination, project) {
        _classCallCheck(this, MapSubscriber);

        _Subscriber.call(this, destination);
        this.count = 0;
        this.project = project;
    }

    MapSubscriber.prototype._next = function _next(x) {
        var result = _utilTryCatch2['default'](this.project)(x, this.count++);
        if (result === _utilErrorObject.errorObject) {
            this.error(_utilErrorObject.errorObject.e);
        } else {
            this.destination.next(result);
        }
    };

    return MapSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];