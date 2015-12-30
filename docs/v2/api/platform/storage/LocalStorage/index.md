---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{LocalStorage | slugify}}"
title: "LocalStorage"
header_sub_title: "Class in module "
doc: "LocalStorage"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/local-storage/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


LocalStorage






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic2/edit/master/ionic/platform/storage/local-storage.ts#L0'>
Improve this doc
</a> 






<!-- description -->
<h2>Description</h2>

<p>The LocalStorage storage engine uses the browser&#39;s local storage system for
storing key/value pairs.</p>
<p>Note: LocalStorage should ONLY be used for temporary data that you can afford to lose.
Given disk space constraints on a mobile device, local storage might be &quot;cleaned up&quot;
by the operating system (iOS).</p>
<p>For guaranteed, long-term storage, use the SqlStorage engine which stores data in a file.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {Page, Storage, LocalStorage} from &#39;ionic/ionic&#39;;
@Page({
  template: `&lt;ion-content&gt;&lt;/ion-content&gt;`
});
export class MyClass{
 constructor(){
   this.local = new Storage(LocalStorage);
   this.local.set(&#39;didTutorial&#39;, true);
 }
}
</code></pre>




<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="get"></div>

<h3>
<code>get(key)</code>
  

</h3>

Get the value of a key in LocalStorage


<table class="table param-table" style="margin:0;">
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
        
  <code>String</code>
      </td>
      <td>
        <p>the key you want to lookup in LocalStorage</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="set"></div>

<h3>
<code>set(key,&nbsp;value)</code>
  

</h3>

Set a key value pair and save it to LocalStorage


<table class="table param-table" style="margin:0;">
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
        
  <code>String</code>
      </td>
      <td>
        <p>the key you want to save to LocalStorage</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        value
        
        
      </td>
      <td>
        
  <code>Any</code>
      </td>
      <td>
        <p>the value of the key you&#39;re saving</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="remove"></div>

<h3>
<code>remove(key)</code>
  

</h3>

Remove a key from LocalStorage


<table class="table param-table" style="margin:0;">
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
        
  <code>String</code>
      </td>
      <td>
        <p>the key you want to remove from LocalStorage</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/platform/storage/'>Storage Platform Docs</a><!-- end content block -->


<!-- end body block -->

