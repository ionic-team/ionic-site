---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "{{NavController | slugify}}"
title: "NavController"
header_sub_title: "Class in module "
doc: "NavController"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/components/nav/nav-controller.ts#L10'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/components/nav/nav-controller.ts#L10'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  NavController



</h1>





<p><em>For examples on the basic usage of NavController, check out the <a href="../../../../components/#navigation">Navigation section</a>
of the Component docs.</em></p>
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
<pre><code class="lang-ts">// class NavController
this.providers = Injector.resolve([
  provide(NavController, {useValue: this})
]);
</code></pre>
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
decorated with @Page as its first argument.  The NavController then
<a href="">compiles</a> that component, adds it to the DOM in a similar fashion to
Angular&#39;s <a href="https://angular.io/docs/js/latest/api/core/DynamicComponentLoader-interface.html">DynamicComponentLoader</a>,
and animates it into view.</p>
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


<h1 class="class export">NavController <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/components/nav/nav-controller.ts#L11-L1280">ionic/components/nav/nav-controller.ts (line 11)</a>
</p>
## Members

<div id="isTransitioning"></div>
<h2>
  <code>isTransitioning()</code>

</h2>

Boolean if the nav controller is actively transitioning or not.






* Returns: 
  <code>bool</code> 




<div id="setTransitioning"></div>
<h2>
  <code>setTransitioning()</code>

</h2>












<div id="NavController#push"></div>
<h2>
  <code>NavController#push(The, params, opts)</code>

</h2>

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
      animate: true,
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
  <code>Promise</code> Returns a promise when the transition is completed




<div id="NavController#pop"></div>
<h2>
  <code>NavController#pop(opts)</code>

</h2>

If you wanted to navigate back from a current view, you can use the back-button or programatically call `pop()`
Similar to `push()`, you can pass animation options.
```typescript
class SecondView{
   constructor(nav:NavController){
     this.nav = nav;
   }

   goBack(){
     this.nav.pop({
      animate: true,
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
<h2>
  <code>popToRoot(opts)</code>

</h2>

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
<h2>
  <code>insert(The, The)</code>

</h2>

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
        The
        
        
      </td>
      <td>
        
  <code>Index</code>
      </td>
      <td>
        <p>index where you want to insert the view</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        The
        
        
      </td>
      <td>
        
  <code>Component</code>
      </td>
      <td>
        <p>name of the component you want to insert into the nav stack</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> Returns a promise when the view has been inserted into the navigation stack




<div id="remove"></div>
<h2>
  <code>remove(Remove, opts)</code>

</h2>

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
        Remove
        
        
      </td>
      <td>
        
  <code>Index</code>
      </td>
      <td>
        <p>the view from the nav stack at that index</p>

        
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
<h2>
  <code>setPages(an, opts)</code>

</h2>

Set the view stack to reflect the given component classes.



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
        an
        
        
      </td>
      <td>
        
  <code>Component</code>
      </td>
      <td>
        <p>arry of components to load in the stack</p>

        
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
  <code>Promise</code> TODO




<div id="setRoot"></div>
<h2>
  <code>setRoot(The, params, opts)</code>

</h2>

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




<div id="loadPage"></div>
<h2>
  <code>loadPage()</code>

</h2>












<div id="isSwipeBackEnabled"></div>
<h2>
  <code>isSwipeBackEnabled([isSwipeBackEnabled])</code>

</h2>

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
<h2>
  <code>canSwipeBack()</code>

</h2>

If it's possible to use swipe back or not. If it's not possible
to go back, or swipe back is not enable then this will return false.
If it is possible to go back, and swipe back is enabled, then this
will return true.






* Returns: 
  <code>boolean</code> Whether you can swipe to go back




<div id="canGoBack"></div>
<h2>
  <code>canGoBack()</code>

</h2>

Returns `true` if there's a valid previous view that we can pop back to.
Otherwise returns false.






* Returns: 
  <code>boolean</code> Whether there is a view to go back to




<div id="getByIndex"></div>
<h2>
  <code>getByIndex(The)</code>

</h2>





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
        <p>index of the view you want to get</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Component</code> Returns the component that matches the index given




<div id="first"></div>
<h2>
  <code>first()</code>

</h2>

First view in this nav controller's stack. This would
not return an view which is about to be destroyed.






* Returns: 
  <code>Component</code> Returns the first component view in the current stack




<div id="last"></div>
<h2>
  <code>last()</code>

</h2>

Last view in this nav controller's stack. This would
not return an view which is about to be destroyed.






* Returns: 
  <code>Component</code> Returns the last component view in the current stack




<div id="length"></div>
<h2>
  <code>length()</code>

</h2>

Number of sibling views in the nav controller. This does
not include views which are about to be destroyed.






* Returns: 
  <code>Number</code> The number of views in stack, including the current view




