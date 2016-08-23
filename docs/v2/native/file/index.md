---
layout: "v2_fluid/docs_base"
version: "1.3.17"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "file"
title: "File"
header_sub_title: "Class in module "
doc: "File"
docType: "class"
---








<h1 class="api-title">

  
  File
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/file.ts#L336">
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-file</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-file">
    https://github.com/apache/cordova-plugin-file
  </a>
</p>

<!-- description -->

<p>This plugin implements a File API allowing read/write access to files residing on the device.</p>
<p>The File class implements static convenience functions to access files and directories.</p>
<p>Example:</p>
<pre><code>import { File } from &#39;ionic-native&#39;;

declare var cordova: any;
const fs:string = cordova.file.dataDirectory;
File.checkDir(this.fs, &#39;mydir&#39;).then(_ =&gt; console.log(&#39;yay&#39;)).catch(err =&gt; console.log(&#39;boooh&#39;));
</code></pre>
<p> This plugin is based on several specs, including : The HTML5 File API <a href="http://www.w3.org/TR/FileAPI/">http://www.w3.org/TR/FileAPI/</a>
 The (now-defunct) Directories and System extensions Latest: <a href="http://www.w3.org/TR/2012/WD-file-system-api-20120417/">http://www.w3.org/TR/2012/WD-file-system-api-20120417/</a>
 Although most of the plugin code was written when an earlier spec was current: <a href="http://www.w3.org/TR/2011/WD-file-system-api-20110419/">http://www.w3.org/TR/2011/WD-file-system-api-20110419/</a>
 It also implements the FileWriter spec : <a href="http://dev.w3.org/2009/dap/file-system/file-writer.html">http://dev.w3.org/2009/dap/file-system/file-writer.html</a></p>



<!-- @usage tag -->


<!-- @property tags -->
<h2>Static Members</h2>
<div id="cordovaFileError"></div>
<h3><code>cordovaFileError()</code>
  
</h3>









<div id="getFreeDiskSpace"></div>
<h3><code>getFreeDiskSpace()</code>
  
</h3>











<div id="checkDir"></div>
<h3><code>checkDir(path,&nbsp;dir)</code>
  
</h3>Check if a directory exists in a certain path, directory.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      dir
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;boolean|FileError&gt;</code> Returns a Promise that resolves to true if the directory exists or rejects with an error.
</div>



<div id="createDir"></div>
<h3><code>createDir(path,&nbsp;dirName,&nbsp;replace)</code>
  
</h3>Creates a new directory in the specific path.
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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      dirName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Name of directory to create</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      replace
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;DirectoryEntry|FileError&gt;</code> Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
</div>



<div id="removeDir"></div>
<h3><code>removeDir(path,&nbsp;dirName)</code>
  
</h3>Remove a directory at a given path.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The path to the directory</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      dirName
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;RemoveResult|FileError&gt;</code> Returns a Promise that resolves to a RemoveResult or rejects with an error.
</div>



<div id="moveDir"></div>
<h3><code>moveDir(path,&nbsp;dirName,&nbsp;newPath,&nbsp;newDirName)</code>
  
</h3>Move a directory to a given path.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The source path to the directory</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      dirName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The source directory name</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newPath
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The destionation path to the directory</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newDirName
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;DirectoryEntry|Entry|FileError&gt;</code> Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
</div>



<div id="copyDir"></div>
<h3><code>copyDir(path,&nbsp;dirName,&nbsp;newPath,&nbsp;newDirName)</code>
  
</h3>Copy a directory in various methods. If destination directory exists, will fail to copy.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      dirName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Name of directory to copy</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newPath
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem of new location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newDirName
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;Entry|FileError&gt;</code> Returns a Promise that resolves to the new Entry object or rejects with an error.
</div>



<div id="listDir"></div>
<h3><code>listDir(path,&nbsp;dirName)</code>
  
</h3>List files and directory from a given path.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      dirName
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;Entry[]&gt;</code> Returns a Promise that resolves to an array of Entry objects or rejects with an error.
</div>



<div id="removeRecursively"></div>
<h3><code>removeRecursively(path,&nbsp;dirName)</code>
  
</h3>Removes all files and the directory from a desired location.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      dirName
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;RemoveResult&gt;</code> Returns a Promise that resolves with a RemoveResult or rejects with an error.
</div>



<div id="checkFile"></div>
<h3><code>checkFile(path,&nbsp;file)</code>
  
</h3>Check if a file exists in a certain path, directory.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      file
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;boolean|FileError&gt;</code> Returns a Promise that resolves with a boolean or rejects with an error.
</div>



<div id="createFile"></div>
<h3><code>createFile(path,&nbsp;fileName,&nbsp;replace)</code>
  
</h3>Creates a new file in the specific path.
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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      fileName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Name of file to create</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      replace
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;FileEntry|FileError&gt;</code> Returns a Promise that resolves to a FileEntry or rejects with an error.
</div>



<div id="removeFile"></div>
<h3><code>removeFile(path,&nbsp;fileName)</code>
  
</h3>Removes a file from a desired location.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      fileName
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;RemoveResult|FileError&gt;</code> Returns a Promise that resolves to a RemoveResult or rejects with an error.
</div>



<div id="writeFile"></div>
<h3><code>writeFile(path,&nbsp;fileName,&nbsp;text,&nbsp;replaceOrOptions)</code>
  
</h3>Write a new file to the desired location.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      fileName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>path relative to base path</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      text
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>content to write</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      replaceOrOptions
      
      
    </td>
    <td>
      
<code>boolean</code>|<code>WriteOptions</code>
    </td>
    <td>
      <p>replace file if set to true. See WriteOptions for more information.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a Promise that resolves or rejects with an error.
</div>



<div id="writeExistingFile"></div>
<h3><code>writeExistingFile(path,&nbsp;fileName,&nbsp;text)</code>
  
</h3>Write to an existing file.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      fileName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>path relative to base path</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      text
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>content to write</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a Promise that resolves or rejects with an error.
</div>



<div id="readAsText"></div>
<h3><code>readAsText(path,&nbsp;file)</code>
  
</h3>Read the contents of a file as text.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      file
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;string|FileError&gt;</code> Returns a Promise that resolves with the contents of the file as string or rejects with an error.
</div>



<div id="readAsDataURL"></div>
<h3><code>readAsDataURL(path,&nbsp;file)</code>
  
</h3>Read file and return data as a base64 encoded data url.
A data url is of the form:
     data:[<mediatype>][;base64],<data>



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      file
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;string|FileError&gt;</code> Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
</div>



<div id="readAsBinaryString"></div>
<h3><code>readAsBinaryString(path,&nbsp;file)</code>
  
</h3>Read file and return data as a binary data.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      file
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;string|FileError&gt;</code> Returns a Promise that resolves with the contents of the file as string rejects with an error.
</div>



<div id="readAsArrayBuffer"></div>
<h3><code>readAsArrayBuffer(path,&nbsp;file)</code>
  
</h3>Read file and return data as an ArrayBuffer.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      file
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;ArrayBuffer|FileError&gt;</code> Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
</div>



<div id="moveFile"></div>
<h3><code>moveFile(path,&nbsp;fileName,&nbsp;newPath,&nbsp;newFileName)</code>
  
</h3>Move a file to a given path.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      fileName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Name of file to move</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newPath
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem of new location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newFileName
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;Entry|FileError&gt;</code> Returns a Promise that resolves to the new Entry or rejects with an error.
</div>



<div id="copyFile"></div>
<h3><code>copyFile(path,&nbsp;fileName,&nbsp;newPath,&nbsp;newFileName)</code>
  
</h3>Copy a file in various methods. If file exists, will fail to copy.



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
      path
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem. Please refer to the iOS and Android filesystems above</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      fileName
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Name of file to copy</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newPath
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Base FileSystem of new location</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      newFileName
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;Entry|FileError&gt;</code> Returns a Promise that resolves to an Entry or rejects with an error.
</div>



<div id="fillErrorMessage"></div>
<h3><code>fillErrorMessage()</code>
  
</h3>









<div id="resolveLocalFilesystemUrl"></div>
<h3><code>resolveLocalFilesystemUrl()</code>
  
</h3>









<div id="resolveDirectoryUrl"></div>
<h3><code>resolveDirectoryUrl()</code>
  
</h3>









<div id="getDirectory"></div>
<h3><code>getDirectory()</code>
  
</h3>









<div id="getFile"></div>
<h3><code>getFile()</code>
  
</h3>









<div id="remove"></div>
<h3><code>remove()</code>
  
</h3>









<div id="move"></div>
<h3><code>move()</code>
  
</h3>









<div id="copy"></div>
<h3><code>copy()</code>
  
</h3>









<div id="readEntries"></div>
<h3><code>readEntries()</code>
  
</h3>









<div id="rimraf"></div>
<h3><code>rimraf()</code>
  
</h3>









<div id="createWriter"></div>
<h3><code>createWriter()</code>
  
</h3>









<div id="write"></div>
<h3><code>write()</code>
  
</h3>










<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

