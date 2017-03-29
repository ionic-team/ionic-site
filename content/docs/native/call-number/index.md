---
layout: "fluid/docs_base"
version: "3.4.2"
versionHref: "/docs/native"
path: ""
category: native
id: "call-number"
title: "Call Number"
header_sub_title: "Class in module "
doc: "Call Number"
docType: "class"
---

<h1 class="api-title">Call Number</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/call-number/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add call-number
$ npm install --save @ionic-native/call-number
</code></pre>
<p>Repo:
  <a href="https://github.com/Rohfosho/CordovaCallNumberPlugin">
    https://github.com/Rohfosho/CordovaCallNumberPlugin
  </a>
</p>


<p>Call a number directly from your Cordova/Ionic application.</p>




<h2>Supported platforms</h2>
<ul>
  <li>iOS</li><li>Android</li>
</ul>






<h2>Usage</h2>
<pre><code>import {CallNumber} from &#39;@ionic-native/call-number&#39;;

constructor(private callNumber: CallNumber) { }

...


this.callNumber.callNumber(18001010101, true)
  .then(() =&gt; console.log(&#39;Launched dialer!&#39;))
  .catch(() =&gt; console.log(&#39;Error launching dialer&#39;));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="callNumber" href="#callNumber"></a><code>callNumber(numberToCall,&nbsp;bypassAppChooser)</code></h3>




Calls a phone number
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
      numberToCall</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The phone number to call as a string</p>
</td>
  </tr>
  
  <tr>
    <td>
      bypassAppChooser</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true to bypass the app chooser and go directly to dialer</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





