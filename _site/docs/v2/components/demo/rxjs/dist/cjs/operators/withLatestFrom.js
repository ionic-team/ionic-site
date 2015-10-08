'use strict';

exports.__esModule = true;
exports['default'] = withLatestFrom;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber3 = require('../Subscriber');

var _Subscriber4 = _interopRequireDefault(_Subscriber3);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

function withLatestFrom() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var project = args.pop();
    var observables = args;
    return this.lift(new WithLatestFromOperator(observables, project));
}

var WithLatestFromOperator = (function () {
    function WithLatestFromOperator(observables, project) {
        _classCallCheck(this, WithLatestFromOperator);

        this.observables = observables;
        this.project = project;
    }

    WithLatestFromOperator.prototype.call = function call(subscriber) {
        return new WithLatestFromSubscriber(subscriber, this.observables, this.project);
    };

    return WithLatestFromOperator;
})();

var WithLatestFromSubscriber = (function (_Subscriber) {
    _inherits(WithLatestFromSubscriber, _Subscriber);

    function WithLatestFromSubscriber(destination, observables, project) {
        _classCallCheck(this, WithLatestFromSubscriber);

        _Subscriber.call(this, destination);
        this.observables = observables;
        this.project = project;
        var len = observables.length;
        this.values = new Array(len);
        this.toSet = len;
        for (var i = 0; i < len; i++) {
            this.add(observables[i]._subscribe(new WithLatestInnerSubscriber(this, i)));
        }
    }

    WithLatestFromSubscriber.prototype.notifyValue = function notifyValue(index, value) {
        this.values[index] = value;
        this.toSet--;
    };

    WithLatestFromSubscriber.prototype._next = function _next(value) {
        if (this.toSet === 0) {
            var values = this.values;
            var result = _utilTryCatch2['default'](this.project)([value].concat(values));
            if (result === _utilErrorObject.errorObject) {
                this.destination.error(result.e);
            } else {
                this.destination.next(result);
            }
        }
    };

    return WithLatestFromSubscriber;
})(_Subscriber4['default']);

var WithLatestInnerSubscriber = (function (_Subscriber2) {
    _inherits(WithLatestInnerSubscriber, _Subscriber2);

    function WithLatestInnerSubscriber(parent, valueIndex) {
        _classCallCheck(this, WithLatestInnerSubscriber);

        _Subscriber2.call(this, null);
        this.parent = parent;
        this.valueIndex = valueIndex;
    }

    WithLatestInnerSubscriber.prototype._next = function _next(value) {
        this.parent.notifyValue(this.valueIndex, value);
    };

    WithLatestInnerSubscriber.prototype._error = function _error(err) {
        this.parent.error(err);
    };

    WithLatestInnerSubscriber.prototype._complete = function _complete() {
        // noop
    };

    return WithLatestInnerSubscriber;
})(_Subscriber4['default']);

module.exports = exports['default'];