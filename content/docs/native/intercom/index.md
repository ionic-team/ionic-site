---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "intercom"
title: "Intercom"
header_sub_title: "Class in module "
doc: "Intercom"
docType: "class"
---

<h1 class="api-title">Intercom</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/intercom/index.ts#L1">
  Improve this doc
</a>







<p>This is a plugin that allows your Ionic app to use Intercom for iOS and/or Intercom for Android.
Follow the offical documentation to setup this plugin correctly: <a href="https://developers.intercom.com/docs/cordova-phonegap-configuration">https://developers.intercom.com/docs/cordova-phonegap-configuration</a></p>


<p>Repo:
  <a href="https://github.com/intercom/intercom-cordova">
    https://github.com/intercom/intercom-cordova
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-intercom
$ npm install --save @ionic-native/intercom
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Intercom } from &#39;@ionic-native/intercom&#39;;


constructor(private intercom: Intercom) { }

...

this.intercom.registerUnidentifiedUser();
...
this.intercom.registerForPush();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="registerIdentifiedUser" href="#registerIdentifiedUser"></a><code>registerIdentifiedUser(options)</code></h3>


Register a identified user
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
      <code>any</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="registerUnidentifiedUser" href="#registerUnidentifiedUser"></a><code>registerUnidentifiedUser(options)</code></h3>


Register a unidentified user
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
      <code>any</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="reset" href="#reset"></a><code>reset()</code></h3>


This resets the Intercom integration's cache of your user's identity and wipes the slate clean.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="setSecureMode" href="#setSecureMode"></a><code>setSecureMode(secureHash,&nbsp;secureData)</code></h3>



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
      secureHash</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      secureData</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="setUserHash" href="#setUserHash"></a><code>setUserHash(secureHash)</code></h3>



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
      secureHash</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="updateUser" href="#updateUser"></a><code>updateUser(attributes)</code></h3>



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
      attributes</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="logEvent" href="#logEvent"></a><code>logEvent(eventName,&nbsp;metaData)</code></h3>



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
      eventName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      </td>
  </tr>
  
  <tr>
    <td>
      metaData</td>
    <td>
      <code>any</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="displayMessenger" href="#displayMessenger"></a><code>displayMessenger()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="displayMessageComposer" href="#displayMessageComposer"></a><code>displayMessageComposer()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="displayMessageComposerWithInitialMessage" href="#displayMessageComposerWithInitialMessage"></a><code>displayMessageComposerWithInitialMessage(initialMessage)</code></h3>



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
      initialMessage</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="displayConversationsList" href="#displayConversationsList"></a><code>displayConversationsList()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="unreadConversationCount" href="#unreadConversationCount"></a><code>unreadConversationCount()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="setLauncherVisibility" href="#setLauncherVisibility"></a><code>setLauncherVisibility(visibility)</code></h3>



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
      visibility</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="setInAppMessageVisibility" href="#setInAppMessageVisibility"></a><code>setInAppMessageVisibility(visibility)</code></h3>



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
      visibility</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="hideMessenger" href="#hideMessenger"></a><code>hideMessenger()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="registerForPush" href="#registerForPush"></a><code>registerForPush()</code></h3>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div>





