System.register("index", ["angular2/angular2", "angular2/forms", "ionic/ionic", "./geo", "./weather", "./flickr"], function (_export) {
    "use strict";

    var Component, View, NgIf, NgClass, ElementRef, FormBuilder, Validators, FORM_DIRECTIVES, App, IonicView, Modal, Geo, Weather, Flickr, __decorate, __metadata, SettingsModal, WEATHER_ICONS, WeatherIcon, CurrentTime, CurrentWeather, BackgroundCycler, WeatherApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            View = _angular2Angular2.View;
            NgIf = _angular2Angular2.NgIf;
            NgClass = _angular2Angular2.NgClass;
            ElementRef = _angular2Angular2.ElementRef;
        }, function (_angular2Forms) {
            FormBuilder = _angular2Forms.FormBuilder;
            Validators = _angular2Forms.Validators;
            FORM_DIRECTIVES = _angular2Forms.FORM_DIRECTIVES;
        }, function (_ionicIonic) {
            App = _ionicIonic.App;
            IonicView = _ionicIonic.IonicView;
            Modal = _ionicIonic.Modal;
        }, function (_geo) {
            Geo = _geo.Geo;
        }, function (_weather) {
            Weather = _weather.Weather;
        }, function (_flickr) {
            Flickr = _flickr.Flickr;
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

            SettingsModal = function SettingsModal(fb) {
                _classCallCheck(this, SettingsModal);

                this.settingsForm = fb.group({
                    mapStyle: ['hybrid', Validators.required]
                });
            };

            _export("SettingsModal", SettingsModal);

            _export("SettingsModal", SettingsModal = __decorate([IonicView({
                template: "<ion-view id=\"settings-modal\">\n    <ion-toolbar><ion-title>Settings</ion-title></ion-toolbar>\n    <ion-content padding>\n      <form (submit)=\"doSubmit($event)\" [ng-form-model]=\"settingsForm\">\n        <ion-list>\n          <ion-input ion-item>\n            <ion-label>Units</ion-label>\n            <!--\n            <ion-segment ng-control=\"units\">\n              <ion-segment-button value=\"standard\" button>\n                &deg;F\n              </ion-segment-button>\n              <ion-segment-button value=\"standard\" button>\n                &deg;C\n              </ion-segment-button>\n            </ion-segment>\n            -->\n          </ion-input>\n        </ion-list>\n      </form>\n    </ion-content>\n  </ion-view>",
                directives: [FORM_DIRECTIVES]
            }), __metadata('design:paramtypes', [typeof FormBuilder !== 'undefined' && FormBuilder || Object])], SettingsModal));
            WEATHER_ICONS = {
                'partlycloudy': 'ion-ios-partlysunny-outline',
                'mostlycloudy': 'ion-ios-partlysunny-outline',
                'cloudy': 'ion-ios-cloudy-outline',
                'rain': 'ion-ios-rainy-outline',
                'tstorms': 'ion-ios-thunderstorm-outline',
                'sunny': 'ion-ios-sunny-outline',
                'clear-day': 'ion-ios-sunny-outline',
                'nt_clear': 'ion-ios-moon-outline',
                'clear-night': 'ion-ios-moon-outline'
            };

            WeatherIcon = (function () {
                function WeatherIcon() {
                    _classCallCheck(this, WeatherIcon);
                }

                _createClass(WeatherIcon, [{
                    key: "onAllChangesDone",
                    value: function onAllChangesDone(data) {
                        var icon = this.icon;
                        if (icon in WEATHER_ICONS) {
                            this.weatherIcon = WEATHER_ICONS[icon];
                        } else {
                            this.weatherIcon = WEATHER_ICONS['cloudy'];
                        }
                    }
                }]);

                return WeatherIcon;
            })();

            _export("WeatherIcon", WeatherIcon);

            _export("WeatherIcon", WeatherIcon = __decorate([Component({
                selector: 'weather-icon',
                properties: ['icon']
            }), View({
                template: '<i class="icon" [ng-class]="weatherIcon"></i>',
                directives: [NgClass]
            }), __metadata('design:paramtypes', [])], WeatherIcon));

            CurrentTime = (function () {
                function CurrentTime() {
                    _classCallCheck(this, CurrentTime);
                }

                _createClass(CurrentTime, [{
                    key: "onInit",
                    value: function onInit() {
                        if (this.localtz) {
                            this.currentTime = new Date();
                        }
                    }
                }]);

                return CurrentTime;
            })();

            _export("CurrentTime", CurrentTime);

            _export("CurrentTime", CurrentTime = __decorate([Component({
                selector: 'current-time',
                properties: ['localtz']
            }), View({
                template: '<span class="current-time">{{currentTime}}</span>'
            }), __metadata('design:paramtypes', [])], CurrentTime));

            CurrentWeather = (function () {
                function CurrentWeather(elementRef) {
                    _classCallCheck(this, CurrentWeather);

                    this.elementRef = elementRef;
                    /*
                    $rootScope.$on('settings.changed', function(settings) {
                      var units = Settings.get('tempUnits');
                           if($scope.forecast) {
                             var forecast = $scope.forecast;
                        var current = $scope.current;
                             if(units == 'f') {
                          $scope.highTemp = forecast.forecastday[0].high.fahrenheit;
                          $scope.lowTemp = forecast.forecastday[0].low.fahrenheit;
                          $scope.currentTemp = Math.floor(current.temp_f);
                        } else {
                          $scope.highTemp = forecast.forecastday[0].high.celsius;
                          $scope.lowTemp = forecast.forecastday[0].low.celsius;
                          $scope.currentTemp = Math.floor(current.temp_c);
                        }
                      }
                    });
                    */
                    // Delay so we are in the DOM and can calculate sizes
                }

                _createClass(CurrentWeather, [{
                    key: "onInit",
                    value: function onInit() {
                        var windowHeight = window.innerHeight;
                        var thisHeight = this.elementRef.nativeElement.offsetHeight;
                        var headerHeight = document.querySelector('#header').offsetHeight;
                        this.elementRef.nativeElement.style.paddingTop = windowHeight - 250 + 'px';
                        /*
                        document.querySelector('.content')).css('-webkit-overflow-scrolling', 'auto');
                        $timeout(function() {
                          angular.element(document.querySelector('.content')).css('-webkit-overflow-scrolling', 'touch');
                        }, 50);
                        */
                    }
                }, {
                    key: "onAllChangesDone",
                    value: function onAllChangesDone() {
                        var units = 'f'; //Settings.get('tempUnits');
                        var current = this.current;
                        console.log('ALL CHANGES DONE', current);
                        if (current && current.currently) {
                            if (units == 'f') {
                                this.currentTemp = Math.floor(current.currently.temperature);
                            } else {
                                this.currentTemp = Math.floor(current.currently.temperature);
                            }
                            if (units == 'f') {
                                this.highTemp = Math.floor(current.daily.data[0].temperatureMax);
                                this.lowTemp = Math.floor(current.daily.data[0].temperatureMin);
                            } else {
                                this.highTemp = Math.floor(current.daily.data[0].temperatureMax);
                                this.lowTemp = Math.floor(current.daily.data[0].temperatureMin);
                            }
                        }
                    }
                }]);

                return CurrentWeather;
            })();

            _export("CurrentWeather", CurrentWeather);

            _export("CurrentWeather", CurrentWeather = __decorate([Component({
                selector: 'current-weather',
                properties: ['current']
            }), View({
                templateUrl: 'current-weather.html',
                directives: [NgIf]
            }), __metadata('design:paramtypes', [typeof ElementRef !== 'undefined' && ElementRef || Object])], CurrentWeather));

            BackgroundCycler = (function () {
                function BackgroundCycler(elementRef) {
                    _classCallCheck(this, BackgroundCycler);

                    this.elementRef = elementRef;
                    this.el = elementRef.nativeElement;
                }

                _createClass(BackgroundCycler, [{
                    key: "onInit",
                    value: function onInit() {
                        this.imageEl = this.el.children[0];
                    }
                }, {
                    key: "onAllChangesDone",
                    value: function onAllChangesDone() {
                        var item = this.image;
                        if (item) {
                            var url = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_z.jpg";
                            this.imageEl.style.backgroundImage = 'url(' + url + ')';
                        }
                    }
                }]);

                return BackgroundCycler;
            })();

            _export("BackgroundCycler", BackgroundCycler);

            _export("BackgroundCycler", BackgroundCycler = __decorate([Component({
                selector: 'background-cycler',
                properties: ['image']
            }), View({
                template: '<div class="bg-image"></div>'
            }), __metadata('design:paramtypes', [typeof ElementRef !== 'undefined' && ElementRef || Object])], BackgroundCycler));

            WeatherApp = (function () {
                function WeatherApp(modal) {
                    _classCallCheck(this, WeatherApp);

                    this.modal = modal;
                    this.currentLocationString = 'Madison, WI';
                    this.activeBgImageIndex = 0;
                }

                _createClass(WeatherApp, [{
                    key: "onInit",
                    value: function onInit() {
                        this.refreshData();
                    }
                }, {
                    key: "showSettings",
                    value: function showSettings() {
                        var _this = this;

                        this.modal.open(SettingsModal).then(function (settingsModal) {
                            _this.settingsModal = settingsModal;
                        });
                    }
                }, {
                    key: "getBackgroundImage",
                    value: function getBackgroundImage(lat, lng, locString) {
                        var _this2 = this;

                        Flickr.search(locString, lat, lng).then(function (resp) {
                            var photos = resp.photos;
                            if (photos.photo.length) {
                                _this2.bgImages = photos.photo;
                                _this2.cycleBgImages();
                            }
                        }, function (error) {
                            console.error('Unable to get Flickr images', error);
                        });
                    }
                }, {
                    key: "getCurrent",
                    value: function getCurrent(lat, lng, locString) {
                        var _this3 = this;

                        Weather.getAtLocation(lat, lng).then(function (resp) {
                            _this3.current = resp;
                            // TODO: This should be in a custom pipe
                            var c = undefined,
                                d = undefined,
                                h = undefined;
                            for (var i = 0; i < _this3.current.hourly.data.length; i++) {
                                c = _this3.current.hourly.data[i];
                                var t = c.temperature;
                                d = new Date(c.time * 1000);
                                c.temperature = Math.floor(t);
                                h = d.getHours() % 12;
                                h = h == 0 ? 12 : h;
                                c.time_date = h + ' ' + (d.getHours() < 12 ? 'AM' : 'PM');
                            }
                            for (var i = 0; i < _this3.current.daily.data.length; i++) {
                                c = _this3.current.daily.data[i];
                                var max = c.temperatureMax;
                                var min = c.temperatureMin;
                                c.temperatureMax = Math.floor(max);
                                c.temperatureMin = Math.floor(min);
                                c.time_date = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(c.time * 1000).getDay()];
                            }
                            console.log('GOT CURRENT', _this3.current);
                        }, function (error) {
                            alert('Unable to get current conditions');
                            console.error(error);
                        });
                    }
                }, {
                    key: "cycleBgImages",
                    value: function cycleBgImages() {
                        var _this4 = this;

                        setTimeout(function () {
                            if (_this4.bgImages) {
                                _this4.activeBgImage = _this4.bgImages[_this4.activeBgImageIndex++ % _this4.bgImages.length];
                            }
                        });
                    }
                }, {
                    key: "refreshData",
                    value: function refreshData() {
                        var _this5 = this;

                        Geo.getLocation().then(function (position) {
                            var lat = position.coords.latitude;
                            var lng = position.coords.longitude;
                            Geo.reverseGeocode(lat, lng).then(function (locString) {
                                _this5.currentLocationString = locString;
                                _this5.getBackgroundImage(lat, lng, locString);
                            });
                            _this5.getCurrent(lat, lng);
                        }, function (error) {
                            alert('Unable to get current location: ' + error);
                        });
                    }
                }]);

                return WeatherApp;
            })();

            WeatherApp = __decorate([App({
                templateUrl: 'main.html',
                directives: [CurrentWeather, WeatherIcon, BackgroundCycler]
            }), __metadata('design:paramtypes', [typeof Modal !== 'undefined' && Modal || Object])], WeatherApp);
        }
    };
});