System.register("pages/list-group", ["ionic/ionic", "../sink-page"], function (_export) {
    "use strict";

    var IonicApp, IonicView, SinkPage, __decorate, __metadata, ListGroupPage;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_ionicIonic) {
            IonicApp = _ionicIonic.IonicApp;
            IonicView = _ionicIonic.IonicView;
        }, function (_sinkPage) {
            SinkPage = _sinkPage.SinkPage;
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

            ListGroupPage = (function (_SinkPage) {
                _inherits(ListGroupPage, _SinkPage);

                function ListGroupPage(app) {
                    _classCallCheck(this, ListGroupPage);

                    _get(Object.getPrototypeOf(ListGroupPage.prototype), "constructor", this).call(this, app);
                    this.groups = [];
                    var letters = "abcdefghijklmnopqrstuvwxyz".split('');
                    for (var i = 0; i < letters.length; i++) {
                        var group = [];
                        for (var j = 0; j < 10; j++) {
                            group.push({
                                title: letters[i] + j
                            });
                        }
                        this.groups.push({
                            title: letters[i].toUpperCase(),
                            items: group
                        });
                    }
                }

                return ListGroupPage;
            })(SinkPage);

            _export("ListGroupPage", ListGroupPage);

            _export("ListGroupPage", ListGroupPage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (^click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>List Groups</ion-title></ion-navbar>\n\n  <ion-content>\n    <ion-list inset>\n      <ion-item-group *ng-for=\"#group of groups\">\n        <ion-item-group-title>{{group.title}}</ion-item-group-title>\n        <ion-item *ng-for=\"#item of group.items\">\n          {{item.title}}\n        </ion-item>\n      </ion-item-group>\n\n    </ion-list>\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object])], ListGroupPage));
        }
    };
});