---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "{{Tab | slugify}}"
title: "Tab"
header_sub_title: "Class in module "
doc: "Tab"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/tabs/tab.ts#L6'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/tabs/tab.ts#L6'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  Tab



</h1>





<p><em>For basic Tabs usage, see the <a href="../../../../components/#tabs">Tabs section</a>
of the Component docs.</em></p>
<p>Tab components are basic navigation controllers used with Tabs.  Much like
Nav, they are a subclass of NavController and can be used to navigate
to pages in and manipulate the navigation stack of a particular tab.</p>
<p>For more information on using navigation controllers like Tab or <a href="../../nav/Nav/">Nav</a>,
take a look at the <a href="../NavController/">NavController API reference</a>.</p>
<p>See the <a href="../Tabs/">Tabs API reference</a> for more details on configuring Tabs
and the TabBar.</p>
<p>Like Nav, you must set a root page to be loaded initially for each Tab with
the &#39;root&#39; property:</p>
<pre><code>import {GettingStartedPage} from &#39;getting-started&#39;;
@App({
  template: `&lt;ion-tabs&gt;
               &lt;ion-tab [root]=&quot;tabOneRoot&quot;&gt;&lt;/ion-tab&gt;
               &lt;ion-tab [root]=&quot;tabTwoRoot&quot;&gt;&lt;/ion-tab&gt;
             &lt;ion-tabs&gt;`
})
class MyApp {
  constructor(){
    this.tabOneRoot = GettingStartedPage;
    this.tabTwoRoot = GettingStartedPage;
  }
}
</code></pre>
<p><h3 id="tab_properties">Tab Properties</h3>
The Tabs component automatically creates the TabBar from the properties you
set on each Tab.</p>
<p>To change the title and icon, use the <code>tab-title</code> and <code>tab-icon</code>
inputs:</p>
<pre><code class="lang-html">&lt;ion-tabs&gt;
     &lt;ion-tab tab-title=&quot;Home&quot; tab-icon=&quot;home&quot; [root]=&quot;tabOneRoot&quot;&gt;&lt;/ion-tab&gt;
     &lt;ion-tab tab-title=&quot;Login&quot; tab-icon=&quot;star&quot; [root]=&quot;tabTwoRoot&quot;&gt;&lt;/ion-tab&gt;
&lt;ion-tabs&gt;
</code></pre>


<h1 class="class export">Tab <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/tabs/tab.ts#L7-L170">ionic/components/tabs/tab.ts (line 7)</a>
</p>
<h2>Component</h2>
  <span>selector: ion-tab</span>

  <span>inputs: root, tabTitle, tabIcon</span>


## Members

<div id="setSelected"></div>
<h2>
  <code>setSelected()</code>

</h2>












<div id="index"></div>
<h2>
  <code>index()</code>

</h2>












<div id="onDestroy"></div>
<h2>
  <code>onDestroy()</code>

</h2>












