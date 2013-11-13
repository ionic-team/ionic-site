---
layout: api
title: "Modal"
api_version: 0.9.0
---

Available in:
<div class="label label-danger">AngularIonic 0.9.0</div>
<div class="label label-primary">Ionic 0.9.0</div>


Modal
===

The Modal is a slide-in pane that takes up the full width of the screen and can display any content:

<img src="http://ionicframework.com.s3.amazonaws.com/docs/controllers/modal.gif" alt="modal" style="border: 1px solid #eee;">

## AngularIonic Usage

To use the `Modal` service in your Angular code, create a modal template, then inject the Modal service into your
controllers, and then load the Modal and show/hide it based on user actions:

### HTML

```html
<!--
The template can be placed on the current page by using Angular's script template
loading, or loaded from a separate or external HTML file accessible by URL.

Here we are using the script tag method of defining an Angular template.
-->
<script id="modal.html" type="text/ng-template">
  <div class="modal">
    <header class="bar bar-header bar-positive">
      <h1 class="title">New Contact</h1>
      <button class="button button-clear button-primary" ng-click="closeModal()">Cancel</button>
    </header>
    <content has-header="true">
      <div class="padding">
        <div class="list">
          <label class="item item-input">
            <span class="input-label">First Name</span>
            <input type="text" placeholder="">
          </label>
          <label class="item item-input">
            <span class="input-label">Last Name</span>
            <input type="text" placeholder="">
          </label>
          <label class="item item-input">
            <span class="input-label">Email</span>
            <input type="text" placeholder="">
          </label>
          <button class="button button-full button-positive" ng-click="closeModal()">Create</button>
        </div>
      </div>
    </content>
  </div>
</script>
```

### Javascript

```javascript
angular.module('test', ['ionic'])

.controller('ModalCtrl', function($scope, Modal) {

  // Load the modal from the given template URL
  Modal.fromTemplateUrl('modal.html', function(modal) {
    $scope.modal = modal;
  }, {
    // Use our scope for the scope of the modal to keep it simple
    scope: $scope,
    // The animation we want to use for the modal entrance
    animation: 'slide-in-up'
  });

  // Test data
  $scope.contacts = [
    { name: 'Gordon Freeman' },
    { name: 'Barney Calhoun' },
    { name: 'Lamarr the Headcrab' }
  ];

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
});
```
