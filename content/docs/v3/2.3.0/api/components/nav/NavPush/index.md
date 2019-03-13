---
layout: "fluid/docs_base"
version: "2.3.0"
versionHref: "/docs/v3/2.3.0"
path: ""
category: api
id: "navpush"
title: "NavPush"
header_sub_title: "Ionic API Documentation"
doc: "NavPush"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/navigation/www/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="nav-push" href="#nav-push"></a>

NavPush
<h3><code>[navPush]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master//src/components/nav/nav-push.ts#L3">
Improve this doc
</a>






<p>Directive to declaratively push a new page to the current nav
stack.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;button ion-button [navPush]=&quot;pushPage&quot;&gt;&lt;/button&gt;
</code></pre>
<p>To specify parameters you can use array syntax or the <code>navParams</code>
property:</p>
<pre><code class="lang-html">&lt;button ion-button [navPush]=&quot;pushPage&quot; [navParams]=&quot;params&quot;&gt;Go&lt;/button&gt;
</code></pre>
<p>Where <code>pushPage</code> and <code>params</code> are specified in your component,
and <code>pushPage</code> contains a reference to a
component you would like to push:</p>
<pre><code class="lang-ts">import { LoginPage } from &#39;./login&#39;;

@Component({
  template: `&lt;button ion-button [navPush]=&quot;pushPage&quot; [navParams]=&quot;params&quot;&gt;Go&lt;/button&gt;`
})
class MyPage {
  constructor(){
    this.pushPage = LoginPage;
    this.params = { id: 42 };
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
      <td>navParams</td>
      <td><code>any</code></td>
      <td><p> Parameters to pass to the page.</p>
</td>
    </tr>
    
    <tr>
      <td>navPush</td>
      <td><code>Page</code></td>
      <td><p> The Page to push onto the Nav.</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/components#navigation'>Navigation Component Docs</a>,
<a href='../NavPop'>NavPop API Docs</a><!-- end content block -->


<!-- end body block -->

