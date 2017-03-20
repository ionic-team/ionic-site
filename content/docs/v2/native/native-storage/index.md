---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "native-storage"
title: "Native Storage"
header_sub_title: "Class in module "
doc: "Native Storage"
docType: "class"
---







<h1 class="api-title">
  
  Native Storage
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/native-storage/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>
  $ ionic plugin add cordova-plugin-nativestorage$ npm install --save @ionic-native/NativeStorage
</code></pre>
<p>Repo:
  <a href="https://github.com/TheCocoaProject/cordova-plugin-nativestorage">
    https://github.com/TheCocoaProject/cordova-plugin-nativestorage
  </a>
</p>

<!-- description -->

<p>Native storage of variables in Android and iOS</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { NativeStorage } from &#39;@ionic-native/native-storage&#39;;

constructor(private nativeStorage: NativeStorage) { }

...

this.nativeStorage.setItem(&#39;myitem&#39;, {property: &#39;value&#39;, anotherProperty: &#39;anotherValue&#39;})
  .then(
    () =&gt; console.log(&#39;Stored item!&#39;),
    error =&gt; console.error(&#39;Error storing item&#39;, error)
  );

this.nativeStorage.getItem(&#39;myitem&#39;)
  .then(
    data =&gt; console.log(data),
    error =&gt; console.error(error)
  );
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="setItem"></div>
<h3>
  <code>setItem(reference,&nbsp;value)</code>
  

</h3>
Stores a value
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
      reference
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      value
      
      
    </td>
    <td>
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getItem"></div>
<h3>
  <code>getItem(reference)</code>
  

</h3>
Gets a stored item
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
      reference
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="remove"></div>
<h3>
  <code>remove(reference)</code>
  

</h3>
Removes a single stored item
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
      reference
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="clear"></div>
<h3>
  <code>clear()</code>
  

</h3>
Removes all stored values.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

