System.register('rxjs/src/schedulers/FutureAction', ['./ImmediateAction'], function (_export) {
    'use strict';

    var ImmediateAction, FutureAction;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_ImmediateAction2) {
            ImmediateAction = _ImmediateAction2['default'];
        }],
        execute: function () {
            FutureAction = (function (_ImmediateAction) {
                _inherits(FutureAction, _ImmediateAction);

                function FutureAction(scheduler, work) {
                    _classCallCheck(this, FutureAction);

                    _get(Object.getPrototypeOf(FutureAction.prototype), 'constructor', this).call(this, scheduler, work);
                    this.scheduler = scheduler;
                    this.work = work;
                }

                _createClass(FutureAction, [{
                    key: 'schedule',
                    value: function schedule(state) {
                        var _this = this;

                        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

                        if (this.isUnsubscribed) {
                            return this;
                        }
                        this.delay = delay;
                        this.state = state;
                        var id = this.id;
                        if (id != null) {
                            this.id = undefined;
                            clearTimeout(id);
                        }
                        var scheduler = this.scheduler;
                        this.id = setTimeout(function () {
                            _this.id = void 0;
                            scheduler.actions.push(_this);
                            scheduler.flush();
                        }, this.delay);
                        return this;
                    }
                }, {
                    key: 'unsubscribe',
                    value: function unsubscribe() {
                        var id = this.id;
                        if (id != null) {
                            this.id = void 0;
                            clearTimeout(id);
                        }
                        _get(Object.getPrototypeOf(FutureAction.prototype), 'unsubscribe', this).call(this);
                    }
                }]);

                return FutureAction;
            })(ImmediateAction);

            _export('default', FutureAction);
        }
    };
});