---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "{{NavController | slugify}}"
title: "NavController"
header_sub_title: "Class in module "
doc: "NavController"
docType: "class"

---




<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/nav/nav-controller.ts#L11'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/nav/nav-controller.ts#L11'>
    Improve this doc
  </a>

</div>




<h1 class="api-title">


NavController






</h1>






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
<em>For more information on the <code>@Page</code> decorator see the <a href="../../../config/Page/">@Page API
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






<h2>Methods</h2>

<div id="push"></div>

<h3>
<code>push(component, params, opts)</code>

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
     },{
      // here we can configure things like the animations direction or
      // or if the view should animate at all.
      direction: back
     });
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
        component
        
        
      </td>
      <td>
        
  <code>Any</code>
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
        
  <code>Object</code>
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
        
  <code>Object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> Returns a promise when the transition is completed




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
        opts
        
        
      </td>
      <td>
        
  <code>Object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> Returns a promise when the transition is completed




<div id="popToRoot"></div>

<h3>
<code>popToRoot(opts)</code>

</h3>

Similar to `pop()`, this method let's you navigate back to the root of the stack, no matter how many views that is



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
        opts
        
        
      </td>
      <td>
        
  <code>Object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="insert"></div>

<h3>
<code>insert(index, component)</code>

</h3>

Inserts a view into the nav stack at the specified index.
This is useful if you need to add a view at any point in your navigation stack

```typescript
export class Detail {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   insertView(){
     this.nav.insert(1,Info)
   }
 }
```

This will insert the `Info` view into the second slot of our navigation stack




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
        index
        
        
      </td>
      <td>
        
  <code>Number</code>
      </td>
      <td>
        <p>The index where you want to insert the view</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        component
        
        
      </td>
      <td>
        
  <code>Any</code>
      </td>
      <td>
        <p>The name of the component you want to insert into the nav stack</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> Returns a promise when the view has been inserted into the navigation stack




<div id="remove"></div>

<h3>
<code>remove(index, opts)</code>

</h3>

Removes a view from the nav stack at the specified index.

```typescript
export class Detail {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   removeView(){
     this.nav.remove(1)
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
        index
        
        
      </td>
      <td>
        
  <code>Number</code>
      </td>
      <td>
        <p>Remove the view from the nav stack at that index</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>Object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> Returns a promise when the view has been removed




<div id="setPages"></div>

<h3>
<code>setPages(component, opts)</code>

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
     this.nav.setPages([List,Detail, Info]);
   }
 }
```


In this example, we're giving the current nav stack an array of pages. Then the navigation stack will navigate to the last view in the array and remove the orignal view you came from.

By default, animations are disabled, but they can be enabled by passing options to the navigation controller


```typescript
import {Page, NavController} from 'ionic/ionic'
import {Detail} from '../detail/detail'
import {Info} from '../info/info'

 export class Home {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   setPages() {
     this.nav.setPages([List,Detail, Info],{
       animate: true
     });
   }
 }
```


You can also pass any navigation params to the individual pages in the array.


```typescript
import {Page, NavController} from 'ionic/ionic'
import {Detail} from '../detail/detail'
import {Info} from '../info/info'

 export class Home {
   constructor(nav: NavController) {
     this.nav = nav;
   }
   setPages() {
     this.nav.setPages([{
       componentType: List,
       params: {id: 43}
     }, {
       componentType: Detail,
       params: {id: 45}
     },{
       componentType: Info,
       params: {id: 5}
     }]);
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
        component
        
        
      </td>
      <td>
        
  <code>Array</code>
      </td>
      <td>
        <p>an arry of components to load in the stack</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        opts
        
        
      </td>
      <td>
        
  <code>Object</code>
      </td>
      <td>
        <p>Any options you want to use pass</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> Returns a promise when the pages are set




<div id="setRoot"></div>

<h3>
<code>setRoot(The, params, opts)</code>

</h3>

Set the root for the current navigation stack



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
        The
        
        
      </td>
      <td>
        
  <code>Component</code>
      </td>
      <td>
        <p>name of the component you want to push on the navigation stack</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        params
        
        
      </td>
      <td>
        
  <code>Object</code>
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
        
  <code>Object</code>
      </td>
      <td>
        <p>Any options you want to use pass to transtion</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> Returns a promise when done




<div id="isSwipeBackEnabled"></div>

<h3>
<code>isSwipeBackEnabled([isSwipeBackEnabled])</code>

</h3>

Check to see if swipe-to-go-back is enabled



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
        isSwipeBackEnabled
        
        <div><em>(optional)</em></div>
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






* Returns: 
  <code>boolean</code> Whether swipe-to-go-back is enabled




<div id="canSwipeBack"></div>

<h3>
<code>canSwipeBack()</code>

</h3>

If it's possible to use swipe back or not. If it's not possible
to go back, or swipe back is not enable then this will return false.
If it is possible to go back, and swipe back is enabled, then this
will return true.






* Returns: 
  <code>boolean</code> Whether you can swipe to go back




<div id="canGoBack"></div>

<h3>
<code>canGoBack()</code>

</h3>

Returns `true` if there's a valid previous page that we can pop back to.
Otherwise returns false.






* Returns: 
  <code>boolean</code> Whether there is a page to go back to




<div id="getByIndex"></div>

<h3>
<code>getByIndex(The)</code>

</h3>





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
        The
        
        
      </td>
      <td>
        
  <code>Index</code>
      </td>
      <td>
        <p>index of the page you want to get</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Component</code> Returns the component that matches the index given




<div id="first"></div>

<h3>
<code>first()</code>

</h3>

First page in this nav controller's stack. This would not return a page which is about to be destroyed.






* Returns: 
  <code>Component</code> Returns the first component page in the current stack




<div id="last"></div>

<h3>
<code>last()</code>

</h3>

Last page in this nav controller's stack. This would not return a page which is about to be destroyed.






* Returns: 
  <code>Component</code> Returns the last component page in the current stack




<div id="length"></div>

<h3>
<code>length()</code>

</h3>

Number of sibling views in the nav controller. This does
not include views which are about to be destroyed.






* Returns: 
  <code>Number</code> The number of views in stack, including the current view




<h2>Related</h2>

<a href='/docs/v2/components#navigation'>Navigation Component Docs</a><!-- end content block -->


<!-- end body block -->

