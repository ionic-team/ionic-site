---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{IonicApp | slugify}}"
title: "IonicApp"
header_sub_title: "Class in module "
doc: "IonicApp"
docType: "class"

---




<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/app/app.ts#L6'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/app/app.ts#L6'>
    Improve this doc
  </a>

</div>




<h1 class="api-title">


IonicApp






</h1>






<h2>Description</h2>

<p>Component registry service.  For more information on registering
components see the <a href="../id/IdRef/">IdRef API reference</a>.</p>






<h2>Methods</h2>

<div id="setTitle"></div>

<h3>
<code>setTitle(val)</code>

</h3>

Sets the document title.



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
        val
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Value to set the document title to.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="setEnabled"></div>

<h3>
<code>setEnabled(isEnabled, fallback)</code>

</h3>

Sets if the app is currently enabled or not, meaning if it's
available to accept new user commands. For example, this is set to `false`
while views transition, a modal slides up, an action-sheet
slides up, etc. After the transition completes it is set back to `true`.



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
        isEnabled
        
        
      </td>
      <td>
        
  <code>bool</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
    <tr>
      <td>
        fallback
        
        
      </td>
      <td>
        
  <code>bool</code>
      </td>
      <td>
        <p>When <code>isEnabled</code> is set to <code>false</code>, this argument
is used to set the maximum number of milliseconds that app will wait until
it will automatically enable the app again. It&#39;s basically a fallback incase
something goes wrong during a transition and the app wasn&#39;t re-enabled correctly.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="isEnabled"></div>

<h3>
<code>isEnabled()</code>

</h3>

Boolean if the app is actively enabled or not.






* Returns: 
  <code>bool</code> 




<div id="register"></div>

<h3>
<code>register(id, component)</code>

</h3>

Register a known component with a key, for easy lookups later.



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
        id
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>The id to use to register the component</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        component
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>The component to register</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="unregister"></div>

<h3>
<code>unregister(id)</code>

</h3>

Unregister a known component with a key.



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
        id
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>The id to use to unregister</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="getRegisteredComponent"></div>

<h3>
<code>getRegisteredComponent(cls)</code>

</h3>

Get a registered component with the given type (returns the first)



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
        cls
        
        
      </td>
      <td>
        
  <code>Object</code>
      </td>
      <td>
        <p>the type to search for</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
   the matching component, or undefined if none was found






<div id="getComponent"></div>

<h3>
<code>getComponent(key)</code>

</h3>

Get the component for the given key.



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
        key
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>TODO</code> TODO


<!-- end content block -->


<!-- end body block -->

