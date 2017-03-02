---
layout: "v2_fluid/docs_base"
version: "2.5.1"
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





<pre><code>$ ionic plugin add cordova-plugin-app-update --save</code></pre>
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

<pre><code>import { AppUpdate } from &#39;ionic-native&#39;;

let updateUrl = &#39;http://your-remote-api&#39;;
AppUpdate.checkAppUpdate(updateUrl)
  .then((something: any) =&gt; doSomething(something))
  .catch((error: any) =&gt; console.log(error));
</code></pre>




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

