System.register("index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, Storage, LocalStorage, SqlStorage, __decorate, __metadata, testUrl, testUrl404, IonicApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            Storage = _ionicIonic.Storage;
            LocalStorage = _ionicIonic.LocalStorage;
            SqlStorage = _ionicIonic.SqlStorage;
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

                    this.local = new Storage(LocalStorage);
                    this.sql = new Storage(SqlStorage);
                }

                _createClass(IonicApp, [{
                    key: "getLocal",
                    value: function getLocal() {
                        this.local.get('name').then(function (value) {
                            alert('Your name is: ' + value);
                        });
                    }
                }, {
                    key: "setLocal",
                    value: function setLocal() {
                        var name = prompt('Your name?');
                        this.local.set('name', name);
                    }
                }, {
                    key: "removeLocal",
                    value: function removeLocal() {
                        this.local.remove('name');
                    }
                }, {
                    key: "getSql",
                    value: function getSql() {
                        this.sql.get('name').then(function (value) {
                            alert('Your name is: ' + value);
                        }, function (errResult) {
                            console.error('Unable to get item from SQL db:', errResult);
                        });
                    }
                }, {
                    key: "setSql",
                    value: function setSql() {
                        var name = prompt('Your name?');
                        this.sql.set('name', name);
                    }
                }, {
                    key: "removeSql",
                    value: function removeSql() {
                        this.sql.remove('name');
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