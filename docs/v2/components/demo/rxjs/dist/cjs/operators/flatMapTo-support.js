'use strict';

exports.__esModule = true;

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _flatMapSupport = require('./flatMap-support');

var FlatMapToOperator = (function () {
    function FlatMapToOperator(observable, projectResult) {
        var concurrent = arguments.length <= 2 || arguments[2] === undefined ? Number.POSITIVE_INFINITY : arguments[2];

        _classCallCheck(this, FlatMapToOperator);

        this.observable = observable;
        this.projectResult = projectResult;
        this.concurrent = concurrent;
    }

    FlatMapToOperator.prototype.call = function call(subscriber) {
        return new FlatMapToSubscriber(subscriber, this.concurrent, this.observable, this.projectResult);
    };

    return FlatMapToOperator;
})();

exports.FlatMapToOperator = FlatMapToOperator;

var FlatMapToSubscriber = (function (_FlatMapSubscriber) {
    _inherits(FlatMapToSubscriber, _FlatMapSubscriber);

    function FlatMapToSubscriber(destination, concurrent, observable, projectResult) {
        _classCallCheck(this, FlatMapToSubscriber);

        _FlatMapSubscriber.call(this, destination, concurrent, null, projectResult);
        this.observable = observable;
    }

    FlatMapToSubscriber.prototype._project = function _project(value, index) {
        return this.observable;
    };

    return FlatMapToSubscriber;
})(_flatMapSupport.FlatMapSubscriber);

exports.FlatMapToSubscriber = FlatMapToSubscriber;