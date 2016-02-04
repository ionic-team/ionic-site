---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "menu"
title: "Menu"
header_sub_title: "Class in module "
doc: "Menu"
docType: "class"

---









<h1 class="api-title">


Menu






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/menu/menu.ts#L9'>
Improve this doc
</a>








<h2>Component</h2>
<h3>selector: <code>ion-menu</code></h3>
<!-- @usage tag -->


<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="setOpen"></div>

<h3>
<code>setOpen(shouldOpen)</code>
  

</h3>

Sets the state of the Menu to open or not.


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
        shouldOpen
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>If the Menu is open or not.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> returns a promise once set
</div>




<div id="open"></div>

<h3>
<code>open()</code>
  

</h3>

Progamatically open the Menu






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> returns a promise when the menu is fully opened
</div>




<div id="close"></div>

<h3>
<code>close()</code>
  

</h3>

Progamatically close the Menu






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> returns a promise when the menu is fully closed
</div>




<div id="toggle"></div>

<h3>
<code>toggle()</code>
  

</h3>

Toggle the menu. If it's closed, it will open, and if opened, it will close






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> returns a promise when the menu has been toggled
</div>




<div id="enable"></div>

<h3>
<code>enable(shouldEnable)</code>
  

</h3>

Used to enable or disable a menu. For example, there could be multiple
left menus, but only one of them should be able to be dragged open.


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
        shouldEnable
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>True if it should be enabled, false if not.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Menu</code> Returns the instance of the menu, which is useful for chaining.
</div>




<div id="swipeEnable"></div>

<h3>
<code>swipeEnable(shouldEnable)</code>
  

</h3>

Used to enable or disable the ability to swipe open the menu.


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
        shouldEnable
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>True if it should be swipe-able, false if not.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Menu</code> Returns the instance of the menu, which is useful for chaining.
</div>


<!-- related link --><!-- end content block -->


<!-- end body block -->

abled.</p>
<pre><code class="lang-html">&lt;ion-menu id=&quot;authenticated&quot; side=&quot;left&quot; [content]=&quot;mycontent&quot;&gt;...&lt;/ion-menu&gt;
&lt;ion-menu id=&quot;unauthenticated&quot; side=&quot;left&quot; [content]=&quot;mycontent&quot;&gt;...&lt;/ion-menu&gt;
&lt;ion-nav #mycontent [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;
</code></pre>
<pre><code class="lang-ts">enableAuthenticatedMenu() {
  this.menu.enable(true, &#39;authenticated&#39;);
  this.menu.enable(false, &#39;unauthenticated&#39;);
}
</code></pre>
<p>Note that if an app only had one menu, there is no reason to pass a menu id.</p>
<h3 id="menu-types">Menu Types</h3>
<p>Menu supports two display types: <code>overlay</code>, <code>reveal</code> and <code>push</code>. Overlay
is the traditional Material Design drawer type, and Reveal is the traditional
iOS type. By default, menus will use to the correct type for the platform,
but this can be overriden using the <code>type</code> property:</p>
<pre><code class="lang-html">&lt;ion-menu type=&quot;overlay&quot; [content]=&quot;mycontent&quot;&gt;&lt;/ion-menu&gt;
</code></pre>




<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="open"></div>

<h3>
<code>open()</code>
  

</h3>












<div id="close"></div>

<h3>
<code>close()</code>
  

</h3>












<div id="enable"></div>

<h3>
<code>enable()</code>
  

</h3>












<div id="swipeEnable"></div>

<h3>
<code>swipeEnable()</code>
  

</h3>












<div id="get"></div>

<h3>
<code>get()</code>
  

</h3>










<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#menus'>Menu Component Docs</a>
<a href='/docs/v2/components#navigation'>Navigation Component Docs</a>
<a href='../../nav/Nav'>Nav API Docs</a><!-- end content block -->


<!-- end body block -->

