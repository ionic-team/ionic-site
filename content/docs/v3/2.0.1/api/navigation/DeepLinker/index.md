---
layout: "fluid/docs_base"
version: "2.0.1"
versionHref: "/docs/v3/2.0.1"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master//src/navigation/deep-linker.ts#L10">
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
So for basic example based on the blank starter, a link setup like so:</p>
<pre><code class="lang-ts">imports: [
   IonicModule.forRoot(MyApp, {}, {
     links: [
      { component: HomePage, name: &#39;Home&#39;, segment: &#39;home&#39; }
    ]
  })
 ]
</code></pre>
<p>Since components/pages can be loaded anywhere in the app, DeepLinker lets you define their URL segment but
doesn&#39;t require a full URL route.</p>
<p>So, at any point a Page becomes the active page, we just append the URL segment.</p>
<h3 id="dynamic-links">Dynamic Links</h3>
<p>Since passing data around is common practice in an app, we can reflect that in our app&#39;s URL by
using the common <code>:param</code> syntax:</p>
<pre><code class="lang-ts">links: [
  { component: HomePage, name: &#39;Home&#39;, segment: &#39;home&#39; },
  { component: DetailPage, name: &#39;Detail&#39;, segment: &#39;detail/:userId&#39; }
]
</code></pre>
<p>In this case, when we <code>push</code> to a new instance of <code>DetailPage</code>, the <code>user</code> field of
the data we pass to <code>push</code> will be put into the URL.</p>
<p>The property needs to be something that can be serialized into a string by the DeepLinker.</p>
<p>So in a typical <code>navCtrl.push()</code> scenario, we&#39;d do something like this:</p>
<pre><code class="lang-ts">pushPage(userInfo) {
  this.navCtrl.push(DetailPage, {
    &#39;userId&#39;: userInfo.id
  })
}
</code></pre>
<h3 id="default-history">Default History</h3>
<p>While pages can be navigated to anywhere and loaded at any time, what happens when an app is launched from a deeplink while cold or suspended?</p>
<p>By default, the page would be navigated to in the root NavController, but often the history stack is a UX design issue that you&#39;ll
want to tweak as you iterate on the UX of your app.</p>
<p>An example here is the App Store app on iOS. If you navigate to an app link to the App Store app, the app decides to show
a single page for the app detail, and no back button. In constrast, opening an instagram link shows a back button that
goes back to the profile page of the user. The point is: this back button experience is totally up to you as the designer
of the app experience.</p>
<p>This is where <code>defaultHistory</code> comes in.</p>
<p>The <code>defaultHistory</code> property takes an array of components to create the initial history stack if none exists.</p>
<pre><code class="lang-ts">links: [
  { component: HomePage, name: &#39;Home&#39;, segment: &#39;home&#39; },
  { component: DetailPage, name: &#39;Detail&#39;, segment: &#39;detail/:userId&#39;, defaultHistory: [HomePage] }
]
</code></pre>
<p>In this example above, if we launch the app at myapp.com/detail/4, then the user will see the DetailPage and then the back button will
go to the HomePage.</p>




<!-- @property tags -->



<!-- instance methods on the class -->




<!-- related link --><!-- end content block -->


<!-- end body block -->

