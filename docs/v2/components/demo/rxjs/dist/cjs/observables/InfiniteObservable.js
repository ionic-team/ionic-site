'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable2 = require('../Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

var InfiniteObservable = (function (_Observable) {
    _inherits(InfiniteObservable, _Observable);

    function InfiniteObservable() {
        _classCallCheck(this, InfiniteObservable);

        _Observable.call(this);
    }

    InfiniteObservable.create = function create() {
        return new InfiniteObservable();
    };

    InfiniteObservable.prototype._subscribe = function _subscribe(subscriber) {};

    return InfiniteObservable;
})(_Observable3['default']);

exports['default'] = InfiniteObservable;
module.exports = exports['default'];