---
layout: "v2_fluid/docs_base"
version: "1.3.17"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/contacts.ts#L250">
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



<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { Contact } from &#39;ionic-native&#39;;


let contact = new Contact();
contact.displayName = &#39;Mr. Ionitron&#39;;
contact.save().then(
  () =&gt; console.log(&#39;Contact saved!&#39;, contact),
  (error: any) =&gt; console.error(&#39;Error saving contact.&#39;, error)
);
</code></pre>




<!-- @property tags -->
<h2>Static Members</h2>
<div id="create"></div>
<h3><code>create()</code>
  
</h3>









<div id="find"></div>
<h3><code>find(fields,&nbsp;options)</code>
  
</h3>



Search for contacts in the Contacts list.


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




<!-- methods on the class -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

