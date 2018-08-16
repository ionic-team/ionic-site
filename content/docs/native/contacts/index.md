---
layout: "fluid/docs_base"
version: "4.12.0"
versionHref: "/docs/native"
path: ""
category: native
id: "contacts"
title: "Contacts"
header_sub_title: "Class in module "
doc: "Contacts"
docType: "class"
---

<h1 class="api-title">Contacts</h1>

<a class="improve-v2-docs" href="http://github.com/ionic-team/ionic-native/edit/master/src/@ionic-native/plugins/contacts/index.ts#L301">
  Improve this doc
</a>







<p>Access and manage Contacts on the device.</p>


<p>Repo:
  <a href="https://github.com/apache/cordova-plugin-contacts">
    https://github.com/apache/cordova-plugin-contacts
  </a>
</p>


<h2><a class="anchor" name="installation" href="#installation"></a>Installation</h2>
<ol class="installation">
  <li>Install the Cordova and Ionic Native plugins:<br>
    <pre><code class="nohighlight">$ ionic cordova plugin add cordova-plugin-contacts
$ npm install --save @ionic-native/contacts
</code></pre>
  </li>
  <li><a href="https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



<h2><a class="anchor" name="platforms" href="#platforms"></a>Supported platforms</h2>
<ul>
  <li>Android</li><li>BlackBerry 10</li><li>Browser</li><li>Firefox OS</li><li>iOS</li><li>Ubuntu</li><li>Windows</li><li>Windows 8</li><li>Windows Phone</li>
</ul>






<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>
<pre><code class="lang-typescript">import { Contacts, Contact, ContactField, ContactName } from &#39;@ionic-native/contacts&#39;;

constructor(private contacts: Contacts) { }

let contact: Contact = this.contacts.create();

contact.name = new ContactName(null, &#39;Smith&#39;, &#39;John&#39;);
contact.phoneNumbers = [new ContactField(&#39;mobile&#39;, &#39;6471234567&#39;)];
contact.save().then(
  () =&gt; console.log(&#39;Contact saved!&#39;, contact),
  (error: any) =&gt; console.error(&#39;Error saving contact.&#39;, error)
);
</code></pre>








<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="create" href="#create"></a><code>create()</code></h3>

Create a single contact.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Contact</code> Returns a Contact object
</div><h3><a class="anchor" name="find" href="#find"></a><code>find(fields,&nbsp;options)</code></h3>


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
      fields</td>
    <td>
      <code>ContactFieldType[]</code>
    </td>
    <td>
      <p>Contact fields to be used as a search qualifier</p>
</td>
  </tr>
  
  <tr>
    <td>
      options</td>
    <td>
      <code>IContactFindOptions</code>
    </td>
    <td>
      <p>Optional options for the query<strong class="tag">Optional</strong></p>
</td>
  </tr>
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Contact[]&gt;</code> Returns a Promise that resolves with the search results (an array of Contact objects)
</div><h3><a class="anchor" name="pickContact" href="#pickContact"></a><code>pickContact()</code></h3>


Select a single Contact.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> <code>Promise&lt;Contact&gt;</code> Returns a Promise that resolves with the selected Contact
</div>

<h2><a class="anchor" name="Contact" href="#Contact"></a>Contact</h2>




<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>
<h3><a class="anchor" name="id" href="#id"></a><code>id()</code></h3>





<h3><a class="anchor" name="displayName" href="#displayName"></a><code>displayName()</code></h3>





<h3><a class="anchor" name="name" href="#name"></a><code>name()</code></h3>





<h3><a class="anchor" name="nickname" href="#nickname"></a><code>nickname()</code></h3>





<h3><a class="anchor" name="phoneNumbers" href="#phoneNumbers"></a><code>phoneNumbers()</code></h3>





<h3><a class="anchor" name="emails" href="#emails"></a><code>emails()</code></h3>





<h3><a class="anchor" name="addresses" href="#addresses"></a><code>addresses()</code></h3>





<h3><a class="anchor" name="ims" href="#ims"></a><code>ims()</code></h3>





<h3><a class="anchor" name="organizations" href="#organizations"></a><code>organizations()</code></h3>





<h3><a class="anchor" name="birthday" href="#birthday"></a><code>birthday()</code></h3>





<h3><a class="anchor" name="note" href="#note"></a><code>note()</code></h3>





<h3><a class="anchor" name="photos" href="#photos"></a><code>photos()</code></h3>





<h3><a class="anchor" name="categories" href="#categories"></a><code>categories()</code></h3>





<h3><a class="anchor" name="urls" href="#urls"></a><code>urls()</code></h3>





<h3><a class="anchor" name="clone" href="#clone"></a><code>clone()</code></h3>





<h3><a class="anchor" name="remove" href="#remove"></a><code>remove()</code></h3>





<h3><a class="anchor" name="save" href="#save"></a><code>save()</code></h3>









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
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A globally unique identifier.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      displayName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of this Contact, suitable for display to end users.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      name
    </td>
    <td>
      <code>IContactName</code>
    </td>
    <td>
      <p>An object containing all components of a persons name.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      nickname
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A casual name by which to address the contact.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      phoneNumbers
    </td>
    <td>
      <code>IContactField[]</code>
    </td>
    <td>
      <p>An array of all the contact&#39;s phone numbers.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      emails
    </td>
    <td>
      <code>IContactField[]</code>
    </td>
    <td>
      <p>An array of all the contact&#39;s email addresses.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      addresses
    </td>
    <td>
      <code>IContactAddress[]</code>
    </td>
    <td>
      <p>An array of all the contact&#39;s addresses.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      ims
    </td>
    <td>
      <code>IContactField[]</code>
    </td>
    <td>
      <p>An array of all the contact&#39;s IM addresses.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      organizations
    </td>
    <td>
      <code>IContactOrganization[]</code>
    </td>
    <td>
      <p>An array of all the contact&#39;s organizations.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      birthday
    </td>
    <td>
      <code>Date</code>
    </td>
    <td>
      <p>The birthday of the contact.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      note
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A note about the contact.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      photos
    </td>
    <td>
      <code>IContactField[]</code>
    </td>
    <td>
      <p>An array of the contact&#39;s photos.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      categories
    </td>
    <td>
      <code>IContactField[]</code>
    </td>
    <td>
      <p>An array of all the user-defined categories associated with the contact.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      urls
    </td>
    <td>
      <code>IContactField[]</code>
    </td>
    <td>
      <p>An array of web pages associated with the contact.</p>

      <em>(optional)</em>
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
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The complete name of the contact.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      familyName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s family name.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      givenName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s given name.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      middleName
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s middle name.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      honorificPrefix
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s prefix (example Mr. or Dr.)</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      honorificSuffix
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s suffix (example Esq.).</p>

      <em>(optional)</em>
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
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string that indicates what type of field this is, home for example.</p>

      <em>(optional)</em>
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
      <p>The value of the field, such as a phone number or email address.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      pref
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true if this ContactField contains the user&#39;s preferred value.</p>

      <em>(optional)</em>
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
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true if this ContactAddress contains the user&#39;s preferred value.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string indicating what type of field this is, home for example.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      formatted
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The full address formatted for display.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      streetAddress
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The full street address.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      locality
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The city or locality.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      region
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The state or region.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      postalCode
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The zip code or postal code.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      country
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The country name.</p>

      <em>(optional)</em>
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
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Set to true if this ContactOrganization contains the user&#39;s preferred value.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      type
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>A string that indicates what type of field this is, home for example.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      name
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The name of the organization.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      department
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The department the contract works for.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      title
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The contact&#39;s title at the organization.</p>

      <em>(optional)</em>
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
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      <p>The search string used to find navigator.contacts.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      multiple
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>Determines if the find operation returns multiple navigator.contacts. Defaults to false.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      desiredFields
    </td>
    <td>
      <code>string[]</code>
    </td>
    <td>
      <p>Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  <tr>
    <td>
      hasPhoneNumber
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      <p>(Android only): Filters the search to only return contacts with a phone number informed.</p>

      <em>(optional)</em>
    </td>
  </tr>
  
  </tbody>
</table>





