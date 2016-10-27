---
layout: "v2_fluid/docs_base"
version: "2.2.6"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/contacts.ts#L290">
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

Create a single contact.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
 Returns a object Contact


</div>



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



<!-- other classes -->
<h2><a class="anchor" name="related-classes" href="#related-classes"></a>Related Classes</h2>



<h3><a class="anchor" name="ContactFindOptions" href="#ContactFindOptions"></a>ContactFindOptions</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="filter"></div>
<h3>
  <code>filter()</code>
  

</h3>
The search string used to find navigator.contacts. (Default: "")




<div id="multiple"></div>
<h3>
  <code>multiple()</code>
  

</h3>
Determines if the find operation returns multiple navigator.contacts. (Default: false)




<div id="desiredFields"></div>
<h3>
  <code>desiredFields()</code>
  

</h3>
Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields.




<div id="hasPhoneNumber"></div>
<h3>
  <code>hasPhoneNumber()</code>
  

</h3>
(Android only): Filters the search to only return contacts with a phone number informed.








<h3><a class="anchor" name="ContactOrganization" href="#ContactOrganization"></a>ContactOrganization</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="pref"></div>
<h3>
  <code>pref()</code>
  

</h3>
Set to true if this ContactOrganization contains the user's preferred value.




<div id="type"></div>
<h3>
  <code>type()</code>
  

</h3>
A string that indicates what type of field this is, home for example.




<div id="name"></div>
<h3>
  <code>name()</code>
  

</h3>
The name of the organization.




<div id="department"></div>
<h3>
  <code>department()</code>
  

</h3>
The department the contract works for.




<div id="title"></div>
<h3>
  <code>title()</code>
  

</h3>
The contact's title at the organization.








<h3><a class="anchor" name="ContactAddress" href="#ContactAddress"></a>ContactAddress</h3>


<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="pref"></div>
<h3>
  <code>pref()</code>
  

</h3>
Set to true if this ContactAddress contains the user's preferred value.




<div id="type"></div>
<h3>
  <code>type()</code>
  

</h3>
A string indicating what type of field this is, home for example.




<div id="formatted"></div>
<h3>
  <code>formatted()</code>
  

</h3>
The full address formatted for display.




<div id="streetAddress"></div>
<h3>
  <code>streetAddress()</code>
  

</h3>
The full street address.




<div id="locality"></div>
<h3>
  <code>locality()</code>
  

</h3>
The city or locality.




<div id="region"></div>
<h3>
  <code>region()</code>
  

</h3>
The state or region.




<div id="postalCode"></div>
<h3>
  <code>postalCode()</code>
  

</h3>
The zip code or postal code.




<div id="country"></div>
<h3>
  <code>country()</code>
  

</h3>
The country name.







<!-- end other classes -->

<!-- interfaces -->

<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>


<h3><a class="anchor" name="IContactProperties" href="#IContactProperties"></a>IContactProperties</h3>


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
      id
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>A globally unique identifier.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      displayName
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>The name of this Contact, suitable for display to end users.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      name
      <div><em>(optional)</em></div>
    </td>
    <td>
      IContactName
    </td>
    <td>
      <p>An object containing all components of a persons name.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      nickname
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>A casual name by which to address the contact.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      phoneNumbers
      <div><em>(optional)</em></div>
    </td>
    <td>
      IContactField[]
    </td>
    <td>
      <p>An array of all the contact&#39;s phone numbers.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      emails
      <div><em>(optional)</em></div>
    </td>
    <td>
      IContactField[]
    </td>
    <td>
      <p>An array of all the contact&#39;s email addresses.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      addresses
      <div><em>(optional)</em></div>
    </td>
    <td>
      IContactAddress[]
    </td>
    <td>
      <p>An array of all the contact&#39;s addresses.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      ims
      <div><em>(optional)</em></div>
    </td>
    <td>
      IContactField[]
    </td>
    <td>
      <p>An array of all the contact&#39;s IM addresses.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      organizations
      <div><em>(optional)</em></div>
    </td>
    <td>
      IContactOrganization[]
    </td>
    <td>
      <p>An array of all the contact&#39;s organizations.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      birthday
      <div><em>(optional)</em></div>
    </td>
    <td>
      Date
    </td>
    <td>
      <p>The birthday of the contact.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      note
      <div><em>(optional)</em></div>
    </td>
    <td>
      string
    </td>
    <td>
      <p>A note about the contact.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      photos
      <div><em>(optional)</em></div>
    </td>
    <td>
      IContactField[]
    </td>
    <td>
      <p>An array of the contact&#39;s photos.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      categories
      <div><em>(optional)</em></div>
    </td>
    <td>
      IContactField[]
    </td>
    <td>
      <p>An array of all the user-defined categories associated with the contact.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      urls
      <div><em>(optional)</em></div>
    </td>
    <td>
      IContactField[]
    </td>
    <td>
      <p>An array of web pages associated with the contact.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

