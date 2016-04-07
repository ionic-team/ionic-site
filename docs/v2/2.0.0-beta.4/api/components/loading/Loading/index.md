---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.4"
versionHref: "/docs/v2/2.0.0-beta.4"
path: ""
category: api
id: "loading"
title: "Loading"
header_sub_title: "Class in module "
doc: "Loading"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/loading/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="loading" href="#loading"></a>

Loading






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/loading/loading.ts#L9">
Improve this doc
</a>






<p>An overlay that can be used to indicate activity while blocking user
interaction. The loading indicator appears on top of the app&#39;s content,
and can be dismissed by the app to resume user interaction with
the app. It includes an optional backdrop, which can be disabled
by setting <code>showBackdrop: false</code> upon creation.</p>
<h3 id="creating">Creating</h3>
<p>You can pass all of the loading options in the first argument of
the create method: <code>Loading.create(opts)</code>. The spinner name should be
passed in the <code>spinner</code> property, and any optional HTML can be passed
in the <code>content</code> property. If you do not pass a value to <code>spinner</code>
the loading indicator will use the spinner specified by the mode. To
set the spinner name across the app, set the value of <code>loadingSpinner</code>
in your app&#39;s config. To hide the spinner, set <code>loadingSpinner: &#39;hide&#39;</code>
in the apps&#39; config or pass <code>spinner: &#39;hide&#39;</code> in the loading
options. See the create method below for all available options.</p>
<h3 id="dismissing">Dismissing</h3>
<p>The loading indicator can be dismissed automatically after a specific
amount of time by passing the number of milliseconds to display it in
the <code>duration</code> of the loading options. By default the loading indicator
will show even during page changes, but this can be disabled by setting
<code>dismissOnPageChange</code> to <code>true</code>. To dismiss the loading indicator after
creation, call the <code>dismiss()</code> method on the Loading instance.</p>
<h3 id="limitations">Limitations</h3>
<p>The element is styled to appear on top of other content by setting its
<code>z-index</code> property. You must ensure no element has a stacking context with
a higher <code>z-index</code> than this element.</p>

<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-ts">constructor(nav: NavController) {
  this.nav = nav;
}

presentLoadingDefault() {
  let loading = Loading.create({
    content: &#39;Please wait...&#39;
  });

  this.nav.present(loading);

  setTimeout(() =&gt; {
    loading.dismiss();
  }, 5000);
}

presentLoadingCustom() {
  let loading = Loading.create({
    spinner: &#39;hide&#39;,
    content: `
      &lt;div class=&quot;custom-spinner-container&quot;&gt;
        &lt;div class=&quot;custom-spinner-box&quot;&gt;&lt;/div&gt;
      &lt;/div&gt;`,
    duration: 5000
  });

  this.nav.present(loading);
}

presentLoadingText() {
  let loading = Loading.create({
    spinner: &#39;hide&#39;,
    content: &#39;Loading Please Wait...&#39;
  });

  this.nav.present(loading);

  setTimeout(() =&gt; {
    this.nav.push(Page2);
  }, 1000);

  setTimeout(() =&gt; {
    loading.dismiss();
  }, 5000);
}
</code></pre>




<!-- @property tags -->
<h2><a class="anchor" name="static-methods" href="#static-methods"></a>Static Methods</h2>
<div id="create"></div>
<h3><a class="anchor" name="create" href="#create"></a><code>create(opts)</code>
  
</h3>

Create a loading indicator with the following options

| Option                | Type       | Description                                                                                                      |
|-----------------------|------------|------------------------------------------------------------------------------------------------------------------|
| spinner               |`string`    | The name of the SVG spinner for the loading indicator.                                                                           |
| content               |`string`    | The html content for the loading indicator.                                                                      |
| cssClass              |`string`    | An additional class for custom styles.                                                                           |
| showBackdrop          |`boolean`   | Whether to show the backdrop. Default true.                                                                      |
| dismissOnPageChange   |`boolean`   | Whether to dismiss the indicator when navigating to a new page. Default false.                                   |
| duration              |`number`    | How many milliseconds to wait before hiding the indicator. By default, it will show until `hide()` is called.    |




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
        
  <code>object</code>
      </td>
      <td>
        <p>Loading options</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<!-- instance methods on the class --><!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/api/components/spinner/Spinner'>Spinner API Docs</a><!-- end content block -->


<!-- end body block -->

