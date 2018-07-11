---
layout: "fluid/docs_base"
version: "4.9.1"
versionHref: "/docs/native"
path: ""
category: native
id: "keyboard"
title: "Keyboard"
header_sub_title: "Class in module "
doc: "Keyboard"
docType: "class"
---

<h1 class="api-title">Keyboard</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/keyboard/index.ts#L2">
  Improve this doc
</a>







<p>Keyboard plugin for Cordova.</p>
<p>Requires Cordova plugin: <code>ionic-plugin-keyboard</code>. For more info, please see the <a href="https://github.com/ionic-team/ionic-plugin-keyboard">Keyboard plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/ionic-team/ionic-plugin-keyboard">
    https://github.com/ionic-team/ionic-plugin-keyboard
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add ionic-plugin-keyboard
$ npm install --save @ionic-native/keyboard
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>BlackBerry 10</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Keyboard } from &#39;@ionic-native/keyboard&#39;;

constructor(private keyboard: Keyboard) { }

...

this.keyboard.show();

this.keyboard.close();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="hideKeyboardAccessoryBar" href="#hideKeyboardAccessoryBar"></a><code>hideKeyboardAccessoryBar(hide)</code></h3>




Hide the keyboard accessory bar with the next, previous and done buttons.
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
      hide</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">Android</strong>&nbsp;<strong class="tag">BlackBerry 10</strong>&nbsp;<strong class="tag">Windows</strong>&nbsp;</p>


Force keyboard to be shown.



<h3><a class="anchor" name="close" href="#close"></a><code>close()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;<strong class="tag">BlackBerry 10</strong>&nbsp;<strong class="tag">Windows</strong>&nbsp;</p>


Close the keyboard if open.



<h3><a class="anchor" name="disableScroll" href="#disableScroll"></a><code>disableScroll(disable)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Windows</strong>&nbsp;</p>


Prevents the native UIScrollView from moving when an input is focused.
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
      disable</td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="onKeyboardShow" href="#onKeyboardShow"></a><code>onKeyboardShow()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;<strong class="tag">BlackBerry 10</strong>&nbsp;<strong class="tag">Windows</strong>&nbsp;</p>


Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div><h3><a class="anchor" name="onKeyboardHide" href="#onKeyboardHide"></a><code>onKeyboardHide()</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;<strong class="tag">BlackBerry 10</strong>&nbsp;<strong class="tag">Windows</strong>&nbsp;</p>


Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div>





