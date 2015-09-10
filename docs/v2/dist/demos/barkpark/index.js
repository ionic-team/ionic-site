System.register("index", ["angular2/forms", "ionic/util", "ionic/ionic"], function (_export) {
    "use strict";

    var FormBuilder, Validators, Log, App, IonicView, NavController, __decorate, __metadata, LoginPage, SignupPage, AppPage, StreamTab, PostDetail, SplashPage, IonicApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Forms) {
            FormBuilder = _angular2Forms.FormBuilder;
            Validators = _angular2Forms.Validators;
        }, function (_ionicUtil) {
            Log = _ionicUtil.Log;
        }, function (_ionicIonic) {
            App = _ionicIonic.App;
            IonicView = _ionicIonic.IonicView;
            NavController = _ionicIonic.NavController;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
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

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            LoginPage = (function () {
                function LoginPage(nav) {
                    _classCallCheck(this, LoginPage);

                    this.nav = nav;
                    Log.log('LOGIN PAGE', this);
                    var fb = new FormBuilder();
                    this.loginForm = fb.group({
                        email: ['', Validators.required],
                        password: ['', Validators.required]
                    });
                }

                _createClass(LoginPage, [{
                    key: "doLogin",
                    value: function doLogin(event) {
                        Log.log('Doing login');
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

            LoginPage = __decorate([IonicView({
                templateUrl: 'pages/login.html'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], LoginPage);

            SignupPage = (function () {
                function SignupPage(nav) {
                    _classCallCheck(this, SignupPage);

                    this.nav = nav;
                    Log.log('SIGNUP PAGE');
                    var fb = new FormBuilder();
                    this.signupForm = fb.group({
                        name: ['', Validators.required],
                        email: ['', Validators.required],
                        password: ['', Validators.required]
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
                        Log.log('Doing signup');
                        event.preventDefault();
                        console.log(this.signupForm.value);
                        this.nav.push(AppPage);
                    }
                }]);

                return SignupPage;
            })();

            _export("SignupPage", SignupPage);

            _export("SignupPage", SignupPage = __decorate([IonicView({
                templateUrl: 'pages/signup.html'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], SignupPage));

            AppPage = function AppPage(nav) {
                _classCallCheck(this, AppPage);

                this.nav = nav;
                this.streamTab = StreamTab;
            };

            _export("AppPage", AppPage);

            _export("AppPage", AppPage = __decorate([IonicView({
                templateUrl: 'pages/app.html'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], AppPage));

            StreamTab = (function () {
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

            StreamTab = __decorate([IonicView({
                templateUrl: 'pages/tabs/home.html'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], StreamTab);

            PostDetail = (function () {
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

            PostDetail = __decorate([IonicView({
                templateUrl: 'pages/post/detail.html'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], PostDetail);

            SplashPage = (function () {
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

            SplashPage = __decorate([IonicView({
                templateUrl: 'pages/splash.html'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], SplashPage);

            IonicApp = function IonicApp() {
                _classCallCheck(this, IonicApp);

                this.rootView = SplashPage;
            };

            IonicApp = __decorate([App({
                template: '<ion-nav [root]="rootView"></ion-nav>'
            }), __metadata('design:paramtypes', [])], IonicApp);
        }
    };
});