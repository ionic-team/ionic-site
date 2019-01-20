---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "keychain"
title: "Keychain"
header_sub_title: "Class in module "
doc: "Keychain"
docType: "class"
---

<h1 class="api-title">Keychain</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/keychain/index.ts#L1">
  Improve this doc
</a>







<p>Get and set data in the iOS Keychain</p>
<p>Requires Cordova plugin: <code>cordova-plugin-ios-keychain</code>. For more info, please see the <a href="https://github.com/ionic-team/cordova-plugin-ios-keychain">Keychain plugin docs</a>.</p>
<p>See also <a href="https://ionicframework.com/docs/native/secure-storage/">Secure Storage</a> for more supported platforms.</p>


<p>Repo:
  <a href="https://github.com/ionic-team/cordova-plugin-ios-keychain">
    https://github.com/ionic-team/cordova-plugin-ios-keychain
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-ios-keychain
$ npm install --save @ionic-native/keychain
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Keychain } from &#39;@ionic-native/keychain&#39;;

constructor(private keychain: Keychain) { }

...

this.keychain.set(key, value).then(() =&gt; {
  this.keychain.get(key)
    .then(value =&gt; console.log(&#39;Got value&#39;, value))
    .catch(err =&gt; console.error(&#39;Error getting&#39;, err));
})
.catch(err =&gt; console.error(&#39;Error setting&#39;, err));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="get" href="#get"></a><code>get(key,&nbsp;touchIDMessage)</code></h3>




Retrieves a value for a key

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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the key to retrieve</p>
</td>
  </tr>
  
  <tr>
    <td>
      touchIDMessage</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the message to show underneath the TouchID prompt (if any)<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="set" href="#set"></a><code>set(key,&nbsp;value,&nbsp;useTouchID)</code></h3>




Sets a value for a key

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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the key to set</p>
</td>
  </tr>
  
  <tr>
    <td>
      value</td>
    <td>
      <code>string</code>|<code>number</code>|<code>boolean</code>
    </td>
    <td>
      <p>the value to set</p>
</td>
  </tr>
  
  <tr>
    <td>
      useTouchID</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>whether to store the value with security such that TouchID will be needed to grab it<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="getJson" href="#getJson"></a><code>getJson(key,&nbsp;touchIDMessage)</code></h3>




Gets a JSON value for a key

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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the key to retrieve</p>
</td>
  </tr>
  
  <tr>
    <td>
      touchIDMessage</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the message to show underneath the TouchID prompt (if any)</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="setJson" href="#setJson"></a><code>setJson(key,&nbsp;obj,&nbsp;useTouchId)</code></h3>




Sets a JSON value for a key

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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the key to set</p>
</td>
  </tr>
  
  <tr>
    <td>
      obj</td>
    <td>
      <code>any</code>
    </td>
    <td>
      <p>value the value to set</p>
</td>
  </tr>
  
  <tr>
    <td>
      useTouchId</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Wether to store the value with security such that TouchID will be needed to grab it<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="remove" href="#remove"></a><code>remove(key)</code></h3>




Removes a value for a key

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
      key</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the key to remove</p>
</td>
  </tr>
  </tbody>
</table>







