---
layout: "docs_api"
version: "1.0.0-beta.6"
versionHref: "/docs"
path: "api/service/$ionicActionSheet/"

title: "$ionicActionSheet"
header_sub_title: "Service in module ionic"
doc: "$ionicActionSheet"
docType: "service"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/actionSheet.js#L1'>
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

![Action Sheet](http://ionicframework.com.s3.amazonaws.com/docs/controllers/actionSheet.gif)









## Usage
To trigger an Action Sheet in your code, use the $ionicActionSheet service in your angular controllers:

```js
angular.module('mySuperApp', ['ionic'])
.controller(function($scope, $ionicActionSheet) {

 // Triggered on a button click, or some other target
 $scope.show = function() {

   // Show the action sheet
   $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' },
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     buttonClicked: function(index) {
       return true;
     }
   });

 };
});
```


  

  
## Methods

<div id="show"></div>
<h2>
  <code>show(opts)</code>

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
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>The options for this ActionSheet. Properties:</p>
<ul>
<li><code>[Object]</code> <code>buttons</code> Which buttons to show.  Each button is an object with a <code>text</code> field.</li>
<li><code>{string}</code> <code>titleText</code> The title to show on the action sheet.</li>
<li><code>{string=}</code> <code>cancelText</code> The text for a &#39;cancel&#39; button on the action sheet.</li>
<li><code>{string=}</code> <code>destructiveText</code> The text for a &#39;danger&#39; on the action sheet.</li>
<li><code>{function=}</code> <code>cancel</code> Called if the cancel button is pressed or the backdrop is tapped.</li>
<li><code>{function=}</code> <code>buttonClicked</code> Called when one of the non-destructive buttons is clicked,
 with the index of the button that was clicked and the button object. Return true to close
 the action sheet, or false to keep it opened.</li>
<li><code>{function=}</code> <code>destructiveButtonClicked</code> Called when the destructive button is clicked.
 Return true to close the action sheet, or false to keep it opened.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>








  
  






