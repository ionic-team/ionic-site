---
layout: "v2_fluid/docs_base"
version: "2.2.12"
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

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/plugins/contacts.ts#L251">
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

<pre><code class="lang-typescript">import { Contacts, Contact, ContactField, ContactName } from &#39;ionic-native&#39;;


let contact: Contact = Contacts.create();

contact.name = new ContactName(null, &#39;Smith&#39;, &#39;John&#39;);
contact.phoneNumbers = [new ContactField(&#39;mobile&#39;, &#39;6471234567&#39;)];
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
<code>Contact</code> Returns a Contact object
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
      
<code>ContactFieldType[]</code>
    </td>
    <td>
      <p>Contact fields to be used as a search qualifier</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
      
    </td>
    <td>
      
<code>IContactFindOptions</code>
    </td>
    <td>
      <p>Optional options for the query</p>

      
    </td>
  </tr>
  
  </tbody>
</table>





<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Contact[]&gt;</code> Returns a Promise that resolves with the search results (an array of Contact objects)
</div>



<div id="pickContact"></div>
<h3><code>pickContact()</code>
  
</h3>

Select a single Contact.






<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Contact&gt;</code> Returns a Promise that resolves with the selected Contact
</div>




<!-- methods on the class -->



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="IContactProperties" href="#IContactProperties"></a>IContactProperties</h2>


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
      <code>string</code>
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
      <code>string</code>
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
      <code>IContactName</code>
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
      <code>string</code>
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
      <code>IContactField[]</code>
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
      <code>IContactField[]</code>
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
      <code>IContactAddress[]</code>
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
      <code>IContactField[]</code>
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
      <code>IContactOrganization[]</code>
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
      <code>Date</code>
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
      <code>string</code>
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
      <code>IContactField[]</code>
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
      <code>IContactField[]</code>
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
      <code>IContactField[]</code>
    </td>
    <td>
      <p>An array of web pages associated with the contact.</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="IContactError" href="#IContactError"></a>IContactError</h2>


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
      code
      
    </td>
    <td>
      <code>number</code>
    </td>
    <td>
      <p>Error code</p>

    </td>
  </tr>
  
  <tr>
    <td>
      message
      
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>Error message</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="IContactName" href="#IContactName"></a>IContactName</h2>


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
      formatted
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The complete name of the contact.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      familyName
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s family name.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      givenName
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s given name.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      middleName
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s middle name.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      honorificPrefix
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s prefix (example Mr. or Dr.)</p>

    </td>
  </tr>
  
  <tr>
    <td>
      honorificSuffix
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s suffix (example Esq.).</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="IContactField" href="#IContactField"></a>IContactField</h2>


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
      type
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string that indicates what type of field this is, home for example.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      value
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The value of the field, such as a phone number or email address.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      pref
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true if this ContactField contains the user&#39;s preferred value.</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="IContactAddress" href="#IContactAddress"></a>IContactAddress</h2>


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
      pref
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true if this ContactAddress contains the user&#39;s preferred value.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      type
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string indicating what type of field this is, home for example.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      formatted
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The full address formatted for display.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      streetAddress
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The full street address.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      locality
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The city or locality.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      region
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The state or region.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      postalCode
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The zip code or postal code.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      country
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The country name.</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="IContactOrganization" href="#IContactOrganization"></a>IContactOrganization</h2>


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
      pref
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true if this ContactOrganization contains the user&#39;s preferred value.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      type
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string that indicates what type of field this is, home for example.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      name
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the organization.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      department
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The department the contract works for.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      title
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s title at the organization.</p>

    </td>
  </tr>
  
  </tbody>
</table>




<h2><a class="anchor" name="IContactFindOptions" href="#IContactFindOptions"></a>IContactFindOptions</h2>


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
      filter
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The search string used to find navigator.contacts.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      multiple
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Determines if the find operation returns multiple navigator.contacts. Defaults to false.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      desiredFields
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields.</p>

    </td>
  </tr>
  
  <tr>
    <td>
      hasPhoneNumber
      <div><em>(optional)</em></div>
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>(Android only): Filters the search to only return contacts with a phone number informed.</p>

    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

