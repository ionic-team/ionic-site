---
layout: "fluid/docs_base"
version: "3.4.2"
versionHref: "/docs/native"
path: ""
category: native
id: "navigation-bar"
title: "Navigation Bar"
header_sub_title: "Class in module "
doc: "Navigation Bar"
docType: "class"
---

<h1 class="api-title">Navigation Bar<span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/navigation-bar/index.ts#L1">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/cranberrygame/cordova-plugin-navigationbar/issues">plugin repo</a>.
</p>



<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-navigationbar
$ npm install --save @ionic-native/navigation-bar
</code></pre>
<p>Repo:
  <a href="https://github.com/cranberrygame/cordova-plugin-navigationbar">
    https://github.com/cranberrygame/cordova-plugin-navigationbar
  </a>
</p>


<p>The NavigationBar plugin can you to hide and auto hide the android navigation bar.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { NavigationBar } from &#39;@ionic-native/navigation-bar&#39;;

constructor(private navigationBar: NavigationBar) { }

...

let autoHide: boolean = true;
this.navigationBar.hide(autoHide);
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="setUp" href="#setUp"></a><code>setUp(autohide)</code></h3>




hide automatically (or not) the navigation bar.
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
      autohide</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="hideNavigationBar" href="#hideNavigationBar"></a><code>hideNavigationBar()</code></h3>




Hide the navigation bar. 


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





