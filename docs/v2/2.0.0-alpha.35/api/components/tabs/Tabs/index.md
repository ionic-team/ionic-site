---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.35"
versionHref: "/docs/v2/2.0.0-alpha.35"
path: ""
category: api
id: "{{Tabs | slugify}}"
title: "Tabs"
header_sub_title: "Class in module "
doc: "Tabs"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/tabs/tabs.ts#L9'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/tabs/tabs.ts#L9'>
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
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/tabs/tabs.ts#L10-L271">ionic/components/tabs/tabs.ts (line 10)</a>
</p>
<h2>Component</h2>
  <span>selector: ion-tabs</span>


## Members

<div id="platform"></div>
<h2>
  <code>platform()</code>

</h2>












<div id="select"></div>
<h2>
  <code>select(tab)</code>

</h2>

TODO



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
        tab
        
        
      </td>
      <td>
        
  <code>Tab</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>TODO</code> TODO




<div id="getByIndex"></div>
<h2>
  <code>getByIndex(index)</code>

</h2>

TODO



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
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>TODO</code> TODO




<div id="getSelected"></div>
<h2>
  <code>getSelected()</code>

</h2>












<div id="getIndex"></div>
<h2>
  <code>getIndex()</code>

</h2>












