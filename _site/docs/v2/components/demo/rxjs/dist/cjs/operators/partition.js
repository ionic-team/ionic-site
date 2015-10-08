'use strict';

exports.__esModule = true;
exports['default'] = partition;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilNot = require('../util/not');

var _utilNot2 = _interopRequireDefault(_utilNot);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function partition(predicate, thisArg) {
    return [_filter2['default'].call(this, predicate), _filter2['default'].call(this, _utilNot2['default'](predicate, thisArg))];
}

module.exports = exports['default'];