'use strict';

exports.__esModule = true;
exports['default'] = _catch;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

function _catch(selector) {
    var catchOperator = new CatchOperator(selector);
    var caught = this.lift(catchOperator);
    catchOperator.caught = caught;
    return caught;
}

var CatchOperator = (function () {
    function CatchOperator(selector) {
        _classCallCheck(this, CatchOperator);

        this.selector = selector;
    }

    CatchOperator.prototype.call = function call(subscriber) {
        return new CatchSubscriber(subscriber, this.selector, this.caught);
    };

    return CatchOperator;
})();

var CatchSubscriber = (function (_Subscriber) {
    _inherits(CatchSubscriber, _Subscriber);

    function CatchSubscriber(destination, selector, caught) {
        _classCallCheck(this, CatchSubscriber);

        _Subscriber.call(this, destination);
        this.selector = selector;
        this.caught = caught;
    }

    CatchSubscriber.prototype._error = function _error(err) {
        var result = _utilTryCatch2['default'](this.selector)(err, this.caught);
        if (result === _utilErrorObject.errorObject) {
            this.destination.error(_utilErrorObject.errorObject.e);
        } else {
            this.add(result.subscribe(this.destination));
        }
    };

    return CatchSubscriber;
})(_Subscriber3['default']);

module.exports = exports['default'];