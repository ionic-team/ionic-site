---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "google-nearby"
title: "Google Nearby"
header_sub_title: "Class in module "
doc: "Google Nearby"
docType: "class"
---

<h1 class="api-title">Google Nearby</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/google-nearby/index.ts#L2">
  Improve this doc
</a>







<p>This plugin adds support for the Google Nearby Messages API.</p>


<p>Repo:
  <a href="https://github.com/hahahannes/cordova-plugin-google-nearby">
    https://github.com/hahahannes/cordova-plugin-google-nearby
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY="123456789"
$ npm install --save @ionic-native/google-nearby
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { GoogleNearby } from &#39;@ionic-native/google-nearby&#39;;


constructor(private googleNearby: GoogleNearby) { }

this.googleNearby.publish(&#39;Hello&#39;)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));

this.googleNearby.subscribe()
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="publish" href="#publish"></a><code>publish(message)</code></h3>


Publish a message
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
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Message to publish</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the message got published
</div><h3><a class="anchor" name="subscribe" href="#subscribe"></a><code>subscribe()</code></h3>




Subscribe to receive messages


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an observable that emits received messages
</div>





