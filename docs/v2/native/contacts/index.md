---
layout: "v2_fluid/docs_base"
version: "1.2.1"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "contacts"
title: "Contacts"
header_sub_title: "Class in module "
doc: "Contacts"
docType: "class"
---








<h1 class="api-title">

  
  Contacts
  

  

  

</h1>

<a class="improve-v2-docs" href='http://github.com/driftyco/ionic-native/edit/master//home/ubuntu/ionic-native/src/plugins/contacts.ts#L187'>
  Improve this doc
</a>





<!-- decorators -->


<pre><code>$ ionic plugin add cordova-plugin-contacts</code></pre>
<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-contacts">
    https://github.com/apache/cordova-plugin-contacts
  </a>
</p>

<!-- description -->

<p>Access and manage Contacts on the device.</p>
<p>Requires plugin: <code>cordova-plugin-contacts</code>
For full info, please see the <a href="https://github.com/apache/cordova-plugin-contacts">Cordova Contacts plugin docs</a></p>



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-js">import {Contacts} from &#39;ionic-native&#39;;



Contacts.create({
  displayName: &quot;Mr. Ionitron&quot;
}).then((contact) =&gt; {}, (err) =&gt; {})
</code></pre>




<!-- @property tags -->
<h2>Static Methods</h2>
<div id="create"></div>
<h3><code>create(options)</code>

</h3>



Create a new Contact object.



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
      options
      
      
    </td>
    <td>
      
<code>Object</code>
    </td>
    <td>
      <p>Object whose properties the created Contact should have.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Contact</code> Returns the created contact
</div>



<div id="find"></div>
<h3><code>find(fields,&nbsp;options)</code>

</h3>



Search for contacts in the Contacts list.

Example: Contacts.find(['*'], { filter: 'Max' }) // will search for a displayName of 'Max'



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
      fields
      
      
    </td>
    <td>
      
<code>string[]</code>
    </td>
    <td>
      <p>Contact fields to be used as a search qualifier.
 A zero-length contactFields parameter is invalid and results in ContactError.INVALID_ARGUMENT_ERROR.
 A contactFields value of &quot;*&quot; searches all contact fields.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>Object</code>
    </td>
    <td>
      <p>the options to query with:
  filter: The search string used to find navigator.contacts. (string) (Default: &quot;&quot;)
  multiple: Determines if the find operation returns multiple navigator.contacts. (Boolean) (Default: false)
  desiredFields: Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields. (DOMString[]) [Optional]
  hasPhoneNumber(Android only): Filters the search to only return contacts with a phone number informed. (Boolean) (Default: false)</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with the search results (an array of Contact objects)


</div>



<div id="pickContact"></div>
<h3><code>pickContact()</code>

</h3>

Select a single Contact.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a Promise that resolves with the selected Contact


</div>




<!-- methods on the class --><!-- related link --><!-- end content block -->


<!-- end body block -->

