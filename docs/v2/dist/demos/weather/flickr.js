System.register('flickr', ['ionic/net/http'], function (_export) {
    'use strict';

    var Http, FLICKR_API_KEY, baseUrl, Flickr;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_ionicNetHttp) {
            Http = _ionicNetHttp.Http;
        }],
        execute: function () {
            FLICKR_API_KEY = '504fd7414f6275eb5b657ddbfba80a2c';
            baseUrl = 'https://api.flickr.com/services/rest/';

            Flickr = (function () {
                function Flickr() {
                    _classCallCheck(this, Flickr);
                }

                _createClass(Flickr, null, [{
                    key: 'search',

                    /*
                    var flickrSearch = $resource(baseUrl, {
                      method: 'flickr.groups.pools.getPhotos',
                      group_id: '1463451@N25',
                      safe_search: 1,
                      jsoncallback: 'JSON_CALLBACK',
                      api_key: FLICKR_API_KEY,
                      format: 'json'
                    }, {
                      get: {
                        method: 'JSONP'
                      }
                    });
                    */
                    value: function search(tags, lat, lng) {
                        return new Promise(function (resolve, reject) {
                            Http.get(baseUrl + '?method=flickr.groups.pools.getPhotos&group_id=1463451@N25&safe_search=1&api_key=' + FLICKR_API_KEY + '&jsoncallback=JSON_CALLBACK&format=json&tags=' + tags + '&lat=' + lat + '&lng=' + lng, {
                                method: 'jsonp'
                            }).then(function (val) {
                                resolve(val);
                            }, function (err) {
                                reject(httpResponse);
                            });
                        });
                    }
                }]);

                return Flickr;
            })();

            _export('Flickr', Flickr);
        }
    };
});