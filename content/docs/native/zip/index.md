---
layout: "fluid/docs_base"
version: "3.8.0"
versionHref: "/docs/native"
path: ""
category: native
id: "zip"
title: "Zip"
header_sub_title: "Class in module "
doc: "Zip"
docType: "class"
---

<h1 class="api-title">Zip</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/zip/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save cordova-plugin-zip
$ npm install --save @ionic-native/zip
</code></pre>
<p>Repo:
  <a href="https://github.com/MobileChromeApps/cordova-plugin-zip">
    https://github.com/MobileChromeApps/cordova-plugin-zip
  </a>
</p>


<p>A Cordova plugin to unzip files in Android and iOS.</p>









<h2>Usage</h2>
<pre><code class="lang-typescript">import { Zip } from &#39;@ionic-native/zip&#39;;

constructor(private zip: Zip) { }

...

this.zip.unzip(&#39;path/to/source.zip&#39;, &#39;path/to/dest&#39;, (progress) =&gt; console.log(&#39;Unzipping, &#39; + Math.round((progress.loaded / progress.total) * 100) + &#39;%&#39;))
 .then((result) =&gt; {
   if(result === 0) console.log(&#39;SUCCESS&#39;);
   if(result === -1) console.log(&#39;FAILED&#39;);
 });
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="unzip" href="#unzip"></a><code>unzip(sourceZip,&nbsp;destUrl,&nbsp;onProgress)</code></h3>




Extracts files from a ZIP archive
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
      sourceZip</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Source ZIP file</p>
</td>
  </tr>
  
  <tr>
    <td>
      destUrl</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Destination folder</p>
</td>
  </tr>
  
  <tr>
    <td>
      onProgress</td>
    <td>
      <code>Function</code>
    </td>
    <td>
      <p>optional callback to be called on progress update</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;number&gt;</code> returns a promise that resolves with a number. 0 is success, -1 is error
</div>





