'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var WUNDERGROUND_API_KEY = '1cc2d3de40fa5af0';
var FORECASTIO_KEY = '4cd3c5673825a361eb5ce108103ee84a';

var Weather = (function () {
    function Weather() {
        _classCallCheck(this, Weather);
    }

    _createClass(Weather, null, [{
        key: 'getAtLocation',
        value: function getAtLocation(lat, lng) {
            // TODO: update to angular2 HTTP service
            var url = 'https://api.forecast.io/forecast/' + FORECASTIO_KEY + '/';
            return Http.get(url + lat + ',' + lng + '?callback=JSON_CALLBACK', {
                method: 'jsonp'
            });
        }
    }]);

    return Weather;
})();

exports.Weather = Weather;