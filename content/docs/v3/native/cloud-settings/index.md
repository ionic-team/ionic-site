---
layout: "fluid/docs_base"
version: "4.20.0"
versionHref: "/docs/native"
path: ""
category: native
id: "cloud-settings"
title: "Cloud Settings"
header_sub_title: "Class in module "
doc: "Cloud Settings"
docType: "class"
---

<h1 class="api-title">Cloud Settings</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/cloud-settings/index.ts#L1">
  Improve this doc
</a>







<p>Stores app settings in cloud storage so if the user re-installs the app or installs it on a different device, the settings will be restored and available in the new installation.</p>


<p>Repo:
  <a href="https://github.com/dpa99c/cordova-plugin-cloud-settings">
    https://github.com/dpa99c/cordova-plugin-cloud-settings
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey
$ npm install --save @ionic-native/cloud-settings
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { CloudSettings } from &#39;@ionic-native/cloud-settings&#39;;


constructor(private cloudSettings: CloudSettings) { }

...

this.cloudSettings.exists()
  .then((exists: boolean) =&gt; console.log(&quot;Saved settings exist: &quot; + exists) )

this.cloudSettings.load()
  .then((settings: any) =&gt; this.settings = settings)
  .catch((error: any) =&gt; console.error(error));

this.cloudSettings.save(this.settings)
  .then((savedSettings: any) =&gt; console.log(&quot;Saved settings: &quot; + JSON.stringify(savedSettings)))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="exists" href="#exists"></a><code>exists()</code></h3>


Indicates if any stored cloud settings currently exist for the current user.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Will be passed a boolean flag which indicates whether an store settings exist for the user.
</div><h3><a class="anchor" name="save" href="#save"></a><code>save(settings,&nbsp;overwrite)</code></h3>




Saves the settings to cloud backup.
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
      settings</td>
    <td>
      <code>object</code>
    </td>
    <td>
      <p>a JSON structure representing the user settings to save to cloud backup.</p>
</td>
  </tr>
  
  <tr>
    <td>
      overwrite</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>(optional) if true, existing settings will be replaced rather than updated. Defaults to false.
If false, existing settings will be merged with the new settings passed to this function.<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Will be passed a single object argument which contains the saved settings as a JSON object.
</div><h3><a class="anchor" name="load" href="#load"></a><code>load()</code></h3>


Loads the current settings.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Will be passed a single object argument which contains the saved settings as a JSON object.
</div><h3><a class="anchor" name="onRestore" href="#onRestore"></a><code>onRestore(handler)</code></h3>




Registers a function which will be called if/when settings on the device have been updated from the cloud.
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
      handler</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>callback function to invoke when device settings have been updated from the cloud.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="enableDebug" href="#enableDebug"></a><code>enableDebug()</code></h3>


Outputs verbose log messages from the native plugin components to the JS console.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> 
</div>





