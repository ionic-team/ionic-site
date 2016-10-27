---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "imageresizer"
title: "ImageResizer"
header_sub_title: "Class in module "
doc: "ImageResizer"
docType: "class"
---







<h1 class="api-title">
  
  ImageResizer
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/imageresizer.ts#L36">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add https://github.com/protonet/cordova-plugin-image-resizer.git</code></pre>
<p>Repo:
  <a href="https://github.com/protonet/cordova-plugin-image-resizer">
    https://github.com/protonet/cordova-plugin-image-resizer
  </a>
</p>

<!-- description -->

<p>Cordova Plugin For Image Resize</p>
<p>Requires plugin <code>info.protonet.imageresizer</code> - use the Ionic CLI and type in the following command:
<code>ionic plugin add https://github.com/protonet/cordova-plugin-image-resizer.git</code></p>
<p>For more info, please see the <a href="https://github.com/protonet/cordova-plugin-image-resizer">https://github.com/protonet/cordova-plugin-image-resizer</a></p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { ImageResizer, ImageResizerOptions } from &#39;ionic-native&#39;;

let options = {
 uri: uri,
 folderName: &#39;Protonet&#39;,
 quality: 90,
 width: 1280,
 height: 1280
} as ImageResizerOptions;

ImageResizer
.resize(options)
.then(
 (filePath: string) =&gt; { console.log(&#39;FilePath&#39;, filePath); },
 () =&gt; { console.log(&#39;Error occured&#39;); }
)
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="resize"></div>
<h3><code>resize()</code>
  
</h3>













<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

