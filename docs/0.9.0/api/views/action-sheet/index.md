---
layout: "api_0.9.0"
title: "Action Sheet"
header_sub_title: "Slide in prompts for actions"
---

Available in:
<div class="label label-danger">AngularIonic 0.9.0</div>
<div class="label label-primary">Ionic 0.9.0</div>


Action Sheet
===

The Action Sheet is a slide-up pane that lets the user choose from a set of options. Dangerous options are highlighted in red and made obvious, and there are easy ways to cancel out out of action sheet, such as tapping the backdrop or even hitting escape on the keyboard for desktop testing.


<img src="http://ionicframework.com.s3.amazonaws.com/docs/controllers/actionSheet.gif" alt="Action Sheet" style="border: 1px solid #eee">

## AngularIonic Usage

To trigger an Action Sheet in your code, use the `ActionSheet` service in your angular controllers:

```javascript

angular.module('test', ['ionic'])

.controller(function($scope, ActionSheet) {

  // Triggered on a button click, or some other target
  $scope.show = function() {

    // Show the action sheet
    ActionSheet.show({

      // The various non-destructive button choices
      buttons: [
        { text: 'Share' },
        { text: 'Move' },
      ],
  
      // The text of the red destructive button
      destructiveText: 'Delete',

      // The title text at the top
      titleText: 'Modify your album',

      // The text of the cancel button
      cancelText: 'Cancel',

      // Called when the sheet is cancelled, either from triggering the
      // cancel button, or tapping the backdrop, or using escape on the keyboard
      cancel: function() {
      },

      // Called when one of the non-destructive buttons is clicked, with
      // the index of the button that was clicked. Return
      // "true" to tell the action sheet to close. Return false to not close.
      buttonClicked: function(index) {
        return true;
      },

      // Called when the destructive button is clicked. Return true to close the
      // action sheet. False to keep it open
      destructiveButtonClicked: function() {
        return true;
      }
    });

  };
});
```
