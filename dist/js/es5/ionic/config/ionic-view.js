System.register('ionic/config/ionic-view', ['angular2/angular2', 'angular2/src/core/annotations_impl/view', 'ionic/ionic'], function (_export) {
  'use strict';

  var coreDirectives, View, Aside, Content, Refresher, Slides, Slide, SlidePager, Tabs, Tab, List, Item, Icon, Checkbox, Switch, Label, Input, Segment, SegmentButton, SegmentControlValueAccessor, RadioGroup, RadioButton, SearchBar, Nav, NavbarTemplate, Navbar, NavPush, NavPop, IonicView;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2Angular2) {
      coreDirectives = _angular2Angular2.coreDirectives;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_ionicIonic) {
      Aside = _ionicIonic.Aside;
      Content = _ionicIonic.Content;
      Refresher = _ionicIonic.Refresher;
      Slides = _ionicIonic.Slides;
      Slide = _ionicIonic.Slide;
      SlidePager = _ionicIonic.SlidePager;
      Tabs = _ionicIonic.Tabs;
      Tab = _ionicIonic.Tab;
      List = _ionicIonic.List;
      Item = _ionicIonic.Item;
      Icon = _ionicIonic.Icon;
      Checkbox = _ionicIonic.Checkbox;
      Switch = _ionicIonic.Switch;
      Label = _ionicIonic.Label;
      Input = _ionicIonic.Input;
      Segment = _ionicIonic.Segment;
      SegmentButton = _ionicIonic.SegmentButton;
      SegmentControlValueAccessor = _ionicIonic.SegmentControlValueAccessor;
      RadioGroup = _ionicIonic.RadioGroup;
      RadioButton = _ionicIonic.RadioButton;
      SearchBar = _ionicIonic.SearchBar;
      Nav = _ionicIonic.Nav;
      NavbarTemplate = _ionicIonic.NavbarTemplate;
      Navbar = _ionicIonic.Navbar;
      NavPush = _ionicIonic.NavPush;
      NavPop = _ionicIonic.NavPop;
    }],
    execute: function () {
      IonicView = (function (_View) {
        function IonicView(config) {
          _classCallCheck(this, IonicView);

          var directives = [coreDirectives, Aside, Content, Refresher, List, Item, Slides, Slide, SlidePager, Tabs, Tab, Icon, Segment, SegmentButton, SegmentControlValueAccessor, Nav, NavbarTemplate, Navbar, NavPush, NavPop];
          config.directives = (config.directives || []).concat(directives);
          _get(Object.getPrototypeOf(IonicView.prototype), 'constructor', this).call(this, config);
        }

        _inherits(IonicView, _View);

        return IonicView;
      })(View);

      _export('IonicView', IonicView);
    }
  };
});