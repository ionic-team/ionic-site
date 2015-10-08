'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Subject2 = require('../Subject');

var _Subject3 = _interopRequireDefault(_Subject2);

var GroupSubject = (function (_Subject) {
    _inherits(GroupSubject, _Subject);

    function GroupSubject(key) {
        _classCallCheck(this, GroupSubject);

        _Subject.call(this);
        this.key = key;
    }

    return GroupSubject;
})(_Subject3['default']);

exports['default'] = GroupSubject;
module.exports = exports['default'];