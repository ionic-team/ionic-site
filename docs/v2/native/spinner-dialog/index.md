---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "spinner-dialog"
title: "Spinner Dialog"
header_sub_title: "Class in module "
doc: "Spinner Dialog"
docType: "class"
---








<h1 class="api-title">

  
  Spinner Dialog
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/spinnerdialog.ts#L0'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-spinner-dialog</code></pre>
<p>Repo:
  <a href="https://github.com/Paldom/SpinnerDialog">
    https://github.com/Paldom/SpinnerDialog
  </a>
</p>

<!-- description -->



<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Windows Phone 8</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {SpinnerDialog} from &#39;ionic-native&#39;;



SpinnerDialog.show();

SpinnerDialog.hide();
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="show"></div>
<h3><code>show(title,&nbsp;message,&nbsp;cancelCallback,&nbsp;iOSOptions)</code>

</h3>



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
      title
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Spinner title (shows on Android only)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      message
      
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Spinner message</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      cancelCallback
      
      
    </td>
    <td>
      
<code>boolean</code>|<code>function()</code>
    </td>
    <td>
      <p>Set to false to set spinner not cancelable. Or provide a function to call when the user cancels the spinner.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      iOSOptions
      
      
    </td>
    <td>
      
<code>object</code>
    </td>
    <td>
      <p>Options for iOS only</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="hide"></div>
<h3><code>hide()</code>

</h3>



Hides the spinner dialog if visible











<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

