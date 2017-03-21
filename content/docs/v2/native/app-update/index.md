---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "app-update"
title: "App Update"
header_sub_title: "Class in module "
doc: "App Update"
docType: "class"
---







<h1 class="api-title">
  
  App Update
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/app-update/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-app-update
$ npm install --save @ionic-native/app-update
</code></pre>
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
<pre><code>import { AppUpdate } from &#39;@ionic-native/app-update&#39;;

constructor(private appUpdate: AppUpdate) {

   const updateUrl = &#39;http://your-remote-api.com/update.xml&#39;;
   this.appUpdate.checkAppUpdate(updateUrl);

}
</code></pre>
<p>The plugin will compare the app version and update it automatically if the API has a newer version to install.</p>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="checkAppUpdate"></div>
<h3>
  <code>checkAppUpdate(updateUrl)</code>
  

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



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

