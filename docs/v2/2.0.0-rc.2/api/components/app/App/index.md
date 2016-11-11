---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2/2.0.0-rc.2"
path: ""
category: api
id: "app"
title: "App"
header_sub_title: "Ionic API Documentation"
doc: "App"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="app" href="#app"></a>

App





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master/src/components/app/app.ts#L9">
Improve this doc
</a>






<p>App is a utility class used in Ionic to get information about various aspects of an app</p>




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








<div id="setEnabled"></div>

<h3>
<a class="anchor" name="setEnabled" href="#setEnabled"></a>
<code>setEnabled(isEnabled,&nbsp;duration)</code>
  

</h3>

Sets if the app is currently enabled or not, meaning if it's
available to accept new user commands. For example, this is set to `false`
while views transition, a modal slides up, an action-sheet
slides up, etc. After the transition completes it is set back to `true`.


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
        isEnabled
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p><code>true</code> for enabled, <code>false</code> for disabled</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        duration
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>When <code>isEnabled</code> is set to <code>false</code>, this argument
is used to set the maximum number of milliseconds that app will wait until
it will automatically enable the app again. It&#39;s basically a fallback incase
something goes wrong during a transition and the app wasn&#39;t re-enabled correctly.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="setScrollDisabled"></div>

<h3>
<a class="anchor" name="setScrollDisabled" href="#setScrollDisabled"></a>
<code>setScrollDisabled(disableScroll)</code>
  

</h3>

Toggles whether an application can be scrolled


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
        disableScroll
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>when set to <code>false</code>, the application&#39;s
scrolling is enabled. When set to <code>true</code>, scrolling is disabled.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="isScrolling"></div>

<h3>
<a class="anchor" name="isScrolling" href="#isScrolling"></a>
<code>isScrolling()</code>
  

</h3>

Boolean if the app is actively scrolling or not.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>returns true or false</p>


</div>




<div id="getRootNav"></div>

<h3>
<a class="anchor" name="getRootNav" href="#getRootNav"></a>
<code>getRootNav()</code>
  

</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>NavController</code> <p>Retuns the root NavController</p>


</div>







<!-- related link --><!-- end content block -->


<!-- end body block -->

