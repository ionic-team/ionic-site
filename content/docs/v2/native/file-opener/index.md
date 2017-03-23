---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "file-opener"
title: "File Opener"
header_sub_title: "Class in module "
doc: "File Opener"
docType: "class"
---







<h1 class="api-title">
  
  File Opener
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/file-opener/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-file-opener2
$ npm install --save @ionic-native/File Opener
</code></pre>
<p>Repo:
  <a href="https://github.com/pwlin/cordova-plugin-file-opener2">
    https://github.com/pwlin/cordova-plugin-file-opener2
  </a>
</p>

<!-- description -->

<p>This plugin will open a file on your device file system with its default application.</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { FileOpener } from &#39;@ionic-native/file-opener&#39;;

constructor(private fileOpener: FileOpener) { }

...

this.fileOpener.open(&#39;path/to/file.pdf&#39;, &#39;application/pdf&#39;)
  .then(() =&gt; console.log(&#39;File is opened&#39;))
  .catch(e =&gt; console.log(&#39;Error openening file&#39;, e));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="open"></div>
<h3>
  <code>open(filePath,&nbsp;fileMIMEType)</code>
  

</h3>
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
      filePath
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>File Path</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      fileMIMEType
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="uninstall"></div>
<h3>
  <code>uninstall(packageId)</code>
  

</h3>
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
      packageId
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="appIsInstalled"></div>
<h3>
  <code>appIsInstalled(packageId)</code>
  

</h3>
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
      packageId
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

