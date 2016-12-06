---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/img/img.ts#L6">
Improve this doc
</a>






<p>Two of the biggest cuprits of scrolling jank is starting up a new
HTTP request, and rendering images. These two reasons is largely why
<code>ion-img</code> was created and the problems which it is helping to solve.
The standard <code>&lt;img&gt;</code> element is often a large source of these problems,
and what makes matters worse is that the app does not have fine-grained
control of each img element.</p>
<p>The <code>ion-img</code> component is similar to the standard <code>&lt;img&gt;</code> element,
but it also adds features in order to provide improved performance.
Features include only loading images which are visible, using web workers
for HTTP requests, preventing jank while scrolling and in-memory caching.</p>
<p>Note that <code>ion-img</code> also comes with a few more restrictions in comparison to
the standard <code>&lt;img&gt;</code> element. A good rule is, if there are only a few images
to be rendered on one page, then the standard <code>&lt;img&gt;</code> may be best. However, if
a page has the potential for hundreds or even thousands of images within a
scrollable area, then <code>ion-img</code> would be better suited for the job.</p>
<h3 id="lazy-loading">Lazy Loading</h3>
<p>Lazy loading images refers to only loading images which are actually
visible within the user&#39;s viewport. This also means that images which are
not viewable on the initial load would not be downloaded. Next, as the user
scrolls down, each image which becomes visible is then loaded on-demand.</p>
<p>The benefits of this approach is that unnecessary HTTP requests are not
started and valuable bandwidth wasted, and to free up browser resources
which would be wasted on images which are not even viewable. For example,
animated GIFs are enourmous performance drains, however, with <code>ion-img</code>
the app is able to dedicate resources to just the viewable images.</p>
<h3 id="image-dimensions">Image Dimensions</h3>
<p>By providing image dimensions up front, Ionic is able to accurately size
up the image&#39;s location within the viewport, which helps lazy load only
images which are viewable. Image dimensions can either by set as properties,
inline styles, or stylesheets. It doesn&#39;t matter which method of setting
dimensions is used, but it&#39;s important that somehow each <code>ion-img</code>
has been given an exact size.</p>
<p>For example, by default <code>&lt;ion-avatar&gt;</code> and <code>&lt;ion-thumbnail&gt;</code> already come
with exact sizes when placed within <code>&lt;ion-item&gt;</code>. By giving each image an
exact size, this then further locks in the size of each <code>ion-item</code>, which
again helps improve scroll performance.</p>




<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;!-- set using plain attributes --&gt;
&lt;ion-img width=&quot;80&quot; height=&quot;80&quot; src=&quot;...&quot;&gt;&lt;/ion-img&gt;

&lt;!-- bind using properties --&gt;
&lt;ion-img [width]=&quot;imgWidth&quot; [height]=&quot;imgHeight&quot; src=&quot;...&quot;&gt;&lt;/ion-img&gt;

&lt;!-- inline styles --&gt;
&lt;ion-img style=&quot;width: 80px; height: 80px;&quot; src=&quot;...&quot;&gt;&lt;/ion-img&gt;
</code></pre>
<h3 id="web-worker-and-xhr-requests">Web Worker and XHR Requests</h3>
<p>Another big cause of scroll jank is kicking off a new HTTP request, which
is exactly what images do. Normally, this isn&#39;t a problem for something like
a blog since all image HTTP requests are started immediately as HTML
parses. However, Ionic has the ability to include hundreds to thousands of
images within one page, but we&#39;re not actually loading all of the images at once.</p>
<p>Imagine an app where users can slowly, or quickly, scroll through hundreds of
images. If they&#39;re scrolling extremely fast, the app wouldn&#39;t want to start all of
those requests, but if they&#39;re scrolling slowly they would. Additionally, it&#39;s
most browsers can only have six requests at one time for the same domain, so
it&#39;s extemely important that we&#39;re managing which images we should downloading.</p>
<p>By place XMLHttpRequest within a web worker, we&#39;re able to pass off the heavy
lifting to another thread. Not only are able to take the load of the main thread,
but we&#39;re also able to accurately control exactly which images should be
downloading, along with the ability to abort unnecessary requests. Aborting
requets is just as important so that Ionic can free up connections for the most
important images which are visible.</p>




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
      <td>src</td>
      <td><code>string</code></td>
      <td><p> Image src.</p>
</td>
    </tr>
    
    <tr>
      <td>bounds</td>
      <td><code>any</code></td>
      <td><p>  Sets the bounding rectangle of the element relative to the viewport.
When using <code>VirtualScroll</code>, each virtual item should pass its bounds to each
<code>ion-img</code>.</p>
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
      <td>width</td>
      <td><code>string</code></td>
      <td><p>  Image width. If this property is not set it&#39;s important that
the dimensions are still set using CSS.</p>
</td>
    </tr>
    
    <tr>
      <td>height</td>
      <td><code>string</code></td>
      <td><p>  Image height. If this property is not set it&#39;s important that
the dimensions are still set using CSS.</p>
</td>
    </tr>
    
    <tr>
      <td>alt</td>
      <td><code>string</code></td>
      <td><p>  Set the <code>alt</code> attribute which gets assigned to
the inner <code>img</code> element.</p>
</td>
    </tr>
    
  </tbody>
</table>


  <h2 id="sass-variable-header"><a class="anchor" name="sass-variables" href="#sass-variables"></a>Sass Variables</h2>
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

