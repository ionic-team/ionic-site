---
layout: "fluid/docs_base"
version: "3.2.0"
versionHref: "/docs/v3/3.2.0"
path: ""
category: api
id: "ionicpage"
title: "IonicPage"
header_sub_title: "Ionic API Documentation"
doc: "IonicPage"
docType: "function"

---









<h1 class="api-title">
<a class="anchor" name="ionic-page" href="#ionic-page"></a>

IonicPage





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master/src/navigation/ionic-page.ts#L9">
Improve this doc
</a>






<p>The Ionic Page handles registering and displaying specific pages based on URLs. It&#39;s used
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
</code></pre>
<p>When navigating to this page as the first page in the app, the URL will look something like:</p>
<pre><code>http://localhost:8101/#/some-path
</code></pre>
<p>However, navigating to the page will still use the <code>name</code> like the previous examples do.</p>
<h3 id="dynamic-links">Dynamic Links</h3>
<p>The <code>segment</code> property is useful for creating dynamic links. Sometimes the URL isn&#39;t known ahead
of time, so it can be passed as a variable.</p>
<p>Since passing data around is common practice in an app, it can be reflected in the app&#39;s URL by
using the <code>:param</code> syntax. For example, set the <code>segment</code> in the <code>@IonicPage</code> decorator:</p>
<pre><code class="lang-ts">@IonicPage({
  name: &#39;detail-page&#39;,
  segment: &#39;detail/:id&#39;
})
</code></pre>
<p>In this case, when we <code>push</code> to a new instance of <code>&#39;detail-page&#39;</code>, the value of <code>id</code> will
in the <code>detailInfo</code> data being passed to <code>push</code> will replace <code>:id</code> in the URL.</p>
<p>Important: The property needs to be something that can be converted into a string, objects
are not supported.</p>
<p>For example, to push the <code>&#39;detail-page&#39;</code> in the <code>ListPage</code> component, the following code could
be used:</p>
<pre><code class="lang-ts">@IonicPage({
  name: &#39;list&#39;
})
export class ListPage {
  constructor(public navCtrl: NavController) {}

  pushPage(detailInfo) {
    // Push an `id` to the `&#39;detail-page&#39;`
    this.navCtrl.push(&#39;detail-page&#39;, {
      &#39;id&#39;: detailInfo.id
    })
  }
}
</code></pre>
<p>If the value of <code>detailInfo.id</code> is <code>12</code>, for example, the URL would end up looking like this:</p>
<pre><code>http://localhost:8101/#/list/detail/12
</code></pre>
<p>Since this <code>id</code> will be used to pull in the data of the specific detail page, it&#39;s Important
that the <code>id</code> is unique.</p>
<p>Note: Even though the <code>name</code> is <code>detail-page</code>, the <code>segment</code> uses <code>detail/:id</code>, and the URL
will use the <code>segment</code>.</p>
<h3 id="default-history">Default History</h3>
<p>Pages can be navigated to using deep links from anywhere in the app, but sometimes the app is
launched from a URL and the page needs to have the same history as if it were navigated to from
inside of the app.</p>
<p>By default, the page would be navigated to as the first page in the stack with no prior history.
A good example is the App Store on iOS. Clicking on a URL to an application in the App Store will
load the details of the application with no back button, as if it were the first page ever viewed.</p>
<p>The default history of any page can be set in the <code>defaultHistory</code> property. This history will only
be used if the history doesn&#39;t already exist, meaning if you navigate to the page the history will
be the pages that were navigated from.</p>
<p>The <code>defaultHistory</code> property takes an array of strings. For example, setting the history of the
detail page to the list page where the <code>name</code> is <code>list</code>:</p>
<pre><code class="lang-ts">@IonicPage({
  name: &#39;detail-page&#39;,
  segment: &#39;detail/:id&#39;,
  defaultHistory: [&#39;list&#39;]
})
</code></pre>
<p>In this example, if the app is launched at <code>http://localhost:8101/#/detail/my-detail</code> the displayed page
will be the <code>&#39;detail-page&#39;</code> with an id of <code>my-detail</code> and it will show a back button that goes back to
the <code>&#39;list&#39;</code> page.</p>
<p>An example of an application with a set history stack is the Instagram application. Opening a link
to an image on Instagram will show the details for that image with a back button to the user&#39;s profile
page. There is no &quot;right&quot; way of setting the history for a page, it is up to the application.</p>
<h3 id="priority">Priority</h3>
<p>The <code>priority</code> property is only used during preloading. By default, preloading is turned off so setting
this property would do nothing. Preloading eagerly loads all deep links after the application boots
instead of on demand as needed. To enable preloading, set <code>preloadModules</code> in the main application module
config to <code>true</code>:</p>
<pre><code class="lang-ts">@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ]
})
export class AppModule { }
</code></pre>
<p>If preloading is turned on, it will load the modules based on the value of <code>priority</code>. The following
values are possible for <code>priority</code>: <code>&quot;high&quot;</code>, <code>&quot;low&quot;</code>, and <code>&quot;off&quot;</code>. When there is no <code>priority</code>, it
will be set to <code>&quot;low&quot;</code>.</p>
<p>All deep links with their priority set to <code>&quot;high&quot;</code> will be loaded first. Upon completion of loading the
<code>&quot;high&quot;</code> priority modules, all deep links with a priority of <code>&quot;low&quot;</code> (or no priority) will be loaded. If
the priority is set to <code>&quot;off&quot;</code> the link will not be preloaded. Setting the <code>priority</code> is as simple as
passing it to the <code>@IonicPage</code> decorator:</p>
<pre><code class="lang-ts">@IonicPage({
  name: &#39;my-page&#39;,
  priority: &#39;high&#39;
})
</code></pre>
<p>We recommend setting the <code>priority</code> to <code>&quot;high&quot;</code> on the pages that will be viewed first when launching
the application.</p>




<!-- @property tags -->



<!-- instance methods on the class -->




<!-- related link --><!-- end content block -->


<!-- end body block -->

