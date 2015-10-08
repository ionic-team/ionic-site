System.register("rxjs/src/schedulers/VirtualTimeScheduler", ["../Subscription"], function (_export) {
    "use strict";

    var Subscription, VirtualTimeScheduler, VirtualAction;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_Subscription2) {
            Subscription = _Subscription2["default"];
        }],
        execute: function () {
            VirtualTimeScheduler = (function () {
                function VirtualTimeScheduler() {
                    _classCallCheck(this, VirtualTimeScheduler);

                    this.actions = [];
                    this.active = false;
                    this.scheduled = false;
                    this.index = 0;
                    this.sorted = false;
                    this.frame = 0;
                }

                _createClass(VirtualTimeScheduler, [{
                    key: "now",
                    value: function now() {
                        return 0;
                    }
                }, {
                    key: "sortActions",
                    value: function sortActions() {
                        if (!this.sorted) {
                            this.actions.sort(function (a, b) {
                                return a.delay === b.delay ? a.index > b.index ? 1 : -1 : a.delay > b.delay ? 1 : -1;
                            });
                            this.sorted = true;
                        }
                    }
                }, {
                    key: "flush",
                    value: function flush() {
                        this.sortActions();
                        var actions = this.actions;
                        while (actions.length > 0) {
                            var action = actions.shift();
                            this.frame = action.delay;
                            action.execute();
                        }
                        this.frame = 0;
                    }
                }, {
                    key: "schedule",
                    value: function schedule(work, delay, state) {
                        if (delay === undefined) delay = 0;

                        this.sorted = false;
                        return new VirtualAction(this, work, this.index++).schedule(state, delay);
                    }
                }]);

                return VirtualTimeScheduler;
            })();

            _export("default", VirtualTimeScheduler);

            VirtualAction = (function (_Subscription) {
                _inherits(VirtualAction, _Subscription);

                function VirtualAction(scheduler, work, index) {
                    _classCallCheck(this, VirtualAction);

                    _get(Object.getPrototypeOf(VirtualAction.prototype), "constructor", this).call(this);
                    this.scheduler = scheduler;
                    this.work = work;
                    this.index = index;
                }

                _createClass(VirtualAction, [{
                    key: "schedule",
                    value: function schedule(state) {
                        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

                        if (this.isUnsubscribed) {
                            return this;
                        }
                        var scheduler = this.scheduler;
                        var action = scheduler.frame === this.delay ? this : new VirtualAction(scheduler, this.work, scheduler.index += 1);
                        action.state = state;
                        action.delay = scheduler.frame + delay;
                        scheduler.actions.push(action);
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
                        _get(Object.getPrototypeOf(VirtualAction.prototype), "unsubscribe", this).call(this);
                    }
                }]);

                return VirtualAction;
            })(Subscription);
        }
    };
});