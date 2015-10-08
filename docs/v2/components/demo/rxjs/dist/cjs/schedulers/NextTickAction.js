'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilImmediate = require('../util/Immediate');

var _ImmediateAction2 = require('./ImmediateAction');

var _ImmediateAction3 = _interopRequireDefault(_ImmediateAction2);

var NextTickAction = (function (_ImmediateAction) {
    _inherits(NextTickAction, _ImmediateAction);

    function NextTickAction() {
        _classCallCheck(this, NextTickAction);

        _ImmediateAction.apply(this, arguments);
    }

    NextTickAction.prototype.schedule = function schedule(state) {
        var _this = this;

        if (this.isUnsubscribed) {
            return this;
        }
        this.state = state;
        var scheduler = this.scheduler;
        scheduler.actions.push(this);
        if (!scheduler.scheduled) {
            scheduler.scheduled = true;
            this.id = _utilImmediate.Immediate.setImmediate(function () {
                _this.id = void 0;
                _this.scheduler.scheduled = false;
                _this.scheduler.flush();
            });
        }
        return this;
    };

    NextTickAction.prototype.unsubscribe = function unsubscribe() {
        var id = this.id;
        var scheduler = this.scheduler;
        _ImmediateAction.prototype.unsubscribe.call(this);
        if (scheduler.actions.length === 0) {
            scheduler.active = false;
            scheduler.scheduled = false;
            if (id) {
                this.id = void 0;
                _utilImmediate.Immediate.clearImmediate(id);
            }
        }
    };

    return NextTickAction;
})(_ImmediateAction3['default']);

exports['default'] = NextTickAction;
module.exports = exports['default'];