---
layout: "v2_fluid/docs_base"
version: "3.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "keyboard"
title: "Keyboard"
header_sub_title: "Class in module "
doc: "Keyboard"
docType: "class"
---







<h1 class="api-title">
  
  Keyboard
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/keyboard/index.ts#L2">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add ionic-plugin-keyboard
$ npm install --save @ionic-native/keyboard
</code></pre>
<p>Repo:
  <a href="https://github.com/driftyco/ionic-plugin-keyboard">
    https://github.com/driftyco/ionic-plugin-keyboard
  </a>
</p>

<!-- description -->




<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Keyboard } from &#39;@ionic-native/keyboard&#39;;

constructor(private keyboard: Keyboard) { }

...

this.keyboard.show();

this.keyboard.close();
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="hideKeyboardAccessoryBar"></div>
<h3>
  <code>hideKeyboardAccessoryBar(hide)</code>
  

</h3>
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
      hide
      
    </td>
    <td>
      
<code>boolean</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="show"></div>
<h3>
  <code>show()</code>
  

</h3>
Force keyboard to be shown.



<div id="close"></div>
<h3>
  <code>close()</code>
  

</h3>
Close the keyboard if open.



<div id="disableScroll"></div>
<h3>
  <code>disableScroll(disable)</code>
  

</h3>
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
      disable
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="onKeyboardShow"></div>
<h3>
  <code>onKeyboardShow()</code>
  

</h3>
Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div><div id="onKeyboardHide"></div>
<h3>
  <code>onKeyboardHide()</code>
  

</h3>
Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

