---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Tabs | slugify}}"
title: "Tabs"
header_sub_title: "Class in module "
doc: "Tabs"
docType: "class"

---









<h1 class="api-title">


Tabs






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/tabs/tabs.ts#L14'>
Improve this doc
</a>






<!-- description -->

<p><em>For basic Tabs usage, see the <a href="../../../../components/#tabs">Tabs section</a>
of the Component docs.</em></p>
<p>The Tabs component is a container with a TabBar and any number of
individual Tab components. On iOS, the TabBar is placed on the bottom of
the screen, while on Android it is at the top.</p>


<h3>Component</h3>
<h3>selector: <code>ion-tabs</code></h3>
<!-- @usage tag -->

<h3 style="margin-bottom: 7px">Usage</h3>


<pre><code class="lang-html">&lt;ion-tabs&gt;
  &lt;ion-tab [root]=&quot;tabRoot&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>




<!-- @property tags -->

<h3>Attributes:</h3>
<table class="table" style="margin:0;">
<thead>
<tr>
<th>Attribute</th>
















<th>Type</th>


<th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>
tabbarPlacement
</td>


<td>
any
</td>


<td>
set position of the tabbar, top or bottom
</td>
</tr>

<tr>
<td>
tabbarIcons
</td>


<td>
any
</td>


<td>
set the position of the tabbar's icons: top, bottom, left, right, hide
</td>
</tr>

<tr>
<td>
preloadTabs
</td>


<td>
any
</td>


<td>
sets whether to preload all the tabs, true or false
</td>
</tr>

</tbody>
</table>


<!-- methods on the class -->

<h3>Methods</h3>

<div id="id"></div>

<h3>
<code>id()</code>
  

</h3>












<div id="navbarContainerRef"></div>

<h3>
<code>navbarContainerRef()</code>
  

</h3>












<div id="subPages"></div>

<h3>
<code>subPages()</code>
  

</h3>












<div id="preloadTabs"></div>

<h3>
<code>preloadTabs()</code>
  

</h3>












<div id="tabbarIcons"></div>

<h3>
<code>tabbarIcons()</code>
  

</h3>












<div id="tabbarPlacement"></div>

<h3>
<code>tabbarPlacement()</code>
  

</h3>












<div id="change"></div>

<h3>
<code>change()</code>
  

</h3>












<div id="parent"></div>

<h3>
<code>parent()</code>
  

</h3>












<div id="select"></div>

<h3>
<code>select(index)</code>
  

</h3>




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
        index
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Index of the tab you want to select</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="getByIndex"></div>

<h3>
<code>getByIndex(index)</code>
  

</h3>




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
        index
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Index of the tab you want to get</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Any</code> Tab Returs the tab who's index matches the one passed
</div>




<div id="getSelected"></div>

<h3>
<code>getSelected()</code>
  

</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Any</code> Tab Returns the currently selected tab
</div>




<div id="rootNav"></div>

<h3>
<code>rootNav()</code>
  

</h3>

Returns the root NavController. Returns `null` if Tabs is not
within a NavController.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>NavController</code> 
</div>


<!-- related link -->

<h3>Related</h3>

<a href='/docs/v2/components#tabs'>Tabs Component Docs</a>
<a href='../Tab'>Tab API Docs</a><!-- end content block -->


<!-- end body block -->

