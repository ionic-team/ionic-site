---
layout: "fluid/docs_base"
version: "4.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "keychain-touch-id"
title: "Keychain Touch Id"
header_sub_title: "Class in module "
doc: "Keychain Touch Id"
docType: "class"
---

<h1 class="api-title">Keychain Touch Id</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/keychain-touch-id/index.ts#L1">
  Improve this doc
</a>







<p>A cordova plugin adding the iOS TouchID / Android fingerprint to your
app and allowing you to store a password securely in the device keychain.</p>


<p>Repo:
  <a href="https://github.com/sjhoeksma/cordova-plugin-keychain-touch-id">
    https://github.com/sjhoeksma/cordova-plugin-keychain-touch-id
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-keychain-touch-id
$ npm install --save @ionic-native/keychain-touch-id
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { KeychainTouchId } from &#39;@ionic-native/keychain-touch-id&#39;;


constructor(private keychainTouchId: KeychainTouchId) { }

...


this.keychainTouchId.isAvailable()
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="isAvailable" href="#isAvailable"></a><code>isAvailable()</code></h3>


Check if Touch ID / Fingerprint is supported by the device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when there is hardware support
</div><h3><a class="anchor" name="save" href="#save"></a><code>save(key,&nbsp;password)</code></h3>


Encrypts and Saves a password under the key in the device keychain, which can be retrieved after
successful authentication using fingerprint
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
      <p>the key you want to store</p>
</td>
  </tr>
  
  <tr>
    <td>
      password</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>the password you want to encrypt and store</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when there is a result
</div><h3><a class="anchor" name="verify" href="#verify"></a><code>verify(key,&nbsp;message)</code></h3>


Opens the fingerprint dialog, for the given key, showing an additional message. Promise will resolve
with the password stored in keychain or will resolve an error code, where -1 indicated not available.
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
      <p>the key you want to retrieve from keychain</p>
</td>
  </tr>
  
  <tr>
    <td>
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>a message to the user</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the key value is successfully retrieved or an error
</div><h3><a class="anchor" name="has" href="#has"></a><code>has(key)</code></h3>


Checks if there is a password stored within the keychain for the given key.
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
      <p>the key you want to check from keychain</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves with success if the key is available or failure if key is not.
</div><h3><a class="anchor" name="delete" href="#delete"></a><code>delete(key)</code></h3>


Deletes the password stored under given key from the keychain.
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
      <p>the key you want to delete from keychain</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves with success if the key is deleted or failure if key is not
</div><h3><a class="anchor" name="setLocale" href="#setLocale"></a><code>setLocale(locale)</code></h3>


Sets the language of the fingerprint dialog
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
      locale</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>locale subtag from <a href="https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry">this list</a>.</p>
</td>
  </tr>
  </tbody>
</table>







