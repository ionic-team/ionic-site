var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var menus_1 = require('./menus/menus');
var actionSheets = require('./action-sheets/action-sheets');
var helpers = require('./helpers');
var DemoApp = (function () {
    function DemoApp(app, platform) {
        var _this = this;
        this.app = app;
        this.platform = platform;
        this.androidAttribute = helpers.AndroidAttribute;
        this.pages = [
            { title: 'Home', component: menus_1.PageOne },
            { title: 'Friends', component: menus_1.PageTwo },
            { title: 'Events', component: menus_1.PageThree }
        ];
        this.platform.ready().then(function () {
            window.addEventListener('message', function (e) {
                //TODO(@drewrygh)
                zone.run(function () {
                    if (e.data) {
                        var data;
                        try {
                            data = JSON.parse(e.data);
                        }
                        catch (e) {
                            console.error(e);
                        }
                        if (data.hash) {
                            _this.nextPage = helpers.getPageFor(data.hash.replace('#', ''));
                            if (data.hash !== 'menus') {
                                _this.app.getComponent('leftMenu').enable(false);
                            }
                        }
                        else {
                            _this.nextPage = actionSheets.BasicPage;
                        }
                        var nav = _this.app.getComponent('nav');
                        helpers.debounce(nav.setRoot(_this.nextPage), 60, false);
                    }
                });
            });
            window.parent.postMessage(_this.platform.is('ios') ? "ios" : "android", "*");
            if (helpers.hasScrollbar() === true) {
                setTimeout(function () {
                    var body = document.getElementsByTagName('body')[0];
                    body.className = body.className + ' has-scrollbar';
                }, 500);
            }
        });
    }
    DemoApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        // debugger;
        this.app.getComponent('leftMenu').close();
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        var nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    };
    DemoApp = __decorate([
        ionic_1.App({
            templateUrl: 'app.html',
            config: {
                platforms: {
                    android: {
                        activator: 'ripple'
                    }
                }
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.IonicApp !== 'undefined' && ionic_1.IonicApp) === 'function' && _a) || Object, (typeof (_b = typeof ionic_1.Platform !== 'undefined' && ionic_1.Platform) === 'function' && _b) || Object])
    ], DemoApp);
    return DemoApp;
    var _a, _b;
})();