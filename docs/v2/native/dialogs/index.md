---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "dialogs"
title: "Dialogs"
header_sub_title: "Class in module "
doc: "Dialogs"
docType: "class"
---








<h1 class="api-title">

  
  Dialogs
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/dialogs.ts#L14'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-dialogs</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-dialogs.git">
    https://github.com/apache/cordova-plugin-dialogs.git
  </a>
</p>

<!-- description -->

<p>This plugin gives you ability to access and customize the device native dialogs.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-dialogs</code>. For more info, please see the <a href="https://github.com/apache/cordova-plugin-dialogs">Dialogs plugin docs</a>.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {Dialogs} from &#39;ionic-native&#39;;
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="alert"></div>
<h3><code>alert(message,&nbsp;title,&nbsp;buttonName)</code>

</h3>



Shows a custom alert or dialog box.


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
      message
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Dialog message. (String)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      title
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Dialog title. (String) (Optional, defaults to Alert)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      buttonName
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Button name. (String) (Optional, defaults to OK)</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a blank promise once the user has dismissed the alert.
</div>



<div id="confirm"></div>
<h3><code>confirm(message,&nbsp;title,&nbsp;buttonLabels)</code>

</h3>



Displays a customizable confirmation dialog box.


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
      message
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Dialog message. (String)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      title
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Dialog title. (String) (Optional, defaults to Confirm)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      buttonLabels
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Array of strings specifying button labels. (Array) (Optional, defaults to [OK,Cancel])</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;number&gt;</code> Returns a promise that resolves the button index that was clicked. Note that the index use one-based indexing.
</div>



<div id="prompt"></div>
<h3><code>prompt(message,&nbsp;title,&nbsp;buttonLabels,&nbsp;defaultText)</code>

</h3>



Displays a native dialog box that is more customizable than the browser's prompt function.


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
      message
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Dialog message. (String)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      title
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Dialog title (String) (Optional, defaults to Prompt)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      buttonLabels
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Array of strings specifying button labels (Array) (Optional, defaults to [&quot;OK&quot;,&quot;Cancel&quot;])</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      defaultText
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>Default textbox input value (String) (Optional, Default: empty string)</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Returns a promise that resolves an object with the button index clicked and the text entered
</div>



<div id="beep"></div>
<h3><code>beep(times)</code>

</h3>



The device plays a beep sound.


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
      times
      
      
    </td>
    <td>
      

    </td>
    <td>
      <p>The number of times to repeat the beep. (Number)</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

