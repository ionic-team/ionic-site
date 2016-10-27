---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "email-composer"
title: "Email Composer"
header_sub_title: "Class in module "
doc: "Email Composer"
docType: "class"
---







<h1 class="api-title">
  
  Email Composer
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/emailcomposer.ts#L3">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-email</code></pre>
<p>Repo:
  <a href="https://github.com/hypery2k/cordova-email-plugin">
    https://github.com/hypery2k/cordova-email-plugin
  </a>
</p>

<!-- description -->

<p>Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the <a href="https://github.com/hypery2k/cordova-email-plugin">Email Composer plugin docs</a>.</p>
<p>DISCLAIMER: This plugin is experiencing issues with the latest versions of Cordova. Use at your own risk. Functionality is not guaranteed. Please stay tuned for a more stable version.
A good alternative to this plugin is the social sharing plugin.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { EmailComposer } from &#39;ionic-native&#39;;


EmailComposer.isAvailable().then((available: boolean) =&gt;{
 if(available) {
   //Now we know we can send
 }
});

let email = {
  to: &#39;max@mustermann.de&#39;,
  cc: &#39;erika@mustermann.de&#39;,
  bcc: [&#39;john@doe.com&#39;, &#39;jane@doe.com&#39;],
  attachments: [
    &#39;file://img/logo.png&#39;,
    &#39;res://icon.png&#39;,
    &#39;base64:icon.png//iVBORw0KGgoAAAANSUhEUg...&#39;,
    &#39;file://README.pdf&#39;
  ],
  subject: &#39;Cordova Icons&#39;,
  body: &#39;How are you? Nice greetings from Leipzig&#39;,
  isHtml: true
};

// Send a text message using default options
EmailComposer.open(email);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="isAvailable"></div>
<h3><code>isAvailable(app)</code>
  
</h3>

Verifies if sending emails is supported on the device.



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
      app
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>An optional app id or uri scheme.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean&gt;</code> Resolves if available, rejects if not available
</div>



<div id="addAlias"></div>
<h3><code>addAlias(alias,&nbsp;packageName)</code>
  
</h3>


Adds a new mail app alias.



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
      alias
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The alias name</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      packageName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The package name</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="open"></div>
<h3><code>open(email,&nbsp;scope)</code>
  
</h3>




Displays the email composer pre-filled with data.



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
      email
      
      
    </td>
    <td>
      
<code>Email</code>
    </td>
    <td>
      <p>Email</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      scope
      
      
    </td>
    <td>
      
<code>any</code>
    </td>
    <td>
      <p>An optional scope for the promise</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Resolves promise when the EmailComposer has been opened
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

