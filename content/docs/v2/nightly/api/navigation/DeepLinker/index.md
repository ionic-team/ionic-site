---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master/src/navigation/deep-linker.ts#L12">
Improve this doc
</a>






<p>Deep linker handles registering and displaying specific pages based on URLs. It&#39;s used
underneath <code>NavController</code> so it will never have to be interacted with directly. When a new
page is pushed with <code>NavController</code>, the URL is updated to match the path to this page.</p>
<p>Unlike traditional web apps, URLs don&#39;t dictate navigation in Ionic apps.
Instead, URLs help us link to specific pieces of content as a breadcrumb.
The current URL gets updated as we navigate, but we use the <code>NavController</code>
push and pop, or <code>NavPush</code> and <code>NavPop</code> to move around. This makes it much easier
to handle complicated nested navigation.</p>
<p>We refer to our URL system as a deep link system instead of a router to encourage
Ionic developers to think of URLs as a breadcrumb rather than as the source of
truth in navigation. This encourages flexible navigation design and happy apps all
over the world.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>The first step to setting up deep links is to add the page that should be
a deep link in the <code>IonicPageModule.forChild</code> import of the page&#39;s module.
For our examples, this will be <code>MyPage</code>:</p>
<pre><code class="lang-ts">@NgModule({
  declarations: [
    MyPage
  ],
  imports: [
    IonicPageModule.forChild(MyPage)
  ],
  entryComponents: [
    MyPage
  ]
})
export class MyPageModule {}
</code></pre>
<p>Then, add the <code>@IonicPage</code> decorator to the component. The most simple usage is adding an
empty decorator:</p>
<pre><code class="lang-ts">@IonicPage()
@Component({
  templateUrl: &#39;main.html&#39;
})
export class MyPage {}
</code></pre>
<p>This will automatically create a link to the <code>MyPage</code> component using the same name as the class,
<code>name</code>: <code>&#39;MyPage&#39;</code>. The page can now be navigated to by using this name. For example:</p>
<pre><code class="lang-ts">@Component({
  templateUrl: &#39;another-page.html&#39;
})
export class AnotherPage {
  constructor(public navCtrl: NavController) {}

  goToMyPage() {
    // go to the MyPage component
    this.navCtrl.push(&#39;MyPage&#39;);
  }
}
</code></pre>
<p>The <code>@IonicPage</code> decorator accepts a <code>DeepLinkMetadataType</code> object. This object accepts
the following properties: <code>name</code>, <code>segment</code>, <code>defaultHistory</code>, and <code>priority</code>. All of them
are optional but can be used to create complex navigation links.</p>
<h3 id="changing-name">Changing Name</h3>
<p>As mentioned previously, the <code>name</code> property will be set to the class name if it isn&#39;t provided.
Changing the name of the link is extremely simple. To change the name used to link to the
component, simply pass it in the decorator like so:</p>
<pre><code class="lang-ts">@IonicPage({
  name: &#39;my-page&#39;
})
</code></pre>
<p>This will create a link to the <code>MyPage</code> component using the name <code>&#39;my-page&#39;</code>. Similar to the previous
example, the page can be navigated to by using the name:</p>
<pre><code class="lang-ts">goToMyPage() {
  // go to the MyPage component
  this.navCtrl.push(&#39;my-page&#39;);
}
</code></pre>
<h3 id="setting-url-path">Setting URL Path</h3>
<p>The <code>segment</code> property is used to set the URL to the page. If this property isn&#39;t provided, the
<code>segment</code> will use the value of <code>name</code>. Since components can be loaded anywhere in the app, the
<code>segment</code> doesn&#39;t require a full URL path. When a page becomes the active page, the <code>segment</code> is
appended to the URL.</p>
<p>The <code>segment</code> can be changed to anything and doesn&#39;t have to match the <code>name</code>. For example, passing
a value for <code>name</code> and <code>segment</code>:</p>
<pre><code class="lang-ts">@IonicPage({
  name: &#39;my-page&#39;,
  segment: &#39;some-path&#39;
})

When navigating to this page as the first page in the app, the URL will look something like:
</code></pre>
<p><a href="http://localhost:8101/#/some-path">http://localhost:8101/#/some-path</a>
```</p>
<p>However, navigating to the page will still use the <code>name</code> like the previous examples do.</p>
<h3 id="dynamic-links">Dynamic Links</h3>
<p>The <code>segment</code> property is useful for creating dynamic links. Sometimes the URL isn&#39;t known ahead
of time, so it can be passed as a variable.</p>
<p>Since passing data around is common practice in an app, it can be reflected in the app&#39;s URL by
using the <code>:param</code> syntax. For example, set the <code>segment</code> in the <code>@IonicPage</code> decorator:</p>
<p>```ts</p>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="getComponentFromName"></div>

<h3>
<a class="anchor" name="getComponentFromName" href="#getComponentFromName"></a>
<code>getComponentFromName()</code>
  

</h3>











<div id="getNavLinkComponent"></div>

<h3>
<a class="anchor" name="getNavLinkComponent" href="#getNavLinkComponent"></a>
<code>getNavLinkComponent()</code>
  

</h3>














<!-- related link --><!-- end content block -->


<!-- end body block -->

