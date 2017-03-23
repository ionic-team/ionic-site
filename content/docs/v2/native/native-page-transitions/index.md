---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "native-page-transitions"
title: "Native Page Transitions"
header_sub_title: "Class in module "
doc: "Native Page Transitions"
docType: "class"
---







<h1 class="api-title">
  
  Native Page Transitions
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/native-page-transitions/index.ts#L16">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add com.telerik.plugins.nativepagetransitions
$ npm install --save @ionic-native/native-page-transitions
</code></pre>
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


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { NativePageTransitions, NativeTransitionOptions } from &#39;@ionic-native/native-page-transitions&#39;;

constructor(private nativePageTransitions: NativePageTransitions) { }

...

let options: NativeTransitionOptions = {
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

this.nativePageTransitions.slide(options)
  .then(onSuccess)
  .catch(onError);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="slide"></div>
<h3>
  <code>slide(options)</code>
  

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
      
<code>NativeTransitionOptions</code>
    </td>
    <td>
      <p>Options for the transition</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="flip"></div>
<h3>
  <code>flip(options)</code>
  

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
      
<code>NativeTransitionOptions</code>
    </td>
    <td>
      <p>Options for the transition</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="fade"></div>
<h3>
  <code>fade(options)</code>
  

</h3>
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
      
<code>NativeTransitionOptions</code>
    </td>
    <td>
      <p>Options for the transition</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="drawer"></div>
<h3>
  <code>drawer(options)</code>
  

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
      
<code>NativeTransitionOptions</code>
    </td>
    <td>
      <p>Options for the transition</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="curl"></div>
<h3>
  <code>curl(options)</code>
  

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
      
<code>NativeTransitionOptions</code>
    </td>
    <td>
      <p>Options for the transition</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

