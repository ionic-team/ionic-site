---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "{{Tabs | slugify}}"
title: "Tabs"
header_sub_title: "Class in module "
doc: "Tabs"
docType: "class"
---



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





<p><em>For basic Tabs usage, see the <a href="../../../../components/#tabs">Tabs section</a>
of the Component docs.</em></p>
<p>The Tabs component is a container with a TabBar and any number of
individual Tab components. On iOS, the TabBar is placed on the bottom of
the screen, while on Android it is at the top.</p>
<p>See the <a href="../Tab/">Tab API reference</a> for more details on individual Tab components.</p>
<p>The TabBar is automatically created for you using the
<a href="../Tab/#tab_properties">properties you set on each Tab</a>.</p>
<p>To override the platform specific TabBar placement, use the
<code>tabbar-placement</code> property:</p>
<pre><code class="lang-html">&lt;ion-tabs tabbar-placement=&quot;top&quot;&gt;
  &lt;ion-tab [root]=&quot;tabRoot&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>To change the location of the icons in the TabBar, use the <code>tabbar-icons</code>
property:</p>
<pre><code class="lang-html">&lt;ion-tabs tabbar-icons=&quot;bottom&quot;&gt;
  &lt;ion-tab [root]=&quot;tabRoot&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>You can select tabs programatically by injecting Tabs into any child
component, and using the <a href="#select">select()</a> method:</p>
<pre><code class="lang-ts">@Page({
  template: `&lt;button (click)=&quot;goToTabTwo()&quot;&gt;Go to Tab2&lt;/button&gt;`
})
class TabOne {
  constructor(tabs: Tabs){
    this.tabs = tabs;
  }

  goToTabTwo() {
    this.tabs.select(this.tabs.tabs[1]);
  }
}
</code></pre>
<p>The <a href="#tabs">tabs</a> property is an array of all child <a href="../Tab/">Tab</a> components
of that Tabs component.</p>





<h1 class="class export">Tabs <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/tabs/tabs.ts#L11-L283">ionic/components/tabs/tabs.ts (line 11)</a>
</p>
<h2>Component</h2>
  <span>selector: ion-tabs</span>


<h2>Members</h2>

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



  <h2>Attributes:</h2>
  <table class="table" style="margin:0;">
    <thead>
      <tr>
        <th>Attribute</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td>
          tabbar-placement
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
          set the position of the tabbar's icons: top, bottom, left, right, hide
        </td>
      </tr>
      
      <tr>
        <td>
          tabbar-style
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
          sets whether to preload all the tabs, true or false
        </td>
      </tr>
      
    </tbody>
  </table>




