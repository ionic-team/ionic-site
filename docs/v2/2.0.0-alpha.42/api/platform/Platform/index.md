---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.42"
versionHref: "/docs/v2/2.0.0-alpha.42"
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




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/platform/platform.ts#L8'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/platform/platform.ts#L8'>
Improve this doc
</a>
</div>





<h1 class="api-title">


Platform






</h1>






<!-- description -->
<h2>Description</h2>

<p>Platform returns the availble information about your current platform.</p>

<!-- @usage tag -->


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





* Returns: 
  <code>bool</code> returns true/false based on platform you place




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






* Returns: 
  <code>array</code> the array of platforms




<div id="versions"></div>

<h3>
<code>versions(optional)</code>
  

</h3>

Returns an object conta

```
import {Platform} 'ionic/ionic';
export MyClass {
   constructor(platform: Platform){
     this.platform = platform;
     console.log(this.platform.versions());
     // or pass in a platform name
     console.log(this.platform.versions('ios'));
   }
}
```


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
        optional
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>platformName</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>object</code> An object with various platform info
- `{object=} `cordova`
- `{object=}` `platformOS` {str: "9.1", num: 9.1, major: 9, minor: 1}
- `{object=} `deviceName` Returns the name of the device
- `{object=}` `device platform` R




<div id="version"></div>

<h3>
<code>version()</code>
  

</h3>












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






* Returns: 
  <code>promise</code> 




<div id="on"></div>

<h3>
<code>on()</code>
  

</h3>












<div id="onHardwareBackButton"></div>

<h3>
<code>onHardwareBackButton()</code>
  

</h3>












<div id="registerBackButtonAction"></div>

<h3>
<code>registerBackButtonAction()</code>
  

</h3>












<div id="exitApp"></div>

<h3>
<code>exitApp()</code>
  

</h3>












<div id="fullScreen"></div>

<h3>
<code>fullScreen()</code>
  

</h3>












<div id="showStatusBar"></div>

<h3>
<code>showStatusBar()</code>
  

</h3>












<div id="url"></div>

<h3>
<code>url()</code>
  

</h3>












<div id="query"></div>

<h3>
<code>query()</code>
  

</h3>












<div id="userAgent"></div>

<h3>
<code>userAgent()</code>
  

</h3>












<div id="navigatorPlatform"></div>

<h3>
<code>navigatorPlatform()</code>
  

</h3>












<div id="width"></div>

<h3>
<code>width()</code>
  

</h3>












<div id="height"></div>

<h3>
<code>height()</code>
  

</h3>












<div id="isPortrait"></div>

<h3>
<code>isPortrait()</code>
  

</h3>












<div id="isLandscape"></div>

<h3>
<code>isLandscape()</code>
  

</h3>












<div id="windowResize"></div>

<h3>
<code>windowResize()</code>
  

</h3>












<div id="onResize"></div>

<h3>
<code>onResize()</code>
  

</h3>












<div id="testQuery"></div>

<h3>
<code>testQuery(queryValue)</code>
  

</h3>

TODO


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
        queryValue
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>boolean</code> TODO




<div id="testUserAgent"></div>

<h3>
<code>testUserAgent(userAgentExpression)</code>
  

</h3>

TODO


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
        userAgentExpression
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>boolean</code> TODO




<div id="testNavigatorPlatform"></div>

<h3>
<code>testNavigatorPlatform(navigatorPlatformExpression)</code>
  

</h3>

TODO


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
        navigatorPlatformExpression
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>boolean</code> TODO




<div id="matchUserAgentVersion"></div>

<h3>
<code>matchUserAgentVersion(userAgentExpression)</code>
  

</h3>

TODO


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
        userAgentExpression
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>Object</code> TODO




<div id="isPlatform"></div>

<h3>
<code>isPlatform(queryValue,&nbsp;userAgentExpression)</code>
  

</h3>

TODO


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
        queryValue
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        userAgentExpression
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>boolean</code> TODO




<div id="load"></div>

<h3>
<code>load(config)</code>
  

</h3>

TODO


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
        config
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="matchPlatform"></div>

<h3>
<code>matchPlatform(platformName)</code>
  

</h3>

TODO


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
        platformName
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>TODO</code> TODO


<!-- related link --><!-- end content block -->


<!-- end body block -->

