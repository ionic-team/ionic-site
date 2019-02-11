---
layout: "fluid/docs_base"
version: "3.9.2"
versionHref: "/docs"
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

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master/src/navigation/nav-controller.ts#L6">
Improve this doc
</a>






<p>NavController is the base class for navigation controller components like
<a href="../../components/nav/Nav/"><code>Nav</code></a> and <a href="../../components/tabs/Tab/"><code>Tab</code></a>. You use navigation controllers
to navigate to <a href="#view-creation">pages</a> in your app. At a basic level, a
navigation controller is an array of pages representing a particular history
(of a Tab for example). This array can be manipulated to navigate throughout
an app by pushing and popping pages or inserting and removing them at
arbitrary locations in history.</p>
<p>The current page is the last one in the array, or the top of the stack if we
think of it that way. <a href="#push">Pushing</a> a new page onto the top of the
navigation stack causes the new page to be animated in, while <a href="#pop">popping</a>
the current page will navigate to the previous page in the stack.</p>
<p>Unless you are using a directive like <a href="../../components/nav/NavPush/">NavPush</a>, or need a
specific NavController, most times you will inject and use a reference to the
nearest NavController to manipulate the navigation stack.</p>
<h2 id="basic-usage">Basic usage</h2>
<p>The simplest way to navigate through an app is to create and initialize a new
nav controller using the <code>&lt;ion-nav&gt;</code> component.  <code>ion-nav</code> extends the <code>NavController</code>
class.</p>
<pre><code class="lang-typescript">import { Component } from `@angular/core`;
import { StartPage } from &#39;./start-page&#39;;

@Component(
  template: `&lt;ion-nav [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;`
})
class MyApp {
  // set the rootPage to the first page we want displayed
  public rootPage: any = StartPage;

  constructor(){
  }
}
</code></pre>
<h3><a class="anchor" name="injecting-navcontroller" href="#injecting-navcontroller">Injecting NavController</a></h3>

<p>Injecting NavController will always get you an instance of the nearest
NavController, regardless of whether it is a Tab or a Nav.</p>
<p>Behind the scenes, when Ionic instantiates a new NavController, it creates an
injector with NavController bound to that instance (usually either a Nav or
Tab) and adds the injector to its own providers.  For more information on
providers and dependency injection, see <a href="https://angular.io/docs/ts/latest/guide/dependency-injection.html">Dependency Injection</a>.</p>
<p>Instead, you can inject NavController and know that it is the correct
navigation controller for most situations (for more advanced situations, see
<a href="../../menu/Menu/">Menu</a> and <a href="../../components/tabs/Tab/">Tab</a>).</p>
<pre><code class="lang-ts">import { NavController } from &#39;ionic-angular&#39;;

class MyComponent {
  constructor(public navCtrl: NavController) {

  }
}
</code></pre>
<h3><a class="anchor" name="navigating-from-the-root-component" href="#navigating-from-the-root-component">Navigating from the Root component</a></h3>

<p>What if you want to control navigation from your root app component?
You can&#39;t inject <code>NavController</code> because any components that are navigation
controllers are <em>children</em> of the root component so they aren&#39;t available
to be injected.</p>
<p>By adding a reference variable to the <code>ion-nav</code>, you can use <code>@ViewChild</code> to
get an instance of the <code>Nav</code> component, which is a navigation controller
(it extends <code>NavController</code>):</p>
<pre><code class="lang-typescript">import { Component, ViewChild } from &#39;@angular/core&#39;;
import { NavController } from &#39;ionic-angular&#39;;

@Component({
   template: &#39;&lt;ion-nav #myNav [root]=&quot;rootPage&quot;&gt;&lt;/ion-nav&gt;&#39;
})
export class MyApp {
   @ViewChild(&#39;myNav&#39;) nav: NavController
   public rootPage: any = TabsPage;

   // Wait for the components in MyApp&#39;s template to be initialized
   // In this case, we are waiting for the Nav with reference variable of &quot;#myNav&quot;
   ngOnInit() {
      // Let&#39;s navigate from TabsPage to Page1
      this.nav.push(Page1);
   }
}
</code></pre>
<h3><a class="anchor" name="navigating-from-an-overlay-component" href="#navigating-from-an-overlay-component">Navigating from an Overlay Component</a></h3>

<p>What if you wanted to navigate from an overlay component (popover, modal, alert, etc)?
In this example, we&#39;ve displayed a popover in our app. From the popover, we&#39;ll get a
reference of the root <code>NavController</code> in our app, using the <code>getRootNav()</code> method.</p>
<pre><code class="lang-typescript">import { Component } from &#39;@angular/core&#39;;
import { App, ViewController } from &#39;ionic-angular&#39;;

@Component({
    template: `
    &lt;ion-content&gt;
      &lt;h1&gt;My PopoverPage&lt;/h1&gt;
      &lt;button ion-button (click)=&quot;pushPage()&quot;&gt;Call pushPage&lt;/button&gt;
     &lt;/ion-content&gt;
    `
  })
  class PopoverPage {
    constructor(
      public viewCtrl: ViewController
      public appCtrl: App
    ) {}

    pushPage() {
      this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(SecondPage);
    }
  }
</code></pre>
<h2 id="view-creation">View creation</h2>
<p>Views are created when they are added to the navigation stack.  For methods
like <a href="#push">push()</a>, the NavController takes any component class that is
decorated with <code>@Component</code> as its first argument.  The NavController then
compiles that component, adds it to the app and animates it into view.</p>
<p>By default, pages are cached and left in the DOM if they are navigated away
from but still in the navigation stack (the exiting page on a <code>push()</code> for
example).  They are destroyed when removed from the navigation stack (on
<a href="#pop">pop()</a> or <a href="#setRoot">setRoot()</a>).</p>
<h2 id="pushing-a-view">Pushing a View</h2>
<p>To push a new view onto the navigation stack, use the <code>push</code> method.
If the page has an <a href="../toolbar/Navbar/"><code>&lt;ion-navbar&gt;</code></a>,
a back button will automatically be added to the pushed view.</p>
<p>Data can also be passed to a view by passing an object to the <code>push</code> method.
The pushed view can then receive the data by accessing it via the <code>NavParams</code>
class.</p>
<pre><code class="lang-typescript">import { Component } from &#39;@angular/core&#39;;
import { NavController } from &#39;ionic-angular&#39;;
import { OtherPage } from &#39;./other-page&#39;;
@Component({
   template: `
   &lt;ion-header&gt;
     &lt;ion-navbar&gt;
       &lt;ion-title&gt;Login&lt;/ion-title&gt;
     &lt;/ion-navbar&gt;
   &lt;/ion-header&gt;

   &lt;ion-content&gt;
     &lt;button ion-button (click)=&quot;pushPage()&quot;&gt;
       Go to OtherPage
     &lt;/button&gt;
   &lt;/ion-content&gt;
   `
})
export class StartPage {
  constructor(public navCtrl: NavController) {
  }

  pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(OtherPage, {
      id: &quot;123&quot;,
      name: &quot;Carl&quot;
    });
  }
}

import { NavParams } from &#39;ionic-angular&#39;;

@Component({
  template: `
  &lt;ion-header&gt;
    &lt;ion-navbar&gt;
      &lt;ion-title&gt;Other Page&lt;/ion-title&gt;
    &lt;/ion-navbar&gt;
  &lt;/ion-header&gt;
  &lt;ion-content&gt;I&#39;m the other page!&lt;/ion-content&gt;`
})
class OtherPage {
  constructor(private navParams: NavParams) {
     let id = navParams.get(&#39;id&#39;);
     let name = navParams.get(&#39;name&#39;);
  }
}
</code></pre>
<h2 id="removing-a-view">Removing a view</h2>
<p>To remove a view from the stack, use the <code>pop</code> method.
Popping a view will transition to the previous view.</p>
<pre><code class="lang-ts">import { Component } from &#39;@angular/core&#39;;
import { NavController } from &#39;ionic-angular&#39;;

@Component({
  template: `
  &lt;ion-header&gt;
    &lt;ion-navbar&gt;
      &lt;ion-title&gt;Other Page&lt;/ion-title&gt;
    &lt;/ion-navbar&gt;
  &lt;/ion-header&gt;
  &lt;ion-content&gt;I&#39;m the other page!&lt;/ion-content&gt;`
})
class OtherPage {
   constructor(public navCtrl: NavController ){
   }

   popView(){
     this.navCtrl.pop();
   }
}
</code></pre>
<h2 id="lifecycle-events">Lifecycle events</h2>
<p>Lifecycle events are fired during various stages of navigation.  They can be
defined in any component type which is pushed/popped from a <code>NavController</code>.</p>
<pre><code class="lang-ts">import { Component } from &#39;@angular/core&#39;;

@Component({
  template: &#39;Hello World&#39;
})
class HelloWorld {
  ionViewDidLoad() {
    console.log(&quot;I&#39;m alive!&quot;);
  }
  ionViewWillLeave() {
    console.log(&quot;Looks like I&#39;m about to leave :(&quot;);
  }
}
</code></pre>
<table>
<thead>
<tr>
<th>Page Event</th>
<th>Returns</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>ionViewDidLoad</code></td>
<td>void</td>
<td>Runs when the page has loaded. This event only happens once per page being created. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The <code>ionViewDidLoad</code> event is good place to put your setup code for the page.</td>
</tr>
<tr>
<td><code>ionViewWillEnter</code></td>
<td>void</td>
<td>Runs when the page is about to enter and become the active page.</td>
</tr>
<tr>
<td><code>ionViewDidEnter</code></td>
<td>void</td>
<td>Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.</td>
</tr>
<tr>
<td><code>ionViewWillLeave</code></td>
<td>void</td>
<td>Runs when the page is about to leave and no longer be the active page.</td>
</tr>
<tr>
<td><code>ionViewDidLeave</code></td>
<td>void</td>
<td>Runs when the page has finished leaving and is no longer the active page.</td>
</tr>
<tr>
<td><code>ionViewWillUnload</code></td>
<td>void</td>
<td>Runs when the page is about to be destroyed and have its elements removed.</td>
</tr>
<tr>
<td><code>ionViewCanEnter</code></td>
<td>boolean/Promise&lt;void&gt;</td>
<td>Runs before the view can enter. This can be used as a sort of &quot;guard&quot; in authenticated views where you need to check permissions before the view can enter</td>
</tr>
<tr>
<td><code>ionViewCanLeave</code></td>
<td>boolean/Promise&lt;void&gt;</td>
<td>Runs before the view can leave. This can be used as a sort of &quot;guard&quot; in authenticated views where you need to check permissions before the view can leave</td>
</tr>
</tbody>
</table>
<h2 id="nav-guards">Nav Guards</h2>
<p>In some cases, a developer should be able to control views leaving and entering. To allow for this, NavController has the <code>ionViewCanEnter</code> and <code>ionViewCanLeave</code> methods.
Similar to Angular route guards, but are more integrated with NavController. For example, if you wanted to prevent a user from leaving a view:</p>
<pre><code class="lang-ts">export class MyClass{
 constructor(
   public navCtrl: NavController
  ){}

  pushPage(){
    this.navCtrl.push(DetailPage);
  }

  ionViewCanLeave(): boolean{
   // here we can either return true or false
   // depending on if we want to leave this view
   if(isValid(randomValue)){
      return true;
    } else {
      return false;
    }
  }
}
</code></pre>
<p>We need to make sure that our <code>navCtrl.push</code> has a catch in order to catch the and handle the error.
If you need to prevent a view from entering, you can do the same thing</p>
<pre><code class="lang-ts">export class MyClass{
 constructor(
   public navCtrl: NavController
  ){}

  pushPage(){
    this.navCtrl.push(DetailPage);
  }

}

export class DetailPage(){
  constructor(
    public navCtrl: NavController
  ){}
  ionViewCanEnter(): boolean{
   // here we can either return true or false
   // depending on if we want to leave this view
   if(isValid(randomValue)){
      return true;
    } else {
      return false;
    }
  }
}
</code></pre>
<p>Similar to <code>ionViewCanLeave</code> we still need a catch on the original <code>navCtrl.push</code> in order to handle it properly.
When handling the back button in the <code>ion-navbar</code>, the catch is already taken care of for you by the framework.</p>
<h2 id="navoptions">NavOptions</h2>
<p>Some methods on <code>NavController</code> allow for customizing the current transition.
To do this, we can pass an object with the modified properites.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>animate</td>
<td><code>boolean</code></td>
<td>Whether or not the transition should animate.</td>
</tr>
<tr>
<td>animation</td>
<td><code>string</code></td>
<td>What kind of animation should be used.</td>
</tr>
<tr>
<td>direction</td>
<td><code>string</code></td>
<td>The conceptual direction the user is navigating. For example, is the user navigating <code>forward</code>, or <code>back</code>?</td>
</tr>
<tr>
<td>duration</td>
<td><code>number</code></td>
<td>The length in milliseconds the animation should take.</td>
</tr>
<tr>
<td>easing</td>
<td><code>string</code></td>
<td>The easing for the animation.</td>
</tr>
</tbody>
</table>
<p>The property &#39;animation&#39; understands the following values: <code>md-transition</code>, <code>ios-transition</code> and <code>wp-transition</code>.</p>




<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members">Instance Members</a></h2>

<div id="canGoBack"></div>

<h3>
<a class="anchor" name="canGoBack" href="#canGoBack">
<code>canGoBack()</code>
  

</a>
</h3>

Returns `true` if there's a valid previous page that we can pop
back to. Otherwise returns `false`.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> 

</div>




<div id="canSwipeBack"></div>

<h3>
<a class="anchor" name="canSwipeBack" href="#canSwipeBack">
<code>canSwipeBack()</code>
  

</a>
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




<div id="first"></div>

<h3>
<a class="anchor" name="first" href="#first">
<code>first()</code>
  

</a>
</h3>

Returns the first view controller in this nav controller's stack.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> 

</div>




<div id="getActive"></div>

<h3>
<a class="anchor" name="getActive" href="#getActive">
<code>getActive()</code>
  

</a>
</h3>








<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> <p>Returns the active page&#39;s view controller.</p>


</div>




<div id="getActiveChildNav"></div>

<h3>
<a class="anchor" name="getActiveChildNav" href="#getActiveChildNav">
<code>getActiveChildNav()</code>
  

</a>
</h3>

Returns the active child navigation.










<div id="getActiveChildNavs"></div>

<h3>
<a class="anchor" name="getActiveChildNavs" href="#getActiveChildNavs">
<code>getActiveChildNavs()</code>
  

</a>
</h3>

Returns a list of the active child navigation.










<div id="getAllChildNavs"></div>

<h3>
<a class="anchor" name="getAllChildNavs" href="#getAllChildNavs">
<code>getAllChildNavs()</code>
  

</a>
</h3>

Returns a list of all child navigation containers










<div id="getByIndex"></div>

<h3>
<a class="anchor" name="getByIndex" href="#getByIndex">
<code>getByIndex(index)</code>
  

</a>
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




<div id="getPrevious"></div>

<h3>
<a class="anchor" name="getPrevious" href="#getPrevious">
<code>getPrevious(view)</code>
  

</a>
</h3>

Returns the view controller which is before the given view controller.
If no view controller is passed in, then it'll default to the active view.


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




<div id="getSecondaryIdentifier"></div>

<h3>
<a class="anchor" name="getSecondaryIdentifier" href="#getSecondaryIdentifier">
<code>getSecondaryIdentifier()</code>
  

</a>
</h3>











<div id="getType"></div>

<h3>
<a class="anchor" name="getType" href="#getType">
<code>getType()</code>
  

</a>
</h3>











<div id="getViews"></div>

<h3>
<a class="anchor" name="getViews" href="#getViews">
<code>getViews()</code>
  

</a>
</h3>

Returns the current stack of views in this nav controller.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Array&lt;ViewController&gt;</code> <p>the stack of view controllers in this nav controller.</p>


</div>




<div id="goToRoot"></div>

<h3>
<a class="anchor" name="goToRoot" href="#goToRoot">
<code>goToRoot()</code>
  

</a>
</h3>











<div id="indexOf"></div>

<h3>
<a class="anchor" name="indexOf" href="#indexOf">
<code>indexOf(view)</code>
  

</a>
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




<div id="insert"></div>

<h3>
<a class="anchor" name="insert" href="#insert">
<code>insert(insertIndex,&nbsp;page,&nbsp;params,&nbsp;opts)</code>
  

</a>
</h3>

Inserts a component into the nav stack at the specified index. This is useful if
you need to add a component at any point in your navigation stack.




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
        
  <code>Page</code>|<code>string</code>
      </td>
      <td>
        <p>The component class or deeplink name you want to push onto the navigation stack.</p>

        
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
        <p>Any NavParams you want to pass along to the next view.<strong class="tag">Optional</strong></p>

        
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
        <p>Nav options to go with this transition.<strong class="tag">Optional</strong></p>

        
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
<a class="anchor" name="insertPages" href="#insertPages">
<code>insertPages(insertIndex,&nbsp;insertPages,&nbsp;opts)</code>
  

</a>
</h3>

Inserts an array of components into the nav stack at the specified index.
The last component in the array will become instantiated as a view,
and animate in to become the active view.



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
        
  <code>array</code>
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
        <p>Nav options to go with this transition.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="isActive"></div>

<h3>
<a class="anchor" name="isActive" href="#isActive">
<code>isActive(view)</code>
  

</a>
</h3>

Returns if the given view is the active view or not.


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




<div id="isTransitioning"></div>

<h3>
<a class="anchor" name="isTransitioning" href="#isTransitioning">
<code>isTransitioning()</code>
  

</a>
</h3>

Returns if the nav controller is actively transitioning or not.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>boolean</code> 

</div>




<div id="last"></div>

<h3>
<a class="anchor" name="last" href="#last">
<code>last()</code>
  

</a>
</h3>

Returns the last page in this nav controller's stack.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>ViewController</code> 

</div>




<div id="length"></div>

<h3>
<a class="anchor" name="length" href="#length">
<code>length()</code>
  

</a>
</h3>

Returns the number of views in this nav controller.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>number</code> <p>The number of views in this stack, including the current view.</p>


</div>




<div id="parent"></div>

<h3>
<a class="anchor" name="parent" href="#parent">
<code>parent</code>
  

</a>
</h3>

The parent navigation instance. If this is the root nav, then
it'll be `null`. A `Tab` instance's parent is `Tabs`, otherwise
the parent would be another nav, if it's not already the root nav.










<div id="pop"></div>

<h3>
<a class="anchor" name="pop" href="#pop">
<code>pop(opts)</code>
  

</a>
</h3>

Call to navigate back from a current component. Similar to `push()`, you
can also pass navigation options.



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
        <p>Nav options to go with this transition.<strong class="tag">Optional</strong></p>

        
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
<a class="anchor" name="popToRoot" href="#popToRoot">
<code>popToRoot(opts)</code>
  

</a>
</h3>

Navigate back to the root of the stack, no matter how far back that is.



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
        <p>Nav options to go with this transition.<strong class="tag">Optional</strong></p>

        
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
<a class="anchor" name="push" href="#push">
<code>push(page,&nbsp;params,&nbsp;opts)</code>
  

</a>
</h3>

Push a new component onto the current navigation stack. Pass any aditional information
along as an object. This additional information is accessible through NavParams



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
        
  <code>Page</code>|<code>string</code>
      </td>
      <td>
        <p>The component class or deeplink name you want to push onto the navigation stack.</p>

        
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
        <p>Any NavParams you want to pass along to the next view.<strong class="tag">Optional</strong></p>

        
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
        <p>Nav options to go with this transition.<strong class="tag">Optional</strong></p>

        
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
<a class="anchor" name="remove" href="#remove">
<code>remove(startIndex,&nbsp;removeCount,&nbsp;opts)</code>
  

</a>
</h3>

Removes a page from the nav stack at the specified index.



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
        <p>The number of pages to remove, defaults to remove <code>1</code>.<strong class="tag">Optional</strong></p>

        
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
        <p>Any options you want to use pass to transtion.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="removeView"></div>

<h3>
<a class="anchor" name="removeView" href="#removeView">
<code>removeView(viewController,&nbsp;opts)</code>
  

</a>
</h3>

Removes the specified view controller from the nav stack.



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
        viewController
        
        
      </td>
      <td>
        
  <code>ViewController</code>
      </td>
      <td>
        <p>The viewcontroller to remove.<strong class="tag">Optional</strong></p>

        
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
        <p>Any options you want to use pass to transtion.<strong class="tag">Optional</strong></p>

        
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
<a class="anchor" name="setPages" href="#setPages">
<code>setPages(pages,&nbsp;opts)</code>
  

</a>
</h3>

Set the views of the current navigation stack and navigate to the
last view. By default animations are disabled, but they can be enabled
by passing options to the navigation controller.You can also pass any
navigation params to the individual pages in the array.



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
        
  <code>Array&lt;{page:any, params: any}&gt;</code>
      </td>
      <td>
        <p>An array of objects, each with a <code>page</code> and optionally <code>params</code> property to load in the stack.</p>

        
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
        <p>Nav options to go with this transition.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="setRoot"></div>

<h3>
<a class="anchor" name="setRoot" href="#setRoot">
<code>setRoot(pageOrViewCtrl,&nbsp;params,&nbsp;opts,&nbsp;done)</code>
  

</a>
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
        pageOrViewCtrl
        
        
      </td>
      <td>
        
  <code>Page</code>|<code>string</code>|<code>ViewController</code>
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
        <p>Any NavParams you want to pass along to the next view.<strong class="tag">Optional</strong></p>

        
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
        <p>Any options you want to use pass to transtion.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        done
        
        
      </td>
      <td>
        
  <code>Function</code>
      </td>
      <td>
        <p>Callback function on done.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>





<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Promise</code> <p>Returns a promise which is resolved when the transition has completed.</p>


</div>




<div id="swipeBackEnabled"></div>

<h3>
<a class="anchor" name="swipeBackEnabled" href="#swipeBackEnabled">
<code>swipeBackEnabled</code>
  

</a>
</h3>











<div id="viewDidEnter"></div>

<h3>
<a class="anchor" name="viewDidEnter" href="#viewDidEnter">
<code>viewDidEnter</code>
  

</a>
</h3>

Observable to be subscribed to when a component has fully become the active component.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="viewDidLeave"></div>

<h3>
<a class="anchor" name="viewDidLeave" href="#viewDidLeave">
<code>viewDidLeave</code>
  

</a>
</h3>

Observable to be subscribed to when a component has fully left and is no longer active.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="viewDidLoad"></div>

<h3>
<a class="anchor" name="viewDidLoad" href="#viewDidLoad">
<code>viewDidLoad</code>
  

</a>
</h3>

Observable to be subscribed to when a component is loaded.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="viewWillEnter"></div>

<h3>
<a class="anchor" name="viewWillEnter" href="#viewWillEnter">
<code>viewWillEnter</code>
  

</a>
</h3>

Observable to be subscribed to when a component is about to be loaded.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="viewWillLeave"></div>

<h3>
<a class="anchor" name="viewWillLeave" href="#viewWillLeave">
<code>viewWillLeave</code>
  

</a>
</h3>

Observable to be subscribed to when a component is about to leave, and no longer active.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>




<div id="viewWillUnload"></div>

<h3>
<a class="anchor" name="viewWillUnload" href="#viewWillUnload">
<code>viewWillUnload</code>
  

</a>
</h3>

Observable to be subscribed to when a component is about to be unloaded and destroyed.






<div class="return-value">
<i class="icon ion-arrow-return-left"></i>
<b>Returns:</b> 
  <code>Observable</code> <p>Returns an observable</p>


</div>







<!-- related link -->

<h2><a class="anchor" name="related" href="#related">Related</a></h2>

<a href="/docs/v3/components#navigation">Navigation Component Docs</a><!-- end content block -->


<!-- end body block -->

