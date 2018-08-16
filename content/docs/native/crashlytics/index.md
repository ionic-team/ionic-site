---
layout: "fluid/docs_base"
version: "4.11.0"
versionHref: "/docs/native"
path: ""
category: native
id: "crashlytics"
title: "Crashlytics"
header_sub_title: "Class in module "
doc: "Crashlytics"
docType: "class"
---

<h1 class="api-title">Crashlytics</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/fabric/index.ts#L5">
  Improve this doc
</a>







<p>API for interacting with the Crashlytics kit.</p>
<p><a href="https://docs.fabric.io/crashlytics/index.html">https://docs.fabric.io/crashlytics/index.html</a></p>


<p>Repo:
  <a href="https://www.npmjs.com/package/cordova-fabric-plugin">
    https://www.npmjs.com/package/cordova-fabric-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-fabric-plugin --variable FABRIC_API_KEY=XXX --variable FABRIC_API_SECRET=xxx
$ npm install --save @ionic-native/fabric
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Crashlytics } from &#39;@ionic-native/fabric&#39;;


constructor(private crashlytics: Crashlytics) { }

...

try {
 await this.loadData();
} catch (e) {
 this.crashlytics.addLog(&quot;Error while loading data&quot;);
 this.crashlytics.sendNonFatalCrash(e.message || e);
}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="addLog" href="#addLog"></a><code>addLog(message)</code></h3>




Add logging that will be sent with your crash data. This logging will not show up
in the system.log and will only be visible in your Crashlytics dashboard.
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
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendCrash" href="#sendCrash"></a><code>sendCrash()</code></h3>




Used to simulate a native platform crash (useful for testing Crashlytics logging).



<h3><a class="anchor" name="sendNonFatalCrash" href="#sendNonFatalCrash"></a><code>sendNonFatalCrash()</code></h3>




Used to log a non-fatal error message (Android only).



<h3><a class="anchor" name="recordError" href="#recordError"></a><code>recordError()</code></h3>




Used to record a non-fatal error message (iOS only).



<h3><a class="anchor" name="setUserIdentifier" href="#setUserIdentifier"></a><code>setUserIdentifier()</code></h3>




Sets the user's identifier for logging to Crashlytics backend.



<h3><a class="anchor" name="setUserName" href="#setUserName"></a><code>setUserName()</code></h3>




Sets the user's name for logging to Crashlytics backend.



<h3><a class="anchor" name="setUserEmail" href="#setUserEmail"></a><code>setUserEmail()</code></h3>




Sets the user's email address for logging to Crashlytics backend.



<h3><a class="anchor" name="setStringValueForKey" href="#setStringValueForKey"></a><code>setStringValueForKey()</code></h3>




Sets a custom key/value pair for logging to Crashlytics backend.



<h3><a class="anchor" name="setIntValueForKey" href="#setIntValueForKey"></a><code>setIntValueForKey()</code></h3>




Sets a custom key/value pair for logging to Crashlytics backend.



<h3><a class="anchor" name="setBoolValueForKey" href="#setBoolValueForKey"></a><code>setBoolValueForKey()</code></h3>




Sets a custom key/value pair for logging to Crashlytics backend.



<h3><a class="anchor" name="setFloatValueForKey" href="#setFloatValueForKey"></a><code>setFloatValueForKey()</code></h3>




Sets a custom key/value pair for logging to Crashlytics backend.









