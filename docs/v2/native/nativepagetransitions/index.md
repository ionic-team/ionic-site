---
layout: "v2_fluid/docs_base"
version: "2.2.6"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "nativepagetransitions"
title: "NativePageTransitions"
header_sub_title: "Class in module "
doc: "NativePageTransitions"
docType: "class"
---







<h1 class="api-title">
  
  NativePageTransitions
  

  

  

</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/native-page-transitions.ts#L0">
  Improve this doc
</a>



<!-- decorators -->


<pre><code>$ ionic plugin add com.telerik.plugins.nativepagetransitions</code></pre>
<p>Repo:
  <a href="https://github.com/Telerik-Verified-Plugins/NativePageTransitions">
    https://github.com/Telerik-Verified-Plugins/NativePageTransitions
  </a>
</p>

<!-- description -->

<p>The Native Page Transitions plugin uses native hardware acceleration to animate your transitions between views. You have complete control over the type of transition, the duration, and direction.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>iOS</li><li>Android</li><li>Windows Phone</li>
</ul>

<!-- @platforms tag end -->


<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import {NativePageTransitions, TransitionOptions} from &#39;ionic-native&#39;;

let options: TransitionOptions = {
   direction: &#39;up&#39;,
   duration: 500,
   slowdownfactor: 3,
   slidePixels: 20,
   iosdelay: 100,
   androiddelay: 150,
   winphonedelay: 250,
   fixedPixelsTop: 0,
   fixedPixelsBottom: 60
 };

NativePageTransitions.slide(options)
  .then(onSuccess)
  .catch(onError);
</code></pre>




<!-- @property tags -->


<h2>Static Members</h2>

<div id="slide"></div>
<h3><code>slide(options)</code>
  
</h3>


Perform a slide animation


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
      
<code>TransitionOptions</code>
    </td>
    <td>
      <p>Options for the transition</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="flip"></div>
<h3><code>flip(options)</code>
  
</h3>


Perform a flip animation


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
      
<code>TransitionOptions</code>
    </td>
    <td>
      <p>Options for the transition</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="fade"></div>
<h3><code>fade(options)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  
  <code>Android</code>&nbsp;
  </p>



Perform a fade animation


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
      
<code>TransitionOptions</code>
    </td>
    <td>
      <p>Options for the transition</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="drawer"></div>
<h3><code>drawer(options)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  
  <code>Android</code>&nbsp;
  </p>



Perform a slide animation


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
      
<code>TransitionOptions</code>
    </td>
    <td>
      <p>Options for the transition</p>

      
    </td>
  </tr>
  
  </tbody>
</table>







<div id="curl"></div>
<h3><code>curl(options)</code>
  
</h3>


<p>
  <b>Platforms:</b>
  <code>iOS</code>&nbsp;
  </p>



Perform a slide animation


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
      
<code>TransitionOptions</code>
    </td>
    <td>
      <p>Options for the transition</p>

      
    </td>
  </tr>
  
  </tbody>
</table>








<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

