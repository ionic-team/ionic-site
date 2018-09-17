---
layout: "fluid/docs_base"
version: "4.13.0"
versionHref: "/docs/native"
path: ""
category: native
id: "stepcounter"
title: "Stepcounter"
header_sub_title: "Class in module "
doc: "Stepcounter"
docType: "class"
---

<h1 class="api-title">Stepcounter</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/stepcounter/index.ts#L1">
  Improve this doc
</a>







<p>Cordova plugin for using device&#39;s stepcounter on Android (API &gt; 19)</p>
<p>Use to</p>
<ul>
<li>start and stop stepcounter service</li>
<li>read device&#39;s stepcounter data</li>
</ul>


<p>Repo:
  <a href="https://github.com/ihadeed/cordova-plugin-stepcounter">
    https://github.com/ihadeed/cordova-plugin-stepcounter
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-stepcounter
$ npm install --save @ionic-native/stepcounter
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Stepcounter } from &#39;@ionic-native/stepcounter&#39;;

constructor(private stepcounter: Stepcounter) { }

...

let startingOffset = 0;
this.stepcounter.start(startingOffset).then(onSuccess =&gt; console.log(&#39;stepcounter-start success&#39;, onSuccess), onFailure =&gt; console.log(&#39;stepcounter-start error&#39;, onFailure));

this.stepcounter.getHistory().then(historyObj =&gt; console.log(&#39;stepcounter-history success&#39;, historyObj), onFailure =&gt; console.log(&#39;stepcounter-history error&#39;, onFailure));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="start" href="#start"></a><code>start(startingOffset)</code></h3>


Start the step counter

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
      startingOffset</td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>will be added to the total steps counted in this session</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any | number&gt;</code> Returns a Promise that resolves on success or rejects on failure
</div><h3><a class="anchor" name="stop" href="#stop"></a><code>stop()</code></h3>


Stop the step counter


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any | number&gt;</code> Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
</div><h3><a class="anchor" name="getTodayStepCount" href="#getTodayStepCount"></a><code>getTodayStepCount()</code></h3>


Get the amount of steps for today (or -1 if it no data given)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any | number&gt;</code> Returns a Promise that resolves on success with the amount of steps today, or rejects on failure
</div><h3><a class="anchor" name="getStepCount" href="#getStepCount"></a><code>getStepCount()</code></h3>


Get the amount of steps since the start command has been called


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any | number&gt;</code> Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
</div><h3><a class="anchor" name="deviceCanCountSteps" href="#deviceCanCountSteps"></a><code>deviceCanCountSteps()</code></h3>


Returns true/false if Android device is running >API level 19 && has the step counter API available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any | boolean&gt;</code> Returns a Promise that resolves on success, or rejects on failure
</div><h3><a class="anchor" name="getHistory" href="#getHistory"></a><code>getHistory()</code></h3>


Get the step history (JavaScript object)


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a Promise that resolves on success, or rejects on failure
</div>





