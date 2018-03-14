---
layout: "docs_api"
version: "1.2.1"
versionHref: "/docs/v1/1.2.1"
path: "api/service/$ionicActionSheet/"

title: "$ionicActionSheet"
header_sub_title: "Service in module ionic"
doc: "$ionicActionSheet"
docType: "service"
---

<div class="improve-docs">
<a href='https://github.com/ionic-team/ionic-v1/blob/master/js/angular/service/actionSheet.js#L1'>
View Source
</a>
&nbsp;
<a href='http://github.com/ionic-team/ionic/edit/1.x/js/angular/service/actionSheet.js#L1'>
Improve this doc
</a>
</div>




<h1 class="api-title">

$ionicActionSheet



</h1>





The Action Sheet is a slide-up pane that lets the user choose from a set of options.
Dangerous options are highlighted in red and made obvious.

There are easy ways to cancel out of the action sheet, such as tapping the backdrop or even
hitting escape on the keyboard for desktop testing.

![Action Sheet](https://ionicframework.com.s3.amazonaws.com/docs/controllers/actionSheet.gif)









## Usage
To trigger an Action Sheet in your code, use the $ionicActionSheet service in your angular controllers:

```js
angular.module('mySuperApp', ['ionic'])
.controller(function($scope, $ionicActionSheet, $timeout) {

 // Triggered on a button click, or some other target
 $scope.show = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' }
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 2000);

 };
});
```





## Methods

<div id="show"></div>
<h2>
  <code>show(options)</code>

</h2>

Load and return a new action sheet.

A new isolated scope will be created for the
action sheet and the new element will be appended into the body.



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
        <p>The options for this ActionSheet. Properties:</p>
<ul>
<li><code>[Object]</code> <code>buttons</code> Which buttons to show.  Each button is an object with a <code>text</code> field.</li>
<li><code>{string}</code> <code>titleText</code> The title to show on the action sheet.</li>
<li><code>{string=}</code> <code>cancelText</code> the text for a &#39;cancel&#39; button on the action sheet.</li>
<li><code>{string=}</code> <code>destructiveText</code> The text for a &#39;danger&#39; on the action sheet.</li>
<li><code>{function=}</code> <code>cancel</code> Called if the cancel button is pressed, the backdrop is tapped or
 the hardware back button is pressed.</li>
<li><code>{function=}</code> <code>buttonClicked</code> Called when one of the non-destructive buttons is clicked,
 with the index of the button that was clicked and the button object. Return true to close
 the action sheet, or false to keep it opened.</li>
<li><code>{function=}</code> <code>destructiveButtonClicked</code> Called when the destructive button is clicked.
 Return true to close the action sheet, or false to keep it opened.</li>
<li><code>{boolean=}</code> <code>cancelOnStateChange</code> Whether to cancel the actionSheet when navigating
to a new state.  Default true.</li>
<li><code>{string}</code> <code>cssClass</code> The custom CSS class name.</li>
</ul>


      </td>
    </tr>

  </tbody>
</table>






* Returns:
  <code>function</code> `hideSheet` A function which, when called, hides & cancels the action sheet.
