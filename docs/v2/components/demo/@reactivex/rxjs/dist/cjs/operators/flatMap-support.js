'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _mergeSupport = require('./merge-support');

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

var FlatMapOperator = (function () {
    function FlatMapOperator(project, projectResult) {
        var concurrent = arguments.length <= 2 || arguments[2] === undefined ? Number.POSITIVE_INFINITY : arguments[2];

        _classCallCheck(this, FlatMapOperator);

        this.project = project;
        this.projectResult = projectResult;
        this.concurrent = concurrent;
    }

    FlatMapOperator.prototype.call = function call(subscriber) {
        return new FlatMapSubscriber(subscriber, this.concurrent, this.project, this.projectResult);
    };

    return FlatMapOperator;
})();

exports.FlatMapOperator = FlatMapOperator;

var FlatMapSubscriber = (function (_MergeSubscriber) {
    _inherits(FlatMapSubscriber, _MergeSubscriber);

    function FlatMapSubscriber(destination, concurrent, project, projectResult) {
        _classCallCheck(this, FlatMapSubscriber);

        _MergeSubscriber.call(this, destination, concurrent);
        this.project = project;
        this.projectResult = projectResult;
    }

    FlatMapSubscriber.prototype._project = function _project(value, index) {
        var observable = _utilTryCatch2['default'](this.project).call(this, value, index);
        if (observable === _utilErrorObject.errorObject) {
            this.error(_utilErrorObject.errorObject.e);
            return null;
        }
        return observable;
    };

    FlatMapSubscriber.prototype._subscribeInner = function _subscribeInner(observable, value, index) {
        var projectResult = this.projectResult;
        if (projectResult) {
            return observable._subscribe(new FlatMapInnerSubscriber(this.destination, this, value, index, projectResult));
        } else if (observable._isScalar) {
            this.destination.next(observable.value);
            this._innerComplete();
        } else {
            return observable._subscribe(new _mergeSupport.MergeInnerSubscriber(this.destination, this));
        }
    };

    return FlatMapSubscriber;
})(_mergeSupport.MergeSubscriber);

exports.FlatMapSubscriber = FlatMapSubscriber;

var FlatMapInnerSubscriber = (function (_MergeInnerSubscriber) {
    _inherits(FlatMapInnerSubscriber, _MergeInnerSubscriber);

    function FlatMapInnerSubscriber(destination, parent, value, index, project) {
        _classCallCheck(this, FlatMapInnerSubscriber);

        _MergeInnerSubscriber.call(this, destination, parent);
        this.count = 0;
        this.value = value;
        this.index = index;
        this.project = project;
    }

    FlatMapInnerSubscriber.prototype._next = function _next(value) {
        var result = value;
        var index = this.count++;
        result = _utilTryCatch2['default'](this.project).call(this, this.value, value, this.index, index);
        if (result === _utilErrorObject.errorObject) {
            this.destination.error(_utilErrorObject.errorObject.e);
        } else {
            this.destination.next(result);
        }
    };

    return FlatMapInnerSubscriber;
})(_mergeSupport.MergeInnerSubscriber);

exports.FlatMapInnerSubscriber = FlatMapInnerSubscriber;