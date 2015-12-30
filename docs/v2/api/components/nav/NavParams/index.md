---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{NavParams | slugify}}"
title: "NavParams"
header_sub_title: "Class in module "
doc: "NavParams"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/nav-params/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


NavParams






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic2/edit/master/ionic/components/nav/nav-controller.ts#L1478'>
Improve this doc
</a> 






<!-- description -->
<h2>Description</h2>

<p>NavParams are an object that exists on a page and can contain data for that particular view.
Similar to how data was pass to a view in V1 with <code>$stateParams</code>, NavParams offer a much more flexible
option with a simple <code>get</code> method.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">export class MyClass{
 constructor(params: NavParams){
   this.params = params;
   // userParams is an object we have in our nav-parameters
   this.params.get(&#39;userParams&#39;);
 }
}
</code></pre>




<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="get"></div>

<h3>
<code>get(parameter)</code>
  

</h3>

Get the value of a nav-parameter for the current view

```ts
export class MyClass{
 constructor(params: NavParams){
   this.params = params;
   // userParams is an object we have in our nav-parameters
   this.params.get('userParams');
 }
}
```




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
        parameter
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Which param you want to look up</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#navigation'>Navigation Component Docs</a>
<a href='../NavController/'>NavController API Docs</a>
<a href='../Nav/'>Nav API Docs</a>
<a href='../NavPush/'>NavPush API Docs</a><!-- end content block -->


<!-- end body block -->

