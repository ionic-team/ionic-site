---
layout: "fluid/docs_base"
version: "3.6.1"
versionHref: "/docs/native"
path: ""
category: native
id: "native-storage"
title: "Native Storage"
header_sub_title: "Class in module "
doc: "Native Storage"
docType: "class"
---

<h1 class="api-title">Native Storage</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/native-storage/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save cordova-plugin-nativestorage
$ npm install --save @ionic-native/native-storage
</code></pre>
<p>Repo:
  <a href="https://github.com/TheCocoaProject/cordova-plugin-nativestorage">
    https://github.com/TheCocoaProject/cordova-plugin-nativestorage
  </a>
</p>


<p>Native storage of variables in Android and iOS</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li>
</ul>






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








<h2>Instance Members</h2>
<h3><a class="anchor" name="setItem" href="#setItem"></a><code>setItem(reference,&nbsp;value)</code></h3>


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
      reference</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="getItem" href="#getItem"></a><code>getItem(reference)</code></h3>


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
      reference</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove(reference)</code></h3>


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
      reference</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="clear" href="#clear"></a><code>clear()</code></h3>


Removes all stored values.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





