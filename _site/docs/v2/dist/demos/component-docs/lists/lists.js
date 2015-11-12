'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _avatarPages = require('./avatar/pages');

_defaults(exports, _interopExportWildcard(_avatarPages, _defaults));

var _basicPages = require('./basic/pages');

_defaults(exports, _interopExportWildcard(_basicPages, _defaults));

var _headersPages = require('./headers/pages');

_defaults(exports, _interopExportWildcard(_headersPages, _defaults));

var _iconPages = require('./icon/pages');

_defaults(exports, _interopExportWildcard(_iconPages, _defaults));

var _insetPages = require('./inset/pages');

_defaults(exports, _interopExportWildcard(_insetPages, _defaults));

var _noLinesPages = require('./no-lines/pages');

_defaults(exports, _interopExportWildcard(_noLinesPages, _defaults));

var _multilinePages = require('./multiline/pages');

_defaults(exports, _interopExportWildcard(_multilinePages, _defaults));

var _thumbnailPages = require('./thumbnail/pages');

_defaults(exports, _interopExportWildcard(_thumbnailPages, _defaults));