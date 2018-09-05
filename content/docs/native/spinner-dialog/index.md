---
layout: "fluid/docs_base"
version: "4.12.2"
versionHref: "/docs/native"
path: ""
category: native
id: "spinner-dialog"
title: "Spinner Dialog"
header_sub_title: "Class in module "
doc: "Spinner Dialog"
docType: "class"
---

<h1 class="api-title">Spinner Dialog</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/spinner-dialog/index.ts#L23">
  Improve this doc
</a>







<p>Cordova plugin for showing a native spinner based on Paldom/SpinnerDialog.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-native-spinner</code>. For more info, please see the <a href="https://github.com/greybax/cordova-plugin-native-spinner">Spinner Dialog plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/greybax/cordova-plugin-native-spinner">
    https://github.com/greybax/cordova-plugin-native-spinner
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-native-spinner
$ npm install --save @ionic-native/spinner-dialog
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { SpinnerDialog } from &#39;@ionic-native/spinner-dialog&#39;;

constructor(private spinnerDialog: SpinnerDialog) { }

...

this.spinnerDialog.show();

this.spinnerDialog.hide();
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="show" href="#show"></a><code>show(title,&nbsp;message,&nbsp;cancelCallback,&nbsp;iOSOptions)</code></h3>




Shows the spinner dialog
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
      title</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Spinner title (shows on Android only)</p>
</td>
  </tr>
  
  <tr>
    <td>
      message</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Spinner message</p>
</td>
  </tr>
  
  <tr>
    <td>
      cancelCallback</td>
    <td>
      <code>boolean</code>|<code>function()</code>
    </td>
    <td>
      <p>Set to true to set spinner not cancelable. Or provide a function to call when the user cancels the spinner.</p>
</td>
  </tr>
  
  <tr>
    <td>
      iOSOptions</td>
    <td>
      <code>object</code>
    </td>
    <td>
      <p>Options for iOS only</p>
</td>
  </tr>
  </tbody>
</table>

<h3><a class="anchor" name="hide" href="#hide"></a><code>hide()</code></h3>




Hides the spinner dialog if visible









<h2><a class="anchor" name="SpinnerDialogIOSOptions" href="#SpinnerDialogIOSOptions"></a>SpinnerDialogIOSOptions</h2>

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
      overlayOpacity
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Opacity of the overlay, between 0 (transparent) and 1 (opaque). Default: 0.35</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      textColorRed
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Red component of the text color, between 0 and 1. Default: 1</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      textColorGreen
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Green component of the text color, between 0 and 1. Default: 1</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      textColorBlue
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Blue component of the text color, between 0 and 1. Default: 1</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





