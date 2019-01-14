---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "baidu-push"
title: "Baidu Push"
header_sub_title: "Class in module "
doc: "Baidu Push"
docType: "class"
---

<h1 class="api-title">Baidu Push</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/baidu-push/index.ts#L75">
  Improve this doc
</a>







<p>This plugin faciliates the use of Baidu Push notifications.</p>


<p>Repo:
  <a href="https://github.com/Ti-webdev/cordova-plugin-push-baidu.git">
    https://github.com/Ti-webdev/cordova-plugin-push-baidu.git
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-push-baidu
$ npm install --save @ionic-native/baidu-push
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { BaiduPush } from &#39;@ionic-native/baidu-push&#39;;


constructor(private baiduPush: BaiduPush) { }

...

this.baiduPush.startWork(&#39;xxxxxx&#39;)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="startWork" href="#startWork"></a><code>startWork(apiKey)</code></h3>


This method registers the device to Baidu Cloud Push services.
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
      apiKey</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Baidu Cloud Push API key.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;BaiduResponse&lt;RegistrationData&gt;&gt;</code> Returns a Promise that resolves with a BaiduResponse.
</div><h3><a class="anchor" name="stopWork" href="#stopWork"></a><code>stopWork()</code></h3>


This method unregisters the device to Baidu Cloud Push services.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;BaiduResponse&lt;UnregistrationData&gt;&gt;</code> Returns a Promise that resolves with a BaiduResponse.
</div><h3><a class="anchor" name="resumeWork" href="#resumeWork"></a><code>resumeWork()</code></h3>


This method re-binds the device to Baidu Cloud Push services.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;BaiduResponse&lt;RegistrationData&gt;&gt;</code> Returns a Promise that resolves with a BaiduResponse.
</div><h3><a class="anchor" name="setTags" href="#setTags"></a><code>setTags(tags)</code></h3>


This sets tags in the Baidu Cloud Push services.
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
      tags</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>tags The tags to set.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;BaiduResponse&lt;TagData&gt;&gt;</code> Returns a Promise that resolves with a BaiduResponse.
</div><h3><a class="anchor" name="delTags" href="#delTags"></a><code>delTags(tags)</code></h3>


This sets tags in the Baidu Cloud Push services.
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
      tags</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>tags The tags to set.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;BaiduResponse&lt;TagData&gt;&gt;</code> Returns a Promise that resolves with a BaiduResponse.
</div><h3><a class="anchor" name="onMessage" href="#onMessage"></a><code>onMessage()</code></h3>




This method is called when a notification is recieved on the foreground.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;BaiduResponse&lt;NotificationData&gt;&gt;</code> Returns a Promise that resolves with a BaiduResponse.
</div><h3><a class="anchor" name="onNotificationClicked" href="#onNotificationClicked"></a><code>onNotificationClicked()</code></h3>




This method is called when the user taps a notification.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;BaiduResponse&lt;NotificationData&gt;&gt;</code> Returns a Promise that resolves with a BaiduResponse.
</div><h3><a class="anchor" name="onNotificationArrived" href="#onNotificationArrived"></a><code>onNotificationArrived()</code></h3>




This method is called when a notification is recieved.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;BaiduResponse&lt;NotificationData&gt;&gt;</code> Returns a Promise that resolves with a BaiduResponse.
</div>





<h2><a class="anchor" name="BaiduResponse" href="#BaiduResponse"></a>BaiduResponse</h2>

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
      type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The corresponding Baidu SDK method called.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      errorCode
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The error code corresponding to Baidu&#39;s request.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      data
    </td>
    <td>
      <code>T</code>
    </td>
    <td>
      <p>Registration data revelvant to subsequent actions.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="RegistrationData" href="#RegistrationData"></a>RegistrationData</h2>

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
      appId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ID registered to Baidu for the app.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      userId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ID registered to Baidu for the device.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      channelId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The channel ID registered to Baidu for the app.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="UnregistrationData" href="#UnregistrationData"></a>UnregistrationData</h2>

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
      requestId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ID corresponding to the Baidu request.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="TagData" href="#TagData"></a>TagData</h2>

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
      requestId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ID corresponding to the Baidu request.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      channelId
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The channel ID registered to Baidu for the app.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      sucessTags
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>The list of successfully set/deleted tags.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      failTags
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>The list of unsuccessfully set/deleted tags.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="NotificationData" href="#NotificationData"></a>NotificationData</h2>

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
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The title of the notification.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      description
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The description of the notification.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      customContentString
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Custom content for the notification.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





