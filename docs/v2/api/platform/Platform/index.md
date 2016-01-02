---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Platform | slugify}}"
title: "Platform"
header_sub_title: "Class in module "
doc: "Platform"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/platform/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Platform






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic2/edit/master/ionic/platform/platform.ts#L1'>
Improve this doc
</a> 






<!-- description -->
<h2>Description</h2>

<p>Platform returns the availble information about your current platform.
Platforms in Ionic 2 are much more complex then in V1, returns not just a single platform,
but a hierarchy of information, such as a devices OS, phone vs tablet, or mobile vs browser.
With this information you can completely custimize your app to fit any device and platform.</p>

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-ts">import {Platform} &#39;ionic/ionic&#39;;
export MyClass {
   constructor(platform: Platform){
     this.platform = platform;
   }
}
</code></pre>




<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="is"></div>

<h3>
<code>is(platformName)</code>
  

</h3>

Depending on the platform name, isPlatform will return true or flase

```
import {Platform} 'ionic/ionic';
export MyClass {
   constructor(platform: Platform){
     this.platform = platform;
     if(this.platform.is('ios'){
       // what ever you need to do for
       // if the platfomr is ios
     }
   }
}
```


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
        platformName
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>bool</code> returns true/false based on platform you place  
</div>




<div id="platforms"></div>

<h3>
<code>platforms()</code>
  

</h3>

Depending on what device you are on, `platforms` can return multiple values.
Each possible value is a hierarchy of platforms. For example, on an iPhone,
it would return mobile, ios, and iphone.

```
import {Platform} 'ionic/ionic';
export MyClass {
   constructor(platform: Platform){
     this.platform = platform;
     console.log(this.platform.platforms());
     // This will return an array of all the availble platforms
     // From if your on mobile, to mobile os, and device name
   }
}
```






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>array</code> the array of platforms  
</div>




<div id="versions"></div>

<h3>
<code>versions(platformName)</code>
  

</h3>

Returns an object containing information about the paltform

```
import {Platform} 'ionic/ionic';
export MyClass {
   constructor(platform: Platform){
     this.platform = platform;
     console.log(this.platform.versions());
   }
}
```



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
        platformName
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>optional platformName</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>object</code> An object with various platform info  
</div>




<div id="ready"></div>

<h3>
<code>ready()</code>
  

</h3>

Returns a promise when the platform is ready and native functionality can be called

```
import {Platform} 'ionic/ionic';
export MyClass {
   constructor(platform: Platform){
     this.platform = platform;
     this.platform.ready().then(() => {
       console.log('Platform ready');
       // The platform is now ready, execute any native code you want
      });
   }
}
```






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>promise</code> Returns a promsie when device ready has fired  
</div>




<div id="isRTL"></div>

<h3>
<code>isRTL()</code>
  

</h3>

Returns if this app is using right-to-left language direction or not.
http://www.w3.org/International/questions/qa-html-dir






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code>   
</div>


<!-- related link --><!-- end content block -->


<!-- end body block -->

