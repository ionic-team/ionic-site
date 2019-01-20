---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "touch-id"
title: "Touch ID"
header_sub_title: "Class in module "
doc: "Touch ID"
docType: "class"
---

<h1 class="api-title">Touch ID</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/touch-id/index.ts#L1">
  Improve this doc
</a>







<p>Scan the fingerprint of a user with the TouchID sensor.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-touch-id</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/cordova-plugin-touch-id">TouchID plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-touch-id">
    https://github.com/EddyVerbruggen/cordova-plugin-touch-id
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-touch-id
$ npm install --save @ionic-native/touch-id
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { TouchID } from &#39;@ionic-native/touch-id&#39;;

constructor(private touchId: TouchID) { }

...

this.touchId.isAvailable()
  .then(
    res =&gt; console.log(&#39;TouchID is available!&#39;),
    err =&gt; console.error(&#39;TouchID is not available&#39;, err)
  );

this.touchId.verifyFingerprint(&#39;Scan your fingerprint please&#39;)
  .then(
    res =&gt; console.log(&#39;Ok&#39;, res),
    err =&gt; console.error(&#39;Error&#39;, err)
  );
</code></pre>
<h3 id="error-codes">Error Codes</h3>
<p>The plugin will reject for various reasons. Your app will most likely need to respond to the cases differently.</p>
<p>Here is a list of some of the error codes:</p>
<ul>
<li><code>-1</code> - Fingerprint scan failed more than 3 times</li>
<li><code>-2</code> or <code>-128</code> - User tapped the &#39;Cancel&#39; button</li>
<li><code>-3</code> - User tapped the &#39;Enter Passcode&#39; or &#39;Enter Password&#39; button</li>
<li><code>-4</code> - The scan was cancelled by the system (Home button for example)</li>
<li><code>-6</code> - TouchID is not Available</li>
<li><code>-8</code> - TouchID is locked out from too many tries</li>
</ul>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>


Checks Whether TouchID is available or not.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves if yes, rejects if no.
</div><h3><a class="anchor" name="verifyFingerprint" href="#verifyFingerprint"></a><code>verifyFingerprint(message)</code></h3>


Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, brings up standard system passcode screen.

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
      <p>The message to display</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
</div><h3><a class="anchor" name="verifyFingerprintWithCustomPasswordFallback" href="#verifyFingerprintWithCustomPasswordFallback"></a><code>verifyFingerprintWithCustomPasswordFallback(message)</code></h3>


Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).

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
      <p>The message to display</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
</div><h3><a class="anchor" name="verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel" href="#verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel"></a><code>verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel(message,&nbsp;enterPasswordLabel)</code></h3>


Show TouchID dialog with custom 'Enter Password' message and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).

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
      <p>The message to display</p>
</td>
  </tr>
  
  <tr>
    <td>
      enterPasswordLabel</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Custom text for the &#39;Enter Password&#39; button</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
</div><h3><a class="anchor" name="didFingerprintDatabaseChange" href="#didFingerprintDatabaseChange"></a><code>didFingerprintDatabaseChange()</code></h3>


Checks if the fingerprint database changed.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves if yes, rejects if no.
</div>





