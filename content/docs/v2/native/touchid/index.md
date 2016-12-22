---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "touchid"
title: "TouchID"
header_sub_title: "Class in module "
doc: "TouchID"
docType: "class"
---







<h1 class="api-title">
  
  TouchID
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/touchid.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-touch-id</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-touch-id">
    https://github.com/EddyVerbruggen/cordova-plugin-touch-id
  </a>
</p>

<!-- description -->

<p>Scan the fingerprint of a user with the TouchID sensor.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-touch-id</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/cordova-plugin-touch-id">TouchID plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<h3 id="import-touch-id-plugin-into-project">Import Touch ID Plugin into Project</h3>
<pre><code class="lang-typescript">import { TouchID } from &#39;ionic-native&#39;;
</code></pre>
<h3 id="check-for-touch-id-availability">Check for Touch ID Availability</h3>
<pre><code class="lang-typescript">TouchID.isAvailable()
.then(
  res =&gt; console.log(&#39;TouchID is available!&#39;),
  err =&gt; console.error(&#39;TouchID is not available&#39;, err)
);
</code></pre>
<h3 id="invoke-touch-id-w-custom-message">Invoke Touch ID w/ Custom Message</h3>
<pre><code class="lang-typescript">TouchID.verifyFingerprint(&#39;Scan your fingerprint please&#39;)
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




<!-- @property tags -->


<h2>Static Members</h2>

<div id="isAvailable"></div>
<h3><code>isAvailable()</code>
  
</h3>


Checks Whether TouchID is available or not.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves if yes, rejects if no.
</div>



<div id="verifyFingerprint"></div>
<h3><code>verifyFingerprint(message)</code>
  
</h3>


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
      message
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
</div>



<div id="verifyFingerprintWithCustomPasswordFallback"></div>
<h3><code>verifyFingerprintWithCustomPasswordFallback(message)</code>
  
</h3>


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
      message
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
</div>



<div id="verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel"></div>
<h3><code>verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel(message,&nbsp;enterPasswordLabel)</code>
  
</h3>


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
      message
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The message to display</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      enterPasswordLabel
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

