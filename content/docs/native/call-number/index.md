---
layout: "fluid/docs_base"
version: "4.19.0"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/call-number/index.ts#L1">
  Improve this doc
</a>







<p>Call a number directly from your Cordova/Ionic application.
<strong>NOTE</strong>: The iOS Simulator (and maybe Android Simulators) do not provide access to the phone subsystem.</p>


<p>Repo:
  <a href="https://github.com/Rohfosho/CordovaCallNumberPlugin">
    https://github.com/Rohfosho/CordovaCallNumberPlugin
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add call-number
$ npm install --save @ionic-native/call-number
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { CallNumber } from &#39;@ionic-native/call-number&#39;;

constructor(private callNumber: CallNumber) { }

...


this.callNumber.callNumber(&quot;18001010101&quot;, true)
  .then(res =&gt; console.log(&#39;Launched dialer!&#39;, res))
  .catch(err =&gt; console.log(&#39;Error launching dialer&#39;, err));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
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
</div><h3><a class="anchor" name="isCallSupported" href="#isCallSupported"></a><code>isCallSupported()</code></h3>


Check if call feature is available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





