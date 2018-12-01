---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "downloader"
title: "Downloader"
header_sub_title: "Class in module "
doc: "Downloader"
docType: "class"
---

<h1 class="api-title">Downloader</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/downloader/index.ts#L64">
  Improve this doc
</a>







<p>This plugin is designed to support downloading files using Android DownloadManager.</p>


<p>Repo:
  <a href="https://github.com/Luka313/integrator-cordova-plugin-downloader.git">
    https://github.com/Luka313/integrator-cordova-plugin-downloader.git
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add integrator-cordova-plugin-downloader
$ npm install --save @ionic-native/downloader
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Downloader } from &#39;@ionic-native/downloader/ngx&#39;;


constructor(private downloader: Downloader) { }

...

   var request: DownloadRequest = {
          uri: YOUR_URI,
          title: &#39;MyDownload&#39;,
          description: &#39;&#39;,
          mimeType: &#39;&#39;,
          visibleInDownloadsUi: true,
          notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
          destinationInExternalFilesDir: {
              dirType: &#39;Downloads&#39;,
              subPath: &#39;MyFile.apk&#39;
          }
      };


  this.downloader.download(request)
              .then((location: string) =&gt; console.log(&#39;File downloaded at:&#39;+location))
              .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="download" href="#download"></a><code>download(request)</code></h3>


Starts a new download and returns location of the downloaded file on completion
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
      request</td>
    <td>
      <code>DownloadRequest</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>







<h2><a class="anchor" name="NotificationVisibility" href="#NotificationVisibility"></a>NotificationVisibility</h2>

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
      Visible
    </td>
    <td>
      <code>0</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      VisibleNotifyCompleted
    </td>
    <td>
      <code>1</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      VisibilityHidden
    </td>
    <td>
      <code>2</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      VisibleNotifyOnlyCompletion
    </td>
    <td>
      <code>3</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="Header" href="#Header"></a>Header</h2>


<h2><a class="anchor" name="DestinationDirectory" href="#DestinationDirectory"></a>DestinationDirectory</h2>

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
      dirType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      subPath
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="DownloadHttpHeader" href="#DownloadHttpHeader"></a>DownloadHttpHeader</h2>

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
      header
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      value
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





