---
layout: "v2_fluid/docs_base"
version: "1.2.1"
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

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/emailcomposer.ts#L16'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-email-composer</code></pre>
<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-email-composer.git">
    https://github.com/katzer/cordova-plugin-email-composer.git
  </a>
</p>

<!-- description -->

<p>Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the <a href="https://github.com/katzer/cordova-plugin-email-composer">Email Composer plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone 8</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {EmailComposer} from &#39;ionic-native&#39;;


EmailComposer.isAvailable().then((available) =&gt;{
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
EmailComposer.send(email);
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="isAvailable"></div>
<h3><code>isAvailable(app,&nbsp;scope)</code>

</h3>Verifies if sending emails is supported on the device.



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
      <p>An optional app id or uri scheme. Defaults to mailto.</p>

      
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
<code>Promise&lt;boolean&gt;</code> Resolves promise with boolean whether EmailComposer is available
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




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

