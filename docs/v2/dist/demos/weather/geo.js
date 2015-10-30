'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Geo = (function () {
    function Geo() {
        _classCallCheck(this, Geo);
    }

    _createClass(Geo, null, [{
        key: 'reverseGeocode',
        value: function reverseGeocode(lat, lng) {
            return new Promise(function (resolve, reject) {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'latLng': new google.maps.LatLng(lat, lng)
                }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        console.log('Reverse', results);
                        if (results.length > 1) {
                            var r = results[1];
                            var a, types;
                            var parts = [];
                            var foundLocality = false;
                            var foundState = false;
                            for (var i = 0; i < r.address_components.length; i++) {
                                a = r.address_components[i];
                                types = a.types;
                                for (var j = 0; j < types.length; j++) {
                                    if (!foundLocality && types[j] == 'locality') {
                                        foundLocality = true;
                                        parts.push(a.long_name);
                                    } else if (!foundState && types[j] == 'administrative_area_level_1') {
                                        foundState = true;
                                        parts.push(a.short_name);
                                    }
                                }
                            }
                            console.log('Reverse', parts);
                            resolve(parts.join(', '));
                        }
                    } else {
                        console.log('reverse fail', results, status);
                        reject(results);
                    }
                });
            });
        }
    }, {
        key: 'getLocation',
        value: function getLocation() {
            return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    resolve(position);
                }, function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return Geo;
})();

exports.Geo = Geo;