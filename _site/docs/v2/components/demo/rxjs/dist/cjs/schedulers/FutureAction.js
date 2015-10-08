'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ImmediateAction2 = require('./ImmediateAction');

var _ImmediateAction3 = _interopRequireDefault(_ImmediateAction2);

var FutureAction = (function (_ImmediateAction) {
    _inherits(FutureAction, _ImmediateAction);

    function FutureAction(scheduler, work) {
        _classCallCheck(this, FutureAction);

        _ImmediateAction.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }

    FutureAction.prototype.schedule = function schedule(state) {
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
    };

    FutureAction.prototype.unsubscribe = function unsubscribe() {
        var id = this.id;
        if (id != null) {
            this.id = void 0;
            clearTimeout(id);
        }
        _ImmediateAction.prototype.unsubscribe.call(this);
    };

    return FutureAction;
})(_ImmediateAction3['default']);

exports['default'] = FutureAction;
module.exports = exports['default'];