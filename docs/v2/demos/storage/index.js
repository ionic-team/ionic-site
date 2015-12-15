"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var testUrl = 'https://ionic-api-tester.herokuapp.com/json';
var testUrl404 = 'https://ionic-api-tester.herokuapp.com/404';
var IonicApp = (function () {
    function IonicApp() {
        _classCallCheck(this, IonicApp);

        this.local = new _ionicIonic.Storage(_ionicIonic.LocalStorage);
        this.sql = new _ionicIonic.Storage(_ionicIonic.SqlStorage);
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
IonicApp = __decorate([(0, _ionicIonic.App)({
    templateUrl: 'main.html'
}), __metadata('design:paramtypes', [])], IonicApp);