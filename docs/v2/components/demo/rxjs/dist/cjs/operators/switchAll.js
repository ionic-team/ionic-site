'use strict';

exports.__esModule = true;
exports['default'] = switchAll;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Subscription = require('../Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

var _mergeSupport = require('./merge-support');

function switchAll() {
    return this.lift(new SwitchOperator());
}

var SwitchOperator = (function () {
    function SwitchOperator() {
        _classCallCheck(this, SwitchOperator);
    }

    SwitchOperator.prototype.call = function call(subscriber) {
        return new SwitchSubscriber(subscriber);
    };

    return SwitchOperator;
})();

var SwitchSubscriber = (function (_MergeSubscriber) {
    _inherits(SwitchSubscriber, _MergeSubscriber);

    function SwitchSubscriber(destination) {
        _classCallCheck(this, SwitchSubscriber);

        _MergeSubscriber.call(this, destination, 1);
    }

    SwitchSubscriber.prototype._buffer = function _buffer(value) {
        var active = this.active;
        if (active > 0) {
            this.active = active - 1;
            var inner = this.innerSubscription;
            if (inner) {
                inner.unsubscribe();
                this.innerSubscription = null;
            }
        }
        this._next(value);
    };

    SwitchSubscriber.prototype._subscribeInner = function _subscribeInner(observable, value, index) {
        this.innerSubscription = new _Subscription2['default']();
        this.innerSubscription.add(_MergeSubscriber.prototype._subscribeInner.call(this, observable, value, index));
        return this.innerSubscription;
    };

    return SwitchSubscriber;
})(_mergeSupport.MergeSubscriber);

module.exports = exports['default'];