System.register('rxjs/src/subjects/SubjectSubscription', ['../Subscription'], function (_export) {
    'use strict';

    var Subscription, SubjectSubscription;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_Subscription2) {
            Subscription = _Subscription2['default'];
        }],
        execute: function () {
            SubjectSubscription = (function (_Subscription) {
                _inherits(SubjectSubscription, _Subscription);

                function SubjectSubscription(subject, observer) {
                    _classCallCheck(this, SubjectSubscription);

                    _get(Object.getPrototypeOf(SubjectSubscription.prototype), 'constructor', this).call(this);
                    this.subject = subject;
                    this.observer = observer;
                    this.isUnsubscribed = false;
                }

                _createClass(SubjectSubscription, [{
                    key: 'unsubscribe',
                    value: function unsubscribe() {
                        if (this.isUnsubscribed) {
                            return;
                        }
                        this.isUnsubscribed = true;
                        var subject = this.subject;
                        var observers = subject.observers;
                        this.subject = void 0;
                        if (!observers || observers.length === 0 || subject.isUnsubscribed) {
                            return;
                        }
                        var subscriberIndex = observers.indexOf(this.observer);
                        if (subscriberIndex !== -1) {
                            observers.splice(subscriberIndex, 1);
                        }
                    }
                }]);

                return SubjectSubscription;
            })(Subscription);

            _export('default', SubjectSubscription);
        }
    };
});