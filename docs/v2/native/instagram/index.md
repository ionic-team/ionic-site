---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "instagram"
title: "Instagram"
header_sub_title: "Class in module "
doc: "Instagram"
docType: "class"
---







<h1 class="api-title">
  
  Instagram
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/instagram.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-instagram-plugin</code></pre>
<p>Repo:
  <a href="https://github.com/vstirbu/InstagramPlugin">
    https://github.com/vstirbu/InstagramPlugin
  </a>
</p>

<!-- description -->

<p>Share a photo with the instagram app</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {Instagram} from &#39;ionic-native&#39;;

Instagram.share(&#39;data:image/png;uhduhf3hfif33&#39;, &#39;Caption&#39;)
  .then(() =&gt; console.log(&#39;Shared!&#39;))
  .catch((error: any) =&gt; console.error(error));
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="isInstalled"></div>
<h3><code>isInstalled()</code>
  
</h3>




Detect if the Instagram application is installed on the device.







<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;boolean|string&gt;</code> Returns a promise that returns a boolean value if installed, or the app version on android
</div>



<div id="share"></div>
<h3><code>share(canvasIdOrDataUrl,&nbsp;caption)</code>
  
</h3>




Share an image on Instagram
Note: Instagram app stopped accepting pre-filled captions on both iOS and Android. As a work-around, the caption is copied to the clipboard. You have to inform your users to paste the caption.



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
      canvasIdOrDataUrl
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>The canvas element id or the dataURL of the image to share</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      caption
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>The caption of the image</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves if the image was shared
</div>



<div id="shareAsset"></div>
<h3><code>shareAsset(assetLocalIdentifier)</code>
  
</h3>




Share a library asset or video


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
      assetLocalIdentifier
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>A local fileURI</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves if the image was shared
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

