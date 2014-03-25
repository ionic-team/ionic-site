---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/service/$ionicPopup"

title: "$ionicPopup"
header_sub_title: "Service in module ionic"
doc: "$ionicPopup"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/ext/angular/src/service/ionicPopup.js#L6'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicPopup



</h1>


{% include codepen.html id="zkmhJ" %}




The Ionic Popup service makes it easy to programatically create and show popup
windows that require the user to respond in order to continue:

The popup system has support for nicer versions of the built in `alert()` `prompt()` and `confirm()` functions
you are used to in the browser, but with more powerful support for customizing input types in the case of
prompt, or customizing the look of the window.

But the true power of the Popup is when a built-in popup just won't cut it. Luckily, the popup window
has full support for arbitrary popup content, and a simple promise-based system for returning data
entered by the user.









## Usage
To trigger a Popup in your code, use the $ionicPopup service in your angular controllers:

```js
angular.module('mySuperApp', ['ionic'])
.controller(function($scope, $ionicPopup) {

 // Triggered on a button click, or some other target
    $scope.showPopup = function() {
      $scope.data = {}

      // An elaborate, custom popup
      $ionicPopup.show({
        templateUrl: 'popup-template.html',
        title: 'Enter Wi-Fi Password',
        subTitle: 'Please use normal things',
        scope: $scope,
        buttons: [
          { text: 'Cancel', onTap: function(e) { return true; } },
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
              return $scope.data.wifi;
            }
          },
        ]
      }).then(function(res) {
        console.log('Tapped!', res);
      }, function(err) {
        console.log('Err:', err);
      }, function(popup) {
        // If you need to access the popup directly, do it in the notify method
        // This is also where you can programatically close the popup:
        // popup.close();
      });

      // A confirm dialog
      $scope.showConfirm = function() {
        $ionicPopup.confirm({
          title: 'Consume Ice Cream',
          content: 'Are you sure you want to eat this ice cream?'
        }).then(function(res) {
          if(res) {
            console.log('You are sure');
          } else {
            console.log('You are not sure');
          }
        });
      };

      // A prompt dialog
      $scope.showPrompt = function() {
        $ionicPopup.prompt({
          title: 'ID Check',
          content: 'What is your name?'
        }).then(function(res) {
          console.log('Your name is', res);
        });
      };

      // A prompt with password input dialog
      $scope.showPasswordPrompt = function() {
        $ionicPopup.prompt({
          title: 'Password Check',
          content: 'Enter your secret password',
          inputType: 'password',
          inputPlaceholder: 'Your password'
        }).then(function(res) {
          console.log('Your password is', res);
        });
      };

      // An alert dialog
      $scope.showAlert = function() {
        $ionicPopup.alert({
          title: 'Don\'t eat that!',
          content: 'It might taste good'
        }).then(function(res) {
          console.log('Thank you for not eating my delicious ice cream cone');
        });
      };
    };
  });
  ```


  

  
## Methods

<div id="show"></div>
<h2>
  <code>show(object)</code>

</h2>

show a complex popup. This is the master show function for all popups



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        object
        
        
      </td>
      <td>
        
  <code>data</code>
      </td>
      <td>
        <p>The options for showing a popup, of the form:</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> an Angular promise which resolves when the user enters the correct data, and also
sends the constructed popup in the notify function (for programatic closing, as shown in the example above).
```
{
  content: '', // String. The content of the popup
  title: '', // String. The title of the popup
  subTitle: '', // String (optional). The sub-title of the popup
  templateUrl: '', // URL String (optional). The URL of a template to load as the content (instead of the `content` field)
  scope: null, // Scope (optional). A scope to apply to the popup content (for using ng-model in a template, for example)
  buttons:
    [
      {
        text: 'Cancel',
        type: 'button-default',
        onTap: function(e) {
          // e.preventDefault() is the only way to return a false value
          e.preventDefault();
        }
      },
      {
        text: 'OK',
        type: 'button-positive',
        onTap: function(e) {
          // When the user taps one of the buttons, you need to return the
          // Data you want back to the popup service which will then resolve
          // the promise waiting for a response.
          //
          // To return "false", call e.preventDefault();
          return scope.data.response;
        }
      }
    ]

}
```




<div id="alert"></div>
<h2>
  <code>alert(object)</code>

</h2>

show a simple popup with one button that the user has to tap

Show a simple alert dialog

```javascript
 $ionicPopup.alert({
   title: 'Hey!',
   content: 'Don\'t do that!'
 }).then(function(res) {
   // Accepted
 });
```



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        object
        
        
      </td>
      <td>
        
  <code>data</code>
      </td>
      <td>
        <p>The options for showing an alert, of the form:</p>
<pre><code>{
  content: &#39;&#39;, // String. The content of the popup
  title: &#39;&#39;, // String. The title of the popup
  okText: &#39;&#39;, // String. The text of the OK button
  okType: &#39;&#39;, // String (default: button-positive). The type of the OK button
}</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> that resolves when the alert is accepted




<div id="confirm"></div>
<h2>
  <code>confirm(object)</code>

</h2>

Show a simple confirm popup with a cancel and accept button:

```javascript
 $ionicPopup.confirm({
   title: 'Consume Ice Cream',
   content: 'Are you sure you want to eat this ice cream?'
 }).then(function(res) {
   if(res) {
     console.log('You are sure');
   } else {
     console.log('You are not sure');
   }
 });
```



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        object
        
        
      </td>
      <td>
        
  <code>data</code>
      </td>
      <td>
        <p>The options for showing a confirm dialog, of the form:</p>
<pre><code>{
  content: &#39;&#39;, // String. The content of the popup
  title: &#39;&#39;, // String. The title of the popup
  cancelText: &#39;&#39;, // String. The text of the Cancel button
  cancelType: &#39;&#39;, // String (default: button-default). The type of the kCancel button
  okText: &#39;&#39;, // String. The text of the OK button
  okType: &#39;&#39;, // String (default: button-positive). The type of the OK button
}</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> that resolves with the chosen option




<div id="prompt"></div>
<h2>
  <code>prompt(object)</code>

</h2>

show a simple prompt dialog.

```javascript
 $ionicPopup.prompt({
   title: 'Password Check',
   content: 'Enter your secret password',
   inputType: 'password',
   inputPlaceholder: 'Your password'
 }).then(function(res) {
   console.log('Your password is', res);
 });
```



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        object
        
        
      </td>
      <td>
        
  <code>data</code>
      </td>
      <td>
        <p>The options for showing a prompt dialog, of the form:</p>
<pre><code>{
  content: // String. The content of the popup
  title: // String. The title of the popup
  subTitle: // String. The sub title of the popup
  inputType: // String (default: &quot;text&quot;). The type of input to use
  inputPlaceholder: // String (default: &quot;&quot;). A placeholder to use for the input.
  cancelText: // String. The text of the Cancel button
  cancelType: // String (default: button-default). The type of the kCancel button
  okText: // String. The text of the OK button
  okType: // String (default: button-positive). The type of the OK button
}</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> that resolves with the entered data



  
  






