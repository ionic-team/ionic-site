System.register('rxjs/src/schedulers/ImmediateScheduler', ['./ImmediateAction', './FutureAction'], function (_export) {
    'use strict';

    var ImmediateAction, FutureAction, ImmediateScheduler;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_ImmediateAction) {
            ImmediateAction = _ImmediateAction['default'];
        }, function (_FutureAction) {
            FutureAction = _FutureAction['default'];
        }],
        execute: function () {
            ImmediateScheduler = (function () {
                function ImmediateScheduler() {
                    _classCallCheck(this, ImmediateScheduler);

                    this.actions = [];
                    this.active = false;
                    this.scheduled = false;
                }

                _createClass(ImmediateScheduler, [{
                    key: 'now',
                    value: function now() {
                        return Date.now();
                    }
                }, {
                    key: 'flush',
                    value: function flush() {
                        if (this.active || this.scheduled) {
                            return;
                        }
                        this.active = true;
                        var actions = this.actions;
                        for (var action = undefined; action = actions.shift();) {
                            action.execute();
                        }
                        this.active = false;
                    }
                }, {
                    key: 'schedule',
                    value: function schedule(work, delay, state) {
                        if (delay === undefined) delay = 0;

                        return delay <= 0 ? this.scheduleNow(work, state) : this.scheduleLater(work, delay, state);
                    }
                }, {
                    key: 'scheduleNow',
                    value: function scheduleNow(work, state) {
                        return new ImmediateAction(this, work).schedule(state);
                    }
                }, {
                    key: 'scheduleLater',
                    value: function scheduleLater(work, delay, state) {
                        return new FutureAction(this, work).schedule(state, delay);
                    }
                }]);

                return ImmediateScheduler;
            })();

            _export('default', ImmediateScheduler);
        }
    };
});