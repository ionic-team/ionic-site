---
layout: "fluid/docs_base"
version: "3.13.1"
versionHref: "/docs/native"
path: ""
category: native
id: "email-composer"
title: "Email Composer"
header_sub_title: "Class in module "
doc: "Email Composer"
docType: "class"
---

<h1 class="api-title">Email Composer</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/email-composer/index.ts#L27">
  Improve this doc
</a>






<p>Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the <a href="https://github.com/hypery2k/cordova-email-plugin">Email Composer plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/hypery2k/cordova-email-plugin">
    https://github.com/hypery2k/cordova-email-plugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-email
$ npm install --save @ionic-native/email-composer
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { EmailComposer } from &#39;@ionic-native/email-composer&#39;;

constructor(private emailComposer: EmailComposer) { }

...


this.emailComposer.isAvailable().then((available: boolean) =&gt;{
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
this.emailComposer.open(email);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable(app)</code></h3>


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
      app</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>App id or uri scheme.<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Resolves if available, rejects if not available
</div><h3><a class="anchor" name="addAlias" href="#addAlias"></a><code>addAlias(alias,&nbsp;packageName)</code></h3>


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
      alias</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The alias name</p>
</td>
  </tr>
  
  <tr>
    <td>
      packageName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The package name</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="open" href="#open"></a><code>open(options,&nbsp;scope)</code></h3>




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
      options</td>
    <td>
      <code>EmailComposerOptions</code>
    </td>
    <td>
      <p>Email</p>
</td>
  </tr>
  
  <tr>
    <td>
      scope</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>Scope for the promise<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Resolves promise when the EmailComposer has been opened
</div>





<h2><a class="anchor" name="EmailComposerOptions" href="#EmailComposerOptions"></a>EmailComposerOptions</h2>

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
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      to
    </td>
    <td>
      <code>string | Array&lt;string&gt;</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      cc
    </td>
    <td>
      <code>string | Array&lt;string&gt;</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      bcc
    </td>
    <td>
      <code>string | Array&lt;string&gt;</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      attachments
    </td>
    <td>
      <code>Array&lt;any&gt;</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      subject
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
      body
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
      isHtml
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





