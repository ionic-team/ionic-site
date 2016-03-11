---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "tabs"
title: "Tabs"
header_sub_title: "Class in module "
doc: "Tabs"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/tabs/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="tabs" href="#tabs"></a>

Tabs






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0//home/ubuntu/ionic/ionic/components/tabs/tabs.ts#L14'>
Improve this doc
</a>






<p><em>For basic Tabs usage, see the <a href="../../../../components/#tabs">Tabs section</a>
of the Component docs.</em></p>
<p>The Tabs component is a container with a TabBar and any number of
individual Tab components. On iOS, the TabBar is placed on the bottom of
the screen, while on Android it is at the top.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-tabs</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-tabs&gt;
  &lt;ion-tab [root]=&quot;tabRoot&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-methods" href="#instance-methods"></a>Instance Methods</h2>

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
  <code>Tab</code> Returns the tab who's index matches the one passed
</div>




<div id="getSelected"></div>

<h3>
<code>getSelected()</code>
  

</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Tab</code> Returns the currently selected tab
</div>



<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>selectedIndex</td>
      <td><code>number</code></td>
      <td><p> The default selected tab index when first loaded. If a selected index isn&#39;t provided then it will use <code>0</code>, the first tab.</p>
</td>
    </tr>
    
    <tr>
      <td>preloadTabs</td>
      <td><code>boolean</code></td>
      <td><p> Set whether to preload all the tabs: <code>true</code>, <code>false</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>tabbarIcons</td>
      <td><code>string</code></td>
      <td><p> Deprecated, use <code>tabbarLayout</code> instead. Set the position of the tabbar&#39;s icons: <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>, <code>hide</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>tabbarLayout</td>
      <td><code>string</code></td>
      <td><p> Set the tabbar layout: <code>icon-top</code>, <code>icon-left</code>, <code>icon-right</code>, <code>icon-bottom</code>, <code>icon-hide</code>, <code>title-hide</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>tabbarPlacement</td>
      <td><code>string</code></td>
      <td><p> Set position of the tabbar: <code>top</code>, <code>bottom</code>.</p>
</td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>change</td>
      <td><p> Expression to evaluate when the tab changes.</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#tabs'>Tabs Component Docs</a>
<a href='../Tab'>Tab API Docs</a><!-- end content block -->


<!-- end body block -->

