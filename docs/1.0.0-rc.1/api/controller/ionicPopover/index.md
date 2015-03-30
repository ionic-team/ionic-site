---
layout: "docs_api"
version: "1.0.0-rc.1"
versionHref: "/docs"
path: "api/controller/ionicPopover/"

title: "ionicPopover"
header_sub_title: "Controller in module ionic"
doc: "ionicPopover"
docType: "controller"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/tree/master/js/angular/service/popover.js#L136'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic/edit/master/js/angular/service/popover.js#L136'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ionicPopover



</h1>





Instantiated by the <a href="/docs/api/service/$ionicPopover/"><code>$ionicPopover</code></a> service.

Be sure to call [remove()](#remove) when you are done with each popover
to clean it up and avoid memory leaks.

Note: a popover will broadcast 'popover.shown', 'popover.hidden', and 'popover.removed' events from its originating
scope, passing in itself as an event argument. Both the popover.removed and popover.hidden events are
called when the popover is removed.










  

  
## Methods

<div id="initialize"></div>
<h2>
  <code>initialize(options)</code>

</h2>

Creates a new popover controller instance.



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
<li><code>{boolean=}</code> <code>focusFirstInput</code> Whether to autofocus the first input of
the popover when shown.  Default: false.</li>
<li><code>{boolean=}</code> <code>backdropClickToClose</code> Whether to close the popover on clicking the backdrop.
Default: true.</li>
<li><code>{boolean=}</code> <code>hardwareBackButtonClose</code> Whether the popover can be closed using the hardware
back button on Android and similar devices.  Default: true.</li>
</ul>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="show"></div>
<h2>
  <code>show($event)</code>

</h2>

Show this popover instance.



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
        $event
        
        
      </td>
      <td>
        
  <code>$event</code>
      </td>
      <td>
        <p>The $event or target element which the popover should align
itself next to.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>promise</code> A promise which is resolved when the popover is finished animating in.




<div id="hide"></div>
<h2>
  <code>hide()</code>

</h2>

Hide this popover instance.






* Returns: 
  <code>promise</code> A promise which is resolved when the popover is finished animating out.




<div id="remove"></div>
<h2>
  <code>remove()</code>

</h2>

Remove this popover instance from the DOM and clean up.






* Returns: 
  <code>promise</code> A promise which is resolved when the popover is finished animating out.




<div id="isShown"></div>
<h2>
  <code>isShown()</code>

</h2>








* Returns: 
   boolean Whether this popover is currently shown.



  
  






