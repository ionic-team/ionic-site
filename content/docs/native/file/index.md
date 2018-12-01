---
layout: "fluid/docs_base"
version: "4.18.0"
versionHref: "/docs/native"
path: ""
category: native
id: "file"
title: "File"
header_sub_title: "Class in module "
doc: "File"
docType: "class"
---

<h1 class="api-title">File</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/file/index.ts#L607">
  Improve this doc
</a>







<p>This plugin implements a File API allowing read/write access to files residing on the device.</p>
<p>The File class implements static convenience functions to access files and directories.</p>
<p>Example:</p>
<pre><code>import { File } from &#39;@ionic-native/file&#39;;

constructor(private file: File) { }

...

this.file.checkDir(this.file.dataDirectory, &#39;mydir&#39;).then(_ =&gt; console.log(&#39;Directory exists&#39;)).catch(err =&gt; console.log(&#39;Directory doesn\&#39;t exist&#39;));
</code></pre>
<p> This plugin is based on several specs, including : The HTML5 File API http: //www.w3.org/TR/FileAPI/
 The (now-defunct) Directories and System extensions Latest: http: //www.w3.org/TR/2012/WD-file-system-api-20120417/
 Although most of the plugin code was written when an earlier spec was current: http: //www.w3.org/TR/2011/WD-file-system-api-20110419/
 It also implements the FileWriter spec : http: //dev.w3.org/2009/dap/file-system/file-writer.html</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-file">
    https://github.com/apache/cordova-plugin-file
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-file
$ npm install --save @ionic-native/file
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li><li>macOS</li><li>Windows</li>
</ul>












<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="applicationDirectory" href="#applicationDirectory"></a><code>applicationDirectory</code></h3>


Read-only directory where the application is installed.



<h3><a class="anchor" name="applicationStorageDirectory" href="#applicationStorageDirectory"></a><code>applicationStorageDirectory</code></h3>


Read-only directory where the application is installed.



<h3><a class="anchor" name="dataDirectory" href="#dataDirectory"></a><code>dataDirectory</code></h3>


Where to put app-specific data files.



<h3><a class="anchor" name="cacheDirectory" href="#cacheDirectory"></a><code>cacheDirectory</code></h3>


Cached files that should survive app restarts.
Apps should not rely on the OS to delete files in here.



<h3><a class="anchor" name="externalApplicationStorageDirectory" href="#externalApplicationStorageDirectory"></a><code>externalApplicationStorageDirectory</code></h3>


Android: the application space on external storage.



<h3><a class="anchor" name="externalDataDirectory" href="#externalDataDirectory"></a><code>externalDataDirectory</code></h3>


Android: Where to put app-specific data files on external storage.



<h3><a class="anchor" name="externalCacheDirectory" href="#externalCacheDirectory"></a><code>externalCacheDirectory</code></h3>


Android: the application cache on external storage.



<h3><a class="anchor" name="externalRootDirectory" href="#externalRootDirectory"></a><code>externalRootDirectory</code></h3>


Android: the external storage (SD card) root.



<h3><a class="anchor" name="tempDirectory" href="#tempDirectory"></a><code>tempDirectory</code></h3>


iOS: Temp directory that the OS can clear at will.



<h3><a class="anchor" name="syncedDataDirectory" href="#syncedDataDirectory"></a><code>syncedDataDirectory</code></h3>


iOS: Holds app-specific files that should be synced (e.g. to iCloud).



<h3><a class="anchor" name="documentsDirectory" href="#documentsDirectory"></a><code>documentsDirectory</code></h3>


iOS: Files private to the app, but that are meaningful to other applications (e.g. Office files)



<h3><a class="anchor" name="sharedDirectory" href="#sharedDirectory"></a><code>sharedDirectory</code></h3>


BlackBerry10: Files globally available to all apps



<h3><a class="anchor" name="cordovaFileError" href="#cordovaFileError"></a><code>cordovaFileError</code></h3>




<h3><a class="anchor" name="getFreeDiskSpace" href="#getFreeDiskSpace"></a><code>getFreeDiskSpace()</code></h3>


Get free disk space in Bytes


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;number&gt;</code> Returns a promise that resolves with the remaining free disk space in Bytes
</div><h3><a class="anchor" name="checkDir" href="#checkDir"></a><code>checkDir(path,&nbsp;dir)</code></h3>


Check if a directory exists in a certain path, directory.

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      dir</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of directory to check</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a Promise that resolves to true if the directory exists or rejects with an error.
</div><h3><a class="anchor" name="createDir" href="#createDir"></a><code>createDir(path,&nbsp;dirName,&nbsp;replace)</code></h3>


Creates a new directory in the specific path.
The replace boolean value determines whether to replace an existing directory with the same name.
If an existing directory exists and the replace value is false, the promise will fail and return an error.

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      dirName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of directory to create</p>
</td>
  </tr>
  
  <tr>
    <td>
      replace</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If true, replaces file with same name. If false returns error</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DirectoryEntry&gt;</code> Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
</div><h3><a class="anchor" name="removeDir" href="#removeDir"></a><code>removeDir(path,&nbsp;dirName)</code></h3>


Remove a directory at a given path.

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
      <p>The path to the directory</p>
</td>
  </tr>
  
  <tr>
    <td>
      dirName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The directory name</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;RemoveResult&gt;</code> Returns a Promise that resolves to a RemoveResult or rejects with an error.
</div><h3><a class="anchor" name="moveDir" href="#moveDir"></a><code>moveDir(path,&nbsp;dirName,&nbsp;newPath,&nbsp;newDirName)</code></h3>


Move a directory to a given path.

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
      <p>The source path to the directory</p>
</td>
  </tr>
  
  <tr>
    <td>
      dirName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The source directory name</p>
</td>
  </tr>
  
  <tr>
    <td>
      newPath</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The destination path to the directory</p>
</td>
  </tr>
  
  <tr>
    <td>
      newDirName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The destination directory name</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DirectoryEntry|Entry&gt;</code> Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
</div><h3><a class="anchor" name="copyDir" href="#copyDir"></a><code>copyDir(path,&nbsp;dirName,&nbsp;newPath,&nbsp;newDirName)</code></h3>


Copy a directory in various methods. If destination directory exists, will fail to copy.

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>
</td>
  </tr>
  
  <tr>
    <td>
      dirName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of directory to copy</p>
</td>
  </tr>
  
  <tr>
    <td>
      newPath</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Base FileSystem of new location</p>
</td>
  </tr>
  
  <tr>
    <td>
      newDirName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>New name of directory to copy to (leave blank to remain the same)</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Entry&gt;</code> Returns a Promise that resolves to the new Entry object or rejects with an error.
</div><h3><a class="anchor" name="listDir" href="#listDir"></a><code>listDir(path,&nbsp;dirName)</code></h3>


List files and directory from a given path.

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>
</td>
  </tr>
  
  <tr>
    <td>
      dirName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of directory</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Entry[]&gt;</code> Returns a Promise that resolves to an array of Entry objects or rejects with an error.
</div><h3><a class="anchor" name="removeRecursively" href="#removeRecursively"></a><code>removeRecursively(path,&nbsp;dirName)</code></h3>


Removes all files and the directory from a desired location.

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      dirName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of directory</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;RemoveResult&gt;</code> Returns a Promise that resolves with a RemoveResult or rejects with an error.
</div><h3><a class="anchor" name="checkFile" href="#checkFile"></a><code>checkFile(path,&nbsp;file)</code></h3>


Check if a file exists in a certain path, directory.

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      file</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of file to check</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> Returns a Promise that resolves with a boolean or rejects with an error.
</div><h3><a class="anchor" name="createFile" href="#createFile"></a><code>createFile(path,&nbsp;fileName,&nbsp;replace)</code></h3>


Creates a new file in the specific path.
The replace boolean value determines whether to replace an existing file with the same name.
If an existing file exists and the replace value is false, the promise will fail and return an error.

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      fileName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of file to create</p>
</td>
  </tr>
  
  <tr>
    <td>
      replace</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>If true, replaces file with same name. If false returns error</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;FileEntry&gt;</code> Returns a Promise that resolves to a FileEntry or rejects with an error.
</div><h3><a class="anchor" name="removeFile" href="#removeFile"></a><code>removeFile(path,&nbsp;fileName)</code></h3>


Removes a file from a desired location.

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      fileName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of file to remove</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;RemoveResult&gt;</code> Returns a Promise that resolves to a RemoveResult or rejects with an error.
</div><h3><a class="anchor" name="writeFile" href="#writeFile"></a><code>writeFile(path,&nbsp;fileName,&nbsp;text,&nbsp;whether)</code></h3>


Write a new file to the desired location.
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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      fileName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>path relative to base path</p>
</td>
  </tr>
  
  <tr>
    <td>
      text</td>
    <td>
      <code>string</code>|<code>Blob</code>|<code>ArrayBuffer</code>
    </td>
    <td>
      <p>content, blob or ArrayBuffer to write</p>
</td>
  </tr>
  
  <tr>
    <td>
      whether</td>
    <td>
      <code>IWriteOptions</code>
    </td>
    <td>
      <p>to replace/append to an existing file. See IWriteOptions for more information.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves to updated file entry or rejects with an error.
</div><h3><a class="anchor" name="writeExistingFile" href="#writeExistingFile"></a><code>writeExistingFile(path,&nbsp;fileName,&nbsp;text)</code></h3>


Write to an existing file.
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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      fileName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>path relative to base path</p>
</td>
  </tr>
  
  <tr>
    <td>
      text</td>
    <td>
      <code>string</code>|<code>Blob</code>
    </td>
    <td>
      <p>content or blob to write</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;void&gt;</code> Returns a Promise that resolves or rejects with an error.
</div><h3><a class="anchor" name="readAsText" href="#readAsText"></a><code>readAsText(path,&nbsp;file)</code></h3>


Read the contents of a file as text.

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      file</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of file, relative to path.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a Promise that resolves with the contents of the file as string or rejects with an error.
</div><h3><a class="anchor" name="readAsDataURL" href="#readAsDataURL"></a><code>readAsDataURL(path,&nbsp;file)</code></h3>


Read file and return data as a base64 encoded data url.
A data url is of the form:
     data: [<mediatype>][;base64],<data>

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      file</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of file, relative to path.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
</div><h3><a class="anchor" name="readAsBinaryString" href="#readAsBinaryString"></a><code>readAsBinaryString(path,&nbsp;file)</code></h3>


Read file and return data as a binary data.
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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      file</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of file, relative to path.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> Returns a Promise that resolves with the contents of the file as string rejects with an error.
</div><h3><a class="anchor" name="readAsArrayBuffer" href="#readAsArrayBuffer"></a><code>readAsArrayBuffer(path,&nbsp;file)</code></h3>


Read file and return data as an ArrayBuffer.
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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      file</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of file, relative to path.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;ArrayBuffer&gt;</code> Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
</div><h3><a class="anchor" name="moveFile" href="#moveFile"></a><code>moveFile(path,&nbsp;fileName,&nbsp;newPath,&nbsp;newFileName)</code></h3>


Move a file to a given path.

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      fileName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of file to move</p>
</td>
  </tr>
  
  <tr>
    <td>
      newPath</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Base FileSystem of new location</p>
</td>
  </tr>
  
  <tr>
    <td>
      newFileName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>New name of file to move to (leave blank to remain the same)</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Entry&gt;</code> Returns a Promise that resolves to the new Entry or rejects with an error.
</div><h3><a class="anchor" name="copyFile" href="#copyFile"></a><code>copyFile(path,&nbsp;fileName,&nbsp;newPath,&nbsp;newFileName)</code></h3>


Copy a file in various methods. If file exists, will fail to copy.

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
      <p>Base FileSystem. Please refer to the iOS and Android filesystem above</p>
</td>
  </tr>
  
  <tr>
    <td>
      fileName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Name of file to copy</p>
</td>
  </tr>
  
  <tr>
    <td>
      newPath</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Base FileSystem of new location</p>
</td>
  </tr>
  
  <tr>
    <td>
      newFileName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>New name of file to copy to (leave blank to remain the same)</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Entry&gt;</code> Returns a Promise that resolves to an Entry or rejects with an error.
</div><h3><a class="anchor" name="resolveLocalFilesystemUrl" href="#resolveLocalFilesystemUrl"></a><code>resolveLocalFilesystemUrl(fileUrl)</code></h3>


Resolves a local file system URL
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
      fileUrl</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>file system url</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Entry&gt;</code> 
</div><h3><a class="anchor" name="resolveDirectoryUrl" href="#resolveDirectoryUrl"></a><code>resolveDirectoryUrl(directoryUrl)</code></h3>


Resolves a local directory url
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
      directoryUrl</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>directory system url</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DirectoryEntry&gt;</code> 
</div><h3><a class="anchor" name="getDirectory" href="#getDirectory"></a><code>getDirectory(directoryEntry,&nbsp;directoryName,&nbsp;flags)</code></h3>


Get a directory
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
      directoryEntry</td>
    <td>
      <code>DirectoryEntry</code>
    </td>
    <td>
      <p>Directory entry, obtained by resolveDirectoryUrl method</p>
</td>
  </tr>
  
  <tr>
    <td>
      directoryName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Directory name</p>
</td>
  </tr>
  
  <tr>
    <td>
      flags</td>
    <td>
      <code>Flags</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;DirectoryEntry&gt;</code> 
</div><h3><a class="anchor" name="getFile" href="#getFile"></a><code>getFile(directoryEntry,&nbsp;fileName,&nbsp;flags)</code></h3>


Get a file
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
      directoryEntry</td>
    <td>
      <code>DirectoryEntry</code>
    </td>
    <td>
      <p>Directory entry, obtained by resolveDirectoryUrl method</p>
</td>
  </tr>
  
  <tr>
    <td>
      fileName</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>File name</p>
</td>
  </tr>
  
  <tr>
    <td>
      flags</td>
    <td>
      <code>Flags</code>
    </td>
    <td>
      <p>Options</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;FileEntry&gt;</code> 
</div>





<h2><a class="anchor" name=" IFile" href="# IFile"></a> IFile</h2>


<h2><a class="anchor" name=" Entry" href="# Entry"></a> Entry</h2>


<h2><a class="anchor" name=" DirectoryEntry" href="# DirectoryEntry"></a> DirectoryEntry</h2>


<h2><a class="anchor" name=" DirectoryReader" href="# DirectoryReader"></a> DirectoryReader</h2>


<h2><a class="anchor" name=" FileSystem" href="# FileSystem"></a> FileSystem</h2>





