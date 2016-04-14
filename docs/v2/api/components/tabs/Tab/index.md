---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "tab"
title: "Tab"
header_sub_title: "Ionic API Documentation"
doc: "Tab"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/tabs/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="tab" href="#tab"></a>

Tab






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/tabs/tab.ts#L9">
Improve this doc
</a>






<p>The Tab component, written <code>&lt;ion-tab&gt;</code>, is styled based on the mode and should
be used in conjunction with the <a href="../Tabs/">Tabs</a> component.</p>
<p>Each tab has a separate navigation controller. For more information on using
navigation controllers take a look at the <a href="../../nav/NavController/">NavController API Docs</a>.</p>
<p>See the <a href="../Tabs/">Tabs API Docs</a> for more details on configuring Tabs.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-tab</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>To add a basic tab, you can use the following markup where the <code>root</code> property
is the page you want to load for that tab, <code>tabTitle</code> is the optional text to
display on the tab, and <code>tabIcon</code> is the optional <a href="../../icon/Icon/">icon</a>.</p>
<pre><code class="lang-html">&lt;ion-tabs&gt;
 &lt;ion-tab [root]=&quot;chatRoot&quot; tabTitle=&quot;Chat&quot; tabIcon=&quot;chat&quot;&gt;&lt;ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>Then, in your class you can set <code>chatRoot</code> to an imported class:</p>
<pre><code class="lang-ts">import {ChatPage} from &#39;../chat/chat&#39;;

export class Tabs {
  // here we&#39;ll set the property of chatRoot to
  // the imported class of ChatPage
  chatRoot = ChatPage;

  constructor() {

  }
}
</code></pre>
<p>You can also pass some parameters to the root page of the tab through
<code>rootParams</code>. Below we pass <code>chatParams</code> to the Chat tab:</p>
<pre><code class="lang-html">&lt;ion-tabs&gt;
 &lt;ion-tab [root]=&quot;chatRoot&quot; [rootParams]=&quot;chatParams&quot; tabTitle=&quot;Chat&quot; tabIcon=&quot;chat&quot;&gt;&lt;ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<pre><code class="lang-ts">export class Tabs {
  chatRoot = ChatPage;

  // set some user information on chatParams
  chatParams = {
    user1: &quot;admin&quot;,
    user2: &quot;ionic&quot;
  };

  constructor() {

  }
}
</code></pre>
<p>And in <code>ChatPage</code> you can get the data from <code>NavParams</code>:</p>
<pre><code class="lang-ts">export class ChatPage {
  constructor(navParams: NavParams) {
    console.log(&quot;Passed params&quot;, navParams.data);
  }
}
</code></pre>
<p>Sometimes you may want to call a method instead of navigating to a new
page. You can use the <code>(select)</code> event to call a method on your class when
the tab is selected. Below is an example of presenting a modal from one of
the tabs.</p>
<pre><code class="lang-html">&lt;ion-tabs preloadTabs=&quot;false&quot;&gt;
  &lt;ion-tab (select)=&quot;chat()&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<pre><code class="lang-ts">export class Tabs {
  constructor(nav: NavController) {
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
      <td>select</td>
      <td><p> Method to call when the current tab is selected</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#tabs'>Tabs Component Docs</a>,
<a href='../../tabs/Tabs'>Tabs API Docs</a>,
<a href='../../nav/Nav'>Nav API Docs</a>,
<a href='../../nav/NavController'>NavController API Docs</a><!-- end content block -->


<!-- end body block -->

