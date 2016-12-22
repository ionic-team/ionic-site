---
layout: "v2_fluid/docs_base"
version: "2.2.12"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "action-sheet"
title: "Action Sheet"
header_sub_title: "Class in module "
doc: "Action Sheet"
docType: "class"
---







<h1 class="api-title">
  
  Action Sheet
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/actionsheet.ts#L44">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-actionsheet</code></pre>
<p>Repo:
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-actionsheet">
    https://github.com/EddyVerbruggen/cordova-plugin-actionsheet
  </a>
</p>

<!-- description -->

<p>The ActionSheet plugin shows a native list of options the user can choose from.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-actionsheet</code>. For more info, please see the <a href="https://github.com/EddyVerbruggen/cordova-plugin-actionsheet">ActionSheet plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { ActionSheet } from &#39;ionic-native&#39;;

let buttonLabels = [&#39;Share via Facebook&#39;, &#39;Share via Twitter&#39;];
ActionSheet.show({
  &#39;title&#39;: &#39;What do you want with this image?&#39;,
  &#39;buttonLabels&#39;: buttonLabels,
  &#39;addCancelButtonWithLabel&#39;: &#39;Cancel&#39;,
  &#39;addDestructiveButtonWithLabel&#39; : &#39;Delete&#39;
}).then((buttonIndex: number) =&gt; {
  console.log(&#39;Button pressed: &#39; + buttonIndex);
});
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="show"></div>
<h3><code>show(options)</code>
  
</h3>


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
      options
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves with the index of the
  button pressed (1 based, so 1, 2, 3, etc.)
</div>



<div id="hide"></div>
<h3><code>hide()</code>
  
</h3>


Progamtically hide the native ActionSheet






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a Promise that resolves when the actionsheet is closed
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


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
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The title for the actionsheet</p>

    </td>
  </tr>
  
  <tr>
    <td>
      androidTheme
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Theme to be used on Android</p>

    </td>
  </tr>
  
  <tr>
    <td>
      androidEnableCancelButton
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Enable a cancel on Android</p>

    </td>
  </tr>
  
  <tr>
    <td>
      winphoneEnableCancelButton
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Enable a cancel on Windows Phone</p>

    </td>
  </tr>
  
  <tr>
    <td>
      addCancelButtonWithLabel
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Add a cancel button with text</p>

    </td>
  </tr>
  
  <tr>
    <td>
      addDestructiveButtonWithLabel
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Add a destructive button with text</p>

    </td>
  </tr>
  
  <tr>
    <td>
      position
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>number[]</code>
    </td>
    <td>
      <p>On an iPad, set the X,Y position</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

