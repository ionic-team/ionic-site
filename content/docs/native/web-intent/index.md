---
layout: "fluid/docs_base"
version: "4.12.2"
versionHref: "/docs/native"
path: ""
category: native
id: "web-intent"
title: "Web Intent"
header_sub_title: "Class in module "
doc: "Web Intent"
docType: "class"
---

<h1 class="api-title">Web Intent</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/web-intent/index.ts#L16">
  Improve this doc
</a>







<p>This Plugin provides a general purpose shim layer for the Android intent mechanism, exposing various ways to handle sending and receiving intents.</p>


<p>Repo:
  <a href="https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent">
    https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add com-darryncampbell-cordova-plugin-intent
$ npm install --save @ionic-native/web-intent
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<p>For usage information please refer to the plugin&#39;s Github repo.</p>
<pre><code class="lang-typescript">import { WebIntent } from &#39;@ionic-native/web-intent&#39;;

constructor(private webIntent: WebIntent) { }

...

const options = {
  action: this.webIntent.ACTION_VIEW,
  url: &#39;path/to/file&#39;,
  type: &#39;application/vnd.android.package-archive&#39;
};

this.webIntent.startActivity(options).then(onSuccess, onError);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="ACTION_SEND" href="#ACTION_SEND"></a><code>ACTION_SEND</code></h3>


Convenience constant for actions


<h3><a class="anchor" name="ACTION_VIEW" href="#ACTION_VIEW"></a><code>ACTION_VIEW</code></h3>


Convenience constant for actions


<h3><a class="anchor" name="EXTRA_TEXT" href="#EXTRA_TEXT"></a><code>EXTRA_TEXT</code></h3>


Convenience constant for extras


<h3><a class="anchor" name="EXTRA_SUBJECT" href="#EXTRA_SUBJECT"></a><code>EXTRA_SUBJECT</code></h3>


Convenience constant for extras


<h3><a class="anchor" name="EXTRA_STREAM" href="#EXTRA_STREAM"></a><code>EXTRA_STREAM</code></h3>


Convenience constant for extras


<h3><a class="anchor" name="EXTRA_EMAIL" href="#EXTRA_EMAIL"></a><code>EXTRA_EMAIL</code></h3>


Convenience constant for extras


<h3><a class="anchor" name="ACTION_CALL" href="#ACTION_CALL"></a><code>ACTION_CALL</code></h3>


Convenience constant for actions


<h3><a class="anchor" name="ACTION_SENDTO" href="#ACTION_SENDTO"></a><code>ACTION_SENDTO</code></h3>


Convenience constant for actions


<h3><a class="anchor" name="ACTION_GET_CONTENT" href="#ACTION_GET_CONTENT"></a><code>ACTION_GET_CONTENT</code></h3>


Convenience constant for actions


<h3><a class="anchor" name="ACTION_PICK" href="#ACTION_PICK"></a><code>ACTION_PICK</code></h3>


Convenience constant for actions


<h3><a class="anchor" name="startActivity" href="#startActivity"></a><code>startActivity(options)</code></h3>


Launches an Android intent
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
      options</td>
    <td>
      <code>IntentOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startActivityForResult" href="#startActivityForResult"></a><code>startActivityForResult(options)</code></h3>


Starts a new activity and return the result to the application
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
      options</td>
    <td>
      <code>IntentOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="hasExtra" href="#hasExtra"></a><code>hasExtra(extra)</code></h3>


Checks if this app was invoked with specified extra
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
      extra</td>
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
</div><h3><a class="anchor" name="getExtra" href="#getExtra"></a><code>getExtra(extra)</code></h3>


Gets the extra that this app was invoked with
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
      extra</td>
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
</div><h3><a class="anchor" name="getUri" href="#getUri"></a><code>getUri()</code></h3>


Gets the Uri the app was invoked with


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onIntent" href="#onIntent"></a><code>onIntent()</code></h3>




Returns the content of the intent used whenever the application activity is launched


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;string&gt;</code> 
</div><h3><a class="anchor" name="sendBroadcast" href="#sendBroadcast"></a><code>sendBroadcast(options)</code></h3>


Sends a custom intent passing optional extras
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
      options</td>
    <td>
      <code>IntentOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startService" href="#startService"></a><code>startService(options)</code></h3>


Request that a given application service be started
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
      options</td>
    <td>
      <code>IntentOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="registerBroadcastReceiver" href="#registerBroadcastReceiver"></a><code>registerBroadcastReceiver(filters)</code></h3>




Registers a broadcast receiver for the specified filters
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
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="unregisterBroadcastReceiver" href="#unregisterBroadcastReceiver"></a><code>unregisterBroadcastReceiver()</code></h3>




Unregisters a broadcast receiver



<h3><a class="anchor" name="getIntent" href="#getIntent"></a><code>getIntent()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="sendResult" href="#sendResult"></a><code>sendResult()</code></h3>


Send a result back to the Intent that started this Activity.
The data can be passed using 'extras'.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="IntentOptions" href="#IntentOptions"></a>IntentOptions</h2>

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
      requestCode
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      package
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      url
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      extras
    </td>
    <td>
      <code>object</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      action
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      component
    </td>
    <td>
      <code>{
    package: string;
    class: string;
  }</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      flags
    </td>
    <td>
      <code>number[]</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





