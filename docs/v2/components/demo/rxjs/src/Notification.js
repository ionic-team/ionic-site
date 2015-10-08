System.register('rxjs/src/Notification', ['./Observable'], function (_export) {
    'use strict';

    var Observable, Notification;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_Observable) {
            Observable = _Observable['default'];
        }],
        execute: function () {
            Notification = (function () {
                function Notification(kind, value, exception) {
                    _classCallCheck(this, Notification);

                    this.kind = kind;
                    this.value = value;
                    this.exception = exception;
                    this.hasValue = kind === 'N';
                }

                _createClass(Notification, [{
                    key: 'observe',
                    value: function observe(observer) {
                        switch (this.kind) {
                            case 'N':
                                return observer.next(this.value);
                            case 'E':
                                return observer.error(this.exception);
                            case 'C':
                                return observer.complete();
                        }
                    }
                }, {
                    key: 'do',
                    value: function _do(next, error, complete) {
                        var kind = this.kind;
                        switch (kind) {
                            case 'N':
                                return next(this.value);
                            case 'E':
                                return error(this.exception);
                            case 'C':
                                return complete();
                        }
                    }
                }, {
                    key: 'accept',
                    value: function accept(nextOrObserver, error, complete) {
                        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
                            return this.observe(nextOrObserver);
                        } else {
                            return this['do'](nextOrObserver, error, complete);
                        }
                    }
                }, {
                    key: 'toObservable',
                    value: function toObservable() {
                        var kind = this.kind;
                        var value = this.value;
                        switch (kind) {
                            case 'N':
                                return Observable.of(value);
                            case 'E':
                                return Observable['throw'](value);
                            case 'C':
                                return Observable.empty();
                        }
                    }
                }], [{
                    key: 'createNext',
                    value: function createNext(value) {
                        return new Notification('N', value);
                    }
                }, {
                    key: 'createError',
                    value: function createError(err) {
                        return new Notification('E', undefined, err);
                    }
                }, {
                    key: 'createComplete',
                    value: function createComplete() {
                        return new Notification('C');
                    }
                }]);

                return Notification;
            })();

            _export('default', Notification);
        }
    };
});