---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.54"
versionHref: "/docs/v2/2.0.0-alpha.54"
path: ""
category: api
id: "menu"
title: "Menu"
header_sub_title: "Class in module "
doc: "Menu"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/menu/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Menu






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/menu/menu.ts#L9'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p><em>For basic Menu usage, see the <a href="../../../../components/#menus">Menu section</a>
of the Component docs.</em></p>
<p>Menu is a side-menu navigation that can be dragged out or toggled to show.</p>


<h2>Component</h2>
<h3>selector: <code>ion-menu</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<p>In order to use Menu, you must specify a <a href="https://angular.io/docs/ts/latest/guide/user-input.html#local-variables">reference</a>
to the content element that Menu should listen on for drag events, using the <code>content</code> property:</p>
<pre><code class="lang-html">&lt;ion-menu [content]=&quot;mycontent&quot;&gt;
  &lt;ion-content&gt;
    &lt;ion-list&gt;
    ...
    &lt;/ion-list&gt;
  &lt;/ion-content&gt;
&lt;/ion-menu&gt;

&lt;ion-nav #mycontent [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;
</code></pre>
<p>By default, Menus are on the left, but this can be overriden with the <code>side</code>
property:</p>
<pre><code class="lang-html">&lt;ion-menu [content]=&quot;mycontent&quot; side=&quot;right&quot;&gt;&lt;/ion-menu&gt;
</code></pre>
<p>Menus can optionally be given an <code>id</code> attribute which allows the app to
to get ahold of menu references. If no <code>id</code> is given then the menu
automatically receives an <code>id</code> created from the side it is on, such as
<code>leftMenu</code> or <code>rightMenu</code>. When using more than one menu it is always
recommended to give each menu a unique <code>id</code>. Additionally menuToggle and
menuClose directives should be given menu id values of their respective
menu.</p>
<p>Menu supports two display styles: overlay, and reveal. Overlay
is the traditional Android drawer style, and Reveal is the traditional iOS
style. By default, Menu will adjust to the correct style for the platform,
but this can be overriden using the <code>type</code> property:</p>
<pre><code class="lang-html">&lt;ion-menu [content]=&quot;mycontent&quot; type=&quot;overlay&quot;&gt;&lt;/ion-menu&gt;
</code></pre>
<p>To programatically interact with the menu, you first get the menu component.</p>
<pre><code class="lang-ts">@Page({
`&lt;ion-menu [content]=&quot;mycontent&quot; id=&quot;leftMenu&quot;&gt;&lt;/ion-menu&gt;
&lt;ion-nav #mycontent [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;`
)}
export class MyClass{
 constructor(app: IonicApp){
   this.app = app;
   this.menu;
 }

 // Wait until the page is ready
 ngAfterViewInit(){
   this.menu = this.app.getComponent(&#39;leftMenu&#39;);
 }

 // Open the menu programatically
 openMenu(){
   this.menu.open();
 }

}
</code></pre>
<p>If you want to use any of the APIs down below, make sure to grabe the menu component by it&#39;s ID</p>




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


<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#menus'>Menu Component Docs</a>
<a href='/docs/v2/components#navigation'>Navigation Component Docs</a>
<a href='../../nav/Nav'>Nav API Docs</a><!-- end content block -->


<!-- end body block -->

