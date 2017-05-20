---
layout: "fluid/docs_base"
version: "3.10.1"
versionHref: "/docs/native"
path: ""
category: native
id: "user-agent"
title: "User Agent"
header_sub_title: "Class in module "
doc: "User Agent"
docType: "class"
---

<h1 class="api-title">User Agent</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/user-agent/index.ts#L1">
  Improve this doc
</a>






<pre><code class="nohighlight">$ ionic cordova plugin add https://github.com/LouisT/cordova-useragent
$ npm install --save @ionic-native/user-agent
</code></pre>
<p>Repo:
  <a href="https://github.com/LouisT/cordova-useragent">
    https://github.com/LouisT/cordova-useragent
  </a>
</p>


<p>The UserAgent plugin provides functions to set the HTTP  user-agent header. For more info about User-Agents, please <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent">see the HTTP User-Agent docs</a>.</p>
<p>Requires Cordova plugin: <code>cordova-useragent</code>. For more info, please see the <a href="https://github.com/LouisT/cordova-useragent">User-Agent plugin docs</a>.</p>




<h2>Supported platforms</h2>
<ul>
  <li>Android</li><li>iOS</li>
</ul>






<h2>Usage</h2>
<pre><code class="lang-typescript">import { UserAgent } from &#39;@ionic-native/user-agent&#39;;


constructor(private userAgent: UserAgent) { }

...


this.userAgent.set(&#39;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36&#39;)
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));

* this.userAgent.get()
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));

* this.userAgent.reset()
  .then((res: any) =&gt; console.log(res))
  .catch((error: any) =&gt; console.error(error));
</code></pre>








<h2>Instance Members</h2>
<h3><a class="anchor" name="set" href="#set"></a><code>set(userAgent)</code></h3>


Changes the current user-agent to the one sent by argument.
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
      userAgent</td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>User-Agent</p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the user-agent changes
</div><h3><a class="anchor" name="get" href="#get"></a><code>get()</code></h3>


Returns the current user-agent string.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the user-agent is returned
</div><h3><a class="anchor" name="reset" href="#reset"></a><code>reset()</code></h3>


Sets the user-agent back to default


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;any&gt;</code> Returns a promise that resolves when the user-agent resets
</div>





