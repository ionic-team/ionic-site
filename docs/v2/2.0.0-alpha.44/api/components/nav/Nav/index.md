---
layout: "v2_fluid/docs_base"
version: "2.0.0-alpha.44"
versionHref: "/docs/v2/2.0.0-alpha.44"
path: ""
category: api
id: "nav"
title: "Nav"
header_sub_title: "Class in module "
doc: "Nav"
docType: "class"

---




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/nav/nav.ts#L7'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/nav/nav.ts#L7'>
Improve this doc
</a>
</div>





<h1 class="api-title">


Nav






</h1>






<!-- description -->
<h2>Description</h2>

<p><em>For a quick walkthrough of navigation in Ionic, check out the
<a href="../../../../components/#navigation">Navigation section</a> of the Component
docs.</em></p>
<p>Nav is a basic navigation controller component.  As a subclass of NavController
you use it to navigate to pages in your app and manipulate the navigation stack.
Nav automatically animates transitions between pages for you.</p>
<p>For more information on using navigation controllers like Nav or <a href="../../Tabs/Tab/">Tab</a>,
take a look at the <a href="../NavController/">NavController API reference</a>.</p>
<p>You must set a root page (where page is any <a href="../../config/Page/">@Page</a>
component) to be loaded initially by any Nav you create, using
the &#39;root&#39; property:</p>
<pre><code class="lang-ts">import {GettingStartedPage} from &#39;getting-started&#39;;
@App({
  template: `&lt;ion-nav [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;`
})
class MyApp {
  constructor(){
    this.rootPage = GettingStartedPage;
  }
}
</code></pre>
<p><h2 id="back_navigation">Back navigation</h2>
If a <a href="../NavController/#creating_pages">page</a> you navigate to has a <a href="../NavBar/">NavBar</a>,
Nav will automatically add a back button to it if there is a page
before the one you are navigating to in the navigation stack.</p>
<p>Additionally, specifying the <code>swipe-back-enabled</code> property will allow you to
swipe to go back:</p>
<pre><code class="lang-html">&lt;ion-nav swipe-back-enabled=&quot;false&quot; [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;
</code></pre>
<p>Here is a diagram of how Nav animates smoothly between pages:</p>
<div class="highlight less-margin">
  <pre>
                          +-------+
                          |  App  |
                          +---+---+
                          &lt;ion-app&gt;
                              |
                 +------------+-------------+
                 |   Ionic Nav Controller   |
                 +------------+-------------+
                          &lt;ion-nav&gt;
                              |
                              |
            Page 3  +--------------------+                     LoginPage
          Page 2  +--------------------+ |
        Page 1  +--------------------+ | |              +--------------------+
                | | Header           |&lt;-----------------|       Login        |
                +--------------------+ | |              +--------------------+
                | | |                | | |              | Username:          |
                | | |                | | |              | Password:          |
                | | |  Page 3 is     | | |              |                    |
                | | |  only content  | | |              |                    |
                | | |                |&lt;-----------------|                    |
                | | |                | | |              |                    |
                | | |                | | |              |                    |
                | +------------------|-+ |              |                    |
                | | Footer           |-|-+              |                    |
                | +------------------|-+                |                    |
                +--------------------+                  +--------------------+

          +--------------------+    +--------------------+    +--------------------+
          | Header             |    | Content            |    | Content            |
          +--------------------+    |                    |    |                    |
          | Content            |    |                    |    |                    |
          |                    |    |                    |    |                    |
          |                    |    |                    |    |                    |
          |                    |    |                    |    |                    |
          |                    |    |                    |    |                    |
          |                    |    |                    |    |                    |
          |                    |    |                    |    |                    |
          |                    |    |                    |    |                    |
          |                    |    +--------------------+    |                    |
          |                    |    | Footer             |    |                    |
          +--------------------+    +--------------------+    +--------------------+

  </pre>
</div>

<h2>Component</h2>
<h3>selector: <code>ion-nav</code></h3>
<!-- @usage tag -->


<!-- @property tags -->


<!-- methods on the class --><!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#navigation'>Navigation Component Docs</a><!-- end content block -->


<!-- end body block -->

