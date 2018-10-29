---
layout: "fluid/docs_base"
version: "3.7.0"
versionHref: "/docs/3.7.0"
path: ""
category: api
id: "nav"
title: "Nav"
header_sub_title: "Ionic API Documentation"
doc: "Nav"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/navigation/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="nav" href="#nav"></a>

Nav
<h3><code>ion-nav</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/nav/nav.ts#L14">
Improve this doc
</a>






<p><code>ion-nav</code> is the declarative component for a <a href="../../../navigation/NavController/">NavController</a>.</p>
<p>For more information on using nav controllers like Nav or <a href="../../Tabs/Tab/">Tab</a>,
take a look at the <a href="../../../navigation/NavController/">NavController API Docs</a>.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<p>You must set a root page to be loaded initially by any Nav you create, using
the &#39;root&#39; property:</p>
<pre><code class="lang-ts">import { Component } from &#39;@angular/core&#39;;
import { GettingStartedPage } from &#39;./getting-started&#39;;

@Component({
  template: `&lt;ion-nav [root]=&quot;root&quot;&gt;&lt;/ion-nav&gt;`
})
class MyApp {
  root = GettingStartedPage;

  constructor(){
  }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members">Instance Members</a></h2>

<div id="getSecondaryIdentifier"></div>

<h3>
<a class="anchor" name="getSecondaryIdentifier" href="#getSecondaryIdentifier">
<code>getSecondaryIdentifier()</code>


</a>
</h3>











<div id="getType"></div>

<h3>
<a class="anchor" name="getType" href="#getType">
<code>getType()</code>


</a>
</h3>











<div id="goToRoot"></div>

<h3>
<a class="anchor" name="goToRoot" href="#goToRoot">
<code>goToRoot()</code>


</a>
</h3>











<div id="initPane"></div>

<h3>
<a class="anchor" name="initPane" href="#initPane">
<code>initPane()</code>


</a>
</h3>











<div id="ngAfterViewInit"></div>

<h3>
<a class="anchor" name="ngAfterViewInit" href="#ngAfterViewInit">
<code>ngAfterViewInit()</code>


</a>
</h3>











<div id="paneChanged"></div>

<h3>
<a class="anchor" name="paneChanged" href="#paneChanged">
<code>paneChanged()</code>


</a>
</h3>










<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties">Input Properties</a></h2>
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
      <td>name</td>
      <td><code>string</code></td>
      <td><p> a unique name for the nav element</p>
</td>
    </tr>

    <tr>
      <td>root</td>
      <td><code>Page</code></td>
      <td><p> The Page component to load as the root page within this nav.</p>
</td>
    </tr>

    <tr>
      <td>rootParams</td>
      <td><code>object</code></td>
      <td><p> Any nav-params to pass to the root page of this nav.</p>
</td>
    </tr>

  </tbody>
</table>




<!-- related link -->

<h2><a class="anchor" name="related" href="#related">Related</a></h2>

<a href="/docs/components#navigation">Navigation Component Docs</a><!-- end content block -->


<!-- end body block -->

