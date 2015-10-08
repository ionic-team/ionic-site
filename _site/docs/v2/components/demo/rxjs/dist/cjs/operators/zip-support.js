'use strict';

exports.__esModule = true;
exports.mapValue = mapValue;
exports.hasValue = hasValue;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscriber3 = require('../Subscriber');

var _Subscriber4 = _interopRequireDefault(_Subscriber3);

var _utilTryCatch = require('../util/tryCatch');

var _utilTryCatch2 = _interopRequireDefault(_utilTryCatch);

var _utilErrorObject = require('../util/errorObject');

var ZipOperator = (function () {
    function ZipOperator(project) {
        _classCallCheck(this, ZipOperator);

        this.project = project;
    }

    ZipOperator.prototype.call = function call(subscriber) {
        return new ZipSubscriber(subscriber, this.project);
    };

    return ZipOperator;
})();

exports.ZipOperator = ZipOperator;

var ZipSubscriber = (function (_Subscriber) {
    _inherits(ZipSubscriber, _Subscriber);

    function ZipSubscriber(destination, project) {
        var values = arguments.length <= 2 || arguments[2] === undefined ? Object.create(null) : arguments[2];

        _classCallCheck(this, ZipSubscriber);

        _Subscriber.call(this, destination);
        this.active = 0;
        this.observables = [];
        this.limit = Number.POSITIVE_INFINITY;
        this.project = typeof project === "function" ? project : null;
        this.values = values;
    }

    ZipSubscriber.prototype._next = function _next(observable) {
        this.observables.push(observable);
    };

    ZipSubscriber.prototype._complete = function _complete() {
        var values = this.values;
        var observables = this.observables;
        var index = -1;
        var len = observables.length;
        this.active = len;
        while (++index < len) {
            this.add(this._subscribeInner(observables[index], values, index, len));
        }
    };

    ZipSubscriber.prototype._subscribeInner = function _subscribeInner(observable, values, index, total) {
        return observable._subscribe(new ZipInnerSubscriber(this.destination, this, values, index, total));
    };

    ZipSubscriber.prototype._innerComplete = function _innerComplete(innerSubscriber) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        } else {
            this.limit = innerSubscriber.events;
        }
    };

    return ZipSubscriber;
})(_Subscriber4['default']);

exports.ZipSubscriber = ZipSubscriber;

function arrayInitialize(length) {
    var arr = Array(length);
    for (var i = 0; i < length; i++) {
        arr[i] = null;
    }
    return arr;
}

var ZipInnerSubscriber = (function (_Subscriber2) {
    _inherits(ZipInnerSubscriber, _Subscriber2);

    function ZipInnerSubscriber(destination, parent, values, index, total) {
        _classCallCheck(this, ZipInnerSubscriber);

        _Subscriber2.call(this, destination);
        this.events = 0;
        this.parent = parent;
        this.values = values;
        this.index = index;
        this.total = total;
    }

    ZipInnerSubscriber.prototype._next = function _next(x) {
        var parent = this.parent;
        var events = this.events;
        var total = this.total;
        var limit = parent.limit;
        if (events >= limit) {
            this.destination.complete();
            return;
        }
        var index = this.index;
        var values = this.values;
        var zipped = values[events] || (values[events] = arrayInitialize(total));
        zipped[index] = [x];
        if (zipped.every(hasValue)) {
            this._projectNext(zipped, parent.project);
            values[events] = undefined;
        }
        this.events = events + 1;
    };

    ZipInnerSubscriber.prototype._projectNext = function _projectNext(values, project) {
        if (project && typeof project === "function") {
            var result = _utilTryCatch2['default'](project).apply(null, values.map(mapValue));
            if (result === _utilErrorObject.errorObject) {
                this.destination.error(_utilErrorObject.errorObject.e);
                return;
            } else {
                this.destination.next(result);
            }
        } else {
            this.destination.next(values.map(mapValue));
        }
    };

    ZipInnerSubscriber.prototype._complete = function _complete() {
        this.parent._innerComplete(this);
    };

    return ZipInnerSubscriber;
})(_Subscriber4['default']);

exports.ZipInnerSubscriber = ZipInnerSubscriber;

function mapValue(xs) {
    return xs[0];
}

function hasValue(xs) {
    return xs && xs.length === 1;
}