---
layout: "v2_fluid/docs_base"
version: "2.0.0-beta.9"
versionHref: "/docs/v2/2.0.0-beta.9"
path: ""
category: api
id: "popover"
title: "Popover"
header_sub_title: "Ionic API Documentation"
doc: "Popover"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/popover/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="popover" href="#popover"></a>

Popover





</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//src/components/popover/popover.ts#L14">
Improve this doc
</a>






<p>A Popover is a dialog that appears on top of the current page.
It can be used for anything, but generally it is used for overflow
actions that don&#39;t fit in the navigation bar.</p>
<h3 id="creating">Creating</h3>
<p>A popover can be created by calling the <code>create</code> method. The view
to display in the popover should be passed as the first argument.
Any data to pass to the popover view can optionally be passed in
the second argument. Options for the popover can optionally be
passed in the third argument. See the <a href="#create">create</a> method
below for all available options.</p>
<h3 id="presenting">Presenting</h3>
<p>To present a popover, call the <code>present</code> method on the <a href="../../nav/NavController">NavController</a>.
The first argument passed to the <code>present</code> should be the popover. In order
to position the popover relative to the element clicked, the event needs to be
passed as the second argument. If the event is not passed, the popover will be
positioned in the center of the current view. See the <a href="#usage">usage</a> section for
an example of passing this event.</p>
<h3 id="dismissing">Dismissing</h3>
<p>To dismiss the popover after creation, call the <code>dismiss()</code> method on the
<code>Popover</code> instance. The popover can also be dismissed from within the popover&#39;s
view by calling the <code>dismiss()</code> method on the <a href="../../nav/ViewController">ViewController</a>.
The <code>onDismiss</code> function can be called to perform an action after the popover
is dismissed. The popover will dismiss when the backdrop is clicked, but this
can be disabled by setting <code>enableBackdropDismiss</code> to <code>false</code> in the popover
options.</p>
<blockquote>
<p>Note that after the component is dismissed, it will not be usable anymore and
another one must be created. This can be avoided by wrapping the creation and
presentation of the component in a reusable function as shown in the <a href="#usage">usage</a>
section below.</p>
</blockquote>





<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>To open a popover on the click of a button, pass <code>$event</code> to the method
which creates and presents the popover:</p>
<pre><code class="lang-html">&lt;button (click)=&quot;presentPopover($event)&quot;&gt;
  &lt;ion-icon name=&quot;more&quot;&gt;&lt;/ion-icon&gt;
&lt;/button&gt;
</code></pre>
<pre><code class="lang-ts">@Component({})
class MyPage {
  constructor(private nav: NavController) {}

  presentPopover(myEvent) {
    let popover = Popover.create(PopoverPage);
    this.nav.present(popover, {
      ev: myEvent
    });
  }
}
</code></pre>
<p>The <code>PopoverPage</code> will display inside of the popover, and
can be anything. Below is an example of a page with items
that close the popover on click.</p>
<pre><code class="lang-ts">@Component({
  template: `
    &lt;ion-list&gt;
      &lt;ion-list-header&gt;Ionic&lt;/ion-list-header&gt;
      &lt;button ion-item (click)=&quot;close()&quot;&gt;Learn Ionic&lt;/button&gt;
      &lt;button ion-item (click)=&quot;close()&quot;&gt;Documentation&lt;/button&gt;
      &lt;button ion-item (click)=&quot;close()&quot;&gt;Showcase&lt;/button&gt;
      &lt;button ion-item (click)=&quot;close()&quot;&gt;GitHub Repo&lt;/button&gt;
    &lt;/ion-list&gt;
  `
})
class PopoverPage {
  constructor(private viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}
</code></pre>




<!-- @property tags -->
<h2><a class="anchor" name="static-members" href="#static-members"></a>Static Members</h2>
<div id="create"></div>
<h3><a class="anchor" name="create" href="#create"></a><code>create(componentType,&nbsp;data,&nbsp;opts)</code>
  
</h3>

Create a popover with the following options

| Option                | Type       | Description                                                                                                      |
|-----------------------|------------|------------------------------------------------------------------------------------------------------------------|
| cssClass              |`string`    | An additional class for custom styles.                                                                           |
| showBackdrop          |`boolean`   | Whether to show the backdrop. Default true.                                                                      |
| enableBackdropDismiss |`boolean`   | Whether the popover should be dismissed by tapping the backdrop. Default true.                                   |




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
        componentType
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>The Popover</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        data
        
        
      </td>
      <td>
        
  <code>object</code>
      </td>
      <td>
        <p>Any data to pass to the Popover view</p>

        
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
        <p>Popover options</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<!-- instance methods on the class -->


<!-- related link --><!-- end content block -->


<!-- end body block -->

