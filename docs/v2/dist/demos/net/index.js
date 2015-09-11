System.register("index", ["angular2/forms", "ionic/ionic"], function (_export) {
    "use strict";

    var Control, ControlGroup, App, Http, __decorate, __metadata, testUrl, testUrl404, IonicApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Forms) {
            Control = _angular2Forms.Control;
            ControlGroup = _angular2Forms.ControlGroup;
        }, function (_ionicIonic) {
            App = _ionicIonic.App;
            Http = _ionicIonic.Http;
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

            testUrl = 'https://ionic-api-tester.herokuapp.com/json';
            testUrl404 = 'https://ionic-api-tester.herokuapp.com/404';

            IonicApp = (function () {
                function IonicApp() {
                    _classCallCheck(this, IonicApp);

                    this.form = new ControlGroup({
                        requestData: new Control('')
                    });
                }

                _createClass(IonicApp, [{
                    key: "doGet",
                    value: function doGet() {
                        var _this = this;

                        Http.get('http://swapi.co/api/people/1').then(function (resp) {
                            _this.resp = resp;
                        }, function (err) {
                            _this.err = err;
                        });
                    }
                }, {
                    key: "doGet404",
                    value: function doGet404() {
                        var _this2 = this;

                        Http.get(testUrl404).then(function (resp) {
                            _this2.resp = resp;
                        }, function (err) {
                            _this2.err = err;
                        });
                    }
                }, {
                    key: "doPost",
                    value: function doPost() {
                        var _this3 = this;

                        var data = this.form.controls.requestData.value;
                        Http.post(testUrl, data).then(function (resp) {
                            _this3.resp = resp;
                        }, function (err) {
                            _this3.err = err;
                        });
                    }
                }, {
                    key: "doPut",
                    value: function doPut() {
                        var _this4 = this;

                        var data = this.form.controls.requestData.value;
                        Http.put(testUrl, data).then(function (resp) {
                            _this4.resp = resp;
                        }, function (err) {
                            _this4.err = err;
                        });
                    }
                }, {
                    key: "doDelete",
                    value: function doDelete() {
                        var _this5 = this;

                        var data = this.form.controls.requestData.value;
                        Http["delete"](testUrl, data).then(function (resp) {
                            _this5.resp = resp;
                        }, function (err) {
                            _this5.err = err;
                        });
                    }
                }, {
                    key: "doPatch",
                    value: function doPatch() {
                        var _this6 = this;

                        var data = this.form.controls.requestData.value;
                        Http.patch(testUrl, data).then(function (resp) {
                            _this6.resp = resp;
                        }, function (err) {
                            _this6.err = err;
                        });
                    }
                }]);

                return IonicApp;
            })();

            IonicApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [])], IonicApp);
        }
    };
});