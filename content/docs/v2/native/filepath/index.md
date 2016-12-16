---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "filepath"
title: "FilePath"
header_sub_title: "Class in module "
doc: "FilePath"
docType: "class"
---







<h1 class="api-title">
  
  FilePath
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/filepath.ts#L2">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-filepath</code></pre>
<p>Repo:
  <a href="https://github.com/hiddentao/cordova-plugin-filepath">
    https://github.com/hiddentao/cordova-plugin-filepath
  </a>
</p>

<!-- description -->

<p>This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {FilePath} from &#39;ionic-native&#39;;

FilePath.resolveNativePath(path)
  .then(filePath =&gt; console.log(filePath);
  .catch(err =&gt; console.log(err);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="resolveNativePath"></div>
<h3><code>resolveNativePath(path)</code>
  
</h3>


Resolve native path for given content URL/path.


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
      
<code>String</code>
    </td>
    <td>
      <p>Content URL/path.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> 
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

