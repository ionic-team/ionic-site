---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.2"
versionHref: "/docs/v2/2.0.0-beta.2"
path: ""
category: api
id: "tab"
title: "Tab"
header_sub_title: "Class in module "
doc: "Tab"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/tabs/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


Tab






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/tabs/tab.ts#L9'>
Improve this doc
</a>






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

<p>For most cases, you can give tab a <code>[root]</code> property along with the component you want to load.</p>
<pre><code class="lang-html">&lt;ion-tabs&gt;
 &lt;ion-tab [root]=&quot;chatRoot&quot; tabTitle=&quot;Chat&quot; tabIcon=&quot;chat&quot;&gt;&lt;ion-tab&gt;
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




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2>Input Properties</h2>
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
      <td>root</td>
      <td><code>Page</code></td>
      <td><p> Set the root page for this tab</p>
</td>
    </tr>
    
    <tr>
      <td>rootParams</td>
      <td><code>object</code></td>
      <td><p> Any nav-params you want to pass to the root page of the tab</p>
</td>
    </tr>
    
    <tr>
      <td>tabTitle</td>
      <td><code>string</code></td>
      <td><p> Set the title of this tab</p>
</td>
    </tr>
    
    <tr>
      <td>tabIcon</td>
      <td><code>string</code></td>
      <td><p> Set the icon for this tab</p>
</td>
    </tr>
    
    <tr>
      <td>tabBadge</td>
      <td><code>string</code></td>
      <td><p> Set the badge for this tab</p>
</td>
    </tr>
    
    <tr>
      <td>tabBadgeStyle</td>
      <td><code>string</code></td>
      <td><p> Set the badge color for this tab</p>
</td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>select</td>
      <td><p> Method to call when the current tab is selected</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link --><!-- end content block -->


<!-- end body block -->

