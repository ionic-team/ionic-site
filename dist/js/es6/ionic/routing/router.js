export class RouterController {
  constructor() {
    this.routes = [];
    console.log('Router controller built');
  }
  _buildRouteParams(routeParams) {
    routeParams._route = {path: window.location.hash.slice(1)};
    return routeParams;
  }
  _noMatch() {
    return {};
  }
  setNavController(navController) {
    this.rootNavController = navController;
    console.log('Root nav controller set', navController);
    this.run();
  }
  getCurrentPath() {
    let hash = window.location.hash;
    let path = hash.slice(1);
    return path;
  }
  push(componentClass, params) {
    if (!this.rootNavController) {
      console.error('Router: No root nav controller to push matching route.');
      return;
    }
    console.log('Router pushing', componentClass, params);
    setTimeout(() => {
      this.rootNavController.push(componentClass, params);
    });
  }
  run() {
    this.match();
  }
  matchOne(route) {
    console.log('Match one', route);
    let path = this.getCurrentPath();
    let routeParams = route.match(path);
    if (routeParams !== false) {
      route.exec(this._buildRouteParams(routeParams));
      if (route.url && !route.quiet) {
        this.emit(route.url);
      }
      return;
    }
  }
  match() {
    let path = this.getCurrentPath();
    let routeParams = {};
    for (let route of this.routes) {
      routeParams = route.match(path);
      if (routeParams !== false) {
        route.exec(this._buildRouteParams(routeParams));
        return;
      }
    }
    return this._noMatch();
  }
  emit(path) {
    window.location.hash = path;
  }
  on(path, cb) {
    let route = new Route(path, cb);
    this.routes.push(route);
    return route;
  }
  otherwise(path) {
    let routeParams = {};
    for (let route of this.routes) {
      if ((routeParams = route.match(path)) !== false) {
        console.log('OTHERWISE: route matched:', route.url);
        route.exec(routeParams);
        this.emit(route.url);
      }
    }
  }
}
export class Route {
  constructor(url, handler) {
    this.url = url;
    this.handler = handler;
  }
  match(path) {
    let routeParams = {};
    if (this.url == path) {
      return {};
    } else if ((routeParams = this._matchParams(path))) {
      return routeParams;
    }
    return false;
  }
  _matchParams(path) {
    var parts = path.split('/');
    var routeParts = this.url.split('/');
    var routeParams = {};
    if (parts.length !== routeParts.length) {
      return false;
    }
    let rp,
        pp;
    for (let i in parts) {
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
  exec(matchParams) {
    this.handler(matchParams);
  }
}
export class Routable {
  constructor(componentClass, routeInfo) {
    this.componentClass = componentClass;
    this.routeInfo = routeInfo;
    Router.on(this.routeInfo.url, (routeParams) => {
      console.log('Routable matched', routeParams, this.componentClass);
      Router.push(this.componentClass, routeParams);
    });
    componentClass.router = this;
  }
  invoke(componentInstance) {
    this.componentInstance = componentInstance;
    componentInstance._viewWillEnter.observer({next: () => {
        Router.emit(this.routeInfo.url);
      }});
    return this;
  }
}
var Router = new RouterController();
export {Router, Route, Routable};
