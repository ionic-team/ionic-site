'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _checkboxPages = require('./checkbox/pages');

_defaults(exports, _interopExportWildcard(_checkboxPages, _defaults));

var _radioPages = require('./radio/pages');

_defaults(exports, _interopExportWildcard(_radioPages, _defaults));

var _rangePages = require('./range/pages');

_defaults(exports, _interopExportWildcard(_rangePages, _defaults));

var _searchPages = require('./search/pages');

_defaults(exports, _interopExportWildcard(_searchPages, _defaults));

var _segmentPages = require('./segment/pages');

_defaults(exports, _interopExportWildcard(_segmentPages, _defaults));

var _selectPages = require('./select/pages');

_defaults(exports, _interopExportWildcard(_selectPages, _defaults));

var _switchPages = require('./switch/pages');

_defaults(exports, _interopExportWildcard(_switchPages, _defaults));