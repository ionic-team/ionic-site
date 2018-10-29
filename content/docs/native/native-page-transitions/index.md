---
layout: "fluid/docs_base"
version: "4.16.0"
versionHref: "/docs/native"
path: ""
category: native
id: "native-page-transitions"
title: "Native Page Transitions"
header_sub_title: "Class in module "
doc: "Native Page Transitions"
docType: "class"
---

<h1 class="api-title">Native Page Transitions</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/native-page-transitions/index.ts#L16">
  Improve this doc
</a>







<p>The Native Page Transitions plugin uses native hardware acceleration to animate your transitions between views. You have complete control over the type of transition, the duration, and direction.</p>


<p>Repo:
  <a href="https://github.com/Telerik-Verified-Plugins/NativePageTransitions">
    https://github.com/Telerik-Verified-Plugins/NativePageTransitions
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add com.telerik.plugins.nativepagetransitions
$ npm install --save @ionic-native/native-page-transitions
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone 8</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { NativePageTransitions, NativeTransitionOptions } from &#39;@ionic-native/native-page-transitions&#39;;

constructor(private nativePageTransitions: NativePageTransitions) { }

...


// example of adding a transition when a page/modal closes
ionViewWillLeave() {

 let options: NativeTransitionOptions = {
    direction: &#39;up&#39;,
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
   };

 this.nativePageTransitions.slide(options)
   .then(onSuccess)
   .catch(onError);

}


// example of adding a transition when pushing a new page
openPage(page: any) {

  this.nativePageTransitions.slide(options);
  this.navCtrl.push(page);

}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="slide" href="#slide"></a><code>slide(options)</code></h3>


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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="flip" href="#flip"></a><code>flip(options)</code></h3>


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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="fade" href="#fade"></a><code>fade(options)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="drawer" href="#drawer"></a><code>drawer(options)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;<strong class="tag">Android</strong>&nbsp;</p>


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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="curl" href="#curl"></a><code>curl(options)</code></h3>



<p>
  <strong>Platforms:</strong><strong class="tag">iOS</strong>&nbsp;</p>


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
      options</td>
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
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="executePendingTransition" href="#executePendingTransition"></a><code>executePendingTransition()</code></h3>


Execute pending transition


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="cancelPendingTransition" href="#cancelPendingTransition"></a><code>cancelPendingTransition()</code></h3>


Cancel pending transition


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div>





