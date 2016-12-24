---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "zip"
title: "Zip"
header_sub_title: "Class in module "
doc: "Zip"
docType: "class"
---







<h1 class="api-title">
  
  Zip
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/zip.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-zip</code></pre>
<p>Repo:
  <a href="https://github.com/MobileChromeApps/cordova-plugin-zip">
    https://github.com/MobileChromeApps/cordova-plugin-zip
  </a>
</p>

<!-- description -->

<p>A Cordova plugin to unzip files in Android and iOS.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {Zip} from &#39;ionic-native&#39;;

Zip.unzip(&#39;path/to/source.zip&#39;, &#39;path/to/dest&#39;, (progress) =&gt; console.log(&#39;Unzipping, &#39; + Math.round((progress.loaded / progress.total) * 100) + &#39;%&#39;))
 .then((result) =&gt; {
   if(result === 0) console.log(&#39;SUCCESS&#39;);
   if(result === -1) console.log(&#39;FAILED&#39;);
 });
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="unzip"></div>
<h3><code>unzip(sourceZip,&nbsp;destUrl,&nbsp;onProgress)</code>
  
</h3>




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
      sourceZip
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Source ZIP file</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      destUrl
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Destination folder</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      onProgress
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;number&gt;</code> returns a promise that resolves with a number. 0 is success, -1 is error
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

