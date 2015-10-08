define(["require", "exports", './Observable'], function (require, exports, Observable_1) {
    var Notification = (function () {
        function Notification(kind, value, exception) {
            this.kind = kind;
            this.value = value;
            this.exception = exception;
            this.hasValue = kind === 'N';
        }
        Notification.prototype.observe = function (observer) {
            switch (this.kind) {
                case 'N':
                    return observer.next(this.value);
                case 'E':
                    return observer.error(this.exception);
                case 'C':
                    return observer.complete();
            }
        };
        Notification.prototype.do = function (next, error, complete) {
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
        Notification.prototype.accept = function (nextOrObserver, error, complete) {
            if (nextOrObserver && typeof nextOrObserver.next === 'function') {
                return this.observe(nextOrObserver);
            }
            else {
                return this.do(nextOrObserver, error, complete);
            }
        };
        Notification.prototype.toObservable = function () {
            var kind = this.kind;
            var value = this.value;
            switch (kind) {
                case 'N':
                    return Observable_1.default.of(value);
                case 'E':
                    return Observable_1.default.throw(value);
                case 'C':
                    return Observable_1.default.empty();
            }
        };
        Notification.createNext = function (value) {
            return new Notification('N', value);
        };
        Notification.createError = function (err) {
            return new Notification('E', undefined, err);
        };
        Notification.createComplete = function () {
            return new Notification('C');
        };
        return Notification;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Notification;
});
//# sourceMappingURL=Notification.js.map