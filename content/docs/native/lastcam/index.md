---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "lastcam"
title: "LastCam"
header_sub_title: "Class in module "
doc: "LastCam"
docType: "class"
---

<h1 class="api-title">LastCam</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/last-cam/index.ts#L19">
  Improve this doc
</a>







<p>Last Cam is a Camera Preview plugin that allows you to take capture both Videos and images in a
custom html preview of your choice.</p>


<p>Repo:
  <a href="https://github.com/bengejd/cordova-plugin-last-cam">
    https://github.com/bengejd/cordova-plugin-last-cam
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-last-cam
$ npm install --save @ionic-native/last-cam
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>iOS</li>
</ul>












<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="startCamera" href="#startCamera"></a><code>startCamera(options)</code></h3>




Starts the camera preview instance.
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
      <code>LastCamStartupOptions</code>
    </td>
    <td>
      </td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="stopCamera" href="#stopCamera"></a><code>stopCamera()</code></h3>


Stops the camera preview instance. (iOS)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="switchCamera" href="#switchCamera"></a><code>switchCamera()</code></h3>


Switch from the rear camera and front camera, if available.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="switchFlash" href="#switchFlash"></a><code>switchFlash()</code></h3>


Switch the flash mode.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="takePicture" href="#takePicture"></a><code>takePicture()</code></h3>




Take the picture (base64)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="startVideoCapture" href="#startVideoCapture"></a><code>startVideoCapture()</code></h3>


Start the video capture


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="stopVideoCapture" href="#stopVideoCapture"></a><code>stopVideoCapture()</code></h3>




Stops the video capture


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="recordingTimer" href="#recordingTimer"></a><code>recordingTimer()</code></h3>




Promise of the recordingTimer.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> 
</div><h3><a class="anchor" name="watchRecordingTimer" href="#watchRecordingTimer"></a><code>watchRecordingTimer()</code></h3>




Observable of the recordingTimer.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;any&gt;</code> 
</div>





<h2><a class="anchor" name="LastCamStartupOptions" href="#LastCamStartupOptions"></a>LastCamStartupOptions</h2>

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
      x
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The left edge in pixels, default 0</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The top edge in pixels, default 0</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The width in pixels, default window.screen.width</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>The height in pixels, default window.screen.height</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      camera
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Choose the camera to use &#39;front&#39; or &#39;back&#39;, default &#39;front&#39;</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





