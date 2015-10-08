System.register('rxjs/src/schedulers/NextTickAction', ['../util/Immediate', './ImmediateAction'], function (_export) {
    'use strict';

    var Immediate, ImmediateAction, NextTickAction;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_utilImmediate) {
            Immediate = _utilImmediate.Immediate;
        }, function (_ImmediateAction2) {
            ImmediateAction = _ImmediateAction2['default'];
        }],
        execute: function () {
            NextTickAction = (function (_ImmediateAction) {
                _inherits(NextTickAction, _ImmediateAction);

                function NextTickAction() {
                    _classCallCheck(this, NextTickAction);

                    _get(Object.getPrototypeOf(NextTickAction.prototype), 'constructor', this).apply(this, arguments);
                }

                _createClass(NextTickAction, [{
                    key: 'schedule',
                    value: function schedule(state) {
                        var _this = this;

                        if (this.isUnsubscribed) {
                            return this;
                        }
                        this.state = state;
                        var scheduler = this.scheduler;
                        scheduler.actions.push(this);
                        if (!scheduler.scheduled) {
                            scheduler.scheduled = true;
                            this.id = Immediate.setImmediate(function () {
                                _this.id = void 0;
                                _this.scheduler.scheduled = false;
                                _this.scheduler.flush();
                            });
                        }
                        return this;
                    }
                }, {
                    key: 'unsubscribe',
                    value: function unsubscribe() {
                        var id = this.id;
                        var scheduler = this.scheduler;
                        _get(Object.getPrototypeOf(NextTickAction.prototype), 'unsubscribe', this).call(this);
                        if (scheduler.actions.length === 0) {
                            scheduler.active = false;
                            scheduler.scheduled = false;
                            if (id) {
                                this.id = void 0;
                                Immediate.clearImmediate(id);
                            }
                        }
                    }
                }]);

                return NextTickAction;
            })(ImmediateAction);

            _export('default', NextTickAction);
        }
    };
});