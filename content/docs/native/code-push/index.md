---
layout: "fluid/docs_base"
version: "4.7.0"
versionHref: "/docs/native"
path: ""
category: native
id: "code-push"
title: "Code Push"
header_sub_title: "Class in module "
doc: "Code Push"
docType: "class"
---

<h1 class="api-title">Code Push</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/code-push/index.ts#L457">
  Improve this doc
</a>







<p>CodePush plugin for Cordova by Microsoft that supports iOS and Android.</p>
<p>For more info, please see <a href="https://github.com/Dellos7/example-cordova-code-push-plugin">https://github.com/Dellos7/example-cordova-code-push-plugin</a></p>


<p>Repo:
  <a href="https://github.com/Microsoft/cordova-plugin-code-push">
    https://github.com/Microsoft/cordova-plugin-code-push
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-code-push
$ npm install --save @ionic-native/code-push
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { CodePush } from &#39;@ionic-native/code-push&#39;;

constructor(private codePush: CodePush) { }

...

// note - mostly error &amp; completed methods of observable will not fire
// as syncStatus will contain the current state of the update
this.codePush.sync().subscribe((syncStatus) =&gt; console.log(syncStatus));

const downloadProgress = (progress) =&gt; { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }
this.codePush.sync({}, downloadProgress).subscribe((syncStatus) =&gt; console.log(syncStatus));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getCurrentPackage" href="#getCurrentPackage"></a><code>getCurrentPackage()</code></h3>


Get the current package information.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;ILocalPackage&gt;</code> 
</div><h3><a class="anchor" name="getPendingPackage" href="#getPendingPackage"></a><code>getPendingPackage()</code></h3>


Gets the pending package information, if any. A pending package is one that has been installed but the application still runs the old code.
This happens only after a package has been installed using ON_NEXT_RESTART or ON_NEXT_RESUME mode, but the application was not restarted/resumed yet.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;ILocalPackage&gt;</code> 
</div><h3><a class="anchor" name="checkForUpdate" href="#checkForUpdate"></a><code>checkForUpdate(deploymentKey)</code></h3>




Checks with the CodePush server if an update package is available for download.

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
      deploymentKey</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Optional deployment key that overrides the config.xml setting.<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;IRemotePackage&gt;</code> 
</div><h3><a class="anchor" name="notifyApplicationReady" href="#notifyApplicationReady"></a><code>notifyApplicationReady()</code></h3>


Notifies the plugin that the update operation succeeded and that the application is ready.
Calling this function is required on the first run after an update. On every subsequent application run, calling this function is a noop.
If using sync API, calling this function is not required since sync calls it internally.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="restartApplication" href="#restartApplication"></a><code>restartApplication()</code></h3>


Reloads the application. If there is a pending update package installed using ON_NEXT_RESTART or ON_NEXT_RESUME modes, the update
will be immediately visible to the user. Otherwise, calling this function will simply reload the current version of the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="sync" href="#sync"></a><code>sync(syncOptions,&nbsp;downloadProgress)</code></h3>




Convenience method for installing updates in one method call.
This method is provided for simplicity, and its behavior can be replicated by using window.codePush.checkForUpdate(), RemotePackage's download() and LocalPackage's install() methods.

The algorithm of this method is the following:
- Checks for an update on the CodePush server.
- If an update is available
        - If the update is mandatory and the alertMessage is set in options, the user will be informed that the application will be updated to the latest version.
          The update package will then be downloaded and applied.
        - If the update is not mandatory and the confirmMessage is set in options, the user will be asked if they want to update to the latest version.
          If they decline, the syncCallback will be invoked with SyncStatus.UPDATE_IGNORED.
        - Otherwise, the update package will be downloaded and applied with no user interaction.
- If no update is available on the server, or if a previously rolled back update is available and the ignoreFailedUpdates is set to true, the syncCallback will be invoked with the SyncStatus.UP_TO_DATE.
- If an error occurs during checking for update, downloading or installing it, the syncCallback will be invoked with the SyncStatus.ERROR.

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
      syncOptions</td>
    <td>
      <code>SyncOptions</code>
    </td>
    <td>
      <p>Optional SyncOptions parameter configuring the behavior of the sync operation.<strong class="tag">Optional</strong></p>
</td>
  </tr>
  
  <tr>
    <td>
      downloadProgress</td>
    <td>
      <code>SuccessCallback&lt;DownloadProgress&gt;</code>
    </td>
    <td>
      <p>Optional callback invoked during the download process. It is called several times with one DownloadProgress parameter.<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;SyncStatus&gt;</code> 
</div>





