---
layout: "fluid/docs_base"
version: "3.10.2"
versionHref: "/docs/native"
path: ""
category: native
id: "file-chooser"
title: "File Chooser"
header_sub_title: "Class in module "
doc: "File Chooser"
docType: "class"
---

<h1 class="api-title">File Chooser</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/file-chooser/index.ts#L1">
  Improve this doc
</a>






<p>Opens the file picker on Android for the user to select a file, returns a file URI.</p>


<p>Repo:
  <a href="https://github.com/don/cordova-filechooser">
    https://github.com/don/cordova-filechooser
  </a>
</p>


<h2>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/don/cordova-filechooser.git
$ npm install --save @ionic-native/file-chooser
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { FileChooser } from &#39;@ionic-native/file-chooser&#39;;

constructor(private fileChooser: FileChooser) { }

...

this.fileChooser.open()
  .then(uri =&gt; console.log(uri))
  .catch(e =&gt; console.log(e));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="open" href="#open"></a><code>open()</code></h3>


Open a file


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;string&gt;</code> 
</div>





