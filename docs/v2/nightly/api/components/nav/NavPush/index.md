---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "{{NavPush | slugify}}"
title: "NavPush"
header_sub_title: "Class in module "
doc: "NavPush"
docType: "class"
---




<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/nav/nav-push.ts#L2'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/nav/nav-push.ts#L2'>
    Improve this doc
  </a>

  <!-- TODO(drewrygh, perrygovier): render this block in the correct location, markup identical to component docs -->

</div>




<h1 class="api-title">


NavPush






</h1>






<h2>Description</h2>

<p>Directive for declaratively linking to a new page instead of using
<a href="../NavController/#push">NavController.push()</a>. Similar to ui-router&#39;s <code>ui-sref</code>.</p>
<p>Basic usage:</p>
<pre><code class="lang-html">&lt;button [nav-push]=&quot;pushPage&quot;&gt;&lt;/button&gt;
</code></pre>
<p>To specify parameters you can use array syntax or the <code>nav-params</code> property:</p>
<pre><code class="lang-html">&lt;button [nav-push]=&quot;pushPage&quot; [nav-params]=&quot;params&quot;&gt;&lt;/button&gt;
</code></pre>
<p>Where <code>pushPage</code> and <code>params</code> are specified in your component, and <code>pushPage</code>
contains a reference to a <a href="../../../config/Page/">@Page component</a>:</p>
<pre><code class="lang-ts">import {LoginPage} from &#39;login&#39;;
@Page({
  template: `&lt;button [nav-push]=&quot;pushPage&quot; [nav-params]=&quot;params&quot;&gt;&lt;/button&gt;`
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
<pre><code class="lang-html">&lt;button [nav-push]=&quot;[pushPage, params]&quot;&gt;&lt;/button&gt;
</code></pre>


<h2>Directive</h2>
<h3>selector: <code>[nav-push]</code></h3>
<h2>Usage</h2>





<h2>Methods</h2>

<div id="onClick"></div>

<h3>
<code>onClick()</code>

</h3>










<!-- end content block -->


<!-- end body block -->


