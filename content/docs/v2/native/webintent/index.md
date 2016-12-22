---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "webintent"
title: "WebIntent"
header_sub_title: "Class in module "
doc: "WebIntent"
docType: "class"
---







<h1 class="api-title">
  
  WebIntent
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/webintent.ts#L3">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add https://github.com/Initsogar/cordova-webintent.git</code></pre>
<p>Repo:
  <a href="https://github.com/Initsogar/cordova-webintent.git">
    https://github.com/Initsogar/cordova-webintent.git
  </a>
</p>

<!-- description -->



<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<p>For usage information please refer to the plugin&#39;s Github repo.</p>
<pre><code class="lang-typescript">import {WebIntent} from &#39;ionic-native&#39;;

WebIntent.startActivity(options).then(onSuccess, onError);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="ACTION_VIEW"></div>
<h3><code>ACTION_VIEW()</code>
  
</h3>












<div id="EXTRA_TEXT"></div>
<h3><code>EXTRA_TEXT()</code>
  
</h3>












<div id="startActivity"></div>
<h3><code>startActivity(options)</code>
  
</h3>





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
      options
      
      
    </td>
    <td>
      
<code>Object</code>
    </td>
    <td>
      <p>{ action: any, url: string, type?: string }</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="hasExtra"></div>
<h3><code>hasExtra(extra)</code>
  
</h3>





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
      extra
      
      
    </td>
    <td>
      
<code>any</code>
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
</div>



<div id="getExtra"></div>
<h3><code>getExtra(extra)</code>
  
</h3>





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
      extra
      
      
    </td>
    <td>
      
<code>any</code>
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
</div>



<div id="getUri"></div>
<h3><code>getUri()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<div id="onNewIntent"></div>
<h3><code>onNewIntent()</code>
  
</h3>









<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> 
</div>



<div id="sendBroadcast"></div>
<h3><code>sendBroadcast(options)</code>
  
</h3>





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
      options
      
      
    </td>
    <td>
      
<code>Object</code>
    </td>
    <td>
      <p>{ action: string, extras?: { option: boolean } }</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

