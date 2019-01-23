---
layout: "fluid/docs_base"
version: "nightly"
versionHref: "/docs/v3/nightly"
path: ""
category: api
id: "img"
title: "Img"
header_sub_title: "Ionic API Documentation"
doc: "Img"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="img" href="#img"></a>

Img
<h3><code>ion-img</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/v3/src/components/img/img.ts#L6">
Improve this doc
</a>






<p>Two of the biggest cuprits of scroll jank is starting up a new HTTP
request, and rendering images. These two reasons is largely why
<code>ion-img</code> was created. The standard HTML <code>img</code> element is often a large
source of these problems, and what makes matters worse is that the app
does not have fine-grained control of requests and rendering for each
<code>img</code> element.</p>
<p>The <code>ion-img</code> component is similar to the standard <code>img</code> element,
but it also adds features in order to provide improved performance.
Features include only loading images which are visible, using web workers
for HTTP requests, preventing jank while scrolling and in-memory caching.</p>
<p>Note that <code>ion-img</code> also comes with a few more restrictions in comparison
to the standard <code>img</code> element. A good rule is, if there are only a few
images to be rendered on a page, then the standard <code>img</code> is probably
best. However, if a page has the potential for hundreds or even thousands
of images within a scrollable area, then <code>ion-img</code> would be better suited
for the job.</p>
<blockquote>
<p>Note: <code>ion-img</code> is only meant to be used inside of <a href="/docs/v3/api/components/virtual-scroll/VirtualScroll/">virtual-scroll</a></p>
</blockquote>
<h3><a class="anchor" name="lazy-loading" href="#lazy-loading">Lazy Loading</a></h3>


<p>Lazy loading images refers to only loading images which are actually
visible within the user&#39;s viewport. This also means that images which are
not viewable on the initial load would not be downloaded or rendered. Next,
as the user scrolls, each image which becomes visible is then requested
then rendered on-demand.</p>
<p>The benefits of this approach is that unnecessary and resource intensive
HTTP requests are not started, valuable bandwidth isn&#39;t wasted, and this
allows the browser to free up resources which would be wasted on images
which are not even viewable. For example, animated GIFs are enourmous
performance drains, however, with <code>ion-img</code> the app is able to dedicate
resources to just the viewable images. But again, if the problems listed
above are not problems within your app, then the standard <code>img</code> element
may be best.</p>
<h3><a class="anchor" name="image-dimensions" href="#image-dimensions">Image Dimensions</a></h3>


<p>By providing image dimensions up front, Ionic is able to accurately size
up the image&#39;s location within the viewport, which helps lazy load only
images which are viewable. Image dimensions can either by set as
properties, inline styles, or external stylesheets. It doesn&#39;t matter
which method of setting dimensions is used, but it&#39;s important that somehow
each <code>ion-img</code> has been given an exact size.</p>
<p>For example, by default <code>&lt;ion-avatar&gt;</code> and <code>&lt;ion-thumbnail&gt;</code> already come
with exact sizes when placed within an <code>&lt;ion-item&gt;</code>. By giving each image
an exact size, this then further locks in the size of each <code>ion-item</code>,
which again helps improve scroll performance.</p>
<pre><code class="lang-html">&lt;!-- dimensions set using attributes --&gt;
&lt;ion-img width=&quot;80&quot; height=&quot;80&quot; src=&quot;...&quot;&gt;&lt;/ion-img&gt;

&lt;!-- dimensions set using input properties --&gt;
&lt;ion-img [width]=&quot;imgWidth&quot; [height]=&quot;imgHeight&quot; src=&quot;...&quot;&gt;&lt;/ion-img&gt;

&lt;!-- dimensions set using inline styles --&gt;
&lt;ion-img style=&quot;width: 80px; height: 80px;&quot; src=&quot;...&quot;&gt;&lt;/ion-img&gt;
</code></pre>
<p>Additionally, each <code>ion-img</code> uses the <code>object-fit: cover</code> CSS property.
What this means is that the actual rendered image will center itself within
it&#39;s container. Or to really get detailed: The image is sized to maintain
its aspect ratio while filling the containing element’s entire content box.
Its concrete object size is resolved as a cover constraint against the
element’s used width and height.</p>
<h3><a class="anchor" name="future-optimizations" href="#future-optimizations">Future Optimizations</a></h3>


<p>Future goals are to place image requests within web workers, and cache
images in-memory as datauris. This method has proven to be effective,
however there are some current limitations with Cordova which we are
currently working on.</p>




<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->
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
      <td>alt</td>
      <td><code>string</code></td>
      <td><p>  Set the <code>alt</code> attribute which gets assigned to
the inner <code>img</code> element.</p>
</td>
    </tr>

    <tr>
      <td>bounds</td>
      <td><code>any</code></td>
      <td><p>  Sets the bounding rectangle of the element relative to the viewport.
When using <code>VirtualScroll</code>, each virtual item should pass its bounds to each
<code>ion-img</code>. The passed in data object should include <code>top</code> and <code>bottom</code> properties.</p>
</td>
    </tr>

    <tr>
      <td>cache</td>
      <td><code>boolean</code></td>
      <td><p>  After an image has been successfully downloaded, it can be cached
in-memory. This is useful for <code>VirtualScroll</code> by allowing image responses to be
cached, and not rendered, until after scrolling has completed, which allows for
smoother scrolling.</p>
</td>
    </tr>

    <tr>
      <td>height</td>
      <td><code>string</code></td>
      <td><p>  Image height. If this property is not set it&#39;s important that
the dimensions are still set using CSS. If the dimension is just a number it
will assume the <code>px</code> unit.</p>
</td>
    </tr>

    <tr>
      <td>src</td>
      <td><code>string</code></td>
      <td><p> The source of the image.</p>
</td>
    </tr>

    <tr>
      <td>width</td>
      <td><code>string</code></td>
      <td><p>  Image width. If this property is not set it&#39;s important that
the dimensions are still set using CSS. If the dimension is just a number it
will assume the <code>px</code> unit.</p>
</td>
    </tr>

  </tbody>
</table>


  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables">Sass Variables</a></h2>
  <div id="sass-variables" ng-controller="SassToggleCtrl">
  <div class="sass-platform-toggle">

    <h3 ng-init="setSassPlatform('base')">All</h3>

  </div>



  <table ng-show="active === 'base'" id="sass-base" class="table param-table" style="margin:0;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td><code>$img-placeholder-background</code></td>

          <td><code>#eee</code></td>

        <td><p>Color of the image when it hasn&#39;t fully loaded yet</p>
</td>
      </tr>

    </tbody>
  </table>

</div>



<!-- related link --><!-- end content block -->


<!-- end body block -->

