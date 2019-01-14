---
layout: "fluid/docs_base"
version: "4.19.0"
versionHref: "/docs/native"
path: ""
category: native
id: "gao-de-location"
title: "Gao De Location"
header_sub_title: "Class in module "
doc: "Gao De Location"
docType: "class"
---

<h1 class="api-title">Gao De Location</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/gao-de-location/index.ts#L1">
  Improve this doc
</a>







<p>Because the original GPS positioning uses Google Browser positioning, and Google withdraws from China, resulting in GPS Android positioning can not be positioned.
Gaode location can directly return address informationGaode location can directly return address information</p>


<p>Repo:
  <a href="https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git">
    https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-gaodelocation-chenyu --variable  ANDROID_API_KEY=your android key --variable  IOS_API_KEY=your ios key
$ npm install --save @ionic-native/gao-de-location
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { GaoDeLocation } from &#39;@ionic-native/gao-de-location&#39;;


constructor(private gaoDeLocation: GaoDeLocation) { }

this.gaoDeLocation.getCurrentPosition()
.then((res: PositionOptions) =&gt; console.log(res))
.catch((error) =&gt; console.error(error));
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="getCurrentPosition" href="#getCurrentPosition"></a><code>getCurrentPosition()</code></h3>


Get longitude and latitude, country, province, city, postal code, specific address, region


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;PositionOptions&gt;</code> 
</div>





