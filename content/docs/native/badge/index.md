---
layout: "fluid/docs_base"
version: "4.13.0"
versionHref: "/docs/native"
path: ""
category: native
id: "badge"
title: "Badge"
header_sub_title: "Class in module "
doc: "Badge"
docType: "class"
---

<h1 class="api-title">Badge</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/badge/index.ts#L1">
  Improve this doc
</a>







<p>The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.</p>
<p>Requires Cordova plugin: cordova-plugin-badge. For more info, please see the <a href="https://github.com/katzer/cordova-plugin-badge">Badge plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-badge">
    https://github.com/katzer/cordova-plugin-badge
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-badge
$ npm install --save @ionic-native/badge
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Badge } from &#39;@ionic-native/badge&#39;;

constructor(private badge: Badge) { }

...

this.badge.set(10);
this.badge.increase(1);
this.badge.clear();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="clear" href="#clear"></a><code>clear()</code></h3>


Clear the badge of the app icon.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;boolean&gt;</code> 
</div><h3><a class="anchor" name="set" href="#set"></a><code>set(badgeNumber)</code></h3>


Set the badge of the app icon.
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
      badgeNumber</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The new badge number.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="get" href="#get"></a><code>get()</code></h3>


Get the badge of the app icon.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="increase" href="#increase"></a><code>increase(increaseBy)</code></h3>


Increase the badge number.
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
      increaseBy</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Count to add to the current badge number</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="decrease" href="#decrease"></a><code>decrease(decreaseBy)</code></h3>


Decrease the badge number.
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
      decreaseBy</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Count to subtract from the current badge number</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="isSupported" href="#isSupported"></a><code>isSupported()</code></h3>


Check support to show badges.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="hasPermission" href="#hasPermission"></a><code>hasPermission()</code></h3>


Determine if the app has permission to show badges.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="requestPermission" href="#requestPermission"></a><code>requestPermission()</code></h3>


Register permission to set badge notifications


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





