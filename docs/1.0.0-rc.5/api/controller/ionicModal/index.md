---
layout: "docs_api"
version: "1.0.0-rc.5"
versionHref: "/docs"
path: "api/controller/ionicModal/"

title: "ionicModal"
header_sub_title: "Controller in module ionic"
doc: "ionicModal"
docType: "controller"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/modal.js#L80'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/modal.js#L80'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ionicModal



</h1>





Instantiated by the <a href="/docs/api/service/$ionicModal/"><code>$ionicModal</code></a> service.

Be sure to call [remove()](#remove) when you are done with each modal
to clean it up and avoid memory leaks.

Note: a modal will broadcast 'modal.shown', 'modal.hidden', and 'modal.removed' events from its originating
scope, passing in itself as an event argument. Note: both modal.removed and modal.hidden are
called when the modal is removed.










  

  
## Methods

<div id="initialize"></div>
<h2>
  <code>initialize(options)</code>

</h2>

Creates a new modal controller instance.



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
        <p>An options object with the following properties:</p>
<ul>
<li><code>{object=}</code> <code>scope</code> The scope to be a child of.
Default: creates a child of $rootScope.</li>
<li><code>{string=}</code> <code>animation</code> The animation to show &amp; hide with.
Default: &#39;slide-in-up&#39;</li>
<li><code>{boolean=}</code> <code>focusFirstInput</code> Whether to autofocus the first input of
the modal when shown. Will only show the keyboard on iOS, to force the keyboard to show
on Android, please use the <a href="https://github.com/driftyco/ionic-plugin-keyboard#keyboardshow">Ionic keyboard plugin</a>.
Default: false.</li>
<li><code>{boolean=}</code> <code>backdropClickToClose</code> Whether to close the modal on clicking the backdrop.
Default: true.</li>
<li><code>{boolean=}</code> <code>hardwareBackButtonClose</code> Whether the modal can be closed using the hardware
back button on Android and similar devices.  Default: true.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="show"></div>
<h2>
  <code>show()</code>

</h2>

Show this modal instance.






* Returns: 
  <code>promise</code> A promise which is resolved when the modal is finished animating in.




<div id="hide"></div>
<h2>
  <code>hide()</code>

</h2>

Hide this modal instance.






* Returns: 
  <code>promise</code> A promise which is resolved when the modal is finished animating out.




<div id="remove"></div>
<h2>
  <code>remove()</code>

</h2>

Remove this modal instance from the DOM and clean up.






* Returns: 
  <code>promise</code> A promise which is resolved when the modal is finished animating out.




<div id="isShown"></div>
<h2>
  <code>isShown()</code>

</h2>








* Returns: 
   boolean Whether this modal is currently shown.



  
  






