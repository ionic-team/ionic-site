'use strict';

exports.__esModule = true;
exports.combineLatest = combineLatest;
exports.combineLatestProto = combineLatestProto;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _observablesArrayObservable = require('../observables/ArrayObservable');

var _observablesArrayObservable2 = _interopRequireDefault(_observablesArrayObservable);

var _zipSupport = require('./zip-support');

function combineLatest() {
    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
        observables[_key] = arguments[_key];
    }

    var project = observables[observables.length - 1];
    if (typeof project === "function") {
        observables.pop();
    }
    return new _observablesArrayObservable2['default'](observables).lift(new CombineLatestOperator(project));
}

function combineLatestProto() {
    for (var _len2 = arguments.length, observables = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        observables[_key2] = arguments[_key2];
    }

    var project = observables[observables.length - 1];
    if (typeof project === "function") {
        observables.pop();
    }
    observables.unshift(this);
    return new _observablesArrayObservable2['default'](observables).lift(new CombineLatestOperator(project));
}

var CombineLatestOperator = (function () {
    function CombineLatestOperator(project) {
        _classCallCheck(this, CombineLatestOperator);

        this.project = project;
    }

    CombineLatestOperator.prototype.call = function call(subscriber) {
        return new CombineLatestSubscriber(subscriber, this.project);
    };

    return CombineLatestOperator;
})();

exports.CombineLatestOperator = CombineLatestOperator;

var CombineLatestSubscriber = (function (_ZipSubscriber) {
    _inherits(CombineLatestSubscriber, _ZipSubscriber);

    function CombineLatestSubscriber(destination, project) {
        _classCallCheck(this, CombineLatestSubscriber);

        _ZipSubscriber.call(this, destination, project, []);
        this.limit = 0;
    }

    CombineLatestSubscriber.prototype._subscribeInner = function _subscribeInner(observable, values, index, total) {
        return observable._subscribe(new CombineLatestInnerSubscriber(this.destination, this, values, index, total));
    };

    CombineLatestSubscriber.prototype._innerComplete = function _innerComplete(innerSubscriber) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };

    return CombineLatestSubscriber;
})(_zipSupport.ZipSubscriber);

exports.CombineLatestSubscriber = CombineLatestSubscriber;

var CombineLatestInnerSubscriber = (function (_ZipInnerSubscriber) {
    _inherits(CombineLatestInnerSubscriber, _ZipInnerSubscriber);

    function CombineLatestInnerSubscriber(destination, parent, values, index, total) {
        _classCallCheck(this, CombineLatestInnerSubscriber);

        _ZipInnerSubscriber.call(this, destination, parent, values, index, total);
    }

    CombineLatestInnerSubscriber.prototype._next = function _next(x) {
        var index = this.index;
        var total = this.total;
        var parent = this.parent;
        var values = this.values;
        var valueBox = values[index];
        var limit = undefined;
        if (valueBox) {
            valueBox[0] = x;
            limit = parent.limit;
        } else {
            limit = parent.limit += 1;
            values[index] = [x];
        }
        if (limit >= total) {
            this._projectNext(values, parent.project);
        }
    };

    return CombineLatestInnerSubscriber;
})(_zipSupport.ZipInnerSubscriber);

exports.CombineLatestInnerSubscriber = CombineLatestInnerSubscriber;