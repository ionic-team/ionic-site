---
layout: "fluid/docs_base"
version: "4.9.1"
versionHref: "/docs/native"
path: ""
category: native
id: "qr-scanner"
title: "QR Scanner"
header_sub_title: "Class in module "
doc: "QR Scanner"
docType: "class"
---

<h1 class="api-title">QR Scanner</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/qr-scanner/index.ts#L58">
  Improve this doc
</a>







<p>A fast, energy efficient, highly-configurable QR code scanner for Cordova apps.</p>
<p>Requires Cordova plugin: <code>cordova-plugin-qrscanner</code>. For more info, please see the <a href="https://github.com/bitpay/cordova-plugin-qrscanner">QR Scanner plugin docs</a>.</p>


<p>Repo:
  <a href="https://github.com/bitpay/cordova-plugin-qrscanner">
    https://github.com/bitpay/cordova-plugin-qrscanner
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-qrscanner
$ npm install --save @ionic-native/qr-scanner
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>Browser</li><li>iOS</li><li>Windows</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { QRScanner, QRScannerStatus } from &#39;@ionic-native/qr-scanner&#39;;


constructor(private qrScanner: QRScanner) { }

...

// Optionally request the permission early
this.qrScanner.prepare()
  .then((status: QRScannerStatus) =&gt; {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) =&gt; {
         console.log(&#39;Scanned something&#39;, text);

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) =&gt; console.log(&#39;Error is&#39;, e));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="prepare" href="#prepare"></a><code>prepare()</code></h3>




Request permission to use QR scanner.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="scan" href="#scan"></a><code>scan()</code></h3>




Call this method to enable scanning. You must then call the `show` method to make the camera preview visible.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Observable&lt;string&gt;</code> returns an Observable that emits the scanned text. Unsubscribe from the observable to stop scanning.
</div><h3><a class="anchor" name="show" href="#show"></a><code>show()</code></h3>


Configures the native webview to have a transparent background, then sets the background of the <body> and <html> DOM elements to transparent, allowing the webview to re-render with the transparent background.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="hide" href="#hide"></a><code>hide()</code></h3>


Configures the native webview to be opaque with a white background, covering the video preview.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="enableLight" href="#enableLight"></a><code>enableLight()</code></h3>




Enable the device's light (for scanning in low-light environments).


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="destroy" href="#destroy"></a><code>destroy()</code></h3>


Destroy the scanner instance.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="disableLight" href="#disableLight"></a><code>disableLight()</code></h3>




Disable the device's light.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="useFrontCamera" href="#useFrontCamera"></a><code>useFrontCamera()</code></h3>




Use front camera


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="useBackCamera" href="#useBackCamera"></a><code>useBackCamera()</code></h3>




Use back camera


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="useCamera" href="#useCamera"></a><code>useCamera(camera)</code></h3>




Set camera to be used.
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
      camera</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Provide <code>0</code> for back camera, and <code>1</code> for front camera.</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="pausePreview" href="#pausePreview"></a><code>pausePreview()</code></h3>


Pauses the video preview on the current frame and pauses scanning.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="resumePreview" href="#resumePreview"></a><code>resumePreview()</code></h3>


Resumse the video preview and resumes scanning.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="getStatus" href="#getStatus"></a><code>getStatus()</code></h3>


Returns permission status


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;QRScannerStatus&gt;</code> 
</div><h3><a class="anchor" name="openSettings" href="#openSettings"></a><code>openSettings()</code></h3>




Opens settings to edit app permissions.









<h2><a class="anchor" name="QRScannerStatus" href="#QRScannerStatus"></a>QRScannerStatus</h2>

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
      authorized
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>On iOS and Android 6.0+, camera access is granted at runtime by the user (by clicking &quot;Allow&quot; at the dialog).
The authorized property is a boolean value which is true only when the user has allowed camera access to your app (AVAuthorizationStatus.Authorized).
On platforms with permissions granted at install (Android pre-6.0, Windows Phone) this property is always true.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      denied
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean value which is true if the user permanently denied camera access to the app (AVAuthorizationStatus.Denied).
Once denied, camera access can only be gained by requesting the user change their decision (consider offering a link to the setting via openSettings()).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      restricted
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean value which is true if the user is unable to grant permissions due to parental controls, organization security configuration profiles, or similar reasons.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      prepared
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean value which is true if QRScanner is prepared to capture video and render it to the view.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      showing
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean value which is true when the preview layer is visible (and on all platforms but browser, the native webview background is transparent).</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      scanning
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean value which is true if QRScanner is actively scanning for a QR code.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      previewing
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean value which is true if QRScanner is displaying a live preview from the device&#39;s camera. Set to false when the preview is paused.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      lightEnabled
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean value which is true if the light is enabled.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      canOpenSettings
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean value which is true only if the users&#39; operating system is able to QRScanner.openSettings().</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      canEnableLight
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean value which is true only if the users&#39; device can enable a light in the direction of the currentCamera.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      canChangeCamera
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>A boolean value which is true only if the current device &quot;should&quot; have a front camera.
The camera may still not be capturable, which would emit error code 3, 4, or 5 when the switch is attempted.
(On the browser platform, this value is false until the prepare method is called.)</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      currentCamera
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>A number representing the index of the currentCamera. 0 is the back camera, 1 is the front.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





