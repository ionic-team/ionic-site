---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "call-log"
title: "Call Log"
header_sub_title: "Class in module "
doc: "Call Log"
docType: "class"
---

<h1 class="api-title">Call Log</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/call-log/index.ts#L7">
  Improve this doc
</a>







<p>This plugin access the call history on a device and that can be filtered</p>


<p>Repo:
  <a href="https://github.com/creacore-team/cordova-plugin-calllog">
    https://github.com/creacore-team/cordova-plugin-calllog
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-calllog
$ npm install --save @ionic-native/call-log
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { CallLog } from &#39;@ionic-native/call-log&#39;;


constructor(private callLog: CallLog) { }

`
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getCallLog" href="#getCallLog"></a><code>getCallLog(filters)</code></h3>


This function return the call logs
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
      filters</td>
    <td>
      <code>CallLogObject[]</code>
    </td>
    <td>
      <p>array of object to filter the query</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="hasReadPermission" href="#hasReadPermission"></a><code>hasReadPermission()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Check permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestReadPermission" href="#requestReadPermission"></a><code>requestReadPermission()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


Request permission


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="CallLogObject" href="#CallLogObject"></a>CallLogObject</h2>

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
      name
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
      <code>string | Array&lt;string&gt;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      operator
    </td>
    <td>
      <code>&#39;==&#39; | &#39;!=&#39; | &#39;&gt;&#39; | &#39;&gt;=&#39; | &#39;&lt;&#39; | &#39;&lt;=&#39; | &#39;like&#39;</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





