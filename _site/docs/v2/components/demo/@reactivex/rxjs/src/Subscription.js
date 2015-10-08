System.register("rxjs/src/Subscription", [], function (_export) {
    "use strict";

    var Subscription;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            Subscription = (function () {
                function Subscription(_unsubscribe) {
                    _classCallCheck(this, Subscription);

                    this.isUnsubscribed = false;
                    if (_unsubscribe) {
                        this._unsubscribe = _unsubscribe;
                    }
                }

                _createClass(Subscription, [{
                    key: "_unsubscribe",
                    value: function _unsubscribe() {}
                }, {
                    key: "unsubscribe",
                    value: function unsubscribe() {
                        if (this.isUnsubscribed) {
                            return;
                        }
                        this.isUnsubscribed = true;
                        var unsubscribe = this._unsubscribe;
                        var subscriptions = this._subscriptions;
                        this._subscriptions = void 0;
                        if (unsubscribe) {
                            unsubscribe.call(this);
                        }
                        if (subscriptions != null) {
                            var index = -1;
                            var len = subscriptions.length;
                            while (++index < len) {
                                subscriptions[index].unsubscribe();
                            }
                        }
                    }
                }, {
                    key: "add",
                    value: function add(subscription) {
                        // return early if:
                        //  1. the subscription is null
                        //  2. we're attempting to add our this
                        //  3. we're attempting to add the static `empty` Subscription
                        if (!subscription || subscription === this || subscription === Subscription.EMPTY) {
                            return;
                        }
                        var sub = subscription;
                        switch (typeof subscription) {
                            case "function":
                                sub = new Subscription(subscription);
                            case "object":
                                if (sub.isUnsubscribed || typeof sub.unsubscribe !== "function") {
                                    break;
                                } else if (this.isUnsubscribed) {
                                    sub.unsubscribe();
                                } else {
                                    var subscriptions = this._subscriptions || (this._subscriptions = []);
                                    subscriptions.push(sub);
                                }
                                break;
                            default:
                                throw new Error('Unrecognized subscription ' + subscription + ' added to Subscription.');
                        }
                    }
                }, {
                    key: "remove",
                    value: function remove(subscription) {
                        // return early if:
                        //  1. the subscription is null
                        //  2. we're attempting to remove ourthis
                        //  3. we're attempting to remove the static `empty` Subscription
                        if (subscription == null || subscription === this || subscription === Subscription.EMPTY) {
                            return;
                        }
                        var subscriptions = this._subscriptions;
                        if (subscriptions) {
                            var subscriptionIndex = subscriptions.indexOf(subscription);
                            if (subscriptionIndex !== -1) {
                                subscriptions.splice(subscriptionIndex, 1);
                            }
                        }
                    }
                }]);

                return Subscription;
            })();

            _export("default", Subscription);

            Subscription.EMPTY = (function (empty) {
                empty.isUnsubscribed = true;
                return empty;
            })(new Subscription());
        }
    };
});