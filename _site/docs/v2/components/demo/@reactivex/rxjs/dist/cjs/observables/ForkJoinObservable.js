'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var _Subscriber2 = require('../Subscriber');

var _Subscriber3 = _interopRequireDefault(_Subscriber2);

var ForkJoinObservable = (function (_Observable) {
    _inherits(ForkJoinObservable, _Observable);

    function ForkJoinObservable(observables) {
        _classCallCheck(this, ForkJoinObservable);

        _Observable.call(this);
        this.observables = observables;
    }

    ForkJoinObservable.create = function create() {
        for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
            observables[_key] = arguments[_key];
        }

        return new ForkJoinObservable(observables);
    };

    ForkJoinObservable.prototype._subscribe = function _subscribe(subscriber) {
        var observables = this.observables;
        var len = observables.length;
        var context = { complete: 0, total: len, values: emptyArray(len) };
        for (var i = 0; i < len; i++) {
            observables[i].subscribe(new AllSubscriber(subscriber, this, i, context));
        }
    };

    return ForkJoinObservable;
})(_Observable3['default']);

exports['default'] = ForkJoinObservable;

var AllSubscriber = (function (_Subscriber) {
    _inherits(AllSubscriber, _Subscriber);

    function AllSubscriber(destination, parent, index, context) {
        _classCallCheck(this, AllSubscriber);

        _Subscriber.call(this, destination);
        this.parent = parent;
        this.index = index;
        this.context = context;
    }

    AllSubscriber.prototype._next = function _next(value) {
        this._value = value;
    };

    AllSubscriber.prototype._complete = function _complete() {
        var context = this.context;
        context.values[this.index] = this._value;
        if (context.values.every(hasValue)) {
            this.destination.next(context.values);
            this.destination.complete();
        }
    };

    return AllSubscriber;
})(_Subscriber3['default']);

function hasValue(x) {
    return x !== null;
}
function emptyArray(len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr.push(null);
    }
    return arr;
}
module.exports = exports['default'];