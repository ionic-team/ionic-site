---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "secure-storage"
title: "Secure Storage"
header_sub_title: "Class in module "
doc: "Secure Storage"
docType: "class"
---








<h1 class="api-title">

  
  Secure Storage
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/securestorage.ts#L1">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-secure-storage</code></pre>
<p>Repo:
  <a href="https://github.com/Crypho/cordova-plugin-secure-storage">
    https://github.com/Crypho/cordova-plugin-secure-storage
  </a>
</p>

<!-- description -->

<p>This plugin gets, sets and removes key,value pairs from a device&#39;s secure storage.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-secure-storage</code>. For more info, please see the <a href="https://github.com/Crypho/cordova-plugin-secure-storage">Cordova Secure Storage docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone</li>
  
  <li>Browser</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { SecureStorage } from &#39;ionic-native&#39;;

let secureStorage: SecureStorage = new SecureStorage();
secureStorage.create(&#39;my_store_name&#39;)
 .then(
   () =&gt; console.log(&#39;Storage is ready!&#39;),
   error =&gt; console.log(error)
);

secureStorage.get(&#39;myitem&#39;)
 .then(
   data =&gt; console.log(data),
   error =&gt; console.log(error)
);

secureStorage.set(&#39;myitem&#39;, &#39;myvalue&#39;)
 .then(
   data =&gt; console.log(data),
   error =&gt; console.log(error)
);

secureStorage.remove(&#39;myitem&#39;)
.then(
   data =&gt; console.log(data),
   error =&gt; console.log(error)
);
</code></pre>




<!-- @property tags -->


<!-- methods on the class -->

<h2>Instance Members</h2>

<div id="create"></div>

<h3>
  <code>create(store)</code>
  

</h3>

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
      store
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>








<div id="get"></div>

<h3>
  <code>get(reference)</code>
  

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








<div id="set"></div>

<h3>
  <code>set(reference,&nbsp;value)</code>
  

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
      
<code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>








<div id="remove"></div>

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








<!-- related link --><!-- end content block -->


<!-- end body block -->

