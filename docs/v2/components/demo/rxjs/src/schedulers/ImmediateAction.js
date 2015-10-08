System.register("rxjs/src/schedulers/ImmediateAction", ["../Subscription"], function (_export) {
    "use strict";

    var Subscription, ImmediateAction;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_Subscription2) {
            Subscription = _Subscription2["default"];
        }],
        execute: function () {
            ImmediateAction = (function (_Subscription) {
                _inherits(ImmediateAction, _Subscription);

                function ImmediateAction(scheduler, work) {
                    _classCallCheck(this, ImmediateAction);

                    _get(Object.getPrototypeOf(ImmediateAction.prototype), "constructor", this).call(this);
                    this.scheduler = scheduler;
                    this.work = work;
                }

                _createClass(ImmediateAction, [{
                    key: "schedule",
                    value: function schedule(state) {
                        if (this.isUnsubscribed) {
                            return this;
                        }
                        this.state = state;
                        var scheduler = this.scheduler;
                        scheduler.actions.push(this);
                        scheduler.flush();
                        return this;
                    }
                }, {
                    key: "execute",
                    value: function execute() {
                        if (this.isUnsubscribed) {
                            throw new Error("How did did we execute a canceled Action?");
                        }
                        this.work(this.state);
                    }
                }, {
                    key: "unsubscribe",
                    value: function unsubscribe() {
                        var scheduler = this.scheduler;
                        var actions = scheduler.actions;
                        var index = actions.indexOf(this);
                        this.work = void 0;
                        this.state = void 0;
                        this.scheduler = void 0;
                        if (index !== -1) {
                            actions.splice(index, 1);
                        }
                        _get(Object.getPrototypeOf(ImmediateAction.prototype), "unsubscribe", this).call(this);
                    }
                }]);

                return ImmediateAction;
            })(Subscription);

            _export("default", ImmediateAction);
        }
    };
});