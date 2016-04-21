---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "ionicapp"
title: "IonicApp"
header_sub_title: "Ionic API Documentation"
doc: "IonicApp"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="ionic-app" href="#ionic-app"></a>

IonicApp






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/app/app.ts#L5">
Improve this doc
</a>






<p>App utility service.  Allows you to look up components that have been
registered using the <a href="../Id/">Id directive</a>.</p>

<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="setTitle"></div>

<h3>
<a class="anchor" name="setTitle" href="#setTitle"></a>
<code>setTitle(val)</code>
  

</h3>

Sets the document title.


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
        val
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>Value to set the document title to.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="isProd"></div>

<h3>
<a class="anchor" name="isProd" href="#isProd"></a>
<code>isProd()</code>
  

</h3>

Returns if the app has been set to be in be in production mode or not.
Production mode can only be set within the config of `@App`. Defaults
to `false`.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> 

</div>




<div id="isScrolling"></div>

<h3>
<a class="anchor" name="isScrolling" href="#isScrolling"></a>
<code>isScrolling()</code>
  

</h3>

Boolean if the app is actively scrolling or not.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> 

</div>




<div id="getComponent"></div>

<h3>
<a class="anchor" name="getComponent" href="#getComponent"></a>
<code>getComponent()</code>
  

</h3>

Get the component for the given key.











<div id="setAppInjector"></div>

<h3>
<a class="anchor" name="setAppInjector" href="#setAppInjector"></a>
<code>setAppInjector(injector)</code>
  

</h3>

Set the global app injector that contains references to all of the instantiated providers


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
        injector
        
        
      </td>
      <td>
        
  
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="getAppInjector"></div>

<h3>
<a class="anchor" name="getAppInjector" href="#getAppInjector"></a>
<code>getAppInjector()</code>
  

</h3>

Get an instance of the global app injector that contains references to all of the instantiated providers






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Injector</code> 

</div>


<!-- related link --><!-- end content block -->


<!-- end body block -->

