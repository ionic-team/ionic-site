'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _PromiseObservable = require('./PromiseObservable');

var _PromiseObservable2 = _interopRequireDefault(_PromiseObservable);

var _IteratorObservable = require('./IteratorObservable');

var _IteratorObservable2 = _interopRequireDefault(_IteratorObservable);

var _ArrayObservable = require('./ArrayObservable');

var _ArrayObservable2 = _interopRequireDefault(_ArrayObservable);

var _utilSymbol_observable = require('../util/Symbol_observable');

var _utilSymbol_observable2 = _interopRequireDefault(_utilSymbol_observable);

var _utilSymbol_iterator = require('../util/Symbol_iterator');

var _utilSymbol_iterator2 = _interopRequireDefault(_utilSymbol_iterator);

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var _operatorsObserveOnSupport = require('../operators/observeOn-support');

var _schedulersImmediate = require('../schedulers/immediate');

var _schedulersImmediate2 = _interopRequireDefault(_schedulersImmediate);

var isArray = Array.isArray;

var FromObservable = (function (_Observable) {
    _inherits(FromObservable, _Observable);

    function FromObservable(ish, scheduler) {
        _classCallCheck(this, FromObservable);

        _Observable.call(this, null);
        this.ish = ish;
        this.scheduler = scheduler;
    }

    FromObservable.create = function create(ish) {
        var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _schedulersImmediate2['default'] : arguments[1];

        if (ish) {
            if (isArray(ish)) {
                return new _ArrayObservable2['default'](ish, scheduler);
            } else if (typeof ish.then === 'function') {
                return new _PromiseObservable2['default'](ish, scheduler);
            } else if (typeof ish[_utilSymbol_observable2['default']] === 'function') {
                if (ish instanceof _Observable3['default']) {
                    return ish;
                }
                return new FromObservable(ish, scheduler);
            } else if (typeof ish[_utilSymbol_iterator2['default']] === 'function') {
                return new _IteratorObservable2['default'](ish, null, null, scheduler);
            }
        }
        throw new TypeError(typeof ish + ' is not observable');
    };

    FromObservable.prototype._subscribe = function _subscribe(subscriber) {
        var ish = this.ish;
        var scheduler = this.scheduler;
        if (scheduler === _schedulersImmediate2['default']) {
            return this.ish[_utilSymbol_observable2['default']]().subscribe(subscriber);
        } else {
            return this.ish[_utilSymbol_observable2['default']]().subscribe(new _operatorsObserveOnSupport.ObserveOnSubscriber(subscriber, scheduler, 0));
        }
    };

    return FromObservable;
})(_Observable3['default']);

exports['default'] = FromObservable;
module.exports = exports['default'];