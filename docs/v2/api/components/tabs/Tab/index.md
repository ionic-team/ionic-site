---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Tab | slugify}}"
title: "Tab"
header_sub_title: "Class in module "
doc: "Tab"
docType: "class"

---




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/tabs/tab.ts#L8'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/tabs/tab.ts#L8'>
Improve this doc
</a>
</div>





<h1 class="api-title">


Tab






</h1>






<!-- description -->
<h2>Description</h2>

<p><em>For basic Tabs usage, see the <a href="../../../../components/#tabs">Tabs section</a>
of the Component docs.</em></p>
<p>Tab components are basic navigation controllers used with Tabs.  Much like
Nav, they are a subclass of NavController and can be used to navigate
to pages in and manipulate the navigation stack of a particular tab.</p>
<p>For more information on using navigation controllers like Tab or <a href="../../nav/Nav/">Nav</a>,
take a look at the <a href="../NavController/">NavController API reference</a>.</p>
<p>See the <a href="../Tabs/">Tabs API reference</a> for more details on configuring Tabs
and the TabBar.</p>


<h2>Component</h2>
<h3>selector: <code>ion-tab</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-tabs&gt;
     &lt;ion-tab tabTitle=&quot;Home&quot; tabIcon=&quot;home&quot; [root]=&quot;tabOneRoot&quot;&gt;&lt;/ion-tab&gt;
     &lt;ion-tab tabTitle=&quot;Login&quot; tabIcon=&quot;star&quot; [root]=&quot;tabTwoRoot&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>




<!-- @property tags -->

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
root
</td>


<td>
any
</td>


<td>
set the root page for this tab
</td>
</tr>

<tr>
<td>
tabTitle
</td>


<td>
any
</td>


<td>
set the title of this tab
</td>
</tr>

<tr>
<td>
tabIcon
</td>


<td>
any
</td>


<td>
set the icon for this tab
</td>
</tr>

</tbody>
</table>


<!-- methods on the class -->

<h2>Methods</h2>

<div id="select"></div>

<h3>
<code>select()</code>
  

</h3>












<div id="index"></div>

<h3>
<code>index()</code>
  

</h3>

```ts
export class MyClass{
 constructor(tab: Tab){
   this.tab = tab;
   console.log(this.tab.index);
 }
}
```







* Returns: 
  <code>Number</code> Returns the index of this page within its NavController.


<!-- related link --><!-- end content block -->


<!-- end body block -->

