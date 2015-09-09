System.register('ionic/net/http', ['ionic/util'], function (_export) {
  'use strict';

  var util, Http;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      Http = (function () {
        function Http() {
          _classCallCheck(this, Http);
        }

        _createClass(Http, null, [{
          key: 'fetch',
          value: (function (_fetch) {
            function fetch(_x, _x2) {
              return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
              return _fetch.toString();
            };

            return fetch;
          })(function (url, options) {
            return fetch(url, options).then(function (response) {
              if (response.status === 200 || response.status === 0) {
                if (response.headers.get('Content-Type') === 'application/json') {
                  return response.json();
                }
                return response.text();
              } else {
                return Promise.reject(response, new Error(response.statusText));
              }
            })['catch'](function (err) {
              return Promise.reject(err);
            });
          })
        }, {
          key: '_method',
          value: function _method(method, url, data, options, sendsJson) {
            options = util.defaults(options, {
              method: method,
              headers: { 'Accept': 'application/json,text/plain,*/*' },
              body: typeof data === 'string' ? data : JSON.stringify(data)
            });
            if (sendsJson) {
              options.headers['Content-Type'] = 'application/json';
            }
            return Http.fetch(url, options);
          }
        }, {
          key: 'get',
          value: function get(url) {
            var options = arguments[1] === undefined ? {} : arguments[1];

            return Http._method('get', url, {}, options);
          }
        }, {
          key: 'post',
          value: function post(url) {
            var data = arguments[1] === undefined ? {} : arguments[1];
            var options = arguments[2] === undefined ? {} : arguments[2];

            return Http._method('post', url, data, options, true);
          }
        }, {
          key: 'put',
          value: function put(url) {
            var data = arguments[1] === undefined ? {} : arguments[1];
            var options = arguments[2] === undefined ? {} : arguments[2];

            return Http._method('put', url, data, options, true);
          }
        }, {
          key: 'delete',
          value: function _delete(url) {
            var data = arguments[1] === undefined ? {} : arguments[1];
            var options = arguments[2] === undefined ? {} : arguments[2];

            return Http._method('delete', url, data, options, true);
          }
        }, {
          key: 'patch',
          value: function patch(url) {
            var data = arguments[1] === undefined ? {} : arguments[1];
            var options = arguments[2] === undefined ? {} : arguments[2];

            return Http._method('patch', url, data, options, true);
          }
        }]);

        return Http;
      })();

      _export('Http', Http);
    }
  };
});