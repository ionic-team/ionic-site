'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('./Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var _Subscriber = require('./Subscriber');

var _Subscriber2 = _interopRequireDefault(_Subscriber);

var _Subscription = require('./Subscription');

var _Subscription2 = _interopRequireDefault(_Subscription);

var _subjectsSubjectSubscription = require('./subjects/SubjectSubscription');

var _subjectsSubjectSubscription2 = _interopRequireDefault(_subjectsSubjectSubscription);

var subscriptionAdd = _Subscription2['default'].prototype.add;
var subscriptionRemove = _Subscription2['default'].prototype.remove;
var subscriptionUnsubscribe = _Subscription2['default'].prototype.unsubscribe;
var subscriberNext = _Subscriber2['default'].prototype.next;
var subscriberError = _Subscriber2['default'].prototype.error;
var subscriberComplete = _Subscriber2['default'].prototype.complete;
var _subscriberNext = _Subscriber2['default'].prototype._next;
var _subscriberError = _Subscriber2['default'].prototype._error;
var _subscriberComplete = _Subscriber2['default'].prototype._complete;
var _observableSubscribe = _Observable3['default'].prototype._subscribe;

var Subject = (function (_Observable) {
    _inherits(Subject, _Observable);

    function Subject() {
        _classCallCheck(this, Subject);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _Observable.call.apply(_Observable, [this].concat(args));
        this.observers = [];
        this.isUnsubscribed = false;
        this.dispatching = false;
        this.errorSignal = false;
        this.completeSignal = false;
    }

    Subject.create = function create(source, destination) {
        return new BidirectionalSubject(source, destination);
    };

    Subject.prototype.lift = function lift(operator) {
        var subject = new BidirectionalSubject(this, this.destination || this);
        subject.operator = operator;
        return subject;
    };

    Subject.prototype._subscribe = function _subscribe(subscriber) {
        if (subscriber.isUnsubscribed) {
            return;
        } else if (this.errorSignal) {
            subscriber.error(this.errorInstance);
            return;
        } else if (this.completeSignal) {
            subscriber.complete();
            return;
        } else if (this.isUnsubscribed) {
            throw new Error("Cannot subscribe to a disposed Subject.");
        }
        this.observers.push(subscriber);
        return new _subjectsSubjectSubscription2['default'](this, subscriber);
    };

    Subject.prototype.add = function add(subscription) {
        subscriptionAdd.call(this, subscription);
    };

    Subject.prototype.remove = function remove(subscription) {
        subscriptionRemove.call(this, subscription);
    };

    Subject.prototype.unsubscribe = function unsubscribe() {
        this.observers = void 0;
        subscriptionUnsubscribe.call(this);
    };

    Subject.prototype.next = function next(value) {
        if (this.isUnsubscribed) {
            return;
        }
        this.dispatching = true;
        this._next(value);
        this.dispatching = false;
        if (this.errorSignal) {
            this.error(this.errorInstance);
        } else if (this.completeSignal) {
            this.complete();
        }
    };

    Subject.prototype.error = function error(_error) {
        if (this.isUnsubscribed || this.completeSignal) {
            return;
        }
        this.errorSignal = true;
        this.errorInstance = _error;
        if (this.dispatching) {
            return;
        }
        this._error(_error);
        this.unsubscribe();
    };

    Subject.prototype.complete = function complete() {
        if (this.isUnsubscribed || this.errorSignal) {
            return;
        }
        this.completeSignal = true;
        if (this.dispatching) {
            return;
        }
        this._complete();
        this.unsubscribe();
    };

    Subject.prototype._next = function _next(value) {
        var index = -1;
        var observers = this.observers.slice(0);
        var len = observers.length;
        while (++index < len) {
            observers[index].next(value);
        }
    };

    Subject.prototype._error = function _error(error) {
        var index = -1;
        var observers = this.observers;
        var len = observers.length;
        // optimization -- block next, complete, and unsubscribe while dispatching
        this.observers = void 0;
        this.isUnsubscribed = true;
        while (++index < len) {
            observers[index].error(error);
        }
        this.isUnsubscribed = false;
    };

    Subject.prototype._complete = function _complete() {
        var index = -1;
        var observers = this.observers;
        var len = observers.length;
        // optimization -- block next, complete, and unsubscribe while dispatching
        this.observers = void 0; // optimization
        this.isUnsubscribed = true;
        while (++index < len) {
            observers[index].complete();
        }
        this.isUnsubscribed = false;
    };

    return Subject;
})(_Observable3['default']);

exports['default'] = Subject;

var BidirectionalSubject = (function (_Subject) {
    _inherits(BidirectionalSubject, _Subject);

    function BidirectionalSubject(source, destination) {
        _classCallCheck(this, BidirectionalSubject);

        _Subject.call(this);
        this.source = source;
        this.destination = destination;
    }

    BidirectionalSubject.prototype._subscribe = function _subscribe(subscriber) {
        return _observableSubscribe.call(this, subscriber);
    };

    BidirectionalSubject.prototype.next = function next(x) {
        subscriberNext.call(this, x);
    };

    BidirectionalSubject.prototype.error = function error(e) {
        subscriberError.call(this, e);
    };

    BidirectionalSubject.prototype.complete = function complete() {
        subscriberComplete.call(this);
    };

    BidirectionalSubject.prototype._next = function _next(x) {
        _subscriberNext.call(this, x);
    };

    BidirectionalSubject.prototype._error = function _error(e) {
        _subscriberError.call(this, e);
    };

    BidirectionalSubject.prototype._complete = function _complete() {
        _subscriberComplete.call(this);
    };

    return BidirectionalSubject;
})(Subject);

module.exports = exports['default'];