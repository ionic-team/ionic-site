'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var _Subscription = require('../Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

var FromEventPatternObservable = (function (_Observable) {
    _inherits(FromEventPatternObservable, _Observable);

    function FromEventPatternObservable(addHandler, removeHandler, selector) {
        _classCallCheck(this, FromEventPatternObservable);

        _Observable.call(this);
        this.addHandler = addHandler;
        this.removeHandler = removeHandler;
        this.selector = selector;
    }

    FromEventPatternObservable.create = function create(addHandler, removeHandler, selector) {
        return new FromEventPatternObservable(addHandler, removeHandler, selector);
        ;
    };

    FromEventPatternObservable.prototype._subscribe = function _subscribe(subscriber) {
        var addHandler = this.addHandler;
        var removeHandler = this.removeHandler;
        var selector = this.selector;
        var handler = selector ? function (e) {
            var result = _utilTryCatch2['default'](selector).apply(null, arguments);
            if (result === _utilErrorObject.errorObject) {
                subscriber.error(result.e);
            } else {
                subscriber.next(result);
            }
        } : function (e) {
            subscriber.next(e);
        };
        var result = _utilTryCatch2['default'](addHandler)(handler);
        if (result === _utilErrorObject.errorObject) {
            subscriber.error(result.e);
        }
        subscriber.add(new _Subscription2['default'](function () {
            //TODO: determine whether or not to forward to error handler
            removeHandler(handler);
        }));
    };

    return FromEventPatternObservable;
})(_Observable3['default']);

exports['default'] = FromEventPatternObservable;
module.exports = exports['default'];