---
layout: "fluid/docs_base"
version: "3.0.0"
versionHref: "/docs/v3/3.0.0"
path: ""
category: api
id: "tab"
title: "Tab"
header_sub_title: "Ionic API Documentation"
doc: "Tab"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/tabs/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="tab" href="#tab"></a>

Tab
<h3><code>ion-tab</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/tabs/tab.ts#L15">
Improve this doc
</a>






<p>The Tab component, written <code>&lt;ion-tab&gt;</code>, is styled based on the mode and should
be used in conjunction with the <a href="../Tabs/">Tabs</a> component.</p>
<p>Each <code>ion-tab</code> is a declarative component for a <a href="../../../navigation/NavController/">NavController</a>.
Basically, each tab is a <code>NavController</code>. For more information on using
navigation controllers take a look at the <a href="../../../navigation/NavController/">NavController API Docs</a>.</p>
<p>See the <a href="../Tabs/">Tabs API Docs</a> for more details on configuring Tabs.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>To add a basic tab, you can use the following markup where the <code>root</code> property
is the page you want to load for that tab, <code>tabTitle</code> is the optional text to
display on the tab, and <code>tabIcon</code> is the optional <a href="../../icon/Icon/">icon</a>.</p>
<pre><code class="lang-html">&lt;ion-tabs&gt;
 &lt;ion-tab [root]=&quot;chatRoot&quot; tabTitle=&quot;Chat&quot; tabIcon=&quot;chat&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>Then, in your class you can set <code>chatRoot</code> to an imported class:</p>
<pre><code class="lang-ts">import { ChatPage } from &#39;../chat/chat&#39;;

export class Tabs {
  // here we&#39;ll set the property of chatRoot to
  // the imported class of ChatPage
  chatRoot = ChatPage;

  constructor() {

  }
}
</code></pre>
<p>You can also pass some parameters to the root page of the tab through
<code>rootParams</code>. Below we pass <code>chatParams</code> to the Chat tab:</p>
<pre><code class="lang-html">&lt;ion-tabs&gt;
 &lt;ion-tab [root]=&quot;chatRoot&quot; [rootParams]=&quot;chatParams&quot; tabTitle=&quot;Chat&quot; tabIcon=&quot;chat&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<pre><code class="lang-ts">export class Tabs {
  chatRoot = ChatPage;

  // set some user information on chatParams
  chatParams = {
    user1: &quot;admin&quot;,
    user2: &quot;ionic&quot;
  };

  constructor() {

  }
}
</code></pre>
<p>And in <code>ChatPage</code> you can get the data from <code>NavParams</code>:</p>
<pre><code class="lang-ts">export class ChatPage {
  constructor(navParams: NavParams) {
    console.log(&quot;Passed params&quot;, navParams.data);
  }
}
</code></pre>
<p>Sometimes you may want to call a method instead of navigating to a new
page. You can use the <code>(ionSelect)</code> event to call a method on your class when
the tab is selected. Below is an example of presenting a modal from one of
the tabs.</p>
<pre><code class="lang-html">&lt;ion-tabs&gt;
  &lt;ion-tab (ionSelect)=&quot;chat()&quot; tabTitle=&quot;Show Modal&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<pre><code class="lang-ts">export class Tabs {
  constructor(public modalCtrl: ModalController) {

  }

  chat() {
    let modal = this.modalCtrl.create(ChatPage);
    modal.present();
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
      <td>enabled</td>
      <td><code>boolean</code></td>
      <td><p> If true, enable the tab. If false,
the user cannot interact with this element.
Default: <code>true</code>.</p>
</td>
    </tr>

    <tr>
      <td>root</td>
      <td><code>Page</code></td>
      <td><p> Set the root page for this tab.</p>
</td>
    </tr>

    <tr>
      <td>rootParams</td>
      <td><code>object</code></td>
      <td><p> Any nav-params to pass to the root page of this tab.</p>
</td>
    </tr>

    <tr>
      <td>show</td>
      <td><code>boolean</code></td>
      <td><p> If true, the tab button is visible within the
tabbar. Default: <code>true</code>.</p>
</td>
    </tr>

    <tr>
      <td>swipeBackEnabled</td>
      <td><code>boolean</code></td>
      <td><p> If true, swipe to go back is enabled.</p>
</td>
    </tr>

    <tr>
      <td>tabBadge</td>
      <td><code>string</code></td>
      <td><p> The badge for the tab button.</p>
</td>
    </tr>

    <tr>
      <td>tabBadgeStyle</td>
      <td><code>string</code></td>
      <td><p> The badge color for the tab button.</p>
</td>
    </tr>

    <tr>
      <td>tabIcon</td>
      <td><code>string</code></td>
      <td><p> The icon for the tab button.</p>
</td>
    </tr>

    <tr>
      <td>tabTitle</td>
      <td><code>string</code></td>
      <td><p> The title of the tab button.</p>
</td>
    </tr>

    <tr>
      <td>tabUrlPath</td>
      <td><code>string</code></td>
      <td><p> The URL path name to represent this tab within the URL.</p>
</td>
    </tr>

    <tr>
      <td>tabsHideOnSubPages</td>
      <td><code>boolean</code></td>
      <td><p> If true, hide the tabs on child pages.</p>
</td>
    </tr>

  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>ionSelect</td>
      <td><p> Emitted when the current tab is selected.</p>
</td>
    </tr>

  </tbody>
</table>


  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">



      <a ng-init="setSassPlatform('ios')" ng-class="{ active: active === 'ios' }" ng-click="setSassPlatform('ios')" >iOS</a>



      <a ng-class="{ active: active === 'md' }" ng-click="setSassPlatform('md')">Material Design</a>



      <a ng-class="{ active: active === 'wp' }" ng-click="setSassPlatform('wp')">Windows Platform</a>



  </div>



  <table ng-show="active === 'ios'" id="sass-ios" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td><code>$tabs-ios-border</code></td>

          <td><code>$hairlines-width solid $tabs-ios-border-color</code></td>

        <td><p>Border on the tabbar (border-top when [tabsPlacement=bottom] and border-bottom when [tabsPlacement=top])</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-ios-tab-padding</code></td>

          <td><code>0 2px</code></td>

        <td><p>Padding on the tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-ios-tab-max-width</code></td>

          <td><code>240px</code></td>

        <td><p>Max width of the tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-ios-tab-min-height</code></td>

          <td><code>49px</code></td>

        <td><p>Minimum height of the tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-ios-tab-text-color</code></td>

          <td><code>$tabs-ios-tab-color-inactive</code></td>

        <td><p>Text color of the inactive tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-ios-tab-text-color-active</code></td>

          <td><code>$tabs-ios-tab-color-active</code></td>

        <td><p>Text color of the active tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-ios-tab-icon-color</code></td>

          <td><code>$tabs-ios-tab-color-inactive</code></td>

        <td><p>Icon color of the inactive tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-ios-tab-icon-color-active</code></td>

          <td><code>$tabs-ios-tab-color-active</code></td>

        <td><p>Icon color of the active tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-ios-tab-font-size</code></td>

          <td><code>10px</code></td>

        <td><p>Font size of the tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-ios-tab-icon-size</code></td>

          <td><code>30px</code></td>

        <td><p>Size of the tab button icon</p>
</td>
      </tr>

    </tbody>
  </table>

  <table ng-show="active === 'md'" id="sass-md" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td><code>$tabs-md-tab-padding</code></td>

          <td><code>0</code></td>

        <td><p>Padding on the tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-min-height</code></td>

          <td><code>5.6rem</code></td>

        <td><p>Minimum height of the tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-font-size</code></td>

          <td><code>1.2rem</code></td>

        <td><p>Font size of the inactive tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-font-weight</code></td>

          <td><code>normal</code></td>

        <td><p>Font weight of the tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-opacity</code></td>

          <td><code>.7</code></td>

        <td><p>Opacity of the inactive tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-text-color</code></td>

          <td><code>rgba($tabs-md-tab-color-inactive, $tabs-md-tab-opacity)</code></td>

        <td><p>Text color of the inactive tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-text-color-active</code></td>

          <td><code>$tabs-md-tab-color-active</code></td>

        <td><p>Text color of the active tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-icon-color</code></td>

          <td><code>rgba($tabs-md-tab-color-inactive, $tabs-md-tab-opacity)</code></td>

        <td><p>Icon color of the inactive tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-icon-color-active</code></td>

          <td><code>$tabs-md-tab-color-active</code></td>

        <td><p>Icon color of the active tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-padding-active</code></td>

          <td><code>0</code></td>

        <td><p>Padding of the active tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-font-size-active</code></td>

          <td><code>1.4rem</code></td>

        <td><p>Font size of the active tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-text-margin</code></td>

          <td><code>0</code></td>

        <td><p>Margin on the tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-text-capitalization</code></td>

          <td><code>none</code></td>

        <td><p>Capitalization of the tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-text-transform-origin</code></td>

          <td><code>50% 80%</code></td>

        <td><p>Transform origin for the tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-text-transform-active</code></td>

          <td><code>scale3d($tabs-md-tab-font-size-active / $tabs-md-tab-font-size, $tabs-md-tab-font-size-active / $tabs-md-tab-font-size, 1)</code></td>

        <td><p>Transform for the active tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-text-transition</code></td>

          <td><code>transform .3s ease-in-out</code></td>

        <td><p>Text transition for the tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-icon-transform-active</code></td>

          <td><code>translate3d(0, -2px, 0)</code></td>

        <td><p>Transform for the active tab button icon when the layout is icon-top, icon-only, or title-only</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-icon-right-transform-active</code></td>

          <td><code>translate3d(2px, 0, 0)</code></td>

        <td><p>Transform for the active tab button icon when the layout is icon-right</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-icon-bottom-transform-active</code></td>

          <td><code>translate3d(0, 2px, 0)</code></td>

        <td><p>Transform for the active tab button icon when the layout is icon-bottom</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-icon-left-transform-active</code></td>

          <td><code>translate3d(-2px, 0, 0)</code></td>

        <td><p>Transform for the active tab button icon when the layout is icon-left</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-icon-transform-origin</code></td>

          <td><code>50% 150%</code></td>

        <td><p>Transform origin for the tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-icon-transition</code></td>

          <td><code>transform .3s ease-in-out</code></td>

        <td><p>Text transition for the tab button icon</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-md-tab-icon-size</code></td>

          <td><code>2.4rem</code></td>

        <td><p>Size of the tab button icon</p>
</td>
      </tr>

    </tbody>
  </table>

  <table ng-show="active === 'wp'" id="sass-wp" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td><code>$tabs-wp-tab-padding</code></td>

          <td><code>12px 10px 5px 10px</code></td>

        <td><p>Padding on the tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-min-height</code></td>

          <td><code>4.8rem</code></td>

        <td><p>Minimum height of the tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-font-size</code></td>

          <td><code>1.2rem</code></td>

        <td><p>Font size of the tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-font-weight</code></td>

          <td><code>normal</code></td>

        <td><p>Font weight of the tab button text</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-opacity</code></td>

          <td><code>.7</code></td>

        <td><p>Opacity of the inactive tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-color</code></td>

          <td><code>rgba($tabs-wp-tab-color-inactive, $tabs-wp-tab-opacity)</code></td>

        <td><p>Text color of the inactive tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-color-active</code></td>

          <td><code>$tabs-wp-tab-color-active</code></td>

        <td><p>Text color of the active tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-icon-color</code></td>

          <td><code>rgba($tabs-wp-tab-color-inactive, $tabs-wp-tab-opacity)</code></td>

        <td><p>Icon color of the inactive tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-icon-color-active</code></td>

          <td><code>$tabs-wp-tab-color-active</code></td>

        <td><p>Icon color of the active tab button</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-border</code></td>

          <td><code>2px solid $tabs-wp-border-color</code></td>

        <td><p>Border on the inactive tab button (border-top when [tabsPlacement=bottom] and border-bottom when [tabsPlacement=top])</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-border-color-active</code></td>

          <td><code>$tabs-wp-tab-color-active</code></td>

        <td><p>Border color on the active tab button (border-top when [tabsPlacement=bottom] and border-bottom when [tabsPlacement=top])</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-background-activated</code></td>

          <td><code>rgba(0, 0, 0, .1)</code></td>

        <td><p>Background of the tab button when pressed</p>
</td>
      </tr>

      <tr>
        <td><code>$tabs-wp-tab-icon-size</code></td>

          <td><code>2.4rem</code></td>

        <td><p>Size of the tab button icon</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href="/docs/v3/components#tabs">Tabs Component Docs</a>,
<a href="../../tabs/Tabs">Tabs API Docs</a>,
<a href="../../nav/Nav">Nav API Docs</a>,
<a href="../../../navigation/NavController">NavController API Docs</a><!-- end content block -->


<!-- end body block -->

