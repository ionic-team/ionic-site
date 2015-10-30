---
layout: "v2_fluid/docs_base"
version: "2.0.0"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Nav | slugify}}"
title: "Nav"
header_sub_title: "Class in module "
doc: "Nav"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/nav/nav.ts#L5'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/nav/nav.ts#L5'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  Nav



</h1>





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
<pre><code class="lang-ts">&lt;ion-nav swipe-back-enabled=&quot;false&quot; [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;
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
            Pane 3  +--------------------+                     LoginPage
          Pane 2  +--------------------+ |          Has header, animates into pane 1
        Pane 1  +--------------------+ | |              +--------------------+
                | | Header (Pane 1)  |&lt;-----------------|       Login        |
                +--------------------+ | |              +--------------------+
                | | |                | | |              | Username:          |
                | | |                | | |              | Password:          |
                | | |  Pane 3 is     | | |              |                    |
                | | |  only content  | | |              |                    |
                | | |                |&lt;-----------------|                    |
                | | |                | | |              |                    |
                | | |                | | |              |                    |
                | +------------------|-+ |              |                    |
                | | Footer (Pane 2)--|-|-+              |                    |
                | +------------------|-+                |                    |
                +--------------------+                  +--------------------+
                      &lt;ion-pane&gt;                              &lt;ion-view&gt;

                  Pane 1                    Pane 2                    Pane 3
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

<h3 id="panes">Panes</h3>
<p>NOTE: You don&#39;t have to do anything with panes because Ionic takes care of
animated transitions for you. This is an explanation of how Nav works to
accompany the diagram above.</p>
<p>When you push a new page onto the navigation stack using <a href="../NavController/#push">NavController.push()</a>
or the <a href="../NavPush/">NavPush directive</a>, Nav animates the new page into the
appropriate pane.</p>
<p>Panes are the containers Nav creates to animate views into. They do not have
any content of their own, as they are just a structural reference for where
the various parts of a page (header, footer, content) should animate into.</p>
<p>The easiest scenario is animating between pages with the same structure. If
you have a page with a header and content, and navigate to another page that
also has a header and content, Nav can smoothly animate the incoming page
into the pane the exiting page is leaving. This allows for things like
seamless header animations between pages that both have headers.</p>
<p>But suppose you have a page with a header and content and want to navigate to
a page with no header. Nav creates a new pane with no header that is directly
behind the current pane. It then animates the exiting page out of the current
pane and the new page into the new content-only pane.</p>


<h1 class="class export">Nav <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/nav/nav.ts#L6-L168">ionic/components/nav/nav.ts (line 6)</a>
</p>
<h2>Component</h2>
  <span>selector: ion-nav</span>

  <span>inputs: root</span>



