'use strict';

exports.__esModule = true;
exports['default'] = distinctUntilKeyChanged;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _distinctUntilChanged = require('./distinctUntilChanged');

var _distinctUntilChanged2 = _interopRequireDefault(_distinctUntilChanged);

function distinctUntilKeyChanged(key, compare, thisArg) {
    return _distinctUntilChanged2['default'].call(this, function (x, y) {
        if (compare) {
            return compare.call(thisArg, x[key], y[key]);
        }
        return x[key] === y[key];
    });
}

module.exports = exports['default'];