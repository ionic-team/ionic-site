---
layout: "fluid/docs_base"
version: "3.6.0"
versionHref: "/docs/native"
path: ""
category: native
id: "action-sheet"
title: "Action Sheet"
header_sub_title: "Class in module "
doc: "Action Sheet"
docType: "class"
---

<h1 class="api-title">Action Sheet</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/action-sheet/index.ts#L54">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic plugin add --save cordova-plugin-actionsheet
$ npm install --save @ionic-native/action-sheet
</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-actionsheet">
    https://github.com/EddyVerbruggen/cordova-plugin-actionsheet
  </a>
</p>


<p>The ActionSheet plugin shows a native list of options the user can choose from.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-actionsheet</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/cordova-plugin-actionsheet">ActionSheet plugin docs</a>.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li><li>Browser</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { ActionSheet, ActionSheetOptions } from &#39;@ionic-native/action-sheet&#39;;

constructor(private actionSheet: ActionSheet) { }

...


let buttonLabels = [&#39;Share via Facebook&#39;, &#39;Share via Twitter&#39;];

const options: ActionSheetOptions = {
  title: &#39;What do you want with this image?&#39;,
  subtitle: &#39;Choose an action&#39;,
  buttonLabels: buttonLabels,
  addCancelButtonWithLabel: &#39;Cancel&#39;,
  addDestructiveButtonWithLabel: &#39;Delete&#39;,
  androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
  destructiveButtonLast: true
};

this.actionSheet.show(options).then((buttonIndex: number) =&gt; {
  console.log(&#39;Button pressed: &#39; + buttonIndex);
});
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="ANDROID_THEMES" href="#ANDROID_THEMES"></a><code>ANDROID_THEMES</code></h3>





<h3><a class="anchor" name="show" href="#show"></a><code>show(options)</code></h3>


Show a native ActionSheet component. See below for options.
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
      options</td>
    <td>
      <code>ActionSheetOptions</code>
    </td>
    <td>
      <p>Options See table below</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the index of the
  button pressed (1 based, so 1, 2, 3, etc.)
</div><h3><a class="anchor" name="hide" href="#hide"></a><code>hide()</code></h3>


Progamtically hide the native ActionSheet


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves when the actionsheet is closed
</div>





<h2><a class="anchor" name="ActionSheetOptions" href="#ActionSheetOptions"></a>ActionSheetOptions</h2>

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
      buttonLabels
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>The labels for the buttons. Uses the index x</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The title for the actionsheet</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      subtitle
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The subtitle for the actionsheet (IOS only)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      androidTheme
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Theme to be used on Android</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      androidEnableCancelButton
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Enable a cancel on Android</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      winphoneEnableCancelButton
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Enable a cancel on Windows Phone</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      addCancelButtonWithLabel
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Add a cancel button with text</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      addDestructiveButtonWithLabel
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Add a destructive button with text</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      position
    </td>
    <td>
      <code>number[]</code>
    </td>
    <td>
      <p>On an iPad, set the X,Y position</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      destructiveButtonLast
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Choose if destructive button will be the last</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





