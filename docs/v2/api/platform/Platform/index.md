---
layout: "v2_fluid/docs_base"
version: "2.0.0"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Platform | slugify}}"
title: "Platform"
header_sub_title: "Class in module "
doc: "Platform"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/platform/platform.ts#L10'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/platform/platform.ts#L10'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  Platform



</h1>





<p>TODO</p>


<h1 class="class export">Platform <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/platform/platform.ts#L11-L446">ionic/platform/platform.ts (line 11)</a>
</p>
## Members

<div id="is"></div>
<h2>
  <code>is(platformName)</code>

</h2>

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
<h2>
  <code>platforms()</code>

</h2>

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
<h2>
  <code>versions(optional)</code>

</h2>

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
<h2>
  <code>version()</code>

</h2>












<div id="ready"></div>
<h2>
  <code>ready()</code>

</h2>

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
<h2>
  <code>on()</code>

</h2>












<div id="onHardwareBackButton"></div>
<h2>
  <code>onHardwareBackButton()</code>

</h2>












<div id="registerBackButtonAction"></div>
<h2>
  <code>registerBackButtonAction()</code>

</h2>












<div id="exitApp"></div>
<h2>
  <code>exitApp()</code>

</h2>












<div id="fullScreen"></div>
<h2>
  <code>fullScreen()</code>

</h2>












<div id="showStatusBar"></div>
<h2>
  <code>showStatusBar()</code>

</h2>












<div id="url"></div>
<h2>
  <code>url()</code>

</h2>












<div id="query"></div>
<h2>
  <code>query()</code>

</h2>












<div id="userAgent"></div>
<h2>
  <code>userAgent()</code>

</h2>












<div id="navigatorPlatform"></div>
<h2>
  <code>navigatorPlatform()</code>

</h2>












<div id="width"></div>
<h2>
  <code>width()</code>

</h2>












<div id="height"></div>
<h2>
  <code>height()</code>

</h2>












<div id="isPortrait"></div>
<h2>
  <code>isPortrait()</code>

</h2>












<div id="isLandscape"></div>
<h2>
  <code>isLandscape()</code>

</h2>












<div id="windowResize"></div>
<h2>
  <code>windowResize()</code>

</h2>












<div id="onResize"></div>
<h2>
  <code>onResize()</code>

</h2>












<div id="testQuery"></div>
<h2>
  <code>testQuery(queryValue)</code>

</h2>

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
<h2>
  <code>testUserAgent(userAgentExpression)</code>

</h2>

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




<div id="matchUserAgentVersion"></div>
<h2>
  <code>matchUserAgentVersion(userAgentExpression)</code>

</h2>

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
<h2>
  <code>isPlatform(queryValue, userAgentExpression)</code>

</h2>

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
<h2>
  <code>load(config)</code>

</h2>

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
<h2>
  <code>matchPlatform(platformName)</code>

</h2>

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




