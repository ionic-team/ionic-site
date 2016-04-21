---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "ionic_directives"
title: "IONIC_DIRECTIVES"
header_sub_title: "Ionic API Documentation"
doc: "IONIC_DIRECTIVES"
docType: "let"

---









<h1 class="api-title">
<a class="anchor" name="ionic-directives" href="#ionic-directives"></a>

IONIC_DIRECTIVES






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/config/directives.ts#L144">
Improve this doc
</a>






<p>The core Ionic directives as well as Angular&#39;s <code>CORE_DIRECTIVES</code> and <code>FORM_DIRECTIVES</code> are
avaialbe automatically when you bootstrap your app with the <code>@App</code> decorator. This means
if you are using custom components you no longer need to import <code>IONIC_DIRECTIVES</code> as they
are part of the <code>@App</code>s default directives.</p>
<p>If you would like to <strong>not</strong> have them included by default, you would need to bootstrap
the app differently.</p>
<p>Instead of starting your app like so:</p>
<pre><code class="lang-typescript">@App({
 template: &quot;&lt;ion-nav&gt;&lt;/ion-nav&gt;&quot;
})

export class MyApp{

}
</code></pre>
<p>We would use Angulars default way of bootstrap an app, import <code>IONIC_DIRECTIVES</code> and <code>ionicProviders</code>, then
declare <code>ionicProviders</code> as a dependencey.</p>
<pre><code class="lang-typescript">import {IONIC_DIRECTIVES, ionicProviders} from &#39;ionic-angular&#39;;
import {bootstrap} from &#39;angular2/platform/browser&#39;;

@Component({
    //default selector, and theme.
    directives: [IONIC_DIRECTIVES]
})
class App {}

bootstrap(App,ionicProviders())
</code></pre>
<h4 id="angular">Angular</h4>
<ul>
<li>CORE_DIRECTIVES</li>
<li>FORM_DIRECTIVES</li>
</ul>
<h4 id="ionic">Ionic</h4>
<ul>
<li>Menu</li>
<li>MenuToggle</li>
<li>MenuClose</li>
<li>Badge</li>
<li>Button</li>
<li>Blur</li>
<li>Content</li>
<li>Scroll</li>
<li>InfiniteScroll</li>
<li>InfiniteScrollContent</li>
<li>Refresher</li>
<li>RefresherContent</li>
<li>Img</li>
<li>List</li>
<li>ListHeader</li>
<li>Item</li>
<li>ItemSliding</li>
<li>VirtualScroll</li>
<li>VirtualItem</li>
<li>VirtualHeader</li>
<li>VirtualFooter</li>
<li>Slides</li>
<li>Slide</li>
<li>SlideLazy</li>
<li>Tabs</li>
<li>Tab</li>
<li>Toolbar</li>
<li>ToolbarTitle</li>
<li>ToolbarItem</li>
<li>Icon</li>
<li>Spinner</li>
<li>Searchbar</li>
<li>SearchbarInput</li>
<li>Segment</li>
<li>SegmentButton</li>
<li>Checkbox</li>
<li>RadioGroup</li>
<li>RadioButton</li>
<li>Select</li>
<li>Option</li>
<li>Toggle</li>
<li>TextArea</li>
<li>TextInput</li>
<li>Label</li>
<li>Nav</li>
<li>NavbarTemplate</li>
<li>Navbar</li>
<li>NavPush</li>
<li>NavPop</li>
<li>NavRouter</li>
<li>IdRef</li>
<li>ShowWhen</li>
<li>HideWhen</li>
</ul>

<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

