---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "slides"
title: "Slides"
header_sub_title: "Ionic API Documentation"
doc: "Slides"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/slides/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="slides" href="#slides"></a>

Slides






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//src/components/slides/slides.ts#L12">
Improve this doc
</a>






<p>The Slides component is a multi-section container. Each section can be swiped
or dragged between. It contains any number of <a href="../Slide">Slide</a> components.</p>
<h3 id="creating">Creating</h3>
<p>You should use a template to create slides and listen to slide events. The template
should contain the slide container, an <code>&lt;ion-slides&gt;</code> element, and any number of
<a href="../Slide">Slide</a> components, written as <code>&lt;ion-slide&gt;</code>. Any configuration of the
slides should be passed in the <code>options</code> property of the <code>&lt;ion-slides&gt;</code> element.
You can listen to events such as the slide changing by placing the event on the
<code>&lt;ion-slides&gt;</code> element. See <a href="#usage">Usage</a> below for more information on
creating slides.</p>
<h3 id="configuring">Configuring</h3>
<p>There are several configuration options that can be passed to Slides. These should
be passed in the <code>options</code> property of the <code>&lt;ion-slides&gt;</code> element upon creation.
You can allow the slides to loop around from the last to the first, set autoplay
on the slides so it will automatically switch between them, and more.</p>
<p>Properties to pass in options:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>autoplay</td>
<td><code>number</code></td>
<td>-</td>
<td>Delay between transitions (in ms). If this parameter is not passed, autoplay is disabled.</td>
</tr>
<tr>
<td>direction</td>
<td><code>string</code></td>
<td>&#39;horizontal&#39;</td>
<td>Swipe direction: &#39;horizontal&#39; or &#39;vertical&#39;.</td>
</tr>
<tr>
<td>initialSlide</td>
<td><code>number</code></td>
<td>0</td>
<td>Index number of initial slide</td>
</tr>
<tr>
<td>loop</td>
<td><code>boolean</code></td>
<td>false</td>
<td>Whether to continuously loop from the last slide to the first slide.</td>
</tr>
<tr>
<td>pager</td>
<td><code>boolean</code></td>
<td>false</td>
<td>Show the pagination bullets.</td>
</tr>
<tr>
<td>speed</td>
<td><code>number</code></td>
<td>300</td>
<td>Duration of transition between slides (in ms).</td>
</tr>
</tbody>
</table>
<p>See <a href="#usage">Usage</a> below for more information on configuring slides.</p>
<h3 id="navigating">Navigating</h3>
<p>After creating and configuring the slides, you can navigate between them
by swiping or calling methods on the <code>Slides</code> instance. You can call <code>slideTo()</code> to
navigate to a specific slide, or <code>slideNext()</code> to change to the slide that follows
the active slide. All of the <a href="#instance-members">methods</a> provided by the <code>Slides</code>
instance are listed below. See <a href="#usage">Usage</a> below for more information on
navigating between slides.</p>
<h3 id="limitations">Limitations</h3>
<p>The Slides component wraps the <a href="http://www.idangero.us/swiper/">Swiper</a> component
built by iDangero.us. This means that all of the Swiper API isn&#39;t exposed on the
Slides component. See the <a href="#getSlider"><code>getSlider()</code></a> method for information on
getting the <code>Swiper</code> instance and using its methods directly.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-slides</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>You can add slides to a <code>@Page</code> using the following template:</p>
<pre><code class="lang-html">&lt;ion-slides&gt;
  &lt;ion-slide&gt;
    &lt;h1&gt;Slide 1&lt;/h1&gt;
  &lt;/ion-slide&gt;
  &lt;ion-slide&gt;
    &lt;h1&gt;Slide 2&lt;/h1&gt;
  &lt;/ion-slide&gt;
  &lt;ion-slide&gt;
    &lt;h1&gt;Slide 3&lt;/h1&gt;
  &lt;/ion-slide&gt;
&lt;/ion-slides&gt;
</code></pre>
<p>To add <a href="#configuring">options</a>, we will define them in <code>mySlideOptions</code> in our class <code>MyPage</code>:</p>
<pre><code class="lang-ts">import {Page, Slides} from &#39;ionic-angular&#39;;

@Page({
  templateUrl: &#39;my-page.html&#39;
})
class MyPage {
  mySlideOptions = {
    initialSlide: 1,
    loop: true
  };
}
</code></pre>
<p>This is setting the second slide as the initial slide on load, since
the <code>initialSlide</code> begins at <code>0</code>. We are also setting <code>loop</code> to true which
allows us to swipe from the last slide to the first continuously. Then,
we will pass <code>mySlideOptions</code> in the <code>options</code> property of the <code>&lt;ion-slides&gt;</code>
element. We are using <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding">property binding</a>
on <code>options</code> because <code>mySlideOptions</code> is an expression:</p>
<pre><code class="lang-html">&lt;ion-slides [options]=&quot;mySlideOptions&quot;&gt;
</code></pre>
<p>To grab a reference to the Slides, we will add a <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#local-vars">local template variable</a>
to <code>&lt;ion-slides&gt;</code> called <code>mySlider</code>:</p>
<pre><code class="lang-html">&lt;ion-slides #mySlider [options]=&quot;mySlideOptions&quot;&gt;
</code></pre>
<p>Next, we can use <code>ViewChild</code> to assign the Slides instance to <code>slider</code>:</p>
<pre><code class="lang-ts">import {ViewChild} from &#39;@angular/core&#39;;

class MyPage {
  @ViewChild(&#39;mySlider&#39;) slider: Slides;

  ...
}
</code></pre>
<p>Now we can call any of the <code>Slider</code> <a href="(#instance-members">methods</a>),
for example we can use the Slider&#39;s <code>slideTo()</code> method in order to
navigate to a specific slide on a button click. Below we call the
<code>goToSlide()</code> method and it navigates to the 3rd slide:</p>
<pre><code class="lang-ts">class MyPage {
  ...

  goToSlide() {
    this.slider.slideTo(2, 500);
  }
}
</code></pre>
<p>We can also add events to listen to on the <code>&lt;ion-slides&gt;</code> element.
Let&#39;s add the <code>didChange</code> event and call a method when the slide changes:</p>
<pre><code class="lang-html">&lt;ion-slides #mySlider (didChange)=&quot;onSlideChanged()&quot; [options]=&quot;mySlideOptions&quot;&gt;
</code></pre>
<p>In our class, we add the <code>onSlideChanged()</code> method which gets the active
index and prints it:</p>
<pre><code class="lang-ts">class MyPage {
  ...

  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    console.log(&quot;Current index is&quot;, currentIndex);
  }
}
</code></pre>
<p>For all of the methods you can call on the <code>Slider</code> instance, see the
<a href="#instance-members">Instance Members</a>.</p>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="slideTo"></div>

<h3>
<a class="anchor" name="slideTo" href="#slideTo"></a>
<code>slideTo(index,&nbsp;speed,&nbsp;runCallbacks)</code>
  

</h3>

Transition to the specified slide.



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
        index
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The index number of the slide.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        speed
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Transition duration (in ms). Optional.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        runCallbacks
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to emit the <code>willChange</code>/<code>didChange</code> events. Optional. Default true.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="slideNext"></div>

<h3>
<a class="anchor" name="slideNext" href="#slideNext"></a>
<code>slideNext(speed,&nbsp;runCallbacks)</code>
  

</h3>

Transition to the next slide.



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
        speed
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Transition duration (in ms). Optional.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        runCallbacks
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to emit the <code>willChange</code>/<code>didChange</code> events. Optional. Default true.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="slidePrev"></div>

<h3>
<a class="anchor" name="slidePrev" href="#slidePrev"></a>
<code>slidePrev(speed,&nbsp;runCallbacks)</code>
  

</h3>

Transition to the previous slide.



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
        speed
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Transition duration (in ms). Optional.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        runCallbacks
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to emit the <code>willChange</code>/<code>didChange</code> events. Optional. Default true.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="getActiveIndex"></div>

<h3>
<a class="anchor" name="getActiveIndex" href="#getActiveIndex"></a>
<code>getActiveIndex()</code>
  

</h3>

Get the index of the active slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> <p>The index number of the current slide.</p>


</div>




<div id="getPreviousIndex"></div>

<h3>
<a class="anchor" name="getPreviousIndex" href="#getPreviousIndex"></a>
<code>getPreviousIndex()</code>
  

</h3>

Get the index of the previous slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> <p>The index number of the previous slide.</p>


</div>




<div id="length"></div>

<h3>
<a class="anchor" name="length" href="#length"></a>
<code>length()</code>
  

</h3>

Get the total number of slides.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> <p>The total number of slides.</p>


</div>




<div id="isEnd"></div>

<h3>
<a class="anchor" name="isEnd" href="#isEnd"></a>
<code>isEnd()</code>
  

</h3>

Get whether or not the current slide is the last slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>If the slide is the last slide or not.</p>


</div>




<div id="isBeginning"></div>

<h3>
<a class="anchor" name="isBeginning" href="#isBeginning"></a>
<code>isBeginning()</code>
  

</h3>

Get whether or not the current slide is the first slide.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> <p>If the slide is the first slide or not.</p>


</div>




<div id="getSlider"></div>

<h3>
<a class="anchor" name="getSlider" href="#getSlider"></a>
<code>getSlider()</code>
  

</h3>

Get the `Swiper` instance.

The Slides component wraps the `Swiper` component built by iDangero.us. See the
[Swiper API Docs](http://idangero.us/swiper/api/) for information on using
the `Swiper` instance directly.







<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Swiper</code> 

</div>



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
      <td>options</td>
      <td><code>Object</code></td>
      <td><p> Any configuration for the slides</p>
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
      <td>willChange</td>
      <td><p> Expression to evaluate when a slide change starts.</p>
</td>
    </tr>
    
    <tr>
      <td>didChange</td>
      <td><p> Expression to evaluate when a slide change ends.</p>
</td>
    </tr>
    
    <tr>
      <td>move</td>
      <td><p> Expression to evaluate when a slide moves.</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#slides'>Slides Component Docs</a>

Swiper.js:
The most modern mobile touch slider and framework with hardware accelerated transitions

http://www.idangero.us/swiper/

Copyright 2015, Vladimir Kharlampidi
The iDangero.us
http://www.idangero.us/

Licensed under MIT<!-- end content block -->


<!-- end body block -->

