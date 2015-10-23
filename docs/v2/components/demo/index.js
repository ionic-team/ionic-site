"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _menusMenus = require('./menus/menus');

var _actionSheetActionSheet = require('./actionSheet/actionSheet');

var _helpers = require('./helpers');

var helpers = _interopRequireWildcard(_helpers);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoApp = (function () {
    function DemoApp(app, platform) {
        var _this = this;

        _classCallCheck(this, DemoApp);

        this.app = app;
        this.platform = platform;
        this.androidAttribute = helpers.AndroidAttribute;
        this.pages = [{ title: 'Home', component: _menusMenus.PageOne }, { title: 'Friends', component: _menusMenus.PageTwo }, { title: 'Events', component: _menusMenus.PageThree }];
        this.platform.ready().then(function () {
            window.addEventListener('message', function (e) {
                zone.run(function () {
                    if (e.data) {
                        var data = JSON.parse(e.data);
                        if (data.hash) {
                            _this.nextPage = helpers.getPageFor(data.hash.replace('#', ''));
                        } else {
                            _this.nextPage = _actionSheetActionSheet.ActionSheetPage;
                        }
                        var nav = _this.app.getComponent('nav');
                        helpers.debounce(nav.setRoot(_this.nextPage), 500, true);
                    }
                });
            });
            window.parent.postMessage(_this.platform.is('ios') ? "ios" : "android", "*");
        });
    }

    _createClass(DemoApp, [{
        key: "openPage",
        value: function openPage(page) {
            // close the menu when clicking a link from the menu
            this.app.getComponent('leftMenu').close();
            // Reset the content nav to have just this page
            // we wouldn't want the back button to show in this scenario
            var nav = this.app.getComponent('nav');
            nav.setRoot(page.component);
        }
    }]);

    return DemoApp;
})();
DemoApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'app.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.Platform !== 'undefined' && _ionicIonic.Platform) === 'function' && _b || Object])], DemoApp);
var _a, _b;