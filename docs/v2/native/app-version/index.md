---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "app-version"
title: "App Version"
header_sub_title: "Class in module "
doc: "App Version"
docType: "class"
---








<h1 class="api-title">

  
  App Version
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/appversion.ts#L0'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-app-version</code></pre>
<p>Repo:
  <a href="https://github.com/whiteoctober/cordova-plugin-app-version">
    https://github.com/whiteoctober/cordova-plugin-app-version
  </a>
</p>

<!-- description -->

<p>Reads the version of your app from the target build settings.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-app-version</code>. For more info, please see the <a href="https://github.com/whiteoctober/cordova-plugin-app-version">Cordova App Version docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {AppVersion} from &#39;ionic-native&#39;;


AppVersion.getAppName();
AppVersion.getPackageName();
AppVersion.getVersionCode();
AppVersion.getVersionNumber();
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="getAppName"></div>
<h3><code>getAppName()</code>

</h3>

Returns the name of the app






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> 
</div>



<div id="getPackageName"></div>
<h3><code>getPackageName()</code>

</h3>

Returns the package name of the app






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> 
</div>



<div id="getVersionCode"></div>
<h3><code>getVersionCode()</code>

</h3>

Returns the build identifier of the app






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> 
</div>



<div id="getVersionNumber"></div>
<h3><code>getVersionNumber()</code>

</h3>

Returns the version of the app






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> 
</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

