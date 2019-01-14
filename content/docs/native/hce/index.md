---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "hce"
title: "hce"
header_sub_title: "Class in module "
doc: "hce"
docType: "class"
---

<h1 class="api-title">hce</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/hce/index.ts#L2">
  Improve this doc
</a>







<p>HCE Cordova Wrapper</p>


<p>Repo:
  <a href="https://github.com/don/cordova-plugin-hce">
    https://github.com/don/cordova-plugin-hce
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ''
$ npm install --save @ionic-native/hce
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { hce } from &#39;@ionic-native/hce&#39;;


constructor(private hce: hce) { }

...

function onCommand(command){
  var commandAsBytes = new Uint8Array(command);
  var commandAsString = hce.util.byteArrayToHexString(commandAsBytes);

  // do something with the command

  // send the response
  hce.sendReponse(commandResponse);
}
this.hce.registerCommandCallback().then(onCommand);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="registerCommandCallback" href="#registerCommandCallback"></a><code>registerCommandCallback(onCommand,&nbsp;fail)</code></h3>


Registers command receiver.
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
      onCommand</td>
    <td>
      <code>HCECommandEvent</code>
    </td>
    <td>
      <p>The event handler.</p>
</td>
  </tr>
  
  <tr>
    <td>
      fail</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Error event handler.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="registerDeactivatedCallback" href="#registerDeactivatedCallback"></a><code>registerDeactivatedCallback(ok,&nbsp;fail)</code></h3>


Registers Deactivated receiver.
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
      ok</td>
    <td>
      <code>HCEDeactivatedEvent</code>
    </td>
    <td>
      <p>Success event handler.</p>
</td>
  </tr>
  
  <tr>
    <td>
      fail</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Error event handler.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="sendResponse" href="#sendResponse"></a><code>sendResponse(response,&nbsp;success,&nbsp;success)</code></h3>


Sends response APDU.
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
      response</td>
    <td>
      <code>Uint8Array</code>
    </td>
    <td>
      <p>Response</p>
</td>
  </tr>
  
  <tr>
    <td>
      success</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Success Callback.</p>
</td>
  </tr>
  
  <tr>
    <td>
      success</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Failure Callback.</p>
</td>
  </tr>
  </tbody>
</table>







