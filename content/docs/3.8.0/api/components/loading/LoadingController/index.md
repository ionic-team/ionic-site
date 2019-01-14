---
layout: "fluid/docs_base"
version: "3.8.0"
versionHref: "/docs/3.8.0"
path: ""
category: api
id: "loadingcontroller"
title: "LoadingController"
header_sub_title: "Ionic API Documentation"
doc: "LoadingController"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/demos/src/loading/www/"
angular_controller: APIDemoCtrl
---









<h1 class="api-title">
<a class="anchor" name="loading-controller" href="#loading-controller"></a>

LoadingController





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/loading/loading-controller.ts#L5">
Improve this doc
</a>






<p>An overlay that can be used to indicate activity while blocking user
interaction. The loading indicator appears on top of the app&#39;s content,
and can be dismissed by the app to resume user interaction with
the app. It includes an optional backdrop, which can be disabled
by setting <code>showBackdrop: false</code> upon creation.</p>
<h3><a class="anchor" name="creating" href="#creating">Creating</a></h3>

<p>You can pass all of the loading options in the first argument of
the create method: <code>create(opts)</code>. The spinner name should be
passed in the <code>spinner</code> property, and any optional HTML can be passed
in the <code>content</code> property. If you do not pass a value to <code>spinner</code>
the loading indicator will use the spinner specified by the mode. To
set the spinner name across the app, set the value of <code>loadingSpinner</code>
in your app&#39;s config. To hide the spinner, set <code>loadingSpinner: &#39;hide&#39;</code>
in the app&#39;s config or pass <code>spinner: &#39;hide&#39;</code> in the loading
options. See the <a href="#create">create</a> method below for all available options.</p>
<h3><a class="anchor" name="dismissing" href="#dismissing">Dismissing</a></h3>

<p>The loading indicator can be dismissed automatically after a specific
amount of time by passing the number of milliseconds to display it in
the <code>duration</code> of the loading options. By default the loading indicator
will show even during page changes, but this can be disabled by setting
<code>dismissOnPageChange</code> to <code>true</code>. To dismiss the loading indicator after
creation, call the <code>dismiss()</code> method on the Loading instance. The
<code>onDidDismiss</code> function can be called to perform an action after the loading
indicator is dismissed.</p>
<blockquote>
<p>Note that after the component is dismissed, it will not be usable anymore
and another one must be created. This can be avoided by wrapping the
creation and presentation of the component in a reusable function as shown
in the <code>usage</code> section below.</p>
</blockquote>
<h3><a class="anchor" name="limitations" href="#limitations">Limitations</a></h3>

<p>The element is styled to appear on top of other content by setting its
<code>z-index</code> property. You must ensure no element has a stacking context with
a higher <code>z-index</code> than this element.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage">Usage</a></h2>

<pre><code class="lang-ts">constructor(public loadingCtrl: LoadingController) {

}

presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: &#39;Please wait...&#39;
  });

  loading.present();

  setTimeout(() =&gt; {
    loading.dismiss();
  }, 5000);
}

presentLoadingCustom() {
  let loading = this.loadingCtrl.create({
    spinner: &#39;hide&#39;,
    content: `
      &lt;div class=&quot;custom-spinner-container&quot;&gt;
        &lt;div class=&quot;custom-spinner-box&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;`,
    duration: 5000
  });

  loading.onDidDismiss(() =&gt; {
    console.log(&#39;Dismissed loading&#39;);
  });

  loading.present();
}

presentLoadingText() {
  let loading = this.loadingCtrl.create({
    spinner: &#39;hide&#39;,
    content: &#39;Loading Please Wait...&#39;
  });

  loading.present();

  setTimeout(() =&gt; {
    this.nav.push(Page2);
  }, 1000);

  setTimeout(() =&gt; {
    loading.dismiss();
  }, 5000);
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members">Instance Members</a></h2>

<div id="config"></div>

<h3>
<a class="anchor" name="config" href="#config">
<code>config</code>


</a>
</h3>











<div id="create"></div>

<h3>
<a class="anchor" name="create" href="#create">
<code>create(opts)</code>


</a>
</h3>

Create a loading indicator. See below for options.


<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>
        opts


      </td>
      <td>

  <code>LoadingOptions</code>
      </td>
      <td>
        <p>Loading options<strong class="tag">Optional</strong></p>


      </td>
    </tr>

  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b>
  <code>Loading</code> <p>Returns a Loading Instance</p>


</div>


<h2><a class="anchor" name="advanced" href="#advanced">Advanced</a></h2>
<p>Loading options</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>spinner</td>
<td><code>string</code></td>
<td>The name of the SVG spinner for the loading indicator.</td>
</tr>
<tr>
<td>content</td>
<td><code>string</code></td>
<td>The html content for the loading indicator.</td>
</tr>
<tr>
<td>cssClass</td>
<td><code>string</code></td>
<td>Additional classes for custom styles, separated by spaces.</td>
</tr>
<tr>
<td>showBackdrop</td>
<td><code>boolean</code></td>
<td>Whether to show the backdrop. Default true.</td>
</tr>
<tr>
<td>enableBackdropDismiss</td>
<td><code>boolean</code></td>
<td>Whether the loading indicator should be dismissed by tapping the backdrop. Default false.</td>
</tr>
<tr>
<td>dismissOnPageChange</td>
<td><code>boolean</code></td>
<td>Whether to dismiss the indicator when navigating to a new page. Default false.</td>
</tr>
<tr>
<td>duration</td>
<td><code>number</code></td>
<td>How many milliseconds to wait before hiding the indicator. By default, it will show until <code>dismiss()</code> is called.</td>
</tr>
</tbody>
</table>



  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables">Sass Variables</a></h2>
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
        <td><code>$loading-ios-padding-top</code></td>

          <td><code>24px</code></td>

        <td><p>Padding top of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-padding-end</code></td>

          <td><code>34px</code></td>

        <td><p>Padding end of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-padding-bottom</code></td>

          <td><code>$loading-ios-padding-top</code></td>

        <td><p>Padding bottom of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-padding-start</code></td>

          <td><code>$loading-ios-padding-end</code></td>

        <td><p>Padding start of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-max-width</code></td>

          <td><code>270px</code></td>

        <td><p>Max width of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-max-height</code></td>

          <td><code>90%</code></td>

        <td><p>Maximum height of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-border-radius</code></td>

          <td><code>8px</code></td>

        <td><p>Border radius of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-text-color</code></td>

          <td><code>#000</code></td>

        <td><p>Text color of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-background</code></td>

          <td><code>#f8f8f8</code></td>

        <td><p>Background of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-content-font-weight</code></td>

          <td><code>bold</code></td>

        <td><p>Font weight of the loading content</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-content-margin-start</code></td>

          <td><code>$content-ios-margin</code></td>

        <td><p>Margin start of the loading content next to a spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-spinner-color</code></td>

          <td><code>#69717d</code></td>

        <td><p>Color of the loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-spinner-ios-color</code></td>

          <td><code>$loading-ios-spinner-color</code></td>

        <td><p>Color of the ios loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-spinner-bubbles-color</code></td>

          <td><code>$loading-ios-spinner-color</code></td>

        <td><p>Color of the bubbles loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-spinner-circles-color</code></td>

          <td><code>$loading-ios-spinner-color</code></td>

        <td><p>Color of the circles loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-spinner-crescent-color</code></td>

          <td><code>$loading-ios-spinner-color</code></td>

        <td><p>Color of the crescent loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-ios-spinner-dots-color</code></td>

          <td><code>$loading-ios-spinner-color</code></td>

        <td><p>Color of the dots loading spinner</p>
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
        <td><code>$loading-md-padding-top</code></td>

          <td><code>24px</code></td>

        <td><p>Padding top of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-padding-end</code></td>

          <td><code>$loading-md-padding-top</code></td>

        <td><p>Padding end of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-padding-bottom</code></td>

          <td><code>$loading-md-padding-top</code></td>

        <td><p>Padding bottom of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-padding-start</code></td>

          <td><code>$loading-md-padding-end</code></td>

        <td><p>Padding start of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-max-width</code></td>

          <td><code>280px</code></td>

        <td><p>Max width of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-max-height</code></td>

          <td><code>90%</code></td>

        <td><p>Maximum height of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-border-radius</code></td>

          <td><code>2px</code></td>

        <td><p>Border radius of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-text-color</code></td>

          <td><code>rgba(0, 0, 0, .5)</code></td>

        <td><p>Text color of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-background</code></td>

          <td><code>#fafafa</code></td>

        <td><p>Background of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-box-shadow-color</code></td>

          <td><code>rgba(0, 0, 0, .4)</code></td>

        <td><p>Box shadow color of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-box-shadow</code></td>

          <td><code>0 16px 20px $loading-md-box-shadow-color</code></td>

        <td><p>Box shadow of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-content-margin-start</code></td>

          <td><code>$content-md-margin</code></td>

        <td><p>Margin start of the loading content next to a spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-spinner-color</code></td>

          <td><code>color($colors-md, primary)</code></td>

        <td><p>Color of the loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-spinner-ios-color</code></td>

          <td><code>$loading-md-spinner-color</code></td>

        <td><p>Color of the ios loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-spinner-bubbles-color</code></td>

          <td><code>$loading-md-spinner-color</code></td>

        <td><p>Color of the bubbles loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-spinner-circles-color</code></td>

          <td><code>$loading-md-spinner-color</code></td>

        <td><p>Color of the circles loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-spinner-crescent-color</code></td>

          <td><code>$loading-md-spinner-color</code></td>

        <td><p>Color of the crescent loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-md-spinner-dots-color</code></td>

          <td><code>$loading-md-spinner-color</code></td>

        <td><p>Color of the dots loading spinner</p>
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
        <td><code>$loading-wp-padding-top</code></td>

          <td><code>20px</code></td>

        <td><p>Padding top of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-padding-end</code></td>

          <td><code>$loading-wp-padding-top</code></td>

        <td><p>Padding end of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-padding-bottom</code></td>

          <td><code>$loading-wp-padding-top</code></td>

        <td><p>Padding bottom of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-padding-start</code></td>

          <td><code>$loading-wp-padding-end</code></td>

        <td><p>Padding start of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-max-width</code></td>

          <td><code>280px</code></td>

        <td><p>Max width of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-max-height</code></td>

          <td><code>90%</code></td>

        <td><p>Maximum height of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-border-radius</code></td>

          <td><code>2px</code></td>

        <td><p>Border radius of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-text-color</code></td>

          <td><code>#fff</code></td>

        <td><p>Text color of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-background</code></td>

          <td><code>#000</code></td>

        <td><p>Background of the loading wrapper</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-content-margin-start</code></td>

          <td><code>$content-wp-margin</code></td>

        <td><p>Margin start of the loading content next to a spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-spinner-color</code></td>

          <td><code>$loading-wp-text-color</code></td>

        <td><p>Color of the loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-spinner-ios-color</code></td>

          <td><code>$loading-wp-spinner-color</code></td>

        <td><p>Color of the ios loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-spinner-bubbles-color</code></td>

          <td><code>$loading-wp-spinner-color</code></td>

        <td><p>Color of the bubbles loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-spinner-circles-color</code></td>

          <td><code>$loading-wp-spinner-color</code></td>

        <td><p>Color of the circles loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-spinner-crescent-color</code></td>

          <td><code>$loading-wp-spinner-color</code></td>

        <td><p>Color of the crescent loading spinner</p>
</td>
      </tr>

      <tr>
        <td><code>$loading-wp-spinner-dots-color</code></td>

          <td><code>$loading-wp-spinner-color</code></td>

        <td><p>Color of the dots loading spinner</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link -->

<h2><a class="anchor" name="related" href="#related">Related</a></h2>

<a href="/docs/api/components/spinner/Spinner">Spinner API Docs</a><!-- end content block -->


<!-- end body block -->

