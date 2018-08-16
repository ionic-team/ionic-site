---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "sms"
title: "SMS"
header_sub_title: "Class in module "
doc: "SMS"
docType: "class"
---

<h1 class="api-title">SMS</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/sms/index.ts#L20">
  Improve this doc
</a>







<p>Requires Cordova plugin: cordova-sms-plugin. For more info, please see the <a href="https://github.com/cordova-sms/cordova-sms-plugin">SMS plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/cordova-sms/cordova-sms-plugin">
    https://github.com/cordova-sms/cordova-sms-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-sms-plugin
$ npm install --save @ionic-native/sms
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { SMS } from &#39;@ionic-native/sms&#39;;

constructor(private sms: SMS) { }


...


// Send a text message using default options
this.sms.send(&#39;416123456&#39;, &#39;Hello world!&#39;);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="send" href="#send"></a><code>send(phoneNumber,&nbsp;message,&nbsp;options)</code></h3>




Sends sms to a number
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
      phoneNumber</td>
    <td>
      <code>string</code>|<code>Array.&lt;string&gt;</code>
    </td>
    <td>
      <p>Phone number</p>
</td>
  </tr>
  
  <tr>
    <td>
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Message</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>SmsOptions</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Resolves promise when the SMS has been sent
</div><h3><a class="anchor" name="hasPermission" href="#hasPermission"></a><code>hasPermission()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;</p>


This function lets you know if the app has permission to send SMS


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> returns a promise that resolves with a boolean that indicates if we have permission
</div>





<h2><a class="anchor" name="SmsOptions" href="#SmsOptions"></a>SmsOptions</h2>

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
      replaceLineBreaks
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to replace \n by a new line. Default: false</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      android
    </td>
    <td>
      <code>SmsOptionsAndroid</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="SmsOptionsAndroid" href="#SmsOptionsAndroid"></a>SmsOptionsAndroid</h2>

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
      intent
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Set to &quot;INTENT&quot; to send SMS with the native android SMS messaging. Leaving it empty will send the SMS without opening any app.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





