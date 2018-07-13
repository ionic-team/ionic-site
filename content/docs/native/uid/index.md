---
layout: "fluid/docs_base"
version: "4.9.2"
versionHref: "/docs/native"
path: ""
category: native
id: "uid"
title: "Uid"
header_sub_title: "Class in module "
doc: "Uid"
docType: "class"
---

<h1 class="api-title">Uid</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/uid/index.ts#L1">
  Improve this doc
</a>







<p>Get unique identifiers: UUID, IMEI, IMSI, ICCID and MAC.</p>


<p>Repo:
  <a href="https://github.com/lionelhe/cordova-plugin-uid">
    https://github.com/lionelhe/cordova-plugin-uid
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-uid
$ npm install --save @ionic-native/uid
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Uid } from &#39;@ionic-native/uid&#39;;
import { AndroidPermissions } from &#39;@ionic-native/android-permissions&#39;;

constructor(private uid: Uid, private androidPermissions: AndroidPermissions) { }


async getImei() {
 const { hasPermission } = await this.androidPermissions.checkPermission(
   this.androidPermissions.PERMISSION.READ_PHONE_STATE
 );

 if (!hasPermission) {
   const result = await this.androidPermissions.requestPermission(
     this.androidPermissions.PERMISSION.READ_PHONE_STATE
   );

   if (!result.hasPermission) {
     throw new Error(&#39;Permissions required&#39;);
   }

   // ok, a user gave us permission, we can get him identifiers after restart app
   return;
 }

  return this.uid.IMEI
}
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="UUID" href="#UUID"></a><code>UUID</code></h3>


Get the device Universally Unique Identifier (UUID).



<h3><a class="anchor" name="IMEI" href="#IMEI"></a><code>IMEI</code></h3>


Get the device International Mobile Station Equipment Identity (IMEI).



<h3><a class="anchor" name="IMSI" href="#IMSI"></a><code>IMSI</code></h3>


Get the device International mobile Subscriber Identity (IMSI).



<h3><a class="anchor" name="ICCID" href="#ICCID"></a><code>ICCID</code></h3>


Get the sim Integrated Circuit Card Identifier (ICCID).



<h3><a class="anchor" name="MAC" href="#MAC"></a><code>MAC</code></h3>


Get the Media Access Control address (MAC).









