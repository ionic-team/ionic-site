System.register("pages/segment", ["angular2/angular2", "ionic/ionic"], function (_export) {
  "use strict";

  var Validators, Control, ControlGroup, IonicView, __decorate, __metadata, SegmentPage;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_angular2Angular2) {
      Validators = _angular2Angular2.Validators;
      Control = _angular2Angular2.Control;
      ControlGroup = _angular2Angular2.ControlGroup;
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

      SegmentPage = function SegmentPage() {
        _classCallCheck(this, SegmentPage);

        /*
        var fb = new FormBuilder();
        this.form = fb.group({
          mapStyle: ['hybrid', Validators.required]
        });
        */
        this.mapStyle = new Control("hybrid", Validators.required);
        this.form = new ControlGroup({
          "mapStyle": this.mapStyle
        });
      };

      _export("SegmentPage", SegmentPage);

      _export("SegmentPage", SegmentPage = __decorate([IonicView({
        template: "\n  <ion-navbar *navbar><ion-title>Segment</ion-title></ion-navbar>\n\n  <ion-content class=\"padding\">\n    <h2>Segment</h2>\n    <p>\n      A segment is a radio-style filter bar to let the user toggle between\n      multiple, exclusive options.\n    </p>\n    <p>\n      Segments are useful for quick filtering, like switching the\n      the map display between street, hybrid, and satellite.\n    </p>\n\n    <form (submit)=\"doSubmit($event)\">\n\n      <div ng-control-group=\"form\">\n        <ion-segment [ng-form-control]=\"mapStyle\">\n          <ion-segment-button value=\"standard\" button>\n            Standard\n          </ion-segment-button>\n          <ion-segment-button value=\"hybrid\" button>\n            Hybrid\n          </ion-segment-button>\n          <ion-segment-button value=\"sat\" button>\n            Satellite\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n\n    Map mode: <b>{{form.controls.mapStyle.value}}</b>\n\n    <div [switch]=\"form.controls.mapStyle.value\">\n      <div *switch-when=\"'standard'\">\n        <h2>Standard</h2>\n      </div>\n      <div *switch-when=\"'hybrid'\">\n        <h2>Hybrid</h2>\n      </div>\n      <div *switch-when=\"'sat'\">\n        <h2>Satellite!!</h2>\n      </div>\n    </div>\n  </ion-content>\n  "
      }), __metadata('design:paramtypes', [])], SegmentPage));
    }
  };
});