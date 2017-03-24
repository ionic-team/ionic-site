---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "code-push"
title: "Code Push"
header_sub_title: "Class in module "
doc: "Code Push"
docType: "class"
---

<h1 class="api-title">Code Push</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/code-push/index.ts#L395">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-code-push
$ npm install --save @ionic-native/code-push
</code></pre>
<p>Repo:
  <a href="https://github.com/Microsoft/cordova-plugin-code-push">
    https://github.com/Microsoft/cordova-plugin-code-push
  </a>
</p>


<p>CodePush plugin for Cordova by Microsoft that supports iOS and Android.</p>
<p>For more info, please see <a href="https://github.com/ksachdeva/ionic2-code-push-example">https://github.com/ksachdeva/ionic2-code-push-example</a></p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { CodePush } from &#39;@ionic-native/code-push&#39;;

constructor(private codePush: CodePush) { }

...

// note - mostly error &amp; completed methods of observable will not fire
// as syncStatus will contain the current state of the update
this.codePush.sync().subscribe((syncStatus) =&gt; console.log(syncStatus));

const downloadProgress = (progress) =&gt; { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }
this.codePush.sync({}, downloadProgress).subscribe((syncStatus) =&gt; console.log(syncStatus));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="getCurrentPackage" href="#getCurrentPackage"></a><code>getCurrentPackage(packageSuccess,&nbsp;packageError)</code></h3>


Get the current package information.

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
      packageSuccess</td>
    <td>
      
    </td>
    <td>
      <p>Callback invoked with the currently deployed package information.</p>
</td>
  </tr>
  
  <tr>
    <td>
      packageError</td>
    <td>
      
    </td>
    <td>
      <p>Optional callback invoked in case of an error.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;ILocalPackage&gt;</code> 
</div><h3><a class="anchor" name="getPendingPackage" href="#getPendingPackage"></a><code>getPendingPackage()</code></h3>


Gets the pending package information, if any. A pending package is one that has been installed but the application still runs the old code.
This happends only after a package has been installed using ON_NEXT_RESTART or ON_NEXT_RESUME mode, but the application was not restarted/resumed yet.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;ILocalPackage&gt;</code> 
</div><h3><a class="anchor" name="checkForUpdate" href="#checkForUpdate"></a><code>checkForUpdate(querySuccess,&nbsp;queryError,&nbsp;deploymentKey)</code></h3>




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
      querySuccess</td>
    <td>
      
    </td>
    <td>
      <p>Callback invoked in case of a successful response from the server.
                    The callback takes one RemotePackage parameter. A non-null package is a valid update.
                    A null package means the application is up to date for the current native application version.</p>
</td>
  </tr>
  
  <tr>
    <td>
      queryError</td>
    <td>
      
    </td>
    <td>
      <p>Optional callback invoked in case of an error.</p>
</td>
  </tr>
  
  <tr>
    <td>
      deploymentKey</td>
    <td>
      
    </td>
    <td>
      <p>Optional deployment key that overrides the config.xml setting.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;IRemotePackage&gt;</code> 
</div><h3><a class="anchor" name="notifyApplicationReady" href="#notifyApplicationReady"></a><code>notifyApplicationReady(notifySucceeded,&nbsp;notifyFailed)</code></h3>


Notifies the plugin that the update operation succeeded and that the application is ready.
Calling this function is required on the first run after an update. On every subsequent application run, calling this function is a noop.
If using sync API, calling this function is not required since sync calls it internally.

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
      notifySucceeded</td>
    <td>
      
    </td>
    <td>
      <p>Optional callback invoked if the plugin was successfully notified.</p>
</td>
  </tr>
  
  <tr>
    <td>
      notifyFailed</td>
    <td>
      
    </td>
    <td>
      <p>Optional callback invoked in case of an error during notifying the plugin.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="restartApplication" href="#restartApplication"></a><code>restartApplication()</code></h3>


Reloads the application. If there is a pending update package installed using ON_NEXT_RESTART or ON_NEXT_RESUME modes, the update
will be immediately visible to the user. Otherwise, calling this function will simply reload the current version of the application.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div><h3><a class="anchor" name="sync" href="#sync"></a><code>sync(syncCallback,&nbsp;syncOptions,&nbsp;downloadProgress)</code></h3>




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
      syncCallback</td>
    <td>
      
    </td>
    <td>
      <p>Optional callback to be called with the status of the sync operation.</p>
</td>
  </tr>
  
  <tr>
    <td>
      syncOptions</td>
    <td>
      
    </td>
    <td>
      <p>Optional SyncOptions parameter configuring the behavior of the sync operation.</p>
</td>
  </tr>
  
  <tr>
    <td>
      downloadProgress</td>
    <td>
      
    </td>
    <td>
      <p>Optional callback invoked during the download process. It is called several times with one DownloadProgress parameter.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;SyncStatus&gt;</code> 
</div>





