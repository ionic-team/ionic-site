---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "config"
title: "Config"
header_sub_title: "Ionic API Documentation"
doc: "Config"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/config/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="config" href="#config"></a>

Config






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//src/config/config.ts#L9">
Improve this doc
</a>






<p>The Config lets you configure your entire app or specific platforms.
You can set the tab placement, icon mode, animations, and more here.</p>
<pre><code class="lang-ts">@App({
  template: `&lt;ion-nav [root]=&quot;root&quot;&gt;&lt;/ion-nav&gt;`
  config: {
    backButtonText: &#39;Go Back&#39;,
    iconMode: &#39;ios&#39;,
    modalEnter: &#39;modal-slide-in&#39;,
    modalLeave: &#39;modal-slide-out&#39;,
    tabbarPlacement: &#39;bottom&#39;,
    pageTransition: &#39;ios&#39;,
  }
})
</code></pre>
<p>To change the mode to always use Material Design (md).</p>
<pre><code class="lang-ts">@App({
  template: `&lt;ion-nav [root]=&quot;root&quot;&gt;&lt;/ion-nav&gt;`
  config: {
    mode: &#39;md&#39;
  }
})
</code></pre>
<p>Config can be overwritten at multiple levels allowing for more configuration. Taking the example from earlier, we can override any setting we want based on a platform.</p>
<pre><code class="lang-ts">@App({
  template: `&lt;ion-nav [root]=&quot;root&quot;&gt;&lt;/ion-nav&gt;`
  config: {
    tabbarPlacement: &#39;bottom&#39;,
    platforms: {
     ios: {
       tabbarPlacement: &#39;top&#39;,
     }
    }
  }
})
</code></pre>
<p>We could also configure these values at a component level. Take <code>tabbarPlacement</code>, we can configure this as a property on our <code>ion-tabs</code>.</p>
<pre><code class="lang-html">&lt;ion-tabs tabbarPlacement=&quot;top&quot;&gt;
  &lt;ion-tab tabTitle=&quot;Dash&quot; tabIcon=&quot;pulse&quot; [root]=&quot;tabRoot&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<p>The last way we could configure is through URL query strings. This is useful for testing while in the browser.
Simply add <code>?ionic&lt;PROPERTYNAME&gt;=&lt;value&gt;</code> to the url.</p>
<pre><code class="lang-bash">http://localhost:8100/?ionicTabbarPlacement=bottom
</code></pre>
<p>Custom values can be added to config, and looked up at a later point in time.</p>
<pre><code class="lang-javascript">config.set(&#39;ios&#39;, &#39;favoriteColor&#39;, &#39;green&#39;);
// from any page in your app:
config.get(&#39;favoriteColor&#39;); // &#39;green&#39;
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
<td><code>pageTransition</code></td>
<td><code>string</code></td>
<td>The name of the transition to use while changing pages.</td>
</tr>
<tr>
<td><code>pageTransitionDelay</code></td>
<td><code>number</code></td>
<td>The delay in milliseconds before the transition starts while changing pages.</td>
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
<td><code>spinner</code></td>
<td><code>string</code></td>
<td>The default spinner to use when a name is not defined.</td>
</tr>
<tr>
<td><code>tabbarHighlight</code></td>
<td><code>boolean</code></td>
<td>Whether to show a highlight line under the tab when it is selected.</td>
</tr>
<tr>
<td><code>tabbarLayout</code></td>
<td><code>string</code></td>
<td>The layout to use for all tabs. Available options: <code>&quot;icon-top&quot;</code>, <code>&quot;icon-left&quot;</code>, <code>&quot;icon-right&quot;</code>, <code>&quot;icon-bottom&quot;</code>, <code>&quot;icon-hide&quot;</code>, <code>&quot;title-hide&quot;</code>.</td>
</tr>
<tr>
<td><code>tabbarPlacement</code></td>
<td><code>string</code></td>
<td>The position of the tabs. Available options: <code>&quot;top&quot;</code>, <code>&quot;bottom&quot;</code></td>
</tr>
<tr>
<td><code>tabSubPages</code></td>
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

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="get"></div>

<h3>
<a class="anchor" name="get" href="#get"></a>
<code>get(key,&nbsp;fallbackValue)</code>
  

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
        <p>the key for the config value</p>

        
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
 defaults to <code>null</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="getBoolean"></div>

<h3>
<a class="anchor" name="getBoolean" href="#getBoolean"></a>
<code>getBoolean(key,&nbsp;fallbackValue)</code>
  

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
        <p>the key for the config value</p>

        
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
value was <code>null</code>. Fallback value defaults to <code>false</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="getNumber"></div>

<h3>
<a class="anchor" name="getNumber" href="#getNumber"></a>
<code>getNumber(key,&nbsp;fallbackValue)</code>
  

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
        <p>the key for the config value</p>

        
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
value turned out to be <code>NaN</code>. Fallback value defaults to <code>NaN</code>.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








<div id="set"></div>

<h3>
<a class="anchor" name="set" href="#set"></a>
<code>set(platform,&nbsp;key,&nbsp;value)</code>
  

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
        <p>The platform (either &#39;ios&#39; or &#39;android&#39;) that the config value should apply to. Leaving this blank will apply the config value to all platforms.</p>

        
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
        <p>The key used to look up the value at a later point in time.</p>

        
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
        <p>The config value being stored.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






<!-- related link --><!-- end content block -->


<!-- end body block -->

