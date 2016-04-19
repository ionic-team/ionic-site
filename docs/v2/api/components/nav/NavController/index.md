---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "navcontroller"
title: "NavController"
header_sub_title: "Ionic API Documentation"
doc: "NavController"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="nav-controller" href="#nav-controller"></a>

NavController






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/nav/nav-controller.ts#L13">
Improve this doc
</a>






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
<h3 id="injecting-navcontroller">Injecting NavController</h3>
<p>Injecting NavController will always get you an instance of the nearest
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
<h2 id="page-creation">Page creation</h2>
<p><em>For more information on the <code>@Page</code> decorator see the <a href="../../../decorators/Page/">@Page API
reference</a>.</em></p>
<p>Pages are created when they are added to the navigation stack.  For methods
like <a href="#push">push()</a>, the NavController takes any component class that is
decorated with <code>@Page</code> as its first argument.  The NavController then
compiles that component, adds it to the app and animates it into view.</p>
<p>By default, pages are cached and left in the DOM if they are navigated away
from but still in the navigation stack (the exiting page on a <code>push()</code> for
example).  They are destroyed when removed from the navigation stack (on
<a href="#pop">pop()</a> or <a href="#setRoot">setRoot()</a>).</p>
<h2 id="lifecycle-events">Lifecycle events</h2>
<p>Lifecycle events are fired during various stages of navigation.  They can be
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
<table>
<thead>
<tr>
<th>Page Event</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>onPageLoaded</code></td>
<td>Runs when the page has loaded. This event only happens once per page being created and added to the DOM. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The <code>onPageLoaded</code> event is good place to put your setup code for the page.</td>
</tr>
<tr>
<td><code>onPageWillEnter</code></td>
<td>Runs when the page is about to enter and become the active page.</td>
</tr>
<tr>
<td><code>onPageDidEnter</code></td>
<td>Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.</td>
</tr>
<tr>
<td><code>onPageWillLeave</code></td>
<td>Runs when the page is about to leave and no longer be the active page.</td>
</tr>
<tr>
<td><code>onPageDidLeave</code></td>
<td>Runs when the page has finished leaving and is no longer the active page.</td>
</tr>
<tr>
<td><code>onPageWillUnload</code></td>
<td>Runs when the page is about to be destroyed and have its elements removed.</td>
</tr>
<tr>
<td><code>onPageDidUnload</code></td>
<td>Runs after the page has been destroyed and its elements have been removed.</td>
</tr>
</tbody>
</table>
<h2 id="nav-transition-promises">Nav Transition Promises</h2>
<p>Navigation transitions are asynchronous, meaning they take a few moments to finish, and
the duration of a transition could be any number. In most cases the async nature of a
transition doesn&#39;t cause any problems and the nav controller is pretty good about handling
which transition was the most recent when multiple transitions have been kicked off.
However, when an app begins firing off many transitions, on the same stack at
<em>roughly</em> the same time, the nav controller can start to get lost as to which transition
should be finishing, and which transitions should not be animated.</p>
<p>In cases where an app&#39;s navigation can be altered by other async tasks, which may or
may not take a long time, it&#39;s best to rely on each nav transition&#39;s returned
promise. So instead of firing and forgetting multiple <code>push</code> or <code>pop</code> nav transitions,
it&#39;s better to fire the next nav transition when the previous one has finished.</p>
<p>In the example below, after the async operation has completed, we then want to transition
to another page. Where the potential problem comes in, is that if the async operation
completed 100ms after the first transition started, then kicking off another transition
halfway through the first transition ends up with a janky animation. Instead, it&#39;s best
to always ensure the first transition has already finished before starting the next.</p>
<pre><code class="lang-ts">// begin the first transition
let navTransition = this.nav.push(SomePage);

// start an async call, we&#39;re not sure how long it&#39;ll take
someAsyncOperation().then(() =&gt; {
  // incase the async operation completed faster than the time
  // it took to finish the first transition, this logic should
  // always ensure that the previous transition has resolved
  // first before kicking off the next transition
  navTransition.then(() =&gt; {
    this.nav.push(AnotherPage);
  });
});
</code></pre>

<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="setRoot"></div>

<h3>
<a class="anchor" name="setRoot" href="#setRoot"></a>
<code>setRoot(page,&nbsp;params,&nbsp;opts)</code>
  

</h3>

Set the root for the current navigation stack.


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
        <p>The name of the component you want to push on the navigation stack.</p>

        
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
        <p>Any nav-params you want to pass along to the next view.</p>

        
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
        <p>Any options you want to use pass to transtion.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="setPages"></div>

<h3>
<a class="anchor" name="setPages" href="#setPages"></a>
<code>setPages(pages,&nbsp;opts)</code>
  

</h3>

You can set the views of the current navigation stack and navigate to the
last view.


```ts
import {Page, NavController} from 'ionic-angular'
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


In this example, we're giving the current nav stack an array of pages.
Then the navigation stack will navigate to the last page in the array
and remove the previously active page.

By default animations are disabled, but they can be enabled by passing
options to the navigation controller.


```ts
import {Page, NavController} from 'ionic-angular'
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

You can also pass any navigation params to the individual pages in
the array.


```ts
import {Page, NavController} from 'ionic-angular';
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
        
  <code>array&lt;Type&gt;</code>
      </td>
      <td>
        <p>An arry of page components and their params to load in the stack.</p>

        
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
        <p>Nav options to go with this transition.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="push"></div>

<h3>
<a class="anchor" name="push" href="#push"></a>
<code>push(page,&nbsp;params,&nbsp;opts)</code>
  

</h3>

Push is how we can pass components and navigate to them. We push the component
we want to navigate to on to the navigation stack.

```ts
class MyClass{
   constructor(nav:NavController){
     this.nav = nav;
   }

   pushPage(){
     this.nav.push(SecondView);
   }
}
```

We can also pass along parameters to the next view, such as data that we have
on the current view. This is a similar concept to to V1 apps with `$stateParams`.

```ts
class MyClass{
   constructor(nav:NavController){
     this.nav = nav;
   }

   pushPage(user){
      // user is an object we have in our view
      // typically this comes from an ngFor or some array
      // here we can create an object with a property of
      // paramUser, and set its value to the user object we passed in
     this.nav.push(SecondView, { paramUser: user });
   }
}
```

We'll look at how we can access that data in the `SecondView` in the
navParam docs.

We can also pass any options to the transtion from that same method.

```ts
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
        <p>Nav options to go with this transition.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="present"></div>

<h3>
<a class="anchor" name="present" href="#present"></a>
<code>present(enteringView,&nbsp;opts)</code>
  

</h3>

Present is how app display overlays on top of the content, from within the
root level `NavController`. The `present` method is used by overlays, such
as `ActionSheet`, `Alert`, and `Modal`. The main difference between `push`
and `present` is that `present` takes a `ViewController` instance, whereas
`push` takes a `Page` component class. Additionally, `present` will place
the overlay in the root NavController's stack.

```ts
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
        <p>The component you want to push on the navigation stack.</p>

        
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
        <p>Nav options to go with this transition.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="insert"></div>

<h3>
<a class="anchor" name="insert" href="#insert"></a>
<code>insert(insertIndex,&nbsp;page,&nbsp;params,&nbsp;opts)</code>
  

</h3>

Inserts a view into the nav stack at the specified index. This is useful if
you need to add a view at any point in your navigation stack.

```ts
export class Detail {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   insertPage(){
     this.nav.insert(1, Info);
   }
 }
```

This will insert the `Info` page into the second slot of our navigation stack.



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
        <p>The index where to insert the page.</p>

        
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
        <p>The component you want to insert into the nav stack.</p>

        
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
        <p>Any nav-params you want to pass along to the next page.</p>

        
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
        <p>Nav options to go with this transition.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="insertPages"></div>

<h3>
<a class="anchor" name="insertPages" href="#insertPages"></a>
<code>insertPages(insertIndex,&nbsp;insertPages,&nbsp;opts)</code>
  

</h3>

Inserts multiple pages into the nav stack at the specified index.

```ts
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
        <p>The index where you want to insert the page.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        insertPages
        
        
      </td>
      <td>
        
  <code>array&lt;{page: Type, params=: any}&gt;</code>
      </td>
      <td>
        <p>An array of objects, each with a <code>page</code> and optionally <code>params</code> property.</p>

        
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
        <p>Nav options to go with this transition.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="pop"></div>

<h3>
<a class="anchor" name="pop" href="#pop"></a>
<code>pop(opts)</code>
  

</h3>

If you wanted to navigate back from a current view, you can use the
back-button or programatically call `pop()`. Similar to `push()`, you
can also pass navigation options.

```ts
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
        <p>Nav options to go with this transition.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="popToRoot"></div>

<h3>
<a class="anchor" name="popToRoot" href="#popToRoot"></a>
<code>popToRoot(opts)</code>
  

</h3>

Similar to `pop()`, this method let's you navigate back to the root of
the stack, no matter how many pages back that is.


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
        <p>Nav options to go with this transition.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="popTo"></div>

<h3>
<a class="anchor" name="popTo" href="#popTo"></a>
<code>popTo(view,&nbsp;opts)</code>
  

</h3>

Pop to a specific view in the history stack.


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
        <p>Nav options to go with this transition.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="remove"></div>

<h3>
<a class="anchor" name="remove" href="#remove"></a>
<code>remove(startIndex,&nbsp;removeCount,&nbsp;opts)</code>
  

</h3>

Removes a page from the nav stack at the specified index.

```ts
export class Detail {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   removePage(){
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
        <p>The starting index to remove pages from the stack. Default is the index of the last page.</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        removeCount
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>The number of pages to remove, defaults to remove <code>1</code>.</p>

        
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
        <p>Any options you want to use pass to transtion.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="canSwipeBack"></div>

<h3>
<a class="anchor" name="canSwipeBack" href="#canSwipeBack"></a>
<code>canSwipeBack()</code>
  

</h3>

If it's possible to use swipe back or not. If it's not possible
to go back, or swipe back is not enabled, then this will return `false`.
If it is possible to go back, and swipe back is enabled, then this
will return `true`.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> 

</div>




<div id="canGoBack"></div>

<h3>
<a class="anchor" name="canGoBack" href="#canGoBack"></a>
<code>canGoBack()</code>
  

</h3>

Returns `true` if there's a valid previous page that we can pop
back to. Otherwise returns `false`.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> 

</div>




<div id="isTransitioning"></div>

<h3>
<a class="anchor" name="isTransitioning" href="#isTransitioning"></a>
<code>isTransitioning()</code>
  

</h3>

Returns if the nav controller is actively transitioning or not.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> 

</div>




<div id="getByIndex"></div>

<h3>
<a class="anchor" name="getByIndex" href="#getByIndex"></a>
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
        <p>The index of the page to get.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> <p>Returns the view controller that matches the given index.</p>


</div>




<div id="getActive"></div>

<h3>
<a class="anchor" name="getActive" href="#getActive"></a>
<code>getActive()</code>
  

</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> <p>Returns the active page&#39;s view controller.</p>


</div>




<div id="isActive"></div>

<h3>
<a class="anchor" name="isActive" href="#isActive"></a>
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
<a class="anchor" name="getPrevious" href="#getPrevious"></a>
<code>getPrevious(view)</code>
  

</h3>

Returns the view controller which is before the given view controller.


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
  <code>viewController</code> 

</div>




<div id="first"></div>

<h3>
<a class="anchor" name="first" href="#first"></a>
<code>first()</code>
  

</h3>

Returns the first view controller in this nav controller's stack.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> 

</div>




<div id="last"></div>

<h3>
<a class="anchor" name="last" href="#last"></a>
<code>last()</code>
  

</h3>

Returns the last page in this nav controller's stack.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> 

</div>




<div id="indexOf"></div>

<h3>
<a class="anchor" name="indexOf" href="#indexOf"></a>
<code>indexOf(view)</code>
  

</h3>

Returns the index number of the given view controller.


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
  <code>number</code> 

</div>




<div id="length"></div>

<h3>
<a class="anchor" name="length" href="#length"></a>
<code>length()</code>
  

</h3>

Returns the number of views in this nav controller.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> <p>The number of views in this stack, including the current view.</p>


</div>




<div id="rootNav"></div>

<h3>
<a class="anchor" name="rootNav" href="#rootNav"></a>
<code>rootNav</code>
  

</h3>

Returns the root `NavController`.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>NavController</code> 

</div>


<!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#navigation'>Navigation Component Docs</a><!-- end content block -->


<!-- end body block -->

