---
layout: "docs_api"
version: "nightly"
versionHref: "/docs/nightly"
path: "api/utility/ionic.Platform/"

title: "ionic.Platform"
header_sub_title: "Utility in module ionic"
doc: "ionic.Platform"
docType: "utility"
---

<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic/edit/master/js/utils/platform.js#L3'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  ionic.Platform



</h1>
















  

  
## Methods

<div id="ready"></div>
<h2>
  <code>ready(callback)</code>

</h2>

Trigger a callback once the device is ready,
or immediately if the device is already ready.



<table class="table" style="margin:0;">
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
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>The function to call.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="device"></div>
<h2>
  <code>device()</code>

</h2>

Return the current device (given by cordova).






* Returns: 
  <code>object</code> The device object.




<div id="isCordova"></div>
<h2>
  <code>isCordova()</code>

</h2>








* Returns: 
  <code>boolean</code> Whether we are running on Cordova.




<div id="isIPad"></div>
<h2>
  <code>isIPad()</code>

</h2>








* Returns: 
  <code>boolean</code> Whether we are running on iPad.




<div id="isIOS"></div>
<h2>
  <code>isIOS()</code>

</h2>








* Returns: 
  <code>boolean</code> Whether we are running on iOS.




<div id="isAndroid"></div>
<h2>
  <code>isAndroid()</code>

</h2>








* Returns: 
  <code>boolean</code> Whether we are running on Android.




<div id="platform"></div>
<h2>
  <code>platform()</code>

</h2>








* Returns: 
  <code>string</code> The name of the current platform.




<div id="version"></div>
<h2>
  <code>version()</code>

</h2>








* Returns: 
  <code>string</code> The version of the current device platform.




<div id="exitApp"></div>
<h2>
  <code>exitApp()</code>

</h2>

Exit the app.









<div id="showStatusBar"></div>
<h2>
  <code>showStatusBar(shouldShow)</code>

</h2>

Shows or hides the device status bar (in Cordova).



<table class="table" style="margin:0;">
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
        shouldShow
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to show the status bar.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="fullScreen"></div>
<h2>
  <code>fullScreen([showFullScreen], [showStatusBar])</code>

</h2>

Sets whether the app is fullscreen or not (in Cordova).



<table class="table" style="margin:0;">
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
        showFullScreen
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to set the app to fullscreen. Defaults to true.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        showStatusBar
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to show the device&#39;s status bar. Defaults to false.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








  
  
<h2 id="properties">Properties</h2>

<div id="isReady"></div>
* <h3>
  <code>boolean</code> <code>isReady</code></h3>

  Whether the device is ready.

  



<div id="isFullScreen"></div>
* <h3>
  <code>boolean</code> <code>isFullScreen</code></h3>

  Whether the device is fullscreen.

  



<div id="platforms"></div>
* <h3>
  <code>Array(string)</code> <code>platforms</code></h3>

  An array of all platforms found.

  



<div id="grade"></div>
* <h3>
  <code>string</code> <code>grade</code></h3>

  What grade the current platform is.

  

</ul>






