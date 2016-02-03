---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.42"
versionHref: "/docs/v2/2.0.0-alpha.42"
path: ""
category: api
id: "navpush"
title: "NavPush"
header_sub_title: "Class in module "
doc: "NavPush"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/nav-push-pop/"
angular_controller: APIDemoCtrl 
---




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/nav/nav-push.ts#L2'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/nav/nav-push.ts#L2'>
Improve this doc
</a>
</div>





<h1 class="api-title">


NavPush






</h1>






<p>Directive for declaratively linking to a new page instead of using
<a href="../NavController/#push">NavController.push()</a>. Similar to ui-router&#39;s <code>ui-sref</code>.</p>
<p>Basic usage:</p>
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


<h2>Directive</h2>
<h3>selector: <code>[navPush]</code></h3>
<!-- @usage tag -->


<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="onClick"></div>

<h3>
<code>onClick()</code>
  

</h3>










<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#navigation'>Navigation Component Docs</a>
<a href='../NavPop'>NavPop API Docs</a><!-- end content block -->


<!-- end body block -->

