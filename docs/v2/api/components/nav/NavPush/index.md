---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "navpush"
title: "NavPush"
header_sub_title: "Class in module "
doc: "NavPush"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/navigation/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">


NavPush






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/nav/nav-push.ts#L2'>
Improve this doc
</a>






<p>Directive for declaratively linking to a new page instead of using
<a href='../NavController/#push'>NavController.push</a>. Similar to ui-router&#39;s <code>ui-sref</code>.</p>


<h2>Directive</h2>
<h3>selector: <code>[navPush]</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;button [navPush]=&quot;pushPage&quot;&gt;&lt;/button&gt;
</code></pre>
<p>To specify parameters you can use array syntax or the <code>nav-params</code> property:</p>
<pre><code class="lang-html">&lt;button [navPush]=&quot;pushPage&quot; [navParams]=&quot;params&quot;&gt;&lt;/button&gt;
</code></pre>
<p>Where <code>pushPage</code> and <code>params</code> are specified in your component, and <code>pushPage</code>
contains a reference to a <a href="../../../config/Page/">@Page component</a>:</p>
<pre><code class="lang-ts">import {LoginPage} from &#39;login&#39;;
@Page({
  template: `&lt;button [navPush]=&quot;pushPage&quot; [navParams]=&quot;params&quot;&gt;&lt;/button&gt;`
})
class MyPage {
  constructor(){
    this.pushPage = LoginPage;
    this.params = { id: 42 };
  }
}
</code></pre>
<h3 id="alternate-syntax">Alternate syntax</h3>
<p>You can also use syntax similar to Angular2&#39;s router, passing an array to
NavPush:</p>
<pre><code class="lang-html">&lt;button [navPush]=&quot;[pushPage, params]&quot;&gt;&lt;/button&gt;
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2>Instance Methods</h2>

<div id="registry"></div>

<h3>
<code>registry()</code>
  

</h3>











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
      <td>navPush</td>
      <td><code>page</code></td>
      <td><p> the page you want to push</p>
</td>
    </tr>
    
    <tr>
      <td>navParams</td>
      <td><code>any</code></td>
      <td><p> Any parameters you want to pass along</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#navigation'>Navigation Component Docs</a>
<a href='../NavPop'>NavPop API Docs</a><!-- end content block -->


<!-- end body block -->

