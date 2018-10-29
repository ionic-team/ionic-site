---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "secure-storage"
title: "Secure Storage"
header_sub_title: "Class in module "
doc: "Secure Storage"
docType: "class"
---

<h1 class="api-title">Secure Storage</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/secure-storage/index.ts#L66">
  Improve this doc
</a>







<p>This plugin gets, sets and removes key,value pairs from a device&#39;s secure storage.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-secure-storage</code>. For more info, please see the <a href="https://github.com/Crypho/cordova-plugin-secure-storage">Cordova Secure Storage docs</a>.</p>
<p>The browser platform is supported as a mock only. Key/values are stored unencrypted in localStorage.</p>


<p>Repo:
  <a href="https://github.com/Crypho/cordova-plugin-secure-storage">
    https://github.com/Crypho/cordova-plugin-secure-storage
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-secure-storage
$ npm install --save @ionic-native/secure-storage
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { SecureStorage, SecureStorageObject } from &#39;@ionic-native/secure-storage&#39;;

constructor(private secureStorage: SecureStorage) { }

...

this.secureStorage.create(&#39;my_store_name&#39;)
  .then((storage: SecureStorageObject) =&gt; {

     storage.get(&#39;key&#39;)
       .then(
         data =&gt; console.log(data),
         error =&gt; console.log(error)
     );

     storage.set(&#39;key&#39;, &#39;value&#39;)
       .then(
        data =&gt; console.log(data),
         error =&gt; console.log(error)
     );

     storage.remove(&#39;key&#39;)
     .then(
         data =&gt; console.log(data),
         error =&gt; console.log(error)
     );

  });
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="create" href="#create"></a><code>create(store)</code></h3>


Creates a namespaced storage.
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
      store</td>
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
  <b>Returns:</b> <code>Promise&lt;SecureStorageObject&gt;</code> 
</div>

<h2><a class="anchor" name="SecureStorageObject" href="#SecureStorageObject"></a>SecureStorageObject</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="get" href="#get"></a><code>get(key)</code></h3>




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
      key</td>
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
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div><h3><a class="anchor" name="set" href="#set"></a><code>set(key,&nbsp;value)</code></h3>




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
      key</td>
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
</div><h3><a class="anchor" name="remove" href="#remove"></a><code>remove(key)</code></h3>




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
      key</td>
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
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> returns a promise that resolves with the key that was removed
</div><h3><a class="anchor" name="keys" href="#keys"></a><code>keys()</code></h3>




Get all references from the storage.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string[]&gt;</code> returns a promise that resolves with array of keys storage
</div><h3><a class="anchor" name="clear" href="#clear"></a><code>clear()</code></h3>




Clear all references from the storage.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="secureDevice" href="#secureDevice"></a><code>secureDevice()</code></h3>


Brings up the screen-lock settings


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>



