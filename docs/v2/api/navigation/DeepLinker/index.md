---
layout: "v2_fluid/docs_base"
version: "2.0.0-rc.2"
versionHref: "/docs/v2"
path: ""
category: api
id: "deeplinker"
title: "DeepLinker"
header_sub_title: "Ionic API Documentation"
doc: "DeepLinker"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="deep-linker" href="#deep-linker"></a>

DeepLinker





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//Users/briandennis/Ionic/ionic/src/navigation/deep-linker.ts#L10">
Improve this doc
</a>






<p>DeepLinker handles registering and displaying specific views based on URLs. It&#39;s used
underneath NavController so you&#39;ll never have to interact with it directly. When a new
view is push&#39;ed with NavController, the URL is updated to match the path back to this
page.</p>
<p>Unlike traditional web apps, URLs don&#39;t dictate navigation in Ionic apps.
Instead, URLs help us link to specific pieces of content as a breadcrumb.
We keep the current URL updated as we navigate, but we use the NavController&#39;s
push and pop, or navPush to move around. This makes it much easier
to handle the kinds of complicated nested navigation native apps are known for.</p>
<p>We refer to our URL system as a Deep Link system instead of a Router to encourage
Ionic developers to think of URLs as a breadcrumb rather than as the source of
truth in navigation. This encourages flexible navigation design and happy apps all
over the world.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>DeepLinker can be used in the <code>IonicModule.forRoot</code> method, as the third parameter</p>
<pre><code class="lang-ts">imports: [
   IonicModule.forRoot(MyApp, {}, {
     links: []
  })
 ]
</code></pre>
<p>DeepLinker implements <code>DeepLinkerConfig</code>, which is an object with an array of links.
So for basic example based on the blank starer, a link setup like so:</p>
<pre><code class="lang-ts">imports: [
   IonicModule.forRoot(MyApp, {}, {
     links: [
      { component: HomePage, name: &#39;Home&#39;, segment: &#39;home&#39; }
    ]
  })
 ]
</code></pre>
<p>This Feels pretty familiar to how Angular sets up routes, but has some fundamental differences.
Since components could be loaded anywhere in the app, DeepLinker lets you define their URL segment.
So at any point, when a Component becomes the active view, we just append the URL segment.</p>
<h3 id="dynamic-links">Dynamic Links</h3>
<p>Since passing data around is common practice in an app, we can reflect that in our app&#39;s URL in a similar manner to Angular&#39;s router.</p>
<pre><code class="lang-ts">links: [
  { component: HomePage, name: &#39;Home&#39;, segment: &#39;home&#39; },
  { component: DetailPage, name: &#39;Detail&#39;, segment: &#39;detail/:user&#39; }
]
</code></pre>
<p>This approach of using <code>:param</code> has been around in previous routing solutions.
All this means is that when we push a new component on to the stack, in the navParams, there should be a property of <code>user</code>.
The property needs to be something that can be serialized by the DeepLinker. 
So setting its value to be that of a string or number is suggested.</p>
<p>So in a typical <code>navCtrl.push()</code> scenario, we&#39;d do something like this:</p>
<pre><code class="lang-ts">pushPage(userInfo) {
  this.navCtrl.push(DetailPage, {
  &#39;user&#39;: userInfo
  })
}
</code></pre>
<h3 id="default-history">Default History</h3>
<p> In some cases when a page loads, you might be sent to a component that has it&#39;s own information, but not back view.
 This situation is common when loading a page from a Push Notification.
 If you want a component to have a default history when none is present, you can use the <code>defaultHistory</code> property</p>
<p>The <code>defaultHistory</code> property takes an array of components to create the history stack if none exist.</p>
<pre><code class="lang-ts">links: [
  { component: HomePage, name: &#39;Home&#39;, segment: &#39;home&#39; },
  { component: DetailPage, name: &#39;Detail&#39;, segment: &#39;detail/:user&#39;, defaultHistory: [HomePage] }
]
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->




<!-- related link --><!-- end content block -->


<!-- end body block -->

