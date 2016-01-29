---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.40"
versionHref: "/docs/v2/2.0.0-alpha.40"
path: ""
category: api
id: "menu"
title: "Menu"
header_sub_title: "Class in module "
doc: "Menu"
docType: "class"

---




<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/menu/menu.ts#L7'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/menu/menu.ts#L7'>
    Improve this doc
  </a>

</div>




<h1 class="api-title">


Menu






</h1>






<h2>Description</h2>

<p><em>For basic Menu usage, see the <a href="../../../../components/#menus">Menu section</a>
of the Component docs.</em></p>
<p>Menu is a side-menu navigation that can be dragged out or toggled to show.</p>
<p>In order to use Menu, you must specify a <a href="https://angular.io/docs/ts/latest/guide/user-input.html#local-variables">reference</a>
to the content element that Menu should listen on for drag events, using the
<code>content</code> property:</p>
<pre><code class="lang-html">&lt;ion-menu [content]=&quot;contentRef&quot;&gt;
  &lt;ion-content&gt;
    &lt;ion-list&gt;
    ...
    &lt;/ion-list&gt;
  &lt;/ion-content&gt;
&lt;/ion-menu&gt;

&lt;ion-nav #content-ref [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;
</code></pre>
<p>By default, Menus are on the left, but this can be overriden with the <code>side</code>
property:</p>
<pre><code class="lang-html">&lt;ion-menu [content]=&quot;contentRef&quot; side=&quot;right&quot;&gt;&lt;/ion-menu&gt;
</code></pre>
<p>Menu supports two display styles: overlay, and reveal. Overlay
is the traditional Android drawer style, and Reveal is the traditional iOS
style. By default, Menu will adjust to the correct style for the platform,
but this can be overriden using the <code>type</code> property:</p>
<pre><code class="lang-html">&lt;ion-menu [content]=&quot;contentRef&quot; type=&quot;overlay&quot;&gt;&lt;/ion-menu&gt;
</code></pre>


<h2>Component</h2>
<h3>selector: <code>ion-menu</code></h3>





<h2>Methods</h2>

<div id="setOpen"></div>

<h3>
<code>setOpen(isOpen)</code>

</h3>

Sets the state of the Menu to open or not.



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
        isOpen
        
        
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






* Returns: 
  <code>Promise</code> TODO




<div id="open"></div>

<h3>
<code>open()</code>

</h3>

TODO






* Returns: 
  <code>TODO</code> TODO




<div id="close"></div>

<h3>
<code>close()</code>

</h3>

TODO






* Returns: 
  <code>TODO</code> TODO




<div id="toggle"></div>

<h3>
<code>toggle()</code>

</h3>

TODO






* Returns: 
  <code>TODO</code> TODO




<div id="enable"></div>

<h3>
<code>enable(shouldEnable)</code>

</h3>

Used to enable or disable a menu. For example, there could be multiple
left menus, but only one of them should be able to be dragged open.



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






* Returns: 
  <code>Menu</code> Returns the instance of the menu, which is useful for chaining.




<h2>Related</h2>

<a href='/docs/v2/components#menus'>Menu Component Docs</a>
<a href='/docs/v2/components#navigation'>Navigation Component Docs</a>
<a href='../../nav/Nav'>Nav API Docs</a><!-- end content block -->


<!-- end body block -->

