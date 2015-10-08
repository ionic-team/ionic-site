'use strict';

exports.__esModule = true;
exports['default'] = _finally;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _Subscription = require('../Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

var _utilBindCallback = require('../util/bindCallback');

var _utilBindCallback2 = _interopRequireDefault(_utilBindCallback);

function _finally(finallySelector, thisArg) {
    return this.lift(new FinallyOperator(thisArg ? _utilBindCallback2['default'](finallySelector, thisArg, 2) : finallySelector));
}

var FinallyOperator = (function () {
    function FinallyOperator(finallySelector) {
        _classCallCheck(this, FinallyOperator);

        this.finallySelector = finallySelector;
    }

    FinallyOperator.prototype.call = function call(subscriber) {
        return new FinallySubscriber(subscriber, this.finallySelector);
    };

    return FinallyOperator;
})();

var FinallySubscriber = (function (_Subscriber) {
    _inherits(FinallySubscriber, _Subscriber);

    function FinallySubscriber(destination, finallySelector) {
        _classCallCheck(this, FinallySubscriber);

        _Subscriber.call(this, destination);
        this.add(new _Subscription2['default'](finallySelector));
    }

    return FinallySubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];