"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require('angular2/angular2');

var _ionicUtil = require('ionic/util');

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key), void 0;
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

var LoginPage = (function () {
    function LoginPage(nav) {
        _classCallCheck(this, LoginPage);

        this.nav = nav;
        _ionicUtil.Log.log('LOGIN PAGE', this);
        var fb = new _angular2Angular2.FormBuilder();
        this.loginForm = fb.group({
            email: ['', _angular2Angular2.Validators.required],
            password: ['', _angular2Angular2.Validators.required]
        });
    }

    _createClass(LoginPage, [{
        key: "doLogin",
        value: function doLogin(event) {
            _ionicUtil.Log.log('Doing login');
            event.preventDefault();
            console.log(this.loginForm.value);
        }
    }, {
        key: "doSignup",
        value: function doSignup(event) {
            this.nav.push(SignupPage);
        }
    }]);

    return LoginPage;
})();
LoginPage = __decorate([(0, _ionicIonic.IonicView)({
    templateUrl: 'pages/login.html'
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _a || Object])], LoginPage);
var SignupPage = (function () {
    function SignupPage(nav) {
        _classCallCheck(this, SignupPage);

        this.nav = nav;
        _ionicUtil.Log.log('SIGNUP PAGE');
        var fb = new _angular2Angular2.FormBuilder();
        this.signupForm = fb.group({
            name: ['', _angular2Angular2.Validators.required],
            email: ['', _angular2Angular2.Validators.required],
            password: ['', _angular2Angular2.Validators.required]
        });
    }

    _createClass(SignupPage, [{
        key: "doLogin",
        value: function doLogin(event) {
            this.nav.pop();
        }
    }, {
        key: "doSignup",
        value: function doSignup(event) {
            _ionicUtil.Log.log('Doing signup');
            event.preventDefault();
            console.log(this.signupForm.value);
            this.nav.push(AppPage);
        }
    }]);

    return SignupPage;
})();
exports.SignupPage = SignupPage;
exports.SignupPage = SignupPage = __decorate([(0, _ionicIonic.IonicView)({
    templateUrl: 'pages/signup.html'
}), __metadata('design:paramtypes', [typeof (_b = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _b || Object])], SignupPage);
var AppPage = function AppPage(nav) {
    _classCallCheck(this, AppPage);

    this.nav = nav;
    this.streamTab = StreamTab;
};
exports.AppPage = AppPage;
exports.AppPage = AppPage = __decorate([(0, _ionicIonic.IonicView)({
    templateUrl: 'pages/app.html'
}), __metadata('design:paramtypes', [typeof (_c = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _c || Object])], AppPage);
var StreamTab = (function () {
    function StreamTab(nav) {
        _classCallCheck(this, StreamTab);

        this.nav = nav;
        this.posts = [{ 'title': 'Just barked my first bark' }, { 'title': 'Went poopy' }];
    }

    _createClass(StreamTab, [{
        key: "selectPost",
        value: function selectPost(post) {
            console.log('Select post', post);
            this.nav.push(PostDetail, {
                post: post
            }, {
                transition: '3dflip'
            });
        }
    }]);

    return StreamTab;
})();
StreamTab = __decorate([(0, _ionicIonic.IonicView)({
    templateUrl: 'pages/tabs/home.html'
}), __metadata('design:paramtypes', [typeof (_d = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _d || Object])], StreamTab);
var PostDetail = (function () {
    function PostDetail(nav) {
        _classCallCheck(this, PostDetail);

        this.nav = nav;
        this.title = 'Hello';
    }

    _createClass(PostDetail, [{
        key: "selectItem",
        value: function selectItem() {
            this.nav.push(PostDetailTab);
        }
    }]);

    return PostDetail;
})();
PostDetail = __decorate([(0, _ionicIonic.IonicView)({
    templateUrl: 'pages/post/detail.html'
}), __metadata('design:paramtypes', [typeof (_e = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _e || Object])], PostDetail);
var SplashPage = (function () {
    function SplashPage(nav) {
        _classCallCheck(this, SplashPage);

        this.nav = nav;
        window.nav = nav;
    }

    _createClass(SplashPage, [{
        key: "doLogin",
        value: function doLogin() {
            this.nav.push(LoginPage);
        }
    }]);

    return SplashPage;
})();
SplashPage = __decorate([(0, _ionicIonic.IonicView)({
    templateUrl: 'pages/splash.html'
}), __metadata('design:paramtypes', [typeof (_f = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _f || Object])], SplashPage);
var IonicApp = function IonicApp() {
    _classCallCheck(this, IonicApp);

    this.rootView = SplashPage;
};
IonicApp = __decorate([(0, _ionicIonic.App)({
    template: '<ion-nav [root]="rootView"></ion-nav>'
}), __metadata('design:paramtypes', [])], IonicApp);
var _a, _b, _c, _d, _e, _f;