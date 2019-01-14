---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "analytics-firebase"
title: "Analytics Firebase"
header_sub_title: "Class in module "
doc: "Analytics Firebase"
docType: "class"
---

<h1 class="api-title">Analytics Firebase</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/analytics-firebase/index.ts#L1">
  Improve this doc
</a>







<p>Google Analytics Firebase plugin for Ionic Native apps.</p>


<p>Repo:
  <a href="https://github.com/appfeel/analytics-google">
    https://github.com/appfeel/analytics-google
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-analytics
$ npm install --save @ionic-native/analytics-firebase
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { AnalyticsFirebase } from &#39;@ionic-native/analytics-firebase&#39;;


constructor(private analyticsFirebase: AnalyticsFirebase) { }

// Track an event with default events and params
const eventParams = {};
eventParams[this.analyticsFirebase.DEFAULT_PARAMS.LEVEL] = 29;
this.analyticsFirebase.logEvent(this.analyticsFirebase.DEFAULT_EVENTS.LEVEL_UP, eventParams)
  .then(() =&gt; console.log(&#39;Event successfully tracked&#39;))
  .catch(err =&gt; console.log(&#39;Error tracking event:&#39;, err));

// Track an event with custom events and params
const eventParams = {};
eventParams[&#39;my-prop&#39;] = 29;
this.analyticsFirebase.logEvent(&#39;my-event&#39;, eventParams)
  .then(() =&gt; console.log(&#39;Event successfully tracked&#39;))
  .catch(err =&gt; console.log(&#39;Error tracking event:&#39;, err));


// Reset analytics data
this.analyticsFirebase.resetAnalyticsData()
  .then(() =&gt; console.log(&#39;Analytics data have been reset&#39;))
  .catch(err =&gt; console.log(&#39;Error resetting analytics data:&#39;, err));


// Track a screen view
this.analyticsFirebase.setCurrentScreen(&#39;Home&#39;)
  .then(() =&gt; console.log(&#39;View successfully tracked&#39;))
  .catch(err =&gt; console.log(&#39;Error tracking view:&#39;, err));


// Set user id
this.analyticsFirebase.setUserId(&#39;USER-ID&#39;)
  .then(() =&gt; console.log(&#39;User id successfully set&#39;))
  .catch(err =&gt; console.log(&#39;Error setting user id:&#39;, err));


// Set user property from default properties
this.analyticsFirebase.setUserProperty(&#39;KEY&#39;, &#39;VALUE&#39;)
  .then(() =&gt; console.log(&#39;User property successfully set&#39;))
  .catch(err =&gt; console.log(&#39;Error setting user property:&#39;, err));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="readonly" href="#readonly"></a><code>readonly</code></h3>


This enum represents AnalyticsFirebase default events.
Use one of these default events or a custom event








