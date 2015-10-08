'use strict';

exports.__esModule = true;
exports['default'] = expand;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _mergeSupport = require('./merge-support');

var _observablesEmptyObservable = require('../observables/EmptyObservable');

var _observablesEmptyObservable2 = _interopRequireDefault(_observablesEmptyObservable);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

function expand(project) {
    return this.lift(new ExpandOperator(project));
}

var ExpandOperator = (function () {
    function ExpandOperator(project) {
        _classCallCheck(this, ExpandOperator);

        this.project = project;
    }

    ExpandOperator.prototype.call = function call(subscriber) {
        return new ExpandSubscriber(subscriber, this.project);
    };

    return ExpandOperator;
})();

var ExpandSubscriber = (function (_MergeSubscriber) {
    _inherits(ExpandSubscriber, _MergeSubscriber);

    function ExpandSubscriber(destination, project) {
        _classCallCheck(this, ExpandSubscriber);

        _MergeSubscriber.call(this, destination, Number.POSITIVE_INFINITY);
        this.project = project;
    }

    ExpandSubscriber.prototype._project = function _project(value, index) {
        var observable = _utilTryCatch2['default'](this.project).call(this, value, index);
        if (observable === _utilErrorObject.errorObject) {
            this.error(_utilErrorObject.errorObject.e);
            return null;
        }
        return observable;
    };

    ExpandSubscriber.prototype._subscribeInner = function _subscribeInner(observable, value, index) {
        if (observable._isScalar) {
            this.destination.next(observable.value);
            this._innerComplete();
            this._next(observable.value);
        } else if (observable instanceof _observablesEmptyObservable2['default']) {
            this._innerComplete();
        } else {
            return observable._subscribe(new ExpandInnerSubscriber(this.destination, this));
        }
    };

    return ExpandSubscriber;
})(_mergeSupport.MergeSubscriber);

var ExpandInnerSubscriber = (function (_MergeInnerSubscriber) {
    _inherits(ExpandInnerSubscriber, _MergeInnerSubscriber);

    function ExpandInnerSubscriber(destination, parent) {
        _classCallCheck(this, ExpandInnerSubscriber);

        _MergeInnerSubscriber.call(this, destination, parent);
    }

    ExpandInnerSubscriber.prototype._next = function _next(value) {
        this.destination.next(value);
        this.parent.next(value);
    };

    return ExpandInnerSubscriber;
})(_mergeSupport.MergeInnerSubscriber);

module.exports = exports['default'];