---
layout: "v2/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""

id: api
title: "IonicApp"
header_sub_title: "Class in module "
doc: "IonicApp"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/app/app.ts#L13'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/app/app.ts#L13'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  IonicApp



</h1>





TODO(adamdbradley): IonicApp is injected, not inherited from now
The base Ionic class that your app inherits from. By inheriting from this class, you will have access to the Ionic API.

<h1 class="class export">IonicApp <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/app/app.ts#L14-L207">ionic/components/app/app.ts (line 14)</a>
</p>
<p><p>TODO(adamdbradley): IonicApp is injected, not inherited from now
The base Ionic class that your app inherits from. By inheriting from this class, you will have access to the Ionic API.</p>
</p>
## Members

<div id="load"></div>
<h2>
  <code>load(appRef)</code>

</h2>

TODO



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
        appRef
        
        
      </td>
      <td>
        
  <code>Object</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="focusHolder"></div>
<h2>
  <code>focusHolder([val])</code>

</h2>

TODO



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
        
        <div><em>(optional)</em></div>
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




<div id="title"></div>
<h2>
  <code>title(val)</code>

</h2>

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
<h2>
  <code>setEnabled(isEnabled, fallback)</code>

</h2>

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
<h2>
  <code>isEnabled()</code>

</h2>

Boolean if the app is actively transitioning or not.






* Returns: 
  <code>bool</code> 




<div id="ref"></div>
<h2>
  <code>ref([val])</code>

</h2>

TODO



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
        
        <div><em>(optional)</em></div>
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
   TODO






<div id="injector"></div>
<h2>
  <code>injector()</code>

</h2>

TODO






* Returns: 
   TODO






<div id="zoneRun"></div>
<h2>
  <code>zoneRun(fn)</code>

</h2>

TODO



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
        fn
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="zoneRunOutside"></div>
<h2>
  <code>zoneRunOutside(fn)</code>

</h2>

TODO



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
        fn
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="register"></div>
<h2>
  <code>register(id, component)</code>

</h2>

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
<h2>
  <code>unregister(id)</code>

</h2>

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
<h2>
  <code>getRegisteredComponent(cls)</code>

</h2>

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
<h2>
  <code>getComponent(key)</code>

</h2>

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




<div id="appendComponent"></div>
<h2>
  <code>appendComponent(componentType)</code>

</h2>

Create and append the given component into the root
element of the app.




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
        componentType
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>the component to create and insert</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> Promise that resolves with the ContainerRef created




<div id="isRTL"></div>
<h2>
  <code>isRTL([val])</code>

</h2>

If val is defined, specifies whether app text is RTL.  If val is undefined
returns whether app text is RTL.




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
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Boolean specifying whether text is RTL or not.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> true if app text is RTL, false if otherwise.




