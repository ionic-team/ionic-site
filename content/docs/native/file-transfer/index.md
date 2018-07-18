---
layout: "fluid/docs_base"
version: "4.10.0"
versionHref: "/docs/native"
path: ""
category: native
id: "file-transfer"
title: "File Transfer"
header_sub_title: "Class in module "
doc: "File Transfer"
docType: "class"
---

<h1 class="api-title">File Transfer</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/file-transfer/index.ts#L106">
  Improve this doc
</a>







<p>This plugin allows you to upload and download files.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-file-transfer">
    https://github.com/apache/cordova-plugin-file-transfer
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-file-transfer
$ npm install --save @ionic-native/file-transfer
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Amazon Fire OS</li><li>Android</li><li>Browser</li><li>iOS</li><li>Ubuntu</li><li>Windows</li><li>Windows Phone</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { FileTransfer, FileUploadOptions, FileTransferObject } from &#39;@ionic-native/file-transfer&#39;;
import { File } from &#39;@ionic-native/file&#39;;

constructor(private transfer: FileTransfer, private file: File) { }

...

const fileTransfer: FileTransferObject = this.transfer.create();

// Upload a file:
fileTransfer.upload(..).then(..).catch(..);

// Download a file:
fileTransfer.download(..).then(..).catch(..);

// Abort active transfer:
fileTransfer.abort();

// full example
upload() {
  let options: FileUploadOptions = {
     fileKey: &#39;file&#39;,
     fileName: &#39;name.jpg&#39;,
     headers: {}
     .....
  }

  fileTransfer.upload(&#39;&lt;file path&gt;&#39;, &#39;&lt;api endpoint&gt;&#39;, options)
   .then((data) =&gt; {
     // success
   }, (err) =&gt; {
     // error
   })
}
*
download() {
  const url = &#39;http://www.example.com/file.pdf&#39;;
  fileTransfer.download(url, this.file.dataDirectory + &#39;file.pdf&#39;).then((entry) =&gt; {
    console.log(&#39;download complete: &#39; + entry.toURL());
  }, (error) =&gt; {
    // handle error
  });
}
</code></pre>
<p>To store files in a different/publicly accessible directory, please refer to the following link
<a href="https://github.com/apache/cordova-plugin-file#where-to-store-files">https://github.com/apache/cordova-plugin-file#where-to-store-files</a></p>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="FileTransferErrorCode" href="#FileTransferErrorCode"></a><code>FileTransferErrorCode</code></h3>

Error code rejected from upload with FileTransferError
Defined in FileTransferError.
     FILE_NOT_FOUND_ERR: 1   Return when file was not found
     INVALID_URL_ERR: 2,     Return when url was invalid
     CONNECTION_ERR: 3,      Return on connection error
     ABORT_ERR: 4,           Return on aborting
     NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response


<h3><a class="anchor" name="create" href="#create"></a><code>create()</code></h3>

Creates a new FileTransfer object


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>FileTransferObject</code> 
</div>

<h2><a class="anchor" name="FileTransferObject" href="#FileTransferObject"></a>FileTransferObject</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="upload" href="#upload"></a><code>upload(fileUrl,&nbsp;url,&nbsp;options,&nbsp;trustAllHosts)</code></h3>




Sends a file to a server.

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
      <p>Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.</p>
</td>
  </tr>
  
  <tr>
    <td>
      url</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL of the server to receive the file, as encoded by encodeURI().</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>FileUploadOptions</code>
    </td>
    <td>
      <p>Optional parameters.</p>
</td>
  </tr>
  
  <tr>
    <td>
      trustAllHosts</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;FileUploadResult&gt;</code> Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
</div><h3><a class="anchor" name="download" href="#download"></a><code>download(source,&nbsp;target,&nbsp;trustAllHosts,&nbsp;Optional)</code></h3>




Downloads a file from server.

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
      source</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL of the server to download the file, as encoded by encodeURI().</p>
</td>
  </tr>
  
  <tr>
    <td>
      target</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.</p>
</td>
  </tr>
  
  <tr>
    <td>
      trustAllHosts</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.</p>
</td>
  </tr>
  
  <tr>
    <td>
      Optional</td>
    <td>
      <code>object</code>
    </td>
    <td>
      <p>parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves to a FileEntry object.
</div><h3><a class="anchor" name="onProgress" href="#onProgress"></a><code>onProgress(listener)</code></h3>




Registers a listener that gets called whenever a new chunk of data is transferred.
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
      listener</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>Listener that takes a progress event.</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="abort" href="#abort"></a><code>abort()</code></h3>




Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
object which has an error code of FileTransferError.ABORT_ERR.







<h2><a class="anchor" name="FileUploadOptions" href="#FileUploadOptions"></a>FileUploadOptions</h2>

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
      fileKey
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the form element.
Defaults to &#39;file&#39;.</p>

      <em>(optional)</em>
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
      <p>The file name to use when saving the file on the server.
Defaults to &#39;image.jpg&#39;.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      httpMethod
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The HTTP method to use - either PUT or POST.
Defaults to POST.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      mimeType
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The mime type of the data to upload.
Defaults to image/jpeg.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      params
    </td>
    <td>
      <code>{ [s: string]: any }</code>
    </td>
    <td>
      <p>A set of optional key/value pairs to pass in the HTTP request.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      chunkedMode
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Whether to upload the data in chunked streaming mode.
Defaults to true.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      headers
    </td>
    <td>
      <code>{ [s: string]: any }</code>
    </td>
    <td>
      <p>A map of header name/header values. Use an array to specify more
than one value. On iOS, FireOS, and Android, if a header named
Content-Type is present, multipart form data will NOT be used.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="FileUploadResult" href="#FileUploadResult"></a>FileUploadResult</h2>

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
      bytesSent
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The number of bytes sent to the server as part of the upload.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      responseCode
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The HTTP response code returned by the server.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      response
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The HTTP response returned by the server.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      headers
    </td>
    <td>
      <code>{ [s: string]: any }</code>
    </td>
    <td>
      <p>The HTTP response headers by the server.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>


<h2><a class="anchor" name="FileTransferError" href="#FileTransferError"></a>FileTransferError</h2>

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
      code
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>One of the predefined error codes listed below.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      source
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL to the source.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      target
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>URL to the target.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      http_status
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>HTTP status code. This attribute is only available when a response
code is received from the HTTP connection.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      body
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Response body. This attribute is only available when a response is received from the HTTP connection.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      exception
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Either e.getMessage or e.toString.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





