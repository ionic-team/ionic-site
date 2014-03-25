---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/controller/ionicModal"

title: "ionicModal"
header_sub_title: "Controller in module ionic"
doc: "ionicModal"
docType: "controller"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/ext/angular/src/service/ionicModal.js#L47'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ionicModal



</h1>





Instantiated by the <a href="/docs/nightly/api/service/$ionicModal"><code>$ionicModal</code></a> service.

Hint: Be sure to call [remove()](#remove) when you are done with each modal
to clean it up and avoid memory leaks.










  

  
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
the modal when shown.  Default: false.</li>
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









<div id="hide"></div>
<h2>
  <code>hide()</code>

</h2>

Hide this modal instance.









<div id="remove"></div>
<h2>
  <code>remove()</code>

</h2>

Remove this modal instance from the DOM and clean up.









<div id="isShown"></div>
<h2>
  <code>isShown()</code>

</h2>








* Returns: 
   boolean Whether this modal is currently shown.



  
  






