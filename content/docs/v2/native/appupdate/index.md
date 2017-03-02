---
layout: "v2_fluid/docs_base"
version: "2.6.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "appupdate"
title: "AppUpdate"
header_sub_title: "Class in module "
doc: "AppUpdate"
docType: "class"
---







<h1 class="api-title">
  
  AppUpdate
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/app-update.ts#L0">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-app-update</code></pre>
<p>Repo:
  <a href="https://github.com/vaenow/cordova-plugin-app-update">
    https://github.com/vaenow/cordova-plugin-app-update
  </a>
</p>

<!-- description -->

<p>This plugin does self-update for android</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<p>You should first host an XML file on your server with the following data in it:</p>
<pre><code class="lang-xml">&lt;update&gt;
    &lt;version&gt;302048&lt;/version&gt;
    &lt;name&gt;APK Name&lt;/name&gt;
    &lt;url&gt;https://your-remote-api.com/YourApp.apk&lt;/url&gt;
&lt;/update&gt;
</code></pre>
<p>Then use the following code:</p>
<pre><code>import { AppUpdate } from &#39;ionic-native&#39;;

let updateUrl = &#39;http://your-remote-api.com/update.xml&#39;;

AppUpdate.checkAppUpdate(updateUrl);
</code></pre>
<p>The plugin will compare the app version and update it automatically if the API has a newer version to install.</p>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="checkAppUpdate"></div>
<h3><code>checkAppUpdate(updateUrl)</code>
  
</h3>




Check and update


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
      updateUrl
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>update api url</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves when something happens
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

