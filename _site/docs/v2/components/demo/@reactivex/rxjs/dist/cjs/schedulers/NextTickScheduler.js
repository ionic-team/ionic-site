'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ImmediateScheduler2 = require('./ImmediateScheduler');

var _ImmediateScheduler3 = _interopRequireDefault(_ImmediateScheduler2);

var _NextTickAction = require('./NextTickAction');

var _NextTickAction2 = _interopRequireDefault(_NextTickAction);

var _ImmediateAction = require('./ImmediateAction');

var _ImmediateAction2 = _interopRequireDefault(_ImmediateAction);

var NextTickScheduler = (function (_ImmediateScheduler) {
    _inherits(NextTickScheduler, _ImmediateScheduler);

    function NextTickScheduler() {
        _classCallCheck(this, NextTickScheduler);

        _ImmediateScheduler.apply(this, arguments);
    }

    NextTickScheduler.prototype.scheduleNow = function scheduleNow(work, state) {
        return (this.scheduled ? new _ImmediateAction2['default'](this, work) : new _NextTickAction2['default'](this, work)).schedule(state);
    };

    return NextTickScheduler;
})(_ImmediateScheduler3['default']);

exports['default'] = NextTickScheduler;
module.exports = exports['default'];