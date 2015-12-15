---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{Content | slugify}}"
title: "Content"
header_sub_title: "Class in module "
doc: "Content"
docType: "class"

---




<div class="improve-docs">
<a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/content/content.ts#L8'>
View Source
</a>
&nbsp;
<a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/content/content.ts#L8'>
Improve this doc
</a>
</div>





<h1 class="api-title">


Content






</h1>






<!-- description -->
<h2>Description</h2>

<p>The Content component provides an easy to use content area that can be configured to use Ionic&#39;s custom Scroll View, or the built in overflow scrolling of the browser.</p>
<p>While we recommend using the custom Scroll features in Ionic in most cases, sometimes (for performance reasons) only the browser&#39;s native overflow scrolling will suffice, and so we&#39;ve made it easy to toggle between the Ionic scroll implementation and overflow scrolling.</p>
<p>You can implement pull-to-refresh with the <a href="../../scroll/Refresher">Refresher</a> component.</p>


<h2>Component</h2>
<h3>selector: <code>ion-content</code></h3>
<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-html">&lt;ion-content id=&quot;myContent&quot;&gt;
  Add your content here!
&lt;/ion-content&gt;
</code></pre>




<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="addScrollEventListener"></div>

<h3>
<code>addScrollEventListener(handler)</code>
  

</h3>

Adds the specified scroll handler to the content' scroll element.

```ts
@Page({
  template: `<ion-content id="my-content"></ion-content>`
)}
export class MyPage{
   constructor(app: IonicApp){
       this.app = app;
   }
  // Need to wait until the component has been initialized
  ngAfterViewInit() {
    // Here 'my-content' is the ID of my ion-content
    this.content = this.app.getComponent('my-content');
    this.content.addScrollEventListener(this.myScroll);
  }
    myScroll() {
     console.info('They see me scrolling...');
   }
}
```


<table class="table" style="margin:0;">
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
        handler
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>The method you want perform when scrolling</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>Function</code> A function that removes the scroll handler.




<div id="onScrollEnd"></div>

<h3>
<code>onScrollEnd()</code>
  

</h3>












<div id="addTouchMoveListener"></div>

<h3>
<code>addTouchMoveListener(handler)</code>
  

</h3>

Adds the specified touchmove handler to the content's scroll element.

```ts
@Page({
  template: `<ion-content id="my-content"></ion-content>`
)}
export class MyPage{
   constructor(app: IonicApp){
       this.app = app;
   }
  // Need to wait until the component has been initialized
  ngAfterViewInit() {
    // Here 'my-content' is the ID of my ion-content
    this.content = this.app.getComponent('my-content');
    this.content.addTouchMoveListener(this.touchHandler);
  }
   touchHandler() {
     console.log("I'm touching all the magazines!!");
   }
}
```


<table class="table" style="margin:0;">
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
        handler
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>The method you want to perform when touchmove is firing</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>Function</code> A function that removes the touchmove handler.




<div id="scrollTo"></div>

<h3>
<code>scrollTo(x,&nbsp;y,&nbsp;duration,&nbsp;tolerance)</code>
  

</h3>

Scroll to the specified position.

```ts
@Page({
  template: `<ion-content id="my-content">
     <button (click)="scrollTo()"> Down 500px</button>
  </ion-content>`
)}
export class MyPage{
   constructor(app: IonicApp){
       this.app = app;
   }
  // Need to wait until the component has been initialized
  ngAfterViewInit() {
    // Here 'my-content' is the ID of my ion-content
    this.content = this.app.getComponent('my-content');
  }
   scrollTo() {
     this.content.scrollTo(0, 500, 200);
   }
}
```


<table class="table" style="margin:0;">
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
        
  <code>Number</code>
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
        
  <code>Number</code>
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
        
  <code>Number</code>
      </td>
      <td>
        <p>Duration of the scroll animation in ms.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        tolerance
        
        
      </td>
      <td>
        
  <code>TODO</code>
      </td>
      <td>
        <p>TODO</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





* Returns: 
  <code>Promise</code> Returns a promise when done




<div id="scrollToTop"></div>

<h3>
<code>scrollToTop()</code>
  

</h3>

Scroll to the specified position.

```ts
@Page({
  template: `<ion-content id="my-content">
     <button (click)="scrollTop()"> Down 500px</button>
  </ion-content>`
)}
export class MyPage{
   constructor(app: IonicApp){
       this.app = app;
   }
  // Need to wait until the component has been initialized
  ngAfterViewInit() {
    // Here 'my-content' is the ID of my ion-content
    this.content = this.app.getComponent('my-content');
  }
   scrollTop() {
     this.content.scrollTop();
   }
}
```






* Returns: 
  <code>Promise</code> Returns a promise when done


<!-- related link --><!-- end content block -->


<!-- end body block -->

