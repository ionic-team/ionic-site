---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "content"
title: "Content"
header_sub_title: "Class in module "
doc: "Content"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="content" href="#content"></a>

Content






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/content/content.ts#L8">
Improve this doc
</a>






<p>The Content component provides an easy to use content area with
some useful methods to control the scrollable area.</p>
<p>The content area can also implement pull-to-refresh with the
<a href="../../scroll/Refresher">Refresher</a> component.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-content</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<pre><code class="lang-html">&lt;ion-content&gt;
  Add your content here!
&lt;/ion-content&gt;
</code></pre>
<p>To get a reference to the content component from a Page&#39;s logic,
you can use Angular&#39;s <code>@ViewChild</code> annotation:</p>
<pre><code class="lang-ts">import {ViewChild} from &#39;angular2/core&#39;;
import {Content} from &#39;ionic-angular&#39;;

@Page({...}
export class MyPage{
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-methods" href="#instance-methods"></a>Instance Methods</h2>

<div id="scrollTo"></div>

<h3>
<a class="anchor" name="scrollTo" href="#scrollTo"></a>
<code>scrollTo(x,&nbsp;y,&nbsp;duration)</code>
  

</h3>

Scroll to the specified position.

```ts
import {ViewChild} from 'angular2/core';
import {Content} from 'ionic-angular';

@Page({
  template: `<ion-content>
               <button (click)="scrollTo()">Down 500px</button>
             </ion-content>`
)}
export class MyPage{
  @ViewChild(Content) content: Content;

  scrollTo() {
    // set the scrollLeft to 0px, and scrollTop to 500px
    // the scroll duration should take 200ms
    this.content.scrollTo(0, 500, 200);
  }
}
```


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
        x
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The x-value to scroll to.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        y
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The y-value to scroll to.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        duration
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Duration of the scroll animation in milliseconds. Defaults to <code>300</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> Returns a promise which is resolved when the scroll has completed.
</div>




<div id="scrollToTop"></div>

<h3>
<a class="anchor" name="scrollToTop" href="#scrollToTop"></a>
<code>scrollToTop(duration)</code>
  

</h3>

Scroll to the top of the content component.

```ts
import {ViewChild} from 'angular2/core';
import {Content} from 'ionic-angular';

@Page({
  template: `<ion-content>
               <button (click)="scrollToTop()">Scroll to top</button>
             </ion-content>`
)}
export class MyPage{
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }
}
```


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
        duration
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>Duration of the scroll animation in milliseconds. Defaults to <code>300</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> Returns a promise which is resolved when the scroll has completed.
</div>




<div id="getScrollTop"></div>

<h3>
<a class="anchor" name="getScrollTop" href="#getScrollTop"></a>
<code>getScrollTop()</code>
  

</h3>

Get the `scrollTop` property of the content's scrollable element.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> 
</div>




<div id="setScrollTop"></div>

<h3>
<a class="anchor" name="setScrollTop" href="#setScrollTop"></a>
<code>setScrollTop(top)</code>
  

</h3>

Set the `scrollTop` property of the content's scrollable element.


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
        top
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="getContentDimensions"></div>

<h3>
<a class="anchor" name="getContentDimensions" href="#getContentDimensions"></a>
<code>getContentDimensions()</code>
  

</h3>

Returns the content and scroll elements' dimensions.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>object</code> dimensions  The content and scroll elements' dimensions <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.contentHeight  content offsetHeight <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.contentTop  content offsetTop <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.contentBottom  content offsetTop+offsetHeight <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.contentWidth  content offsetWidth <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.contentLeft  content offsetLeft <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.contentRight  content offsetLeft + offsetWidth <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.scrollHeight  scroll scrollHeight <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.scrollTop  scroll scrollTop <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.scrollBottom  scroll scrollTop + scrollHeight <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.scrollWidth  scroll scrollWidth <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.scrollLeft  scroll scrollLeft <br>
&nbsp; &nbsp; &nbsp; <code>number</code> dimensions.scrollRight  scroll scrollLeft + scrollWidth <br>
</div>


<!-- related link --><!-- end content block -->


<!-- end body block -->

