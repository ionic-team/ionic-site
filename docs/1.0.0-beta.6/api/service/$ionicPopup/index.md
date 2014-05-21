---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/service/$ionicPopup/"

title: "$ionicPopup"
header_sub_title: "Service in module ionic"
doc: "$ionicPopup"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/popup.js#L15'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  $ionicPopup



</h1>


{% include codepen.html id="zkmhJ" %}




The Ionic Popup service allows programmatically creating and showing popup
windows that require the user to respond in order to continue.

The popup system has support for more flexible versions of the built in `alert()`, `prompt()`,
and `confirm()` functions that users are used to, in addition to allowing popups with completely
custom content and look.









## Usage
A few basic examples, see below for details about all of the options available.

```js
angular.module('mySuperApp', ['ionic'])
.controller(function($scope, $ionicPopup, $timeout) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Enter Wi-Fi Password',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);

   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Consume Ice Cream',
       template: 'Are you sure you want to eat this ice cream?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Don\'t eat that!',
       template: 'It might taste good'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };
 };
});
```


  

  
## Methods

<div id="show"></div>
<h2>
  <code>show(options)</code>

</h2>

Show a complex popup. This is the master show function for all popups.

A complex popup has a `buttons` array, with each button having a `text` and `type`
field, in addition to an `onTap` function.  The `onTap` function, called when
the correspondingbutton on the popup is tapped, will by default close the popup
and resolve the popup promise with its return value.  If you wish to prevent the
default and keep the popup open on button tap, call `event.preventDefault()` on the
passed in tap event.  Details below.



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
        options
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>The options for the new popup, of the form:</p>
<pre><code>{
  title: &#39;&#39;, // String. The title of the popup.
  subTitle: &#39;&#39;, // String (optional). The sub-title of the popup.
  template: &#39;&#39;, // String (optional). The html template to place in the popup body.
  templateUrl: &#39;&#39;, // String (optional). The URL of an html template to place in the popup   body.
  scope: null, // Scope (optional). A scope to link to the popup content.
  buttons: [{ //Array[Object] (optional). Buttons to place in the popup footer.
    text: &#39;Cancel&#39;,
    type: &#39;button-default&#39;,
    onTap: function(e) {
      // e.preventDefault() will stop the popup from closing when tapped.
      e.preventDefault();
    }
  }, {
    text: &#39;OK&#39;,
    type: &#39;button-positive&#39;,
    onTap: function(e) {
      // Returning a value will cause the promise to resolve with the given value.
      return scope.data.response;
    }
  }]
}</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> A promise which is resolved when the popup is closed. Has an additional
`close` function, which can be used to programmatically close the popup.




<div id="alert"></div>
<h2>
  <code>alert(options)</code>

</h2>

Show a simple alert popup with a message and one button that the user can
tap to close the popup.



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
        options
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>The options for showing the alert, of the form:</p>
<pre><code>{
  title: &#39;&#39;, // String. The title of the popup.
  subTitle: &#39;&#39;, // String (optional). The sub-title of the popup.
  template: &#39;&#39;, // String (optional). The html template to place in the popup body.
  templateUrl: &#39;&#39;, // String (optional). The URL of an html template to place in the popup   body.
  okText: &#39;&#39;, // String (default: &#39;OK&#39;). The text of the OK button.
  okType: &#39;&#39;, // String (default: &#39;button-positive&#39;). The type of the OK button.
}</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> A promise which is resolved when the popup is closed. Has one additional
function `close`, which can be called with any value to programmatically close the popup
with the given value.




<div id="confirm"></div>
<h2>
  <code>confirm(options)</code>

</h2>

Show a simple confirm popup with a Cancel and OK button.

Resolves the promise with true if the user presses the OK button, and false if the
user presses the Cancel button.



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
        options
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>The options for showing the confirm popup, of the form:</p>
<pre><code>{
  title: &#39;&#39;, // String. The title of the popup.
  subTitle: &#39;&#39;, // String (optional). The sub-title of the popup.
  template: &#39;&#39;, // String (optional). The html template to place in the popup body.
  templateUrl: &#39;&#39;, // String (optional). The URL of an html template to place in the popup   body.
  cancelText: &#39;&#39;, // String (default: &#39;Cancel&#39;). The text of the Cancel button.
  cancelType: &#39;&#39;, // String (default: &#39;button-default&#39;). The type of the Cancel button.
  okText: &#39;&#39;, // String (default: &#39;OK&#39;). The text of the OK button.
  okType: &#39;&#39;, // String (default: &#39;button-positive&#39;). The type of the OK button.
}</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> A promise which is resolved when the popup is closed. Has one additional
function `close`, which can be called with any value to programmatically close the popup
with the given value.




<div id="prompt"></div>
<h2>
  <code>prompt(options)</code>

</h2>

Show a simple prompt popup, which has an input, OK button, and Cancel button.
Resolves the promise with the value of the input if the user presses OK, and with undefined
if the user presses Cancel.

```javascript
 $ionicPopup.prompt({
   title: 'Password Check',
   template: 'Enter your secret password',
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
        options
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>The options for showing the prompt popup, of the form:</p>
<pre><code>{
  title: &#39;&#39;, // String. The title of the popup.
  subTitle: &#39;&#39;, // String (optional). The sub-title of the popup.
  template: &#39;&#39;, // String (optional). The html template to place in the popup body.
  templateUrl: &#39;&#39;, // String (optional). The URL of an html template to place in the popup   body.
  inputType: // String (default: &#39;text&#39;). The type of input to use
  inputPlaceholder: // String (default: &#39;&#39;). A placeholder to use for the input.
  cancelText: // String (default: &#39;Cancel&#39;. The text of the Cancel button.
  cancelType: // String (default: &#39;button-default&#39;). The type of the Cancel button.
  okText: // String (default: &#39;OK&#39;). The text of the OK button.
  okType: // String (default: &#39;button-positive&#39;). The type of the OK button.
}</code></pre>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>object</code> A promise which is resolved when the popup is closed. Has one additional
function `close`, which can be called with any value to programmatically close the popup
with the given value.



  
  






