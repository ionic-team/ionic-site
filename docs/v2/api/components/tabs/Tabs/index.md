---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "tabs"
title: "Tabs"
header_sub_title: "Ionic API Documentation"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/tabs/tabs.ts#L14">
Improve this doc
</a>






<p>Tabs make it easy to navigate between different pages or functional
aspects of an app. The Tabs component, written as <code>&lt;ion-tabs&gt;</code>, is
a container of individual <a href="../Tab/">Tab</a> components.</p>
<h3 id="placement">Placement</h3>
<p>The position of the tabs relative to the content varies based on
the mode. By default, the tabs are placed at the bottom of the screen
for <code>ios</code> mode, and at the top for the <code>md</code> and <code>wp</code> modes. You can
configure the position using the <code>tabbarPlacement</code> property on the
<code>&lt;ion-tabs&gt;</code> element, or in your app&#39;s <a href="../../config/Config/">config</a>.
See the <a href="#input-properties">Input Properties</a> below for the available
values of <code>tabbarPlacement</code>.</p>
<h3 id="layout">Layout</h3>
<p>The layout for all of the tabs can be defined using the <code>tabbarLayout</code>
property. If the individual tab has a title and icon, the icons will
show on top of the title by default. All tabs can be changed by setting
the value of <code>tabbarLayout</code> on the <code>&lt;ion-tabs&gt;</code> element, or in your
app&#39;s <a href="../../config/Config/">config</a>. For example, this is useful if
you want to show tabs with a title only on Android, but show icons
and a title for iOS. See the <a href="#input-properties">Input Properties</a>
below for the available values of <code>tabbarLayout</code>.</p>
<h3 id="selecting-a-tab">Selecting a Tab</h3>
<p>There are different ways you can select a specific tab from the tabs
component. You can use the <code>selectedIndex</code> property to set the index
on the <code>&lt;ion-tabs&gt;</code> element, or you can call <code>select()</code> from the <code>Tabs</code>
instance after creation. See <a href="#usage">usage</a> below for more information.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-tabs</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>You can add a basic tabs template to a <code>@Page</code> using the following
template:</p>
<pre><code class="lang-html">&lt;ion-tabs&gt;
  &lt;ion-tab [root]=&quot;tab1Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab2Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab3Root&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>Where <code>tab1Root</code>, <code>tab2Root</code>, and <code>tab3Root</code> are each a page:</p>
<pre><code class="lang-ts">@Page({
  templateUrl: &#39;build/pages/tabs/tabs.html&#39;
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab&#39;s root Page
  tab1Root = Page1;
  tab2Root = Page2;
  tab3Root = Page3;

  constructor() {

  }
}
</code></pre>
<p>By default, the first tab will be selected upon navigation to the
Tabs page. We can change the selected tab by using <code>selectedIndex</code>
on the <code>&lt;ion-tabs&gt;</code> element:</p>
<pre><code class="lang-html">&lt;ion-tabs selectedIndex=&quot;2&quot;&gt;
  &lt;ion-tab [root]=&quot;tab1Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab2Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab3Root&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>Since the index starts at <code>0</code>, this will select the 3rd tab which has
root set to <code>tab3Root</code>. If you wanted to change it dynamically from
your class, you could use <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding">property binding</a>.</p>
<p>Alternatively, you can grab the <code>Tabs</code> instance and call the <code>select()</code>
method. This requires the <code>&lt;ion-tabs&gt;</code> element to have an <code>id</code>. For
example, set the value of <code>id</code> to <code>myTabs</code>:</p>
<pre><code class="lang-html">&lt;ion-tabs id=&quot;myTabs&quot;&gt;
  &lt;ion-tab [root]=&quot;tab1Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab2Root&quot;&gt;&lt;/ion-tab&gt;
  &lt;ion-tab [root]=&quot;tab3Root&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>Then in your class you can grab the <code>Tabs</code> instance and call <code>select()</code>,
passing the index of the tab as the argument. In the following code <code>app</code> is
of type <a href="../../app/IonicApp/"><code>IonicApp</code></a>:</p>
<pre><code class="lang-ts">constructor(app: IonicApp) {
  this.app = app;
}

onPageDidEnter() {
  let tabs = this.app.getComponent(&#39;myTabs&#39;);
  tabs.select(2);
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="select"></div>

<h3>
<a class="anchor" name="select" href="#select"></a>
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
<a class="anchor" name="getByIndex" href="#getByIndex"></a>
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
  <code>Tab</code> <p>Returns the tab who&#39;s index matches the one passed</p>


</div>




<div id="getSelected"></div>

<h3>
<a class="anchor" name="getSelected" href="#getSelected"></a>
<code>getSelected()</code>
  

</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Tab</code> <p>Returns the currently selected tab</p>


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

<a href='/docs/v2/components#tabs'>Tabs Component Docs</a>,
<a href='../Tab'>Tab API Docs</a>,
<a href='../../config/Config'>Config API Docs</a><!-- end content block -->


<!-- end body block -->

