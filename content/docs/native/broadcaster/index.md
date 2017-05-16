---
layout: "fluid/docs_base"
version: "3.8.1"
versionHref: "/docs/native"
path: ""
category: native
id: "broadcaster"
title: "Broadcaster"
header_sub_title: "Class in module "
doc: "Broadcaster"
docType: "class"
---

<h1 class="api-title">Broadcaster</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/broadcaster/index.ts#L2">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save cordova-plugin-broadcaster
$ npm install --save @ionic-native/broadcaster
</code></pre>
<p>Repo:
  <a href="https://github.com/bsorrentino/cordova-broadcaster">
    https://github.com/bsorrentino/cordova-broadcaster
  </a>
</p>


<p>This plugin adds exchanging events between native code and your app.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { Broadcaster } from &#39;@ionic-native/broadcaster&#39;;

constructor(private broadcaster: Broadcaster) { }

...

// Listen to events from Native
this.broadcaster.addEventListener(&#39;eventName&#39;).subscribe((event) =&gt; console.log(event));

// Send event to Native
this.broadcaster.fireNativeEvent(&#39;eventName&#39;, {}).then(() =&gt; console.log(&#39;success&#39;));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="addEventListener" href="#addEventListener"></a><code>addEventListener(eventName)</code></h3>




This function listen to an event sent from the native code
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
      eventName</td>
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
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an observable to watch when an event is received
</div><h3><a class="anchor" name="fireNativeEvent" href="#fireNativeEvent"></a><code>fireNativeEvent(eventName,&nbsp;eventData)</code></h3>


This function sends data to the native code
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
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      eventData</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when an event is successfully fired
</div>





