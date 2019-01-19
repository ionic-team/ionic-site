---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "colored-browser-tabs"
title: "Colored Browser Tabs"
header_sub_title: "Class in module "
doc: "Colored Browser Tabs"
docType: "class"
---

<h1 class="api-title">Colored Browser Tabs</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/colored-browser-tabs/index.ts#L2">
  Improve this doc
</a>







<p>This plugin opens Chrome Custom Tabs on Android or SafariViewController on iOS</p>


<p>Repo:
  <a href="https://github.com/TobyEb/cordova-plugin-colored-browser-tabs">
    https://github.com/TobyEb/cordova-plugin-colored-browser-tabs
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-colored-browser-tabs
$ npm install --save @ionic-native/colored-browser-tabs
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { ColoredBrowserTabs } from &#39;@ionic-native/colored-browser-tabs&#39;;


constructor(private browserTabs: ColoredBrowserTabs) { }

...


this.browserTabs.openTab(&#39;www.example.url&#39;, &#39;#ffffff&#39;)
  .subscribe()

this.browserTabs.openTabWithAnimation(&#39;www.example.url&#39;, &#39;slide_x&#39;, &#39;#ffffff&#39;)
  .subscribe()
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="openTab" href="#openTab"></a><code>openTab(url,&nbsp;color)</code></h3>




Call this method to open the tab
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
      url</td>
    <td>
      
    </td>
    <td>
      <p>the url you want to open</p>
</td>
  </tr>
  
  <tr>
    <td>
      color</td>
    <td>
      
    </td>
    <td>
      <p>the color with which you want to define the toolbar color</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns a Observable that resolves when something happens
</div><h3><a class="anchor" name="openTabWithAnimation" href="#openTabWithAnimation"></a><code>openTabWithAnimation(url,&nbsp;anim,&nbsp;color)</code></h3>




Call this method to open the tab
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
      url</td>
    <td>
      
    </td>
    <td>
      <p>the url you want to open</p>
</td>
  </tr>
  
  <tr>
    <td>
      anim</td>
    <td>
      
    </td>
    <td>
      <p>the animation you want for enter and exit, you can choose between slide_x / slide_y and fade
       only works in Android, iOS just shows the default animation</p>
</td>
  </tr>
  
  <tr>
    <td>
      color</td>
    <td>
      
    </td>
    <td>
      <p>the color with which you want to define the toolbar color</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> Returns a Observable that resolves when something happens
</div>





