---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "navcontroller"
title: "NavController"
header_sub_title: "Class in module "
doc: "NavController"
docType: "class"

---









<h1 class="api-title">


NavController






</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic/edit/2.0/ionic/components/nav/nav-controller.ts#L13'>
Improve this doc
</a>






<!-- description -->
<h2>Description</h2>

<p><em>For examples on the basic usage of NavController, check out the
<a href="../../../../components/#navigation">Navigation section</a> of the Component
docs.</em></p>
<p>NavController is the base class for navigation controller components like
<a href="../Nav/"><code>Nav</code></a> and <a href="../../Tabs/Tab/"><code>Tab</code></a>. You use navigation controllers
to navigate to <a href="#creating_pages">pages</a> in your app. At a basic level, a
navigation controller is an array of pages representing a particular history
(of a Tab for example). This array can be manipulated to navigate throughout
an app by pushing and popping pages or inserting and removing them at
arbitrary locations in history.</p>
<p>The current page is the last one in the array, or the top of the stack if we
think of it that way.  <a href="#push">Pushing</a> a new page onto the top of the
navigation stack causes the new page to be animated in, while <a href="#pop">popping</a>
the current page will navigate to the previous page in the stack.</p>
<p>Unless you are using a directive like <a href="../NavPush/">NavPush</a>, or need a
specific NavController, most times you will inject and use a reference to the
nearest NavController to manipulate the navigation stack.</p>
<p><h3 id="injecting_nav_controller">Injecting NavController</h3>
Injecting NavController will always get you an instance of the nearest
NavController, regardless of whether it is a Tab or a Nav.</p>
<p>Behind the scenes, when Ionic instantiates a new NavController, it creates an
injector with NavController bound to that instance (usually either a Nav or
Tab) and adds the injector to its own providers.  For more information on
providers and dependency injection, see <a href="">Providers and DI</a>.</p>
<p>Instead, you can inject NavController and know that it is the correct
navigation controller for most situations (for more advanced situations, see
<a href="../../Menu/Menu/">Menu</a> and <a href="../../Tab/Tab/">Tab</a>).</p>
<pre><code class="lang-ts">class MyComponent {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
</code></pre>
<p><h2 id="creating_pages">Page creation</h2>
<em>For more information on the <code>@Page</code> decorator see the <a href="../../../decorators/Page/">@Page API
reference</a>.</em></p>
<p>Pages are created when they are added to the navigation stack.  For methods
like <a href="#push">push()</a>, the NavController takes any component class that is
decorated with <code>@Page</code> as its first argument.  The NavController then
compiles that component, adds it to the app and animates it into view.</p>
<p>By default, pages are cached and left in the DOM if they are navigated away
from but still in the navigation stack (the exiting page on a <code>push()</code> for
example).  They are destroyed when removed from the navigation stack (on
<a href="#pop">pop()</a> or <a href="#setRoot">setRoot()</a>).</p>
<p><h2 id="Lifecycle">Lifecycle events</h2>
Lifecycle events are fired during various stages of navigation.  They can be
defined in any <code>@Page</code> decorated component class.</p>
<pre><code class="lang-ts">@Page({
  template: &#39;Hello World&#39;
})
class HelloWorld {
  onPageLoaded() {
    console.log(&quot;I&#39;m alive!&quot;);
  }
  onPageWillLeave() {
    console.log(&quot;Looks like I&#39;m about to leave :(&quot;);
  }
}
</code></pre>
<ul>
<li><code>onPageLoaded</code> - Runs when the page has loaded. This event only happens once per page being created and added to the DOM. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The <code>onPageLoaded</code> event is good place to put your setup code for the page.</li>
<li><code>onPageWillEnter</code> - Runs when the page is about to enter and become the active page.</li>
<li><code>onPageDidEnter</code> - Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.</li>
<li><code>onPageWillLeave</code> - Runs when the page is about to leave and no longer be the active page.</li>
<li><code>onPageDidLeave</code> - Runs when the page has finished leaving and is no longer the active page.</li>
<li><code>onPageWillUnload</code> - Runs when the page is about to be destroyed and have its elements removed.</li>
<li><code>onPageDidUnload</code> - Runs after the page has been destroyed and its elements have been removed.</li>
</ul>

<!-- @usage tag -->


<!-- @property tags -->


<!-- methods on the class -->

<h2>Methods</h2>

<div id="id"></div>

<h3>
<code>id()</code>
  

</h3>












<div id="providers"></div>

<h3>
<code>providers()</code>
  

</h3>












<div id="router"></div>

<h3>
<code>router()</code>
  

</h3>












<div id="sbGesture"></div>

<h3>
<code>sbGesture()</code>
  

</h3>












<div id="parent"></div>

<h3>
<code>parent()</code>
  

</h3>












<div id="app"></div>

<h3>
<code>app()</code>
  

</h3>












<div id="config"></div>

<h3>
<code>config()</code>
  

</h3>












<div id="keyboard"></div>

<h3>
<code>keyboard()</code>
  

</h3>












<div id="setRoot"></div>

<h3>
<code>setRoot(page,&nbsp;params,&nbsp;opts)</code>
  

</h3>

Set the root for the current navigation stack


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
        page
        
        
      </td>
      <td>
        
  <code>Type</code>
      </td>
      <td>
        <p>The name of the component you want to push on the navigation stack</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        params
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any nav-params you want to pass along to the next view</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> Returns a promise when done
</div>




<div id="setPages"></div>

<h3>
<code>setPages(pages,&nbsp;opts)</code>
  

</h3>

You can set the views of the current navigation stack and navigate to the last view past


```typescript
import {Page, NavController} from 'ionic/ionic'
import {Detail} from '../detail/detail'
import {Info} from '../info/info'

 export class Home {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   setPages() {
     this.nav.setPages([ {page: List}, {page: Detail}, {page:Info} ]);
   }
 }
```


In this example, we're giving the current nav stack an array of pages. Then the navigation stack will navigate to the last view in the array and remove the orignal view you came from.

By default, animations are disabled, but they can be enabled by passing options to the navigation controller


```typescript
import {Page, NavController} from 'ionic/ionic'
import {Detail} from '../detail/detail'

 export class Home {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   setPages() {
     this.nav.setPages([ {page: List}, {page: Detail} ], {
       animate: true
     });
   }
 }
```


You can also pass any navigation params to the individual pages in the array.


```typescript
import {Page, NavController} from 'ionic/ionic';
import {Info} from '../info/info';
import {List} from '../list/list';
import {Detail} from '../detail/detail';

 export class Home {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   setPages() {
     this.nav.setPages([{
       page: Info
     }, {
       page: List,
       params: {tags: 'css'}
     }, {
       page: Detail,
       params: {id: 325}
     }]);
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
        pages
        
        
      </td>
      <td>
        
  <code>Array&lt;Type&gt;</code>
      </td>
      <td>
        <p>An arry of page components and their params to load in the stack</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any options you want to use pass</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> Returns a promise when the pages are set
</div>




<div id="push"></div>

<h3>
<code>push(page,&nbsp;params,&nbsp;opts)</code>
  

</h3>

Push is how we can pass components and navigate to them. We push the component we want to navigate to on to the navigation stack.

```typescript
class MyClass{
   constructor(nav:NavController){
     this.nav = nav;
   }

   pushPage(){
     this.nav.push(SecondView);
   }
}
```

We can also pass along parameters to the next view, such as data that we have on the current view. This is a similar concept to to V1 apps with `$stateParams`.

```typescript
class MyClass{
   constructor(nav:NavController){
     this.nav = nav;
   }

   pushPage(user){
     this.nav.push(SecondView,{
      // user is an object we have in our view
      // typically this comes from an ngFor or some array
      // here we can create an object with a property of
      // paramUser, and set it's value to the user object we passed in
      paramUser: user
     });
   }
}
```

We'll look at how we can access that data in the `SecondView` in the navParam docs

We can also pass any options to the transtion from that same method

```typescript
class MyClass{
   constructor(nav: NavController){
     this.nav = nav;
   }

   pushPage(user){
     this.nav.push(SecondView,{
      // user is an object we have in our view
      // typically this comes from an ngFor or some array
      // here we can create an object with a property of
      // paramUser, and set it's value to the user object we passed in
      paramUser: user
     },{
      // here we can configure things like the animations direction or
      // or if the view should animate at all.
      direction: 'back'
     });
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
        page
        
        
      </td>
      <td>
        
  <code>Type</code>
      </td>
      <td>
        <p>The page component class you want to push on to the navigation stack</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        params
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any nav-params you want to pass along to the next view</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> Returns a promise, which resolves when the transition has completed
</div>




<div id="present"></div>

<h3>
<code>present(enteringView,&nbsp;opts)</code>
  

</h3>

Present is how we display overlays on top of the content, from within the
root level `NavController`. The `present` method is used by overlays, such
as `ActionSheet`, `Alert`, and `Modal`. The main difference between `push`
and `present`, is that `present` takes a `ViewController` instance, whereas
`push` takes a `Page` component class. Additionally, `present` will place
the overlay in the root NavController's stack.

```typescript
class MyClass{
   constructor(nav: NavController) {
     this.nav = nav;
   }

   presentModal() {
     let modal = Modal.create(ProfilePage);
     this.nav.present(modal);
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
        enteringView
        
        
      </td>
      <td>
        
  <code>ViewController</code>
      </td>
      <td>
        <p>The name of the component you want to push on the navigation stack</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> Returns a promise, which resolves when the transition has completed
</div>




<div id="insert"></div>

<h3>
<code>insert(insertIndex,&nbsp;page,&nbsp;params,&nbsp;opts)</code>
  

</h3>

Inserts a view into the nav stack at the specified index.
This is useful if you need to add a view at any point in your navigation stack

```typescript
export class Detail {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   insertPage(){
     this.nav.insert(1, Info);
   }
 }
```

This will insert the `Info` page into the second slot of our navigation stack



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
        insertIndex
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The index where you want to insert the page</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        page
        
        
      </td>
      <td>
        
  <code>Type</code>
      </td>
      <td>
        <p>The name of the component you want to insert into the nav stack</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        params
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any nav-params you want to pass along to the next page</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> Returns a promise when the page has been inserted into the navigation stack
</div>




<div id="insertPages"></div>

<h3>
<code>insertPages(insertIndex,&nbsp;insertPages,&nbsp;opts)</code>
  

</h3>

Inserts multiple pages into the nav stack at the specified index.

```typescript
export class Detail {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   insertPages(){
     let pages = [
       { page: Info },
       { page: ProfileList },
       { page: ProfileDetail, params: {userId:5} }
     ];
     this.nav.insertPages(2, pages);
   }
 }
```

This will insert each of the pages in the array, starting at the third slot
(second index) of the nav stack. The last page in the array will animate
in and become the active page.



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
        insertIndex
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The index where you want to insert the page</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        insertPages
        
        
      </td>
      <td>
        
  <code>Array&lt;{page: Type, params=: any}&gt;</code>
      </td>
      <td>
        <p>An array of objects, each with a <code>page</code> and optionally <code>params</code> property</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> Returns a promise when the pages have been inserted into the navigation stack
</div>




<div id="pop"></div>

<h3>
<code>pop(opts)</code>
  

</h3>

If you wanted to navigate back from a current view, you can use the back-button or programatically call `pop()`
Similar to `push()`, you can pass animation options.

```typescript
class SecondView{
   constructor(nav:NavController){
     this.nav = nav;
   }
   goBack(){
     this.nav.pop();
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
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> Returns a promise when the transition is completed
</div>




<div id="popToRoot"></div>

<h3>
<code>popToRoot(opts)</code>
  

</h3>

Similar to `pop()`, this method let's you navigate back to the root of the stack, no matter how many views that is


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
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="popTo"></div>

<h3>
<code>popTo(view,&nbsp;opts)</code>
  

</h3>

Pop to a specific view in the history stack


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
        view
        
        
      </td>
      <td>
        
  <code>ViewController</code>
      </td>
      <td>
        <p>to pop to</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="remove"></div>

<h3>
<code>remove(startIndex,&nbsp;opts,&nbsp;opts)</code>
  

</h3>

Removes a view from the nav stack at the specified index.

```typescript
export class Detail {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   removeView(){
     this.nav.remove(1);
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
        startIndex
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The starting index to remove views from the nav stack</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>removeCount</code>
      </td>
      <td>
        <p>The number of views to remove, defaults to remove <code>1</code>.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> Returns a promise when the view has been removed
</div>




<div id="isSwipeBackEnabled"></div>

<h3>
<code>isSwipeBackEnabled(isSwipeBackEnabled)</code>
  

</h3>

Check to see if swipe-to-go-back is enabled


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
        isSwipeBackEnabled
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Set whether or not swipe-to-go-back is enabled</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> Whether swipe-to-go-back is enabled
</div>




<div id="canSwipeBack"></div>

<h3>
<code>canSwipeBack()</code>
  

</h3>

If it's possible to use swipe back or not. If it's not possible
to go back, or swipe back is not enable then this will return false.
If it is possible to go back, and swipe back is enabled, then this
will return true.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> Whether you can swipe to go back
</div>




<div id="canGoBack"></div>

<h3>
<code>canGoBack()</code>
  

</h3>

Returns `true` if there's a valid previous page that we can pop back to.
Otherwise returns false.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> Whether there is a page to go back to
</div>




<div id="getByIndex"></div>

<h3>
<code>getByIndex(index)</code>
  

</h3>




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
        <p>The index of the page you want to get</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> Returns the component that matches the index given
</div>




<div id="getActive"></div>

<h3>
<code>getActive()</code>
  

</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> Returns the active page's view controller.
</div>




<div id="isActive"></div>

<h3>
<code>isActive(view)</code>
  

</h3>




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
        view
        
        
      </td>
      <td>
        
  <code>ViewController</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> 
</div>




<div id="getPrevious"></div>

<h3>
<code>getPrevious(view)</code>
  

</h3>




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
        view
        
        
      </td>
      <td>
        
  <code>ViewController</code>
      </td>
      <td>
        <p>The ViewController to get the previous view to</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> 
</div>




<div id="first"></div>

<h3>
<code>first()</code>
  

</h3>

First page in this nav controller's stack.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> Returns the first component page in the current stack
</div>




<div id="last"></div>

<h3>
<code>last()</code>
  

</h3>

Last page in this nav controller's stack. This would not return a page which is about to be destroyed.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> Returns the last component page in the current stack
</div>




<div id="indexOf"></div>

<h3>
<code>indexOf(view)</code>
  

</h3>




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
        view
        
        
      </td>
      <td>
        
  <code>ViewController</code>
      </td>
      <td>
        
        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> Returns the index number of the view
</div>




<div id="length"></div>

<h3>
<code>length()</code>
  

</h3>

Number of sibling views in the nav controller.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> The number of views in stack, including the current view
</div>




<div id="rootNav"></div>

<h3>
<code>rootNav()</code>
  

</h3>

Returns the root NavController.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>NavController</code> 
</div>


<!-- related link -->

<h2>Related</h2>

<a href='/docs/v2/components#navigation'>Navigation Component Docs</a><!-- end content block -->


<!-- end body block -->

