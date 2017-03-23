---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "file-chooser"
title: "File Chooser"
header_sub_title: "Class in module "
doc: "File Chooser"
docType: "class"
---







<h1 class="api-title">
  
  File Chooser
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/file-chooser/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add http://github.com/don/cordova-filechooser.git
$ npm install --save @ionic-native/File Chooser
</code></pre>
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


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { FileChooser } from &#39;@ionic-native/file-chooser&#39;;

constructor(private fileChooser: FileChooser) { }

...

this.fileChooser.open()
  .then(uri =&gt; console.log(uri))
  .catch(e =&gt; console.log(e));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="open"></div>
<h3>
  <code>open()</code>
  

</h3>
Open a file


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

