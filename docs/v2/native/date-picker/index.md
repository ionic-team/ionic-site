---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "date-picker"
title: "Date Picker"
header_sub_title: "Class in module "
doc: "Date Picker"
docType: "class"
---








<h1 class="api-title">

  
  Date Picker
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/datepicker.ts#L63'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-datepicker</code></pre>
<p>Repo:
  <a href="https://github.com/VitaliiBlagodir/cordova-plugin-datepicker">
    https://github.com/VitaliiBlagodir/cordova-plugin-datepicker
  </a>
</p>

<!-- description -->

<p>The DatePicker plugin allows the user to fetch date or time using native dialogs.</p>
<p>Platforms supported: iOS, Android, Windows</p>
<p>Requires Cordova plugin: <code>cordova-plugin-datepicker</code>. For more info, please see the <a href="https://github.com/VitaliiBlagodir/cordova-plugin-datepicker">DatePicker plugin docs</a>.</p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {DatePicker} from &#39;ionic-native&#39;;



DatePicker.show({
  date: new Date(),
  mode: &#39;date&#39;
}).then(
  date =&gt; console.log(&quot;Got date: &quot;, date),
  err =&gt; console.log(&quot;Error occurred while getting date:&quot;, err)
);
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="show"></div>
<h3><code>show(options)</code>

</h3>

Shows the date and/or time picker dialog(s)


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
      

    </td>
    <td>
      
      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Date&gt;</code> Returns a promise that resolves with the picked date and/or time, or rejects with an error.
</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

