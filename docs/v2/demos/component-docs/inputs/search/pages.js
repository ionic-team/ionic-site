"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _angular2Angular2 = require('angular2/angular2');

var _helpers = require('../../helpers');

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
var SearchPage = (function () {
    function SearchPage() {
        _classCallCheck(this, SearchPage);

        this.searchQuery = '';
        this.items = ['Amsterdam', 'Bogota', 'Buenos Aires', 'Cairo', 'Dhaka', 'Edinburgh', 'Geneva', 'Genoa', 'Glasglow', 'Hanoi', 'Hong Kong', 'Islamabad', 'Istanbul', 'Jakarta', 'Kiel', 'Kyoto', 'Le Havre', 'Lebanon', 'Lhasa', 'Lima', 'London', 'Los Angeles', 'Madrid', 'Manila', 'New York', 'Olympia', 'Oslo', 'Panama City', 'Peking', 'Philadelphia', 'San Francisco', 'Seoul', 'Taipeh', 'Tel Aviv', 'Tokio', 'Uelzen', 'Washington'];
    }

    _createClass(SearchPage, [{
        key: "getItems",
        value: function getItems() {
            var q = this.searchQuery;
            if (q.trim() == '') {
                return this.items;
            }
            return this.items.filter(function (v) {
                if (v.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
                    return true;
                }
                return false;
            });
        }
    }]);

    return SearchPage;
})();
exports.SearchPage = SearchPage;
exports.SearchPage = SearchPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'inputs/search/template.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return _helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [])], SearchPage);