---
layout: "fluid/docs_base"
version: "4.15.0"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/navigation-bar/index.ts#L1">
  Improve this doc
</a>




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/cranberrygame/cordova-plugin-navigationbar/issues">plugin repo</a>.
</p>




<p>The NavigationBar plugin allows you to hide and auto hide the android navigation bar.</p>


<p>Repo:
  <a href="https://github.com/cranberrygame/cordova-plugin-navigationbar">
    https://github.com/cranberrygame/cordova-plugin-navigationbar
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-navigationbar
$ npm install --save @ionic-native/navigation-bar
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { NavigationBar } from &#39;@ionic-native/navigation-bar&#39;;

constructor(private navigationBar: NavigationBar) { }

...

let autoHide: boolean = true;
this.navigationBar.setUp(autoHide);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
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





