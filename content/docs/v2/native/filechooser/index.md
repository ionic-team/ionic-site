---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "filechooser"
title: "FileChooser"
header_sub_title: "Class in module "
doc: "FileChooser"
docType: "class"
---







<h1 class="api-title">
  
  FileChooser
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/file-chooser.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add http://github.com/don/cordova-filechooser.git</code></pre>
<p>Repo:
  <a href="https://github.com/don/cordova-filechooser">
    https://github.com/don/cordova-filechooser
  </a>
</p>

<!-- description -->

<p>Opens the file picker on Android for the user to select a file, returns a file URI.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {FileChooser} from &#39;ionic-native&#39;;

FileChooser.open()
  .then(uri =&gt; console.log(uri);
  .catch(e =&gt; console.log(e);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="open"></div>
<h3><code>open()</code>
  
</h3>


Open a file






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

