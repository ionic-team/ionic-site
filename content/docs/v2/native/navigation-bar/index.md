---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "navigation-bar"
title: "Navigation Bar"
header_sub_title: "Class in module "
doc: "Navigation Bar"
docType: "class"
---







<h1 class="api-title">
  
  Navigation Bar
  

  

  <span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/navigation-bar/index.ts#L1">
  Improve this doc
</a>



<!-- decorators -->




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/cranberrygame/cordova-plugin-navigationbar/issues">plugin repo</a>.
</p>


<pre><code>$ ionic plugin add cordova-plugin-navigationbar
$ npm install --save @ionic-native/navigation-bar
</code></pre>
<p>Repo:
  <a href="https://github.com/cranberrygame/cordova-plugin-navigationbar">
    https://github.com/cranberrygame/cordova-plugin-navigationbar
  </a>
</p>

<!-- description -->

<p>The NavigationBar plugin can you to hide and auto hide the android navigation bar.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { NavigationBar } from &#39;@ionic-native/navigation-bar&#39;;

constructor(private navigationBar: NavigationBar) { }

...

let autoHide: boolean = true;
this.navigationBar.hide(autoHide);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="setUp"></div>
<h3>
  <code>setUp(autohide)</code>
  

</h3>
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
      autohide
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="hideNavigationBar"></div>
<h3>
  <code>hideNavigationBar()</code>
  

</h3>
Hide the navigation bar. 


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

