---
layout: "fluid/docs_base"
version: "4.9.0"
versionHref: "/docs/native"
path: ""
category: native
id: "file-opener"
title: "File Opener"
header_sub_title: "Class in module "
doc: "File Opener"
docType: "class"
---

<h1 class="api-title">File Opener</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/file-opener/index.ts#L1">
  Improve this doc
</a>







<p>This plugin will open a file on your device file system with its default application.</p>


<p>Repo:
  <a href="https://github.com/pwlin/cordova-plugin-file-opener2">
    https://github.com/pwlin/cordova-plugin-file-opener2
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-file-opener2
$ npm install --save @ionic-native/file-opener
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { FileOpener } from &#39;@ionic-native/file-opener&#39;;

constructor(private fileOpener: FileOpener) { }

...

this.fileOpener.open(&#39;path/to/file.pdf&#39;, &#39;application/pdf&#39;)
  .then(() =&gt; console.log(&#39;File is opened&#39;))
  .catch(e =&gt; console.log(&#39;Error opening file&#39;, e));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="open" href="#open"></a><code>open(filePath,&nbsp;fileMIMEType)</code></h3>




Open an file
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
      filePath</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>File Path</p>
</td>
  </tr>
  
  <tr>
    <td>
      fileMIMEType</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>File MIME Type</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="uninstall" href="#uninstall"></a><code>uninstall(packageId)</code></h3>




Uninstalls a package
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
      packageId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Package ID</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="appIsInstalled" href="#appIsInstalled"></a><code>appIsInstalled(packageId)</code></h3>




Check if an app is already installed
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
      packageId</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Package ID</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





