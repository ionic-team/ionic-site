---
layout: "v2_fluid/docs_base"
version: "2.8.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "apppreferences"
title: "AppPreferences"
header_sub_title: "Class in module "
doc: "AppPreferences"
docType: "class"
---







<h1 class="api-title">
  
  AppPreferences
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/apppreferences.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-app-preferences</code></pre>
<p>Repo:
  <a href="https://github.com/apla/me.apla.cordova.app-preferences">
    https://github.com/apla/me.apla.cordova.app-preferences
  </a>
</p>

<!-- description -->

<p>This plugin allows you to read and write app preferences</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { AppPreferences } from &#39;ionic-native&#39;;

AppPreferences.fetch(&#39;key&#39;).then((res) =&gt; { console.log(res); });
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="fetch"></div>
<h3><code>fetch(dict,&nbsp;key)</code>
  
</h3>




Get a preference value



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
      dict
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Dictionary for key (OPTIONAL)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      key
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Key</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise
</div>



<div id="store"></div>
<h3><code>store(dict,&nbsp;key,&nbsp;value)</code>
  
</h3>




Set a preference value



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
      dict
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Dictionary for key (OPTIONAL)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      key
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Key</p>

      
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
      <p>Value</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise
</div>



<div id="remove"></div>
<h3><code>remove(dict,&nbsp;key)</code>
  
</h3>




Remove value from preferences



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
      dict
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Dictionary for key (OPTIONAL)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      key
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Key</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise
</div>



<div id="clearAll"></div>
<h3><code>clearAll()</code>
  
</h3>




Clear preferences







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise
</div>



<div id="show"></div>
<h3><code>show()</code>
  
</h3>




Show native preferences interface







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise
</div>



<div id="watch"></div>
<h3><code>watch(subscribe)</code>
  
</h3>




Show native preferences interface



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
      subscribe
      
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      <p>true value to subscribe, false - unsubscribe</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Returns an observable
</div>



<div id="suite"></div>
<h3><code>suite(suiteName)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>Android</code>&nbsp;
  </p>



Return named configuration context
In iOS you'll get a suite configuration, on Android — named file
Supports: Android, iOS


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
      suiteName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>suite name</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Object</code> Custom object, bound to that suite
</div>



<div id="iosSuite"></div>
<h3><code>iosSuite()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>













<div id="cloudSync"></div>
<h3><code>cloudSync()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  
  <code>Windows</code>&nbsp;
  
  <code>Windows Phone 8</code>&nbsp;
  </p>



Return cloud synchronized configuration context
Currently supports Windows and iOS/macOS






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Object</code> Custom object, bound to that suite
</div>



<div id="defaults"></div>
<h3><code>defaults()</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  
  <code>Windows</code>&nbsp;
  
  <code>Windows Phone 8</code>&nbsp;
  </p>



Return default configuration context
Currently supports Windows and iOS/macOS






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Object</code> Custom Object, bound to that suite
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

