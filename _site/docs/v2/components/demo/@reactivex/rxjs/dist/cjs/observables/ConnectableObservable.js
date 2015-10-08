'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable3 = require('../Observable');

var _Observable4 = _interopRequireDefault(_Observable3);

var _Subscription3 = require('../Subscription');

var _Subscription4 = _interopRequireDefault(_Subscription3);

var ConnectableObservable = (function (_Observable) {
    _inherits(ConnectableObservable, _Observable);

    function ConnectableObservable(source, subjectFactory) {
        _classCallCheck(this, ConnectableObservable);

        _Observable.call(this);
        this.source = source;
        this.subjectFactory = subjectFactory;
    }

    ConnectableObservable.prototype._subscribe = function _subscribe(subscriber) {
        return this._getSubject().subscribe(subscriber);
    };

    ConnectableObservable.prototype._getSubject = function _getSubject() {
        var subject = this.subject;
        if (subject && !subject.isUnsubscribed) {
            return subject;
        }
        return this.subject = this.subjectFactory();
    };

    ConnectableObservable.prototype.connect = function connect() {
        var source = this.source;
        var subscription = this.subscription;
        if (subscription && !subscription.isUnsubscribed) {
            return subscription;
        }
        subscription = source.subscribe(this._getSubject());
        subscription.add(new ConnectableSubscription(this));
        return this.subscription = subscription;
    };

    ConnectableObservable.prototype.refCount = function refCount() {
        return new RefCountObservable(this);
    };

    return ConnectableObservable;
})(_Observable4['default']);

exports['default'] = ConnectableObservable;

var ConnectableSubscription = (function (_Subscription) {
    _inherits(ConnectableSubscription, _Subscription);

    function ConnectableSubscription(connectable) {
        _classCallCheck(this, ConnectableSubscription);

        _Subscription.call(this);
        this.connectable = connectable;
    }

    ConnectableSubscription.prototype._unsubscribe = function _unsubscribe() {
        var connectable = this.connectable;
        connectable.subject = void 0;
        connectable.subscription = void 0;
        this.connectable = void 0;
    };

    return ConnectableSubscription;
})(_Subscription4['default']);

var RefCountObservable = (function (_Observable2) {
    _inherits(RefCountObservable, _Observable2);

    function RefCountObservable(connectable) {
        var refCount = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        _classCallCheck(this, RefCountObservable);

        _Observable2.call(this);
        this.connectable = connectable;
        this.refCount = refCount;
    }

    RefCountObservable.prototype._subscribe = function _subscribe(subscriber) {
        var connectable = this.connectable;
        var subscription = connectable.subscribe(subscriber);
        if (++this.refCount === 1) {
            this.connection = connectable.connect();
        }
        subscription.add(new RefCountSubscription(this));
        return subscription;
    };

    return RefCountObservable;
})(_Observable4['default']);

var RefCountSubscription = (function (_Subscription2) {
    _inherits(RefCountSubscription, _Subscription2);

    function RefCountSubscription(refCountObservable) {
        _classCallCheck(this, RefCountSubscription);

        _Subscription2.call(this);
        this.refCountObservable = refCountObservable;
    }

    RefCountSubscription.prototype._unsubscribe = function _unsubscribe() {
        var observable = this.refCountObservable;
        if (--observable.refCount === 0) {
            observable.connection.unsubscribe();
            observable.connection = void 0;
        }
    };

    return RefCountSubscription;
})(_Subscription4['default']);

module.exports = exports['default'];