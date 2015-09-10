System.register("pages/table-search", ["angular2/angular2", "angular2/forms", "ionic/ionic"], function (_export) {
    "use strict";

    var Component, FormBuilder, Validators, IonicView, __decorate, __metadata, TableSearchPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function randomTitle() {
        var items = ['Pizza', 'Pumpkin', 'Apple', 'Bologna', 'Durian', 'Banana', 'Meat pie'];
        return items[Math.floor(Math.random() * items.length)];
    }
    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
        }, function (_angular2Forms) {
            FormBuilder = _angular2Forms.FormBuilder;
            Validators = _angular2Forms.Validators;
        }, function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
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

            TableSearchPage = (function () {
                function TableSearchPage(formBuilder) {
                    _classCallCheck(this, TableSearchPage);

                    console.log('IonicApp Start');
                    this.form = formBuilder.group({
                        searchQuery: ['', Validators.required]
                    });
                    this.query = 'HELLO';
                    this.items = [];
                    for (var i = 0; i < 100; i++) {
                        this.items.push({
                            title: randomTitle()
                        });
                    }
                }

                _createClass(TableSearchPage, [{
                    key: "getItems",
                    value: function getItems() {
                        var q = this.form.controls.searchQuery.value;
                        if (q.trim() == '') {
                            return this.items;
                        }
                        return this.items.filter(function (v) {
                            if (v.title.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
                                return true;
                            }
                            return false;
                        });
                    }
                }]);

                return TableSearchPage;
            })();

            _export("TableSearchPage", TableSearchPage);

            _export("TableSearchPage", TableSearchPage = __decorate([Component({
                selector: 'ion-view',
                appInjector: [FormBuilder]
            }), IonicView({
                template: "\n  <ion-navbar *navbar><ion-title>Table Search</ion-title></ion-navbar>\n\n  <ion-content>\n    <form (^submit)=\"doSearch($event)\" [control-group]=\"form\">\n\n      <ion-search-bar control=\"searchQuery\"></ion-search-bar>\n\n      <ion-list #list>\n\n        <ion-item *ng-for=\"#item of getItems()\"><!--items | search:form.controls.searchControl.value-->\n          {{item.title}}\n        </ion-item>\n      </ion-list>\n    </form>\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof FormBuilder !== 'undefined' && FormBuilder || Object])], TableSearchPage));
        }
    };
});