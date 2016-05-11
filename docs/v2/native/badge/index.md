---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "badge"
title: "Badge"
header_sub_title: "Class in module "
doc: "Badge"
docType: "class"
---








<h1 class="api-title">

  
  Badge
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/badge.ts#L0'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-badge</code></pre>
<p>Repo:
  <a href="https://github.com/katzer/cordova-plugin-badge">
    https://github.com/katzer/cordova-plugin-badge
  </a>
</p>

<!-- description -->

<p>The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.</p>
<p>Requires Cordova plugin: cordova-plugin-badge. For more info, please see the <a href="https://github.com/katzer/cordova-plugin-badge">Badge plugin docs</a>.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li>
  
  <li>iOS</li>
  
  <li>Browser</li>
  
  <li>Windows</li>
  
  <li>Amazon FireOS</li>
  
  <li>Windows Phone 8</li>
  </ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {Badge} from &#39;ionic-native&#39;;


Badge.set(10);
Badge.increase();
Badge.clear();
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="clear"></div>
<h3><code>clear()</code>

</h3>

Clear the badge of the app icon.










<div id="set"></div>
<h3><code>set(badgeNumber)</code>

</h3>

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
      badgeNumber
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise</code> 
</div>



<div id="get"></div>
<h3><code>get()</code>

</h3>

Get the badge of the app icon.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> 
</div>



<div id="increase"></div>
<h3><code>increase(increaseBy)</code>

</h3>

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
      increaseBy
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise</code> 
</div>



<div id="decrease"></div>
<h3><code>decrease(decreaseBy)</code>

</h3>

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
      decreaseBy
      
      
    </td>
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
  <b>Returns:</b> 
<code>Promise</code> 
</div>



<div id="hasPermission"></div>
<h3><code>hasPermission()</code>

</h3>

Determine if the app has permission to show badges.










<div id="registerPermission"></div>
<h3><code>registerPermission()</code>

</h3>

Register permission to set badge notifications






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise</code> 
</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

