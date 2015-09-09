System.register('ionic/directives', ['ionic/ionic'], function (_export) {
  'use strict';

  var List, Content, Icon, Switch, Checkbox, Label, Item, Input, Segment, SegmentButton, IONIC_DIRECTIVES;
  return {
    setters: [function (_ionicIonic) {
      List = _ionicIonic.List;
      Content = _ionicIonic.Content;
      Icon = _ionicIonic.Icon;
      Switch = _ionicIonic.Switch;
      Checkbox = _ionicIonic.Checkbox;
      Label = _ionicIonic.Label;
      Item = _ionicIonic.Item;
      Input = _ionicIonic.Input;
      Segment = _ionicIonic.Segment;
      SegmentButton = _ionicIonic.SegmentButton;
    }],
    execute: function () {
      IONIC_DIRECTIVES = [List, Content, Icon, Switch, Checkbox, Label, Item, Input, Segment, SegmentButton];

      _export('IONIC_DIRECTIVES', IONIC_DIRECTIVES);
    }
  };
});