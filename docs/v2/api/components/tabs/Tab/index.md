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









<h1 class="api-title">


Tab






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic2/edit/master/ionic/components/tabs/tab.ts#L8'>
Improve this doc
</a> 






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
<p>For most cases, you can give tab a <code>[root]</code> property along with the component you want to load.</p>
<pre><code class="lang-html">&lt;ion-tabs&gt;
 &lt;ion-tab [root]=&quot;chatRoot&quot;&gt;&lt;ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<pre><code class="lang-ts">import {Chat} from &#39;../chat/chat&#39;;
export class Tabs {
   constructor(){
     // here we&#39;ll set the property of chatRoot to
     // the imported class of Chat
     this.chatRoot = Chat
   }
}
</code></pre>
<p>In other cases, you may not want to navigate to a new component, but just
call a method. You can use the <code>(select)</code> event to call a method on your
class. Below is an example of presenting a modal from one of the tabs.</p>
<pre><code class="lang-html">&lt;ion-tabs preloadTabs=&quot;false&quot;&gt;
  &lt;ion-tab (select)=&quot;chat()&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<pre><code class="lang-ts">export class Tabs {
  constructor(nav: NavController){
    this.nav = nav;
  }
  chat() {
    let modal = Modal.create(ChatPage);
    this.nav.present(modal);
  }
}
</code></pre>


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

<tr>
<td>
select
</td>


<td>
any
</td>


<td>
method to call when the current tab is selected
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







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Number</code> Returns the index of this page within its NavController.  
</div>


<!-- related link --><!-- end content block -->


<!-- end body block -->

