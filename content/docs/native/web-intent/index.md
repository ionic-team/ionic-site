---
layout: "fluid/docs_base"
version: "3.6.1"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/web-intent/index.ts#L4">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save https://github.com/Initsogar/cordova-webintent.git
$ npm install --save @ionic-native/web-intent
</code></pre>
<p>Repo:
  <a href="https://github.com/Initsogar/cordova-webintent.git">
    https://github.com/Initsogar/cordova-webintent.git
  </a>
</p>






<h2>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2>Usage</h2>
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








<h2>Instance Members</h2>
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
</div><h3><a class="anchor" name="onNewIntent" href="#onNewIntent"></a><code>onNewIntent()</code></h3>







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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





