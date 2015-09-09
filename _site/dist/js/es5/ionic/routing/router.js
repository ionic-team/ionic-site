System.register('ionic/routing/router', [], function (_export) {
  'use strict';

  var RouterController, Route, Routable, Router;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      RouterController = (function () {
        function RouterController() {
          _classCallCheck(this, RouterController);

          this.routes = [];
          console.log('Router controller built');
        }

        _createClass(RouterController, [{
          key: '_buildRouteParams',
          value: function _buildRouteParams(routeParams) {
            routeParams._route = { path: window.location.hash.slice(1) };
            return routeParams;
          }
        }, {
          key: '_noMatch',
          value: function _noMatch() {
            return {};
          }
        }, {
          key: 'setNavController',
          value: function setNavController(navController) {
            this.rootNavController = navController;
            console.log('Root nav controller set', navController);
            this.run();
          }
        }, {
          key: 'getCurrentPath',
          value: function getCurrentPath() {
            var hash = window.location.hash;
            var path = hash.slice(1);
            return path;
          }
        }, {
          key: 'push',
          value: function push(componentClass, params) {
            var _this = this;

            if (!this.rootNavController) {
              console.error('Router: No root nav controller to push matching route.');
              return;
            }
            console.log('Router pushing', componentClass, params);
            setTimeout(function () {
              _this.rootNavController.push(componentClass, params);
            });
          }
        }, {
          key: 'run',
          value: function run() {
            this.match();
          }
        }, {
          key: 'matchOne',
          value: function matchOne(route) {
            console.log('Match one', route);
            var path = this.getCurrentPath();
            var routeParams = route.match(path);
            if (routeParams !== false) {
              route.exec(this._buildRouteParams(routeParams));
              if (route.url && !route.quiet) {
                this.emit(route.url);
              }
              return;
            }
          }
        }, {
          key: 'match',
          value: function match() {
            var path = this.getCurrentPath();
            var routeParams = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var route = _step.value;

                routeParams = route.match(path);
                if (routeParams !== false) {
                  route.exec(this._buildRouteParams(routeParams));
                  return;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return this._noMatch();
          }
        }, {
          key: 'emit',
          value: function emit(path) {
            window.location.hash = path;
          }
        }, {
          key: 'on',
          value: function on(path, cb) {
            var route = new Route(path, cb);
            this.routes.push(route);
            return route;
          }
        }, {
          key: 'otherwise',
          value: function otherwise(path) {
            var routeParams = {};
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.routes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var route = _step2.value;

                if ((routeParams = route.match(path)) !== false) {
                  console.log('OTHERWISE: route matched:', route.url);
                  route.exec(routeParams);
                  this.emit(route.url);
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                  _iterator2['return']();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }]);

        return RouterController;
      })();

      _export('RouterController', RouterController);

      Route = (function () {
        function Route(url, handler) {
          _classCallCheck(this, Route);

          this.url = url;
          this.handler = handler;
        }

        _createClass(Route, [{
          key: 'match',
          value: function match(path) {
            var routeParams = {};
            if (this.url == path) {
              return {};
            } else if (routeParams = this._matchParams(path)) {
              return routeParams;
            }
            return false;
          }
        }, {
          key: '_matchParams',
          value: function _matchParams(path) {
            var parts = path.split('/');
            var routeParts = this.url.split('/');
            var routeParams = {};
            if (parts.length !== routeParts.length) {
              return false;
            }
            var rp = undefined,
                pp = undefined;
            for (var i in parts) {
              pp = parts[i];
              rp = routeParts[i];
              if (rp[0] == ':') {
                routeParams[rp.slice(1)] = pp;
              } else if (pp !== rp) {
                return false;
              }
            }
            return routeParams;
          }
        }, {
          key: 'exec',
          value: function exec(matchParams) {
            this.handler(matchParams);
          }
        }]);

        return Route;
      })();

      _export('Route', Route);

      Routable = (function () {
        function Routable(componentClass, routeInfo) {
          var _this2 = this;

          _classCallCheck(this, Routable);

          this.componentClass = componentClass;
          this.routeInfo = routeInfo;
          Router.on(this.routeInfo.url, function (routeParams) {
            console.log('Routable matched', routeParams, _this2.componentClass);
            Router.push(_this2.componentClass, routeParams);
          });
          componentClass.router = this;
        }

        _createClass(Routable, [{
          key: 'invoke',
          value: function invoke(componentInstance) {
            var _this3 = this;

            this.componentInstance = componentInstance;
            componentInstance._viewWillEnter.observer({ next: function next() {
                Router.emit(_this3.routeInfo.url);
              } });
            return this;
          }
        }]);

        return Routable;
      })();

      _export('Routable', Routable);

      Router = new RouterController();

      _export('Router', Router);

      _export('Route', Route);

      _export('Routable', Routable);
    }
  };
});