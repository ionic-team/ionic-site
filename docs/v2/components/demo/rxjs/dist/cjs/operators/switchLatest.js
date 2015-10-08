'use strict';

exports.__esModule = true;
exports['default'] = switchLatest;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Subscription = require('../Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

var _flatMapSupport = require('./flatMap-support');

function switchLatest(project, projectResult) {
    return this.lift(new SwitchLatestOperator(project, projectResult));
}

var SwitchLatestOperator = (function (_FlatMapOperator) {
    _inherits(SwitchLatestOperator, _FlatMapOperator);

    function SwitchLatestOperator(project, projectResult) {
        _classCallCheck(this, SwitchLatestOperator);

        _FlatMapOperator.call(this, project, projectResult, 1);
    }

    SwitchLatestOperator.prototype.call = function call(subscriber) {
        return new SwitchLatestSubscriber(subscriber, this.project, this.projectResult);
    };

    return SwitchLatestOperator;
})(_flatMapSupport.FlatMapOperator);

var SwitchLatestSubscriber = (function (_FlatMapSubscriber) {
    _inherits(SwitchLatestSubscriber, _FlatMapSubscriber);

    function SwitchLatestSubscriber(destination, project, projectResult) {
        _classCallCheck(this, SwitchLatestSubscriber);

        _FlatMapSubscriber.call(this, destination, 1, project, projectResult);
    }

    SwitchLatestSubscriber.prototype._buffer = function _buffer(value) {
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

    SwitchLatestSubscriber.prototype._subscribeInner = function _subscribeInner(observable, value, index) {
        this.innerSubscription = new _Subscription2['default']();
        this.innerSubscription.add(_FlatMapSubscriber.prototype._subscribeInner.call(this, observable, value, index));
        return this.innerSubscription;
    };

    return SwitchLatestSubscriber;
})(_flatMapSupport.FlatMapSubscriber);

module.exports = exports['default'];