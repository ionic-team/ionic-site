'use strict';

exports.__esModule = true;
exports['default'] = switchLatestTo;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _flatMapToSupport = require('./flatMapTo-support');

function switchLatestTo(observable, projectResult) {
    return this.lift(new SwitchLatestToOperator(observable, projectResult));
}

var SwitchLatestToOperator = (function (_FlatMapToOperator) {
    _inherits(SwitchLatestToOperator, _FlatMapToOperator);

    function SwitchLatestToOperator(observable, projectResult) {
        _classCallCheck(this, SwitchLatestToOperator);

        _FlatMapToOperator.call(this, observable, projectResult, 1);
    }

    SwitchLatestToOperator.prototype.call = function call(subscriber) {
        return new SwitchLatestToSubscriber(subscriber, this.observable, this.projectResult);
    };

    return SwitchLatestToOperator;
})(_flatMapToSupport.FlatMapToOperator);

var SwitchLatestToSubscriber = (function (_FlatMapToSubscriber) {
    _inherits(SwitchLatestToSubscriber, _FlatMapToSubscriber);

    function SwitchLatestToSubscriber(destination, observable, projectResult) {
        _classCallCheck(this, SwitchLatestToSubscriber);

        _FlatMapToSubscriber.call(this, destination, 1, observable, projectResult);
    }

    SwitchLatestToSubscriber.prototype._buffer = function _buffer(value) {
        var active = this.active;
        if (active > 0) {
            this.active = active - 1;
            var inner = this.innerSubscription;
            if (inner) {
                inner.unsubscribe();
            }
        }
        this._next(value);
    };

    SwitchLatestToSubscriber.prototype._subscribeInner = function _subscribeInner(observable, value, index) {
        return this.innerSubscription = _FlatMapToSubscriber.prototype._subscribeInner.call(this, observable, value, index);
    };

    return SwitchLatestToSubscriber;
})(_flatMapToSupport.FlatMapToSubscriber);

module.exports = exports['default'];