---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "firebase"
title: "Firebase"
header_sub_title: "Class in module "
doc: "Firebase"
docType: "class"
---

<h1 class="api-title">Firebase</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/firebase/index.ts#L2">
  Improve this doc
</a>







<p>This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported (including iOS 10).</p>


<p>Repo:
  <a href="https://github.com/arnesson/cordova-plugin-firebase">
    https://github.com/arnesson/cordova-plugin-firebase
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-firebase
$ npm install --save @ionic-native/firebase@4
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Firebase } from &#39;@ionic-native/firebase&#39;;

constructor(private firebase: Firebase) { }

...

this.firebase.getToken()
  .then(token =&gt; console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  .catch(error =&gt; console.error(&#39;Error getting token&#39;, error));

this.firebase.onNotificationOpen()
   .subscribe(data =&gt; console.log(`User opened a notification ${data}`));

this.firebase.onTokenRefresh()
  .subscribe((token: string) =&gt; console.log(`Got a new token ${token}`));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getToken" href="#getToken"></a><code>getToken()</code></h3>


Get the device token


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;null | string&gt;</code> Note that token will be null if it has not been established yet
</div>





