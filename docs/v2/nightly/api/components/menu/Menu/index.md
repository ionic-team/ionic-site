---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "{{Menu | slugify}}"
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


<h1 class="class export">Menu <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/menu/menu.ts#L8-L346">ionic/components/menu/menu.ts (line 8)</a>
</p>
<h2>Component</h2>
  <span>selector: ion-menu</span>

  <span>inputs: content, dragThreshold, id, side, type</span>

  <span>outputs: opening</span>


## Members

<div id="setOpen"></div>
<h2>
  <code>setOpen(isOpen)</code>

</h2>

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
<h2>
  <code>open()</code>

</h2>

TODO






* Returns: 
  <code>TODO</code> TODO




<div id="close"></div>
<h2>
  <code>close()</code>

</h2>

TODO






* Returns: 
  <code>TODO</code> TODO




<div id="toggle"></div>
<h2>
  <code>toggle()</code>

</h2>

TODO






* Returns: 
  <code>TODO</code> TODO




