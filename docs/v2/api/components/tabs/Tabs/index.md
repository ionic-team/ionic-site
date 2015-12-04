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
docType: "class"---




<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/tabs/tabs.ts#L10'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/tabs/tabs.ts#L10'>
    Improve this doc
  </a>

</div>




<h1 class="api-title">


Tabs






</h1>






<h2>Description</h2>

<p><em>For basic Tabs usage, see the <a href="../../../../components/#tabs">Tabs section</a>
of the Component docs.</em></p>
<p>The Tabs component is a container with a TabBar and any number of
individual Tab components. On iOS, the TabBar is placed on the bottom of
the screen, while on Android it is at the top.</p>
<p>See the <a href="../Tab/">Tab API reference</a> for more details on individual Tab components.</p>


<h2>Component</h2>
<h3>selector: <code>ion-tabs</code></h3>

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-tabs&gt;
  &lt;ion-tab [root]=&quot;tabRoot&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>






<h2>Attributes:</h2>
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
tabbar-placement
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
tabbar-icons
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
tabbar-style
</td>


<td>
any
</td>


<td>
sets tabbar's style (primary, secondary, etc)
</td>
</tr>

<tr>
<td>
preload-tabs
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


<h2>Methods</h2>

<div id="platform"></div>

<h3>
<code>platform()</code>

</h3>












<div id="select"></div>

<h3>
<code>select(index)</code>

</h3>





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
        index
        
        
      </td>
      <td>
        
  <code>Number</code>
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
        index
        
        
      </td>
      <td>
        
  <code>Number</code>
      </td>
      <td>
        <p>Index of the tab you want to get</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Any</code> Tab Returs the tab who's index matches the one passed




<div id="getSelected"></div>

<h3>
<code>getSelected()</code>

</h3>








* Returns: 
  <code>Any</code> Tab Returns the currently selected tab


<!-- end content block -->


<!-- end body block -->

