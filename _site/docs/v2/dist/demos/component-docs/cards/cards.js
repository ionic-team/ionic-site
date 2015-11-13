'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _advancedMapPages = require('./advanced-map/pages');

_defaults(exports, _interopExportWildcard(_advancedMapPages, _defaults));

var _advancedSocialPages = require('./advanced-social/pages');

_defaults(exports, _interopExportWildcard(_advancedSocialPages, _defaults));

var _advancedWeatherPages = require('./advanced-weather/pages');

_defaults(exports, _interopExportWildcard(_advancedWeatherPages, _defaults));

var _backgroundPages = require('./background/pages');

_defaults(exports, _interopExportWildcard(_backgroundPages, _defaults));

var _basicPages = require('./basic/pages');

_defaults(exports, _interopExportWildcard(_basicPages, _defaults));

var _headerPages = require('./header/pages');

_defaults(exports, _interopExportWildcard(_headerPages, _defaults));

var _imagePages = require('./image/pages');

_defaults(exports, _interopExportWildcard(_imagePages, _defaults));

var _listPages = require('./list/pages');

_defaults(exports, _interopExportWildcard(_listPages, _defaults));