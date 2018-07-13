---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "device-accounts"
title: "Device Accounts"
header_sub_title: "Class in module "
doc: "Device Accounts"
docType: "class"
---

<h1 class="api-title">Device Accounts</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/device-accounts/index.ts#L12">
  Improve this doc
</a>







<p>Gets the Google accounts associated with the Android device</p>


<p>Repo:
  <a href="https://github.com/danielsogl/cordova-device-accounts">
    https://github.com/danielsogl/cordova-device-accounts
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-device-accounts
$ npm install --save @ionic-native/device-accounts
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { DeviceAccounts } from &#39;@ionic-native/device-accounts&#39;;

constructor(private deviceAccounts: DeviceAccounts) { }

...

this.deviceAccounts.get()
  .then(accounts =&gt; console.log(accounts))
  .catch(error =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="get" href="#get"></a><code>get()</code></h3>


Gets all accounts registered on the Android Device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;AndroidAccount[]&gt;</code> 
</div><h3><a class="anchor" name="getByType" href="#getByType"></a><code>getByType(type)</code></h3>


Get all accounts registered on Android device for requested type
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
      type</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;AndroidAccount[]&gt;</code> 
</div><h3><a class="anchor" name="getEmails" href="#getEmails"></a><code>getEmails()</code></h3>


Get all emails registered on Android device (accounts with 'com.google' type)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string[]&gt;</code> 
</div><h3><a class="anchor" name="getEmail" href="#getEmail"></a><code>getEmail()</code></h3>


Get the first email registered on Android device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div>





<h2><a class="anchor" name="AndroidAccount" href="#AndroidAccount"></a>AndroidAccount</h2>

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
      CREATOR
    </td>
    <td>
      <code>AndroidAccount</code>
    </td>
    <td>
      <p>Account creator</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Account name</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Account type</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





