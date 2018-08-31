---
layout: "fluid/docs_base"
version: "4.12.1"
versionHref: "/docs/native"
path: ""
category: native
id: "app-update"
title: "App Update"
header_sub_title: "Class in module "
doc: "App Update"
docType: "class"
---

<h1 class="api-title">App Update</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/app-update/index.ts#L7">
  Improve this doc
</a>







<p>This plugin does self-update for android</p>


<p>Repo:
  <a href="https://github.com/vaenow/cordova-plugin-app-update">
    https://github.com/vaenow/cordova-plugin-app-update
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-app-update
$ npm install --save @ionic-native/app-update
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<p>You should first host an XML file on your server with the following data in it:</p>
<pre><code class="lang-xml">&lt;update&gt;
    &lt;version&gt;302048&lt;/version&gt;
    &lt;name&gt;APK Name&lt;/name&gt;
    &lt;url&gt;https://your-remote-api.com/YourApp.apk&lt;/url&gt;
&lt;/update&gt;
</code></pre>
<p>Then use the following code:</p>
<pre><code class="lang-typescript">import { AppUpdate } from &#39;@ionic-native/app-update&#39;;

constructor(private appUpdate: AppUpdate) {

   const updateUrl = &#39;https://your-remote-api.com/update.xml&#39;;
   this.appUpdate.checkAppUpdate(updateUrl).then(() =&gt; { console.log(&#39;Update available&#39;) });

}
</code></pre>
<p>The plugin will compare the app version and update it automatically if the API has a newer version to install.</p>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="checkAppUpdate" href="#checkAppUpdate"></a><code>checkAppUpdate(updateUrl,&nbsp;options)</code></h3>




Check and update
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
      updateUrl</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>update api url</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>AppUpdateOptions</code>
    </td>
    <td>
      <p>options<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div>





<h2><a class="anchor" name="AppUpdateOptions" href="#AppUpdateOptions"></a>AppUpdateOptions</h2>

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
      authType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      username
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      password
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





