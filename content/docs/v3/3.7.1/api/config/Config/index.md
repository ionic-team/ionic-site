---
layout: "fluid/docs_base"
version: "3.7.1"
versionHref: "/docs/v3/3.7.1"
path: ""
category: api
id: "config"
title: "Config"
header_sub_title: "Ionic API Documentation"
doc: "Config"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v3/demos/src/config/www/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="config" href="#config"></a>

Config





</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic/edit/master/src/config/config.ts#L10">
Improve this doc
</a>






<p>The Config lets you configure your entire app or specific platforms.
You can set the tab placement, icon mode, animations, and more here.</p>
<pre><code class="lang-ts">import { IonicApp, IonicModule } from &#39;ionic-angular&#39;;

@NgModule({
  declarations: [ MyApp ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: &#39;Go Back&#39;,
      iconMode: &#39;ios&#39;,
      modalEnter: &#39;modal-slide-in&#39;,
      modalLeave: &#39;modal-slide-out&#39;,
      tabsPlacement: &#39;bottom&#39;,
      pageTransition: &#39;ios-transition&#39;
    }, {}
  )],
  bootstrap: [IonicApp],
  entryComponents: [ MyApp ],
  providers: []
})
</code></pre>
<p>Config can be overwritten at multiple levels allowing for more granular configuration.
Below is an example where an app can override any setting we want based on a platform.</p>
<pre><code class="lang-ts">import { IonicModule } from &#39;ionic-angular&#39;;

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: &#39;bottom&#39;,
      platforms: {
        ios: {
          tabsPlacement: &#39;top&#39;,
        }
      }
    }, {}
  )],
  ...
})
</code></pre>
<p>We could also configure these values at a component level. Take <code>tabsPlacement</code>,
we can configure this as a property on our <code>ion-tabs</code>.</p>
<pre><code class="lang-html">&lt;ion-tabs tabsPlacement=&quot;top&quot;&gt;
  &lt;ion-tab tabTitle=&quot;Dash&quot; tabIcon=&quot;pulse&quot; [root]=&quot;tabRoot&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>The last way we could configure is through URL query strings. This is useful for testing
while in the browser. Simply add <code>?ionic&lt;PROPERTYNAME&gt;=&lt;value&gt;</code> to the url.</p>
<pre><code class="lang-bash">http://localhost:8100/?ionicTabsPlacement=bottom
</code></pre>
<p>Any value can be added to config, and looked up at a later in any component.</p>
<pre><code class="lang-js">config.set(&#39;ios&#39;, &#39;favoriteColor&#39;, &#39;green&#39;);

// from any page in your app:
config.get(&#39;favoriteColor&#39;); // &#39;green&#39; when iOS
</code></pre>
<p>A config value can come from anywhere and be anything, but there are default
values for each mode. The <a href="../../../theming/platform-specific-styles/">theming</a>
documentation has a chart of the default mode configuration. The following
chart displays each property with a description of what it controls.</p>
<table>
<thead>
<tr>
<th>Config Property</th>
<th>Type</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>activator</code></td>
<td><code>string</code></td>
<td>Used for buttons, changes the effect of pressing on a button. Available options: <code>&quot;ripple&quot;</code>, <code>&quot;highlight&quot;</code>.</td>
</tr>
<tr>
<td><code>actionSheetEnter</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while an action sheet is presented.</td>
</tr>
<tr>
<td><code>actionSheetLeave</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while an action sheet is dismissed.</td>
</tr>
<tr>
<td><code>alertEnter</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while an alert is presented.</td>
</tr>
<tr>
<td><code>alertLeave</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while an alert is dismissed.</td>
</tr>
<tr>
<td><code>backButtonText</code></td>
<td><code>string</code></td>
<td>The text to display by the back button icon in the navbar.</td>
</tr>
<tr>
<td><code>backButtonIcon</code></td>
<td><code>string</code></td>
<td>The icon to use as the back button icon.</td>
</tr>
<tr>
<td><code>iconMode</code></td>
<td><code>string</code></td>
<td>The mode to use for all icons throughout the application. Available options: <code>&quot;ios&quot;</code>, <code>&quot;md&quot;</code></td>
</tr>
<tr>
<td><code>locationStrategy</code></td>
<td><code>string</code></td>
<td>Set to &#39;path&#39; to remove hashbangs when using Deeplinking.</td>
</tr>
<tr>
<td><code>loadingEnter</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while a loading indicator is presented.</td>
</tr>
<tr>
<td><code>loadingLeave</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while a loading indicator is dismissed.</td>
</tr>
<tr>
<td><code>menuType</code></td>
<td><code>string</code></td>
<td>Type of menu to display. Available options: <code>&quot;overlay&quot;</code>, <code>&quot;reveal&quot;</code>, <code>&quot;push&quot;</code>.</td>
</tr>
<tr>
<td><code>modalEnter</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while a modal is presented.</td>
</tr>
<tr>
<td><code>modalLeave</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while a modal is dismiss.</td>
</tr>
<tr>
<td><code>mode</code></td>
<td><code>string</code></td>
<td>The mode to use throughout the application.</td>
</tr>
<tr>
<td><code>pageTransition</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while changing pages. Available options: <code>&quot;ios-transition&quot;</code>, <code>&quot;md-transition&quot;</code>, <code>&quot;wp-transition&quot;</code>.</td>
</tr>
<tr>
<td><code>pickerEnter</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while a picker is presented.</td>
</tr>
<tr>
<td><code>pickerLeave</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while a picker is dismissed.</td>
</tr>
<tr>
<td><code>popoverEnter</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while a popover is presented.</td>
</tr>
<tr>
<td><code>popoverLeave</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while a popover is dismissed.</td>
</tr>
<tr>
<td><code>scrollAssist</code></td>
<td><code>boolean</code></td>
<td>Used to avoid the input to be hidden by the keyboard if it&#39;s near the bottom of the page.</td>
</tr>
<tr>
<td><code>scrollPadding</code></td>
<td><code>boolean</code></td>
<td>Used to remove the extra padding on ion-content when keyboard is displayed.</td>
</tr>
<tr>
<td><code>spinner</code></td>
<td><code>string</code></td>
<td>The default spinner to use when a name is not defined.</td>
</tr>
<tr>
<td><code>statusbarPadding</code></td>
<td><code>boolean</code></td>
<td>Whether to hide extra padding for statusbar.</td>
</tr>
<tr>
<td><code>swipeBackEnabled</code></td>
<td><code>boolean</code></td>
<td>Whether native iOS swipe to go back functionality is enabled.</td>
</tr>
<tr>
<td><code>tabsHighlight</code></td>
<td><code>boolean</code></td>
<td>Whether to show a highlight line under the tab when it is selected.</td>
</tr>
<tr>
<td><code>tabsLayout</code></td>
<td><code>string</code></td>
<td>The layout to use for all tabs. Available options: <code>&quot;icon-top&quot;</code>, <code>&quot;icon-start&quot;</code>, <code>&quot;icon-end&quot;</code>, <code>&quot;icon-bottom&quot;</code>, <code>&quot;icon-hide&quot;</code>, <code>&quot;title-hide&quot;</code>.</td>
</tr>
<tr>
<td><code>tabsPlacement</code></td>
<td><code>string</code></td>
<td>The position of the tabs relative to the content. Available options: <code>&quot;top&quot;</code>, <code>&quot;bottom&quot;</code></td>
</tr>
<tr>
<td><code>tabsHideOnSubPages</code></td>
<td><code>boolean</code></td>
<td>Whether to hide the tabs on child pages or not. If <code>true</code> it will not show the tabs on child pages.</td>
</tr>
<tr>
<td><code>toastEnter</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while a toast is presented.</td>
</tr>
<tr>
<td><code>toastLeave</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while a toast is dismissed.</td>
</tr>
</tbody>
</table>




<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members">Instance Members</a></h2>

<div id="get"></div>

<h3>
<a class="anchor" name="get" href="#get">
<code>get(key,&nbsp;fallbackValue)</code>
  

</a>
</h3>

Returns a single config value, given a key.


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
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key for the config value<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        fallbackValue
        
        
      </td>
      <td>
        
  <code>any</code>
      </td>
      <td>
        <p>a fallback value to use when the config
value was not found, or is config value is <code>null</code>. Fallback value
 defaults to <code>null</code>.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="getBoolean"></div>

<h3>
<a class="anchor" name="getBoolean" href="#getBoolean">
<code>getBoolean(key,&nbsp;fallbackValue)</code>
  

</a>
</h3>

Same as `get()`, however always returns a boolean value. If the
value from `get()` is `null`, then it'll return the `fallbackValue`
which defaults to `false`. Otherwise, `getBoolean()` will return
if the config value is truthy or not. It also returns `true` if
the config value was the string value `"true"`.


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
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key for the config value<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        fallbackValue
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>a fallback value to use when the config
value was <code>null</code>. Fallback value defaults to <code>false</code>.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="getNumber"></div>

<h3>
<a class="anchor" name="getNumber" href="#getNumber">
<code>getNumber(key,&nbsp;fallbackValue)</code>
  

</a>
</h3>

Same as `get()`, however always returns a number value. Uses `parseFloat()`
on the value received from `get()`. If the result from the parse is `NaN`,
then it will return the value passed to `fallbackValue`. If no fallback
value was provided then it'll default to returning `NaN` when the result
is not a valid number.


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
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key for the config value<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        fallbackValue
        
        
      </td>
      <td>
        
  <code>number</code>
      </td>
      <td>
        <p>a fallback value to use when the config
value turned out to be <code>NaN</code>. Fallback value defaults to <code>NaN</code>.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="set"></div>

<h3>
<a class="anchor" name="set" href="#set">
<code>set(platform,&nbsp;key,&nbsp;value)</code>
  

</a>
</h3>

Sets a single config value.


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
        platform
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The platform (either &#39;ios&#39; or &#39;android&#39;) that the config value should apply to. Leaving this blank will apply the config value to all platforms.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The key used to look up the value at a later point in time.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        value
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The config value being stored.<strong class="tag">Optional</strong></p>

        
      </td>
    </tr>
    
  </tbody>
</table>











<!-- related link --><!-- end content block -->


<!-- end body block -->

