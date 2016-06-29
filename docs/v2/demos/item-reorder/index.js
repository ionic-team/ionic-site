"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ApiDemoPage = (function () {
    function ApiDemoPage(nav) {
        this.nav = nav;
        this.editButton = 'Edit';
        this.editing = false;
        this.songs = [
            {
                title: 'Everything Beta',
                band: 'Phoria',
                album: 'Volition'
            },
            {
                title: 'Hello',
                band: 'Adele',
                album: '25'
            },
            {
                title: 'Bohemian Rhapsody',
                band: 'Queen',
                album: 'A Night at the Opera'
            },
            {
                title: 'Don\'t Stop Believin\'',
                band: 'Journey',
                album: 'Escape'
            },
            {
                title: 'Smells Like Teen Spirit',
                band: 'Nirvana',
                album: 'Nevermind'
            },
            {
                title: 'All You Need Is Love',
                band: 'The Beatles',
                album: 'Magical Mystery Tour'
            },
            {
                title: 'Hotel California',
                band: 'The Eagles',
                album: 'Hotel California'
            },
            {
                title: 'The Hand That Feeds',
                band: 'Nine Inch Nails',
                album: 'With Teeth'
            },
            {
                title: 'Who Are You',
                band: 'The Who',
                album: 'Who Are You'
            }];
    }
    ApiDemoPage.prototype.toggleEdit = function () {
        this.editing = !this.editing;
        if (this.editing) {
            this.editButton = 'Done';
        }
        else {
            this.editButton = 'Edit';
        }
    };
    ApiDemoPage.prototype.reorderData = function (indexes) {
        this.songs = ionic_angular_1.reorderArray(this.songs, indexes);
    };
    ApiDemoPage = __decorate([
        core_1.Component({
            templateUrl: 'main.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_angular_1.NavController !== 'undefined' && ionic_angular_1.NavController) === 'function' && _a) || Object])
    ], ApiDemoPage);
    return ApiDemoPage;
    var _a;
}());
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.root = ApiDemoPage;
    }
    ApiDemoApp = __decorate([
        core_1.Component({
            template: '<ion-nav [root]="root"></ion-nav>'
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
}());
ionic_angular_1.ionicBootstrap(ApiDemoApp);