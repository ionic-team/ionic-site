'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Observable = require('./Observable');

var _Observable2 = _interopRequireDefault(_Observable);

var Notification = (function () {
    function Notification(kind, value, exception) {
        _classCallCheck(this, Notification);

        this.kind = kind;
        this.value = value;
        this.exception = exception;
        this.hasValue = kind === 'N';
    }

    Notification.prototype.observe = function observe(observer) {
        switch (this.kind) {
            case 'N':
                return observer.next(this.value);
            case 'E':
                return observer.error(this.exception);
            case 'C':
                return observer.complete();
        }
    };

    Notification.prototype['do'] = function _do(next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next(this.value);
            case 'E':
                return error(this.exception);
            case 'C':
                return complete();
        }
    };

    Notification.prototype.accept = function accept(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        } else {
            return this['do'](nextOrObserver, error, complete);
        }
    };

    Notification.prototype.toObservable = function toObservable() {
        var kind = this.kind;
        var value = this.value;
        switch (kind) {
            case 'N':
                return _Observable2['default'].of(value);
            case 'E':
                return _Observable2['default']['throw'](value);
            case 'C':
                return _Observable2['default'].empty();
        }
    };

    Notification.createNext = function createNext(value) {
        return new Notification('N', value);
    };

    Notification.createError = function createError(err) {
        return new Notification('E', undefined, err);
    };

    Notification.createComplete = function createComplete() {
        return new Notification('C');
    };

    return Notification;
})();

exports['default'] = Notification;
module.exports = exports['default'];