---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "hot-code-push"
title: "Hot Code Push"
header_sub_title: "Class in module "
doc: "Hot Code Push"
docType: "class"
---

<h1 class="api-title">Hot Code Push</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/hot-code-push/index.ts#L87">
  Improve this doc
</a>







<p>HotCodePush plugin for Cordova that supports iOS and Android. This plugin allows you to keep your html, css and js files synced with your server.</p>
<p>For more info, please see the detailed wiki <a href="https://github.com/nordnet/cordova-hot-code-push/wiki">https://github.com/nordnet/cordova-hot-code-push/wiki</a></p>


<p>Repo:
  <a href="https://github.com/nordnet/cordova-hot-code-push">
    https://github.com/nordnet/cordova-hot-code-push
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-hot-code-push
$ npm install --save @ionic-native/hot-code-push
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { HotCodePush } from &#39;@ionic-native/hot-code-push&#39;;

constructor(private hotCodePush: HotCodePush) { }

...

hotCodePush.fetchUpdate(options).then(data =&gt; { console.log(&#39;Update available&#39;); });
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="requestApplicationUpdate" href="#requestApplicationUpdate"></a><code>requestApplicationUpdate(message)</code></h3>


Show dialog with the request to update application through the Store (App Store or Google Play).
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
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Message to show in the dialog</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Resolves when the user is redirected to the store, rejects if the user declines.
</div><h3><a class="anchor" name="fetchUpdate" href="#fetchUpdate"></a><code>fetchUpdate(options)</code></h3>


Download updates from the server-side.
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
      <code>HotCodePushRequestOptions</code>
    </td>
    <td>
      <p>Additional options to the request. If not set - preferences from config.xml are used.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Resolves if there is an update available, rejects otherwise.
</div><h3><a class="anchor" name="installUpdate" href="#installUpdate"></a><code>installUpdate()</code></h3>




Install update if there is anything to install.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Resolves when the update is installed.
</div><h3><a class="anchor" name="isUpdateAvailableForInstallation" href="#isUpdateAvailableForInstallation"></a><code>isUpdateAvailableForInstallation()</code></h3>




Check if update was loaded and ready to be installed.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HotCodePushUpdate&gt;</code> Resolves if an update is ready, rejects if there is no update.
</div><h3><a class="anchor" name="getVersionInfo" href="#getVersionInfo"></a><code>getVersionInfo()</code></h3>




Gets information about the app's versions.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;HotCodePushVersion&gt;</code> Resolves with the information about the versions.
</div><h3><a class="anchor" name="onUpdateIsReadyToInstall" href="#onUpdateIsReadyToInstall"></a><code>onUpdateIsReadyToInstall()</code></h3>




Event sent when new release was successfully loaded and ready to be installed.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;HotCodePushEventData&gt;</code> 
</div><h3><a class="anchor" name="onUpdateLoadFailed" href="#onUpdateLoadFailed"></a><code>onUpdateLoadFailed()</code></h3>




Event sent when plugin couldn't load update from the server. Error details are attached to the event.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;HotCodePushEventData&gt;</code> 
</div><h3><a class="anchor" name="onNothingToUpdate" href="#onNothingToUpdate"></a><code>onNothingToUpdate()</code></h3>




Event sent when we successfully loaded application config from the server, but there is nothing new is available.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;HotCodePushEventData&gt;</code> 
</div><h3><a class="anchor" name="onBeforeInstall" href="#onBeforeInstall"></a><code>onBeforeInstall()</code></h3>




Event sent when an update is about to be installed.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;HotCodePushEventData&gt;</code> 
</div><h3><a class="anchor" name="onUpdateInstalled" href="#onUpdateInstalled"></a><code>onUpdateInstalled()</code></h3>




Event sent when update was successfully installed.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;HotCodePushEventData&gt;</code> 
</div><h3><a class="anchor" name="onUpdateInstallFailed" href="#onUpdateInstallFailed"></a><code>onUpdateInstallFailed()</code></h3>




Event sent when update installation failed. Error details are attached to the event.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;HotCodePushEventData&gt;</code> 
</div><h3><a class="anchor" name="onNothingToInstall" href="#onNothingToInstall"></a><code>onNothingToInstall()</code></h3>




Event sent when there is nothing to install. Probably, nothing was loaded before that.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;HotCodePushEventData&gt;</code> 
</div><h3><a class="anchor" name="onBeforeAssetsInstalledOnExternalStorage" href="#onBeforeAssetsInstalledOnExternalStorage"></a><code>onBeforeAssetsInstalledOnExternalStorage()</code></h3>




Event sent when plugin is about to start installing bundle content on the external storage.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;HotCodePushEventData&gt;</code> 
</div><h3><a class="anchor" name="onAssetsInstalledOnExternalStorage" href="#onAssetsInstalledOnExternalStorage"></a><code>onAssetsInstalledOnExternalStorage()</code></h3>




Event sent when plugin successfully copied web project files from bundle on the external storage. Most likely you will use it for debug purpose only. Or even never.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;HotCodePushEventData&gt;</code> 
</div><h3><a class="anchor" name="onAssetsInstallationError" href="#onAssetsInstallationError"></a><code>onAssetsInstallationError()</code></h3>




Event sent when plugin couldn't copy files from bundle on the external storage. If this happens - plugin won't work. Can occur when there is not enough free space on the device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;HotCodePushEventData&gt;</code> 
</div>





