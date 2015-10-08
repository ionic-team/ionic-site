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

var DeferObservable = (function (_Observable) {
    _inherits(DeferObservable, _Observable);

    function DeferObservable(observableFactory) {
        _classCallCheck(this, DeferObservable);

        _Observable.call(this);
        this.observableFactory = observableFactory;
    }

    DeferObservable.create = function create(observableFactory) {
        return new DeferObservable(observableFactory);
    };

    DeferObservable.prototype._subscribe = function _subscribe(subscriber) {
        var result = _utilTryCatch2['default'](this.observableFactory)();
        if (result === _utilErrorObject.errorObject) {
            subscriber.error(_utilErrorObject.errorObject.e);
        } else {
            result.subscribe(subscriber);
        }
    };

    return DeferObservable;
})(_Observable3['default']);

exports['default'] = DeferObservable;
module.exports = exports['default'];