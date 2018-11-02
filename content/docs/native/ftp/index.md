---
layout: "fluid/docs_base"
version: "4.17.0"
versionHref: "/docs/native"
path: ""
category: native
id: "ftp"
title: "FTP"
header_sub_title: "Class in module "
doc: "FTP"
docType: "class"
---

<h1 class="api-title">FTP</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/ftp/index.ts#L2">
  Improve this doc
</a>







<p>This cordova plugin is created to use ftp (client) in web/js.</p>


<p>Repo:
  <a href="https://github.com/xfally/cordova-plugin-ftp">
    https://github.com/xfally/cordova-plugin-ftp
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-ftp
$ npm install --save @ionic-native/ftp
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { FTP } from &#39;@ionic-native/ftp&#39;;


constructor(private fTP: FTP) { }

...


this.fTP.connect(&#39;ftp_host&#39;, &#39;ftp_user&#39;, &#39;ftp_password&#39;)
  .then((res: any) =&gt; console.log(&#39;Login successful&#39;, res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="connect" href="#connect"></a><code>connect(hostname,&nbsp;username,&nbsp;password)</code></h3>


Connect to one ftp server.

Just need to init the connection once. If success, you can do any ftp actions later.
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
      hostname</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ftp server url. Like ip without protocol prefix, e.g. &quot;192.168.1.1&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      username</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ftp login username. If it and <code>password</code> are all blank/undefined, the default username &quot;anonymous&quot; is used.</p>
</td>
  </tr>
  
  <tr>
    <td>
      password</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The ftp login password. If it and <code>username</code> are all blank/undefined, the default password &quot;anonymous@&quot; is used.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> The success callback. Notice: For iOS, if triggered, means `init` success, but NOT means the later action, e.g. `ls`... `download` will success!
</div><h3><a class="anchor" name="ls" href="#ls"></a><code>ls(path)</code></h3>


List files (with info of `name`, `type`, `link`, `size`, `modifiedDate`) under one directory on the ftp server.
You can get one file's name using `fileList[x].name` (`x` is the location in array).

Explain key:
- name: file name (utf-8).
- type: file type. number `0` means regular file, `1` means directory, `2` means symbolic link, `-1` means unknown type (maybe block dev, char dev...).
- link: if the file is a symbolic link, then this field store symbolic link information (utf-8), else it's a blank string.
- size: file size in bytes.
- modifiedDate: modified date of this file. date format is `yyyy-MM-dd HH:mm:ss zzz`, e.g "2015-12-01 20:45:00 GMT+8".

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
      path</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The path on the ftp server. e.g. &quot;/adf/123/&quot;.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="mkdir" href="#mkdir"></a><code>mkdir(path)</code></h3>


Create one directory on the ftp server.

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
      path</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The path on the ftp server. e.g. &quot;/adf/123/&quot;.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="rmdir" href="#rmdir"></a><code>rmdir(path)</code></h3>


Delete one directory on the ftp server.

Tip: As many ftp server could not rm dir when it's not empty, so rm all files under the dir at first is recommended.

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
      path</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The file (with full path) you want to delete. e.g. &quot;/adf/123/newDir/myFile&quot;.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="rm" href="#rm"></a><code>rm(file)</code></h3>


Delete one file on the ftp server.

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
      file</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The file (with full path) you want to delete. e.g. &quot;/adf/123/newDir/myFile&quot;.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="upload" href="#upload"></a><code>upload(localFile,&nbsp;remoteFile)</code></h3>




Upload one local file to the ftp server.

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
      localFile</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The file (with full path) you want to upload. e.g. &quot;/local/path/to/localFile&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      remoteFile</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The file (with full path) you want to located on the ftp server. e.g. &quot;/adf/123/newDir/remoteFile&quot;.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an observable.
                       It will be triggered many times according the file's size.
                       The arg `0`, `0.1xx`, `0.2xx` ... `1` means the upload percent. When it reach `1`, means success.
</div><h3><a class="anchor" name="download" href="#download"></a><code>download(localFile,&nbsp;remoteFile)</code></h3>




Download one remote file on the ftp server to local path.

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
      localFile</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The file (with full path) you want to upload. e.g. &quot;/local/path/to/localFile&quot;.</p>
</td>
  </tr>
  
  <tr>
    <td>
      remoteFile</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The file (with full path) you want to located on the ftp server. e.g. &quot;/adf/123/newDir/remoteFile&quot;.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns an observable.
                       It will be triggered many times according the file's size.
                       The arg `0`, `0.1xx`, `0.2xx` ... `1` means the upload percent. When it reach `1`, means success.
</div><h3><a class="anchor" name="cancel" href="#cancel"></a><code>cancel()</code></h3>


Cancel all requests. Always success.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div><h3><a class="anchor" name="disconnect" href="#disconnect"></a><code>disconnect()</code></h3>


Disconnect from ftp server.



<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise
</div>





