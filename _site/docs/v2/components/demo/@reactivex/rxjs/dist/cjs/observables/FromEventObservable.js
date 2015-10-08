'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

var _Subscription = require('../Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

var FromEventObservable = (function (_Observable) {
    _inherits(FromEventObservable, _Observable);

    function FromEventObservable(sourceObj, eventName, selector) {
        _classCallCheck(this, FromEventObservable);

        _Observable.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
    }

    FromEventObservable.create = function create(sourceObj, eventName, selector) {
        return new FromEventObservable(sourceObj, eventName, selector);
    };

    FromEventObservable.setupSubscription = function setupSubscription(sourceObj, eventName, handler, subscriber) {
        var unsubscribe = undefined;
        var tag = sourceObj.toString();
        if (tag === '[object NodeList]' || tag === '[object HTMLCollection]') {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
            }
        } else if (typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function') {
            sourceObj.addEventListener(eventName, handler);
            unsubscribe = function () {
                return sourceObj.removeEventListener(eventName, handler);
            };
        } else if (typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function') {
            sourceObj.on(eventName, handler);
            unsubscribe = function () {
                return sourceObj.off(eventName, handler);
            };
        } else if (typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function') {
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () {
                return sourceObj.removeListener(eventName, handler);
            };
        }
        subscriber.add(new _Subscription2['default'](unsubscribe));
    };

    FromEventObservable.prototype._subscribe = function _subscribe(subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var selector = this.selector;
        var handler = selector ? function (e) {
            var result = _utilTryCatch2['default'](selector)(e);
            if (result === _utilErrorObject.errorObject) {
                subscriber.error(result.e);
            } else {
                subscriber.next(result);
            }
        } : function (e) {
            return subscriber.next(e);
        };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
    };

    return FromEventObservable;
})(_Observable3['default']);

exports['default'] = FromEventObservable;
module.exports = exports['default'];